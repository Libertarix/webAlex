export const PHONE = "636144057";
export const PHONE_DISPLAY = "636 14 40 57";
export const EMAIL = "cuidate@enfermeroencasa.com";
export const COLEGIADO = "12386";
export const LINKEDIN_URL = "https://www.linkedin.com/in/enfermeroencasa/";
export const SITE_URL = "https://enfermeroencasa.com";

export const whatsappUrl = (message: string) =>
  `https://wa.me/34${PHONE}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_DEFAULT = whatsappUrl(
  "Hola Alejandro, me gustaría información sobre los servicios de enfermería a domicilio."
);
