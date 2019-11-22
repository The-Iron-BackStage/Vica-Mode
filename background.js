chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('Vica Mode check for' + tab.url);
  if (changeInfo.status == 'complete') {
      console.log('Vica Mode Engaged for' + tab.url);
      chrome.tabs.executeScript(null, {
          file: 'content.js'
      });
  }
});