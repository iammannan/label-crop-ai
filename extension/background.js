// LabelCrop AI Background Service Worker (Manifest V3)

chrome.runtime.onInstalled.addListener(() => {
  // Context menus for quick access from any seller tab
  chrome.contextMenus.create({
    id: 'open-labelcrop-main',
    title: 'Open LabelCrop AI (Auto-Cropper)',
    contexts: ['all']
  });

  chrome.contextMenus.create({
    id: 'open-meesho-cropper',
    title: 'Crop Meesho Label (4x6)',
    contexts: ['all']
  });

  chrome.contextMenus.create({
    id: 'open-flipkart-cropper',
    title: 'Crop Flipkart Label (4x6)',
    contexts: ['all']
  });

  chrome.contextMenus.create({
    id: 'open-android-app',
    title: '📱 Get Android App (Google Play)',
    contexts: ['all']
  });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
  let targetUrl = 'https://labelcropai.web.app';
  
  if (info.menuItemId === 'open-meesho-cropper') {
    targetUrl = 'https://labelcropai.web.app/meesho-label-crop';
  } else if (info.menuItemId === 'open-flipkart-cropper') {
    targetUrl = 'https://labelcropai.web.app/flipkart-label-crop';
  } else if (info.menuItemId === 'open-android-app') {
    targetUrl = 'https://play.google.com/store/apps/details?id=ecom.label.crop.tool&hl=en';
  }

  await chrome.tabs.create({ url: targetUrl });
});
