//   chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//       "id": "sampleContextMenu",
//       "title": "Sample Context Menu",
//       "contexts": ["selection"]
//     });
//     console.log("background runtime onInstalled")
//   });
// 
//   // This will run when a bookmark is created.
//   chrome.bookmarks.onCreated.addListener(function() {
//     // do something
//   });



//Get message from content script
chrome.runtime.onMessage.addListener(
    function(list, sender, sendResponse) {
        //Alert the message
        // debugger;
        // alert('The message from the content script: ' + request.method);//You have to choose which part of the response you want to display ie. request.method
        //Construct & send a response
        queryYtAPI(list.list);
        // 
        // sendResponse({
        //     response: list
        // });
    }
);

// Send message to content script
  function sendRetreivedData(sendData) {
    // Select tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Construct & send message
           // debugger;
        chrome.tabs.sendMessage(tabs[0].id, {
            data: sendData
        }, function(response) {
            // Callback FUnction with action to be taken by main.js
        });
    });
}


// browser.runtime.onMessage.addListener(queryYtAPI);


function queryYtAPI(IdList){
   const myHeaders = new Headers();
   const myInit = {
     method: 'GET',
     headers: myHeaders,
     mode: 'cors',
     cache: 'default'
   }
   const myRequest = new Request(
   'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=-N0LT3NWyqI%2ChHW1oY26kxQ%2CEcEMX-63PKY%2CgiouzUH5rOc%2CxLetZ-36TYs%26t%3D1123s%2CI8_2hPjljag%2C-FlxM_0S2lA%2CA9sOb_r6Hy0%2CYKXPlkhLIPw%2C6u5a7_-a3vM%2CbebuiaSKtU4%2CF0IbjVq-fgs%2CB8tQ8RUbTW8%2CIjWfwkLSKtA%2CfA551WpQaO4%2CTRgAfvzHdT8%2CGGBm9gTY2NU%2CA6eupBe1c6I%2CTmYcoozFYnU%2CbQzIQa5YKvw&key=AIzaSyCvURzZN9N_soKNHmiTE5DCKR2_CupZUHA',
   myInit);
 
   fetch(myRequest)
   .then(function(response) {
       // sendRetreivedData(response);
       return response.json();
     })
   .then(function(responseB){
      return sendRetreivedData(responseB);
   // chrome.runtime.sendMessage(responseRet.json());
   // chrome.runtime.sendMessage(responseRet.json());
   // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
   //     console.log(response.farewell);
   //   });
   // });
     // console.log(jsonn);
   }).catch(error => {
    console.log("error!");
     console.error(error);
   });
 }