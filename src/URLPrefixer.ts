
import 'astro/client'

/**
 * Prefixes URLs with the site's actual location, if the site is served from 
 * a subtree like `https://site.com/sub`
 * @param url The URL to prefix
 * @returns 
 */
export function prefixURL(url: string): string {
    // Do not prefix anchors to the document itself or absolute URLs to other sites
    if (url.startsWith('https://') || url.startsWith('#')) {
        return url;
    }
    // Add the base url from config
    let base = import.meta.env.BASE_URL;
    if (base.endsWith('/')) {
        base = base.substring(0, base.length - 1);
    }
    return base + url;
}
