chrome.browserAction.onClicked.addListener(()=>{

  chrome.tabs.captureVisibleTab((pic)=>{

    chrome.downloads.download({'url':pic});
    
  });

});
