import { contactConfig } from "@/config/contact";

export interface LeadData {
  name: string;
  company: string;
  whatsapp: string;
  need: string;
}

export function buildWhatsAppMessage(lead: LeadData): string {
  return `Tenho interesse em ${lead.need}

Olá! Me chamo *${lead.name}* da empresa *${lead.company}*.
📱 *WhatsApp:* ${lead.whatsapp}`;
}

export function openWhatsApp(lead: LeadData): void {
  const message = buildWhatsAppMessage(lead);
  const url = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

export function openWhatsAppSimple(message?: string): void {
  const text = message || contactConfig.whatsapp.defaultMessage;
  const url = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// Preparado para integração futura com a API do WhatsApp Business
export async function sendWhatsAppBusinessMessage(
  _to: string,
  _message: string
): Promise<{ success: boolean; messageId?: string }> {
  // TODO: Implementar integração com WhatsApp Business API
  // const response = await fetch('/api/whatsapp/send', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ to, message }),
  // });
  // return response.json();
  return { success: false };
}
