/**
 * web-perf-utils - Non-Blocking DOM Event Listeners
 * Author: Open Source Community
 * License: MIT
 */

/**
 * Attaches a non-blocking passive listener to an element or selector.
 * Leverages passive event listeners to maintain 60fps scrolling and layout stability.
 *
 * @param {string|HTMLElement} target - Selector string or DOM element
 * @param {string} eventType - Event name (e.g., 'click', 'submit', 'scroll')
 * @param {Function} callback - Execution callback
 */
export function attachPassiveListener(target, eventType, callback) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  element.addEventListener(eventType, (event) => {
    // Execute callback asynchronously to keep the main thread clear
    window.requestAnimationFrame(() => {
      callback(event);
    });
  }, { passive: true });
}

/**
 * Safely pushes event payloads to Google Tag Manager dataLayer without blocking page render.
 *
 * @param {Object} payload - Analytics structured object
 */
export function pushDeferredDataLayer(payload) {
  window.dataLayer = window.dataLayer || [];

  // Defer dataLayer push until the current event loop callstack clears
  setTimeout(() => {
    window.dataLayer.push({
      ...payload,
      _timestamp: Date.now()
    });
  }, 0);
}

/**
 * Prevents layout thrashing by debouncing high-frequency events (like scroll/resize).
 *
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
export function debounceFrame(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
