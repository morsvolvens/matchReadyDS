/**
 * Society branding, set per deployment through env vars (see .env.example).
 * Defaults keep upstream MatchReadyTX behavior when nothing is set.
 */
export const APP_NAME =
  import.meta.env.VITE_APP_NAME?.trim() || 'MatchReadyTX';

export const PUBLIC_CONTACT_EMAIL_DEFAULT = 'rabbitholeapps26@gmail.com';

export const PUBLIC_CONTACT_EMAIL =
  import.meta.env.VITE_PUBLIC_CONTACT_EMAIL?.trim() ||
  PUBLIC_CONTACT_EMAIL_DEFAULT;
