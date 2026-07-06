export const WHATSAPP_NUMBER = "971528903210";

export type QuoteFormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  service: string;
  details: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

export function buildQuoteWhatsAppMessage(data: QuoteFormData): string {
  return [
    "*NEW QUOTE REQUEST*",
    "━━━━━━━━━━━━━━━━━━━━",
    "*Farhan Asif Aluminium & Glass Fixing L.L.C.*",
    "",
    `👤 *Full Name:* ${data.name}`,
    `📧 *Email:* ${data.email}`,
    `📱 *Phone:* ${data.phone}`,
    `🏗 *Project Type:* ${data.projectType}`,
    `🔧 *Service Required:* ${data.service}`,
    "",
    "📝 *Project Details:*",
    data.details.trim() || "—",
    "",
    "━━━━━━━━━━━━━━━━━━━━",
    "_Sent via website quote form_",
  ].join("\n");
}

export function buildContactWhatsAppMessage(data: ContactFormData): string {
  return [
    "*NEW CONTACT MESSAGE*",
    "━━━━━━━━━━━━━━━━━━━━",
    "*Farhan Asif Aluminium & Glass Fixing L.L.C.*",
    "",
    `👤 *Full Name:* ${data.name}`,
    `📧 *Email:* ${data.email}`,
    `📱 *Phone:* ${data.phone}`,
    "",
    "💬 *Message:*",
    data.message.trim(),
    "",
    "━━━━━━━━━━━━━━━━━━━━",
    "_Sent via website contact form_",
  ].join("\n");
}
