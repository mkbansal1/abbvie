/**
 * Decorates the hero block with variant-specific structure.
 * Variants: default, wave, clinical, badge, gradient
 * @param {Element} block The hero block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  const picture = block.querySelector('picture');
  const isAutoBlocked = rows.length === 1 && picture;

  if (isAutoBlocked) {
    // Auto-blocked hero: picture + h1 in a single row — no extra decoration needed
    return;
  }

  // Collect all content from rows into image and content containers
  const imageContainer = document.createElement('div');
  imageContainer.className = 'hero-image';

  const contentContainer = document.createElement('div');
  contentContainer.className = 'hero-content';

  rows.forEach((row, i) => {
    // First row with a picture is the background image
    const rowPicture = row.querySelector('picture');
    if (i === 0 && rowPicture) {
      imageContainer.append(rowPicture);
      row.remove();
      return;
    }

    // Unwrap nested cell divs and move children to content
    const cells = [...row.querySelectorAll(':scope > div')];
    cells.forEach((cell) => {
      while (cell.firstChild) contentContainer.append(cell.firstChild);
    });
    row.remove();
  });

  // Add containers to block
  if (imageContainer.querySelector('picture')) {
    block.prepend(imageContainer);
  }

  // Badge variant: extract the badge image from content before appending
  if (block.classList.contains('badge')) {
    const contentPictures = contentContainer.querySelectorAll('picture');
    if (contentPictures.length) {
      const badgePic = contentPictures[contentPictures.length - 1];
      const badgeWrapper = document.createElement('div');
      badgeWrapper.className = 'hero-badge';
      badgeWrapper.append(badgePic);
      block.append(contentContainer);
      block.append(badgeWrapper);
      return;
    }
  }

  // Wave variant: extract the wave image from content
  if (block.classList.contains('wave')) {
    const contentPictures = contentContainer.querySelectorAll('picture');
    if (contentPictures.length) {
      const wavePic = contentPictures[contentPictures.length - 1];
      const waveWrapper = document.createElement('div');
      waveWrapper.className = 'hero-wave';
      waveWrapper.append(wavePic);
      block.append(contentContainer);
      block.append(waveWrapper);
      return;
    }
  }

  block.append(contentContainer);
}
