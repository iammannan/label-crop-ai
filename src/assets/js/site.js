import './enquiry.js';
// Content pages only need the service worker (instant repeat visits, offline support).
export function registerSW() {
  if ('serviceWorker' in navigator && location.hostname !== 'localhost' && location.protocol === 'https:') {
    addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
  }
}
registerSW();
