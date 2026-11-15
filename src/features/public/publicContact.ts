import { APP_NAME, PUBLIC_CONTACT_EMAIL } from '@/config/brand';

export { PUBLIC_CONTACT_EMAIL };

/** Prefilled when users tap the footer contact link. */
export const PUBLIC_CONTACT_EMAIL_SUBJECT = APP_NAME;

export function publicContactMailto(): string {
  const params = new URLSearchParams({ subject: PUBLIC_CONTACT_EMAIL_SUBJECT });
  return `mailto:${PUBLIC_CONTACT_EMAIL}?${params.toString()}`;
}
