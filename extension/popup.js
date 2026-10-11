// LabelCrop AI Popup Script

document.addEventListener('DOMContentLoaded', () => {
  // Primary Launch Button
  const btnMain = document.getElementById('btn-open-main');
  if (btnMain) {
    btnMain.addEventListener('click', async () => {
      await chrome.tabs.create({ url: 'https://labelcropai.web.app' });
    });
  }

  // Google Play Android App Banner
  const btnPlayStore = document.getElementById('btn-playstore');
  if (btnPlayStore) {
    btnPlayStore.addEventListener('click', async () => {
      const url = btnPlayStore.getAttribute('data-url');
      if (url) {
        await chrome.tabs.create({ url });
      }
    });
  }

  // Quick Marketplace Tool Buttons
  document.querySelectorAll('.tool-card').forEach(btn => {
    btn.addEventListener('click', async () => {
      const url = btn.getAttribute('data-url');
      if (url) {
        await chrome.tabs.create({ url });
      }
    });
  });

  // Utility List Items
  document.querySelectorAll('.list-item').forEach(btn => {
    btn.addEventListener('click', async () => {
      const url = btn.getAttribute('data-url');
      if (url) {
        await chrome.tabs.create({ url });
      }
    });
  });

  // Footer Website Link
  const linkWebsite = document.getElementById('link-website');
  if (linkWebsite) {
    linkWebsite.addEventListener('click', async (e) => {
      e.preventDefault();
      await chrome.tabs.create({ url: 'https://labelcropai.web.app' });
    });
  }
});
