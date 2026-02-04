import { FC, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FloatingInput } from "./FloatingInput";
import { MagneticButton } from "./MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUpVariants, staggerContainerVariants } from "@/lib/animations";
import { spacing } from "@/config/theme";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * Contact form with floating labels and magnetic submit button
 * Client-side validation included
 */
export const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Web3Forms API - sends real email
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "232c5155-9791-4132-a126-52b4e1da1360", // Get free key at web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        window.dataLayer?.push({
          event: "form_submit",
          form_name: "contact_form",
          form_status: "success",
        });
      } else {
        setSubmitStatus("error");
        window.dataLayer?.push({
          event: "form_submit",
          form_name: "contact_form",
          form_status: "error",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      window.dataLayer?.push({
        event: "form_submit",
        form_name: "contact_form",
        form_status: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`${spacing.sectionPadding} bg-obsidian-900`}
    >
      <div className={spacing.containerWidth}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
        >
          {/* Section heading */}
          <motion.div
            variants={fadeInUpVariants}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-obsidian-100 mb-3 md:mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-base sm:text-lg text-obsidian-400 max-w-2xl mx-auto px-4">
              Ready to transform your ideas into production-ready applications?
              <br className="hidden sm:block" />
              Get in touch and let's discuss your project.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeInUpVariants} className="max-w-2xl mx-auto">
            <GlassCard className="p-5 sm:p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name input */}
                <FloatingInput
                  id="name"
                  label="Your Name"
                  type="text"
                  value={formData.name}
                  onChange={(value) =>
                    setFormData({ ...formData, name: value })
                  }
                  required
                  error={errors.name}
                />

                {/* Email input */}
                <FloatingInput
                  id="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(value) =>
                    setFormData({ ...formData, email: value })
                  }
                  required
                  error={errors.email}
                />

                {/* Message textarea */}
                <FloatingInput
                  id="message"
                  label="Your Message"
                  type="textarea"
                  value={formData.message}
                  onChange={(value) =>
                    setFormData({ ...formData, message: value })
                  }
                  required
                  error={errors.message}
                />

                {/* Submit button */}
                <div className="pt-4">
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </MagneticButton>
                </div>

                {/* Status messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-accent-emerald/10 border-0.5 border-accent-emerald/30 rounded-lg"
                  >
                    <p className="text-accent-emerald text-sm">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border-0.5 border-red-500/30 rounded-lg"
                  >
                    <p className="text-red-400 text-sm">
                      Oops! Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}
              </form>
            </GlassCard>

            {/* Contact info */}
            <motion.div
              variants={fadeInUpVariants}
              className="mt-8 text-center text-obsidian-400 text-sm"
            >
              <p>Or reach out directly at</p>
              <a
                href="mailto:info@helpandgo.net"
                onClick={() => {
                  window.dataLayer?.push({
                    event: "email_click",
                    email_address: "info@helpandgo.net",
                  });
                }}
                className="text-accent-cyan hover:text-accent-cyan/80 transition-colors"
              >
                info@helpandgo.net
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
