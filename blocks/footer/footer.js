import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment — detect brand prefix for brand-specific footer
  const footerMeta = getMetadata('footer');
  let footerPath;
  if (footerMeta) {
    footerPath = new URL(footerMeta, window.location).pathname;
  } else {
    const brands = ['skyrizi-locator', 'skyrizihcppr', 'skyrizihcp', 'skyrizi', 'rinvoqhcp', 'rinvoq', 'quliptahcp', 'qulipta'];
    const brand = brands.find((b) => window.location.pathname.startsWith(`/${b}`));
    footerPath = brand ? `/${brand}/footer` : '/footer';
  }
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}
