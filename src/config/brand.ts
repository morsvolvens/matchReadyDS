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

/**
 * Folder under public/ holding the society's logo.png + app icons
 * (favicon-32, apple-touch-icon, pwa-192, pwa-512, pwa-512-maskable).
 * Empty = upstream icons at the public/ root.
 */
export const BRAND_ICON_DIR = (
  import.meta.env.VITE_BRAND_ICON_DIR?.trim() ?? ''
).replace(/\/+$/, '');

/** Full-color society logo, or null to use the upstream white mark. */
export const BRAND_LOGO_SRC = BRAND_ICON_DIR ? `${BRAND_ICON_DIR}/logo.png` : null;

export function brandIconPath(file: string): string {
  return `${BRAND_ICON_DIR}/${file}`;
}
