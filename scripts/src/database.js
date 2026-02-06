/**
 * JSON File-based Database Manager
 */

import fs from 'fs/promises';
import path from 'path';
import { config } from './config.js';

class Database {
  constructor() {
    this.ensureDataDirectory();
  }

  async ensureDataDirectory() {
    try {
      await fs.mkdir('./data', { recursive: true });
    } catch (error) {
      // Directory already exists
    }
  }

  async loadJson(filePath) {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      // File doesn't exist, return empty array
      return [];
    }
  }

  async saveJson(filePath, data) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  }

  // Sites operations
  async getSites() {
    return this.loadJson(config.paths.sites);
  }

  async addSite(site) {
    const sites = await this.getSites();

    // Check for duplicates
    const exists = sites.some(s => s.domain === site.domain);
    if (exists) {
      return { success: false, message: 'Site already exists' };
    }

    sites.push({
      id: Date.now().toString(),
      ...site,
      addedAt: new Date().toISOString(),
      status: 'pending',
    });

    await this.saveJson(config.paths.sites, sites);
    return { success: true, message: 'Site added successfully' };
  }

  async updateSite(id, updates) {
    const sites = await this.getSites();
    const index = sites.findIndex(s => s.id === id);

    if (index === -1) {
      return { success: false, message: 'Site not found' };
    }

    sites[index] = { ...sites[index], ...updates };
    await this.saveJson(config.paths.sites, sites);
    return { success: true, message: 'Site updated successfully' };
  }

  // Audits operations
  async getAudits() {
    return this.loadJson(config.paths.audits);
  }

  async saveAudit(siteId, auditData) {
    const audits = await this.getAudits();

    // Remove old audit for this site
    const filtered = audits.filter(a => a.siteId !== siteId);

    filtered.push({
      siteId,
      ...auditData,
      auditedAt: new Date().toISOString(),
    });

    await this.saveJson(config.paths.audits, filtered);
    return { success: true };
  }

  async getAuditBySiteId(siteId) {
    const audits = await this.getAudits();
    return audits.find(a => a.siteId === siteId);
  }

  // Leads operations
  async getLeads() {
    return this.loadJson(config.paths.leads);
  }

  async saveLead(lead) {
    const leads = await this.getLeads();

    // Remove old lead for this site
    const filtered = leads.filter(l => l.siteId !== lead.siteId);

    filtered.push({
      ...lead,
      createdAt: new Date().toISOString(),
    });

    await this.saveJson(config.paths.leads, filtered);
    return { success: true };
  }

  // Outreach operations
  async getOutreachMessages() {
    return this.loadJson(config.paths.outreach);
  }

  async saveOutreachMessage(siteId, message) {
    const messages = await this.getOutreachMessages();

    // Remove old message for this site
    const filtered = messages.filter(m => m.siteId !== siteId);

    filtered.push({
      siteId,
      ...message,
      generatedAt: new Date().toISOString(),
    });

    await this.saveJson(config.paths.outreach, filtered);
    return { success: true };
  }

  // Get qualified leads with all data joined
  async getQualifiedLeads(minScore = 7) {
    const sites = await this.getSites();
    const audits = await this.getAudits();
    const leads = await this.getLeads();
    const messages = await this.getOutreachMessages();

    return leads
      .filter(lead => lead.score >= minScore)
      .map(lead => {
        const site = sites.find(s => s.id === lead.siteId);
        const audit = audits.find(a => a.siteId === lead.siteId);
        const message = messages.find(m => m.siteId === lead.siteId);

        return {
          ...lead,
          site,
          audit,
          message,
        };
      });
  }
}

export const db = new Database();
