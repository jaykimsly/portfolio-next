import type { Content, Phone } from "../data/types";
import json from "../public/content.json";

// public/content.json is the shared source for every version of the portfolio;
// it is also served at /content.json so the other framework sites can read it at build time.
export const content = json as Content;

export const telHref = (phone: Phone) => `tel:${phone.number}`;
export const whatsAppHref = (phone: Phone) => `https://wa.me/${phone.number.replace(/\D/g, "")}`;
