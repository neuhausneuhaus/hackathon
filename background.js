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
       // sendRetreivedData(FakeData);


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
  // debugger;
   const myHeaders = new Headers();
   const myInit = {
     method: 'GET',
     headers: myHeaders,
     cache: 'default'
   }
    // 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=-N0LT3NWyqI%2ChHW1oY26kxQ%2CEcEMX-63PKY%2CgiouzUH5rOc%2CxLetZ-36TYs%26t%3D1123s%2CI8_2hPjljag%2C-FlxM_0S2lA%2CA9sOb_r6Hy0%2CYKXPlkhLIPw%2C6u5a7_-a3vM%2CbebuiaSKtU4%2CF0IbjVq-fgs%2CB8tQ8RUbTW8%2CIjWfwkLSKtA%2CfA551WpQaO4%2CTRgAfvzHdT8%2CGGBm9gTY2NU%2CA6eupBe1c6I%2CTmYcoozFYnU%2CbQzIQa5YKvw&key=AIzaSyCvURzZN9N_soKNHmiTE5DCKR2_CupZUHA',
   // debugger;
   const idString = IdList.join("%2C");
   const apiKey = "&key="
   const url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+idString+apiKey;
   const proxyurl = "https://cors-anywhere.herokuapp.com/";
   const urlString = proxyurl + url;
   console.log(urlString);
   let myRequest = new Request(
   urlString,
   myInit);
     
    fetch(myRequest)
    .then(function(response) {
       console.log(response);
      // console.log(response.json());
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
      // debugger;
     console.log("error!");
      console.error(error);
    });
 }

// 
   const FakeData = {
  "kind": "youtube#videoListResponse",
  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/dmyEYV0-P915_cobw3Teu8LfLC8\"",
  "pageInfo": {
   "totalResults": 20,
   "resultsPerPage": 20
  },
  "items": [
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/8VqSwxTNt2phYfnqOBCum6p274Y\"",
    "id": "-N0LT3NWyqI",
    "snippet": {
     "publishedAt": "2018-03-16T16:30:04.000Z",
     "channelId": "UCeGGpOehPGG7vQMUVc7tG8Q",
     "title": "What RUINED Family Guy?",
     "description": "Family Guy has gone down in quality over the years and has lost millions of viewers. What exactly is the reason for this and why does Fox refuse to let the show end?\n\n\"What RUINED/What's RUINING...\" is a video series where Saber researches a topic, presents its history, and how it is or was presumably ruined: https://www.youtube.com/playlist?list=PLrtmY8lRImW_58wGRjcJFUDFwFmHhtu1n\n\nSaberspark is a YouTube channel who researches, reviews, and analyzes various movies and cartoon shows from the world of animation\n\nSupport the show on Patreon\nhttps://www.patreon.com/saberspark\n\nFollow me on Twitter\nhttps://twitter.com/Saberspark\n\nAudio Edits by CookieSoup\nhttps://www.youtube.com/user/dBPonyMusic\n\nIntro and Outro Music by Hirosashii\nhttps://www.youtube.com/user/Hirosashii\n\nVideo Advice by Jim Gisriel\nhttps://www.youtube.com/user/jimgisriel\n\nVideo Advice by Paleo\nhttps://www.youtube.com/user/paleovlogs\n\nIntro Visuals by Acleps\nhttps://www.youtube.com/user/TheAcleps\n\nAvatar pics by Natalie Butler\nhttps://twitter.com/MissButlerArt\n\nTitle Card and Outro Visual by Viktor Newman \nhttp://viktornewman.deviantart.com/\n\nMusic by Home\nhttps://soundcloud.com/home-2001\n\nFamily Guy/Simpsons Parody by ukinojoe\nhttps://youtu.be/34Rk_DC3B9c",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/-N0LT3NWyqI/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/-N0LT3NWyqI/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/-N0LT3NWyqI/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/-N0LT3NWyqI/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/-N0LT3NWyqI/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Saberspark",
     "tags": [
      "family guy",
      "what ruined family guy",
      "what ruined",
      "saber",
      "saberspark",
      "peter griffin",
      "seth macfarlane",
      "simpsons",
      "video essay",
      "analysis",
      "brian"
     ],
     "categoryId": "24",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "What RUINED Family Guy?",
      "description": "Family Guy has gone down in quality over the years and has lost millions of viewers. What exactly is the reason for this and why does Fox refuse to let the show end?\n\n\"What RUINED/What's RUINING...\" is a video series where Saber researches a topic, presents its history, and how it is or was presumably ruined: https://www.youtube.com/playlist?list=PLrtmY8lRImW_58wGRjcJFUDFwFmHhtu1n\n\nSaberspark is a YouTube channel who researches, reviews, and analyzes various movies and cartoon shows from the world of animation\n\nSupport the show on Patreon\nhttps://www.patreon.com/saberspark\n\nFollow me on Twitter\nhttps://twitter.com/Saberspark\n\nAudio Edits by CookieSoup\nhttps://www.youtube.com/user/dBPonyMusic\n\nIntro and Outro Music by Hirosashii\nhttps://www.youtube.com/user/Hirosashii\n\nVideo Advice by Jim Gisriel\nhttps://www.youtube.com/user/jimgisriel\n\nVideo Advice by Paleo\nhttps://www.youtube.com/user/paleovlogs\n\nIntro Visuals by Acleps\nhttps://www.youtube.com/user/TheAcleps\n\nAvatar pics by Natalie Butler\nhttps://twitter.com/MissButlerArt\n\nTitle Card and Outro Visual by Viktor Newman \nhttp://viktornewman.deviantart.com/\n\nMusic by Home\nhttps://soundcloud.com/home-2001\n\nFamily Guy/Simpsons Parody by ukinojoe\nhttps://youtu.be/34Rk_DC3B9c"
     }
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/SpRt7Q_DOXHbfUyt944LATkbTKk\"",
    "id": "hHW1oY26kxQ",
    "snippet": {
     "publishedAt": "2018-08-22T19:51:06.000Z",
     "channelId": "UCSJ4gkVC6NrvII8umztf0Ow",
     "title": "lofi hip hop radio - beats to relax/study to",
     "description": "Thank you for listening, I hope you will have a good time here :)\n\n🎼 Listen to the study girl's Spotify playlist \n→ http://bit.ly/chilledcowspotify\n\n👕 New merch available!\n→ http://bit.ly/chilledcowmerch\n\n🔴 Listen to the sleepy lofi hip hop radio \n→ https://www.youtube.com/watch?v=SmbdY5FpRwA\n\n🎧 My secondary channel\n→ http://bit.ly/Lopheemusic\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowinstagram\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowsoundcloud\n\n📌Update \n- 22/07/2019 New beats added\n\n🎶 Full playlist/support beatmakers\n→ http://bit.ly/Radioplaylist\n\n🎨 Illustration & Animation by Juan Pablo Machado\n→ http://bit.ly/Machadofb\n→ http://machado.portfoliobox.io/\n→ http://jpmachado.art\n\n📝 Submissions\n→  Artwork : artwork@thechilledcow.com\n→  Music : https://soundcloud.com/chilledcow",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/hHW1oY26kxQ/default_live.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/hHW1oY26kxQ/mqdefault_live.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/hHW1oY26kxQ/hqdefault_live.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/hHW1oY26kxQ/sddefault_live.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/hHW1oY26kxQ/maxresdefault_live.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "ChilledCow",
     "tags": [
      "lo-fi",
      "lo fi",
      "lofi",
      "lofi hiphop",
      "lo-fi hiphop",
      "lo fi hiphop",
      "hiphop",
      "hip hop",
      "lofi hip hop",
      "lo-fi hip hop",
      "lo fi hip hop",
      "lofi radio",
      "lo-fi radio",
      "lo fi radio",
      "lofi hip hop radio",
      "lo-fi hip hop radio",
      "lo fi hip hop radio",
      "chilledcow",
      "chilled cow",
      "chilledcow radio",
      "chilled cow radio",
      "chilledcow station",
      "lofi radio chilledcow",
      "chillhop",
      "study music",
      "lofi hip hop radio - beats to relax\\/study to",
      "beats to relax",
      "music to study",
      "radio",
      "relaxing music",
      "mood music"
     ],
     "categoryId": "10",
     "liveBroadcastContent": "live",
     "localized": {
      "title": "lofi hip hop radio - beats to relax/study to",
      "description": "Thank you for listening, I hope you will have a good time here :)\n\n🎼 Listen to the study girl's Spotify playlist \n→ http://bit.ly/chilledcowspotify\n\n👕 New merch available!\n→ http://bit.ly/chilledcowmerch\n\n🔴 Listen to the sleepy lofi hip hop radio \n→ https://www.youtube.com/watch?v=SmbdY5FpRwA\n\n🎧 My secondary channel\n→ http://bit.ly/Lopheemusic\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowinstagram\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowsoundcloud\n\n📌Update \n- 22/07/2019 New beats added\n\n🎶 Full playlist/support beatmakers\n→ http://bit.ly/Radioplaylist\n\n🎨 Illustration & Animation by Juan Pablo Machado\n→ http://bit.ly/Machadofb\n→ http://machado.portfoliobox.io/\n→ http://jpmachado.art\n\n📝 Submissions\n→  Artwork : artwork@thechilledcow.com\n→  Music : https://soundcloud.com/chilledcow"
     }
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/kU-tt7qnhwGQKqEiIdNEFcONdCg\"",
    "id": "YKXPlkhLIPw",
    "snippet": {
     "publishedAt": "2019-08-01T06:37:21.000Z",
     "channelId": "UCVTyTA7-g9nopHeHbeuvpRA",
     "title": "CNN’s Democratic Debate, Night Two: A Closer Look",
     "description": "Seth takes a closer look at the second night of the second Democratic presidential debate of the 2020 election.\n» Subscribe to Late Night: http://bit.ly/LateNightSeth\n» Get more Late Night with Seth Meyers: http://www.nbc.com/late-night-with-seth-meyers/\n» Watch Late Night with Seth Meyers Weeknights 12:35/11:35c on NBC.\n\nLATE NIGHT ON SOCIAL\nFollow Late Night on Twitter: https://twitter.com/LateNightSeth\nLike Late Night on Facebook: https://www.facebook.com/LateNightSeth\nFind Late Night on Tumblr: http://latenightseth.tumblr.com/\n\nLate Night with Seth Meyers on YouTube features A-list celebrity guests, memorable comedy, and topical monologue jokes.\n\nNBC ON SOCIAL \nLike NBC: http://Facebook.com/NBC\nFollow NBC: http://Twitter.com/NBC\nNBC Tumblr: http://NBCtv.tumblr.com/\nNBC Pinterest: http://Pinterest.com/NBCtv/\nYouTube: http://www.youtube.com/nbc\nNBC Instagram: http://instagram.com/nbctv\n\nCNN’s Democratic Debate, Night Two: A Closer Look- Late Night with Seth Meyers\nhttps://youtu.be/YKXPlkhLIPw\n\n\nLate Night with Seth Meyers\nhttp://www.youtube.com/user/latenightseth",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/YKXPlkhLIPw/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/YKXPlkhLIPw/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/YKXPlkhLIPw/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/YKXPlkhLIPw/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/YKXPlkhLIPw/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Late Night with Seth Meyers",
     "tags": [
      "Late",
      "Night",
      "with",
      "Seth",
      "Meyers",
      "Chris Hayes",
      "CNN",
      "Democratic Debate",
      "Night Two",
      "A Closer Look",
      "NBC",
      "NBC TV",
      "television",
      "funny",
      "talk show",
      "comedy",
      "humor",
      "stand-up",
      "parody",
      "snl seth meyers",
      "host",
      "promo",
      "seth",
      "meyers",
      "weekend update",
      "news satire",
      "satire",
      "Joe Biden",
      "Kamala Harris",
      "Cory Booker",
      "Julián Castro",
      "Andrew Yang",
      "Jay Inslee",
      "Tulsi Gabbard",
      "Kirsten Gillibrand",
      "Bill de Blasio",
      "Michael Bennet",
      "2020 election",
      "presidential election",
      "politics",
      "debates",
      "Bernie Sanders",
      "marianne williamson"
     ],
     "categoryId": "23",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "CNN’s Democratic Debate, Night Two: A Closer Look",
      "description": "Seth takes a closer look at the second night of the second Democratic presidential debate of the 2020 election.\n» Subscribe to Late Night: http://bit.ly/LateNightSeth\n» Get more Late Night with Seth Meyers: http://www.nbc.com/late-night-with-seth-meyers/\n» Watch Late Night with Seth Meyers Weeknights 12:35/11:35c on NBC.\n\nLATE NIGHT ON SOCIAL\nFollow Late Night on Twitter: https://twitter.com/LateNightSeth\nLike Late Night on Facebook: https://www.facebook.com/LateNightSeth\nFind Late Night on Tumblr: http://latenightseth.tumblr.com/\n\nLate Night with Seth Meyers on YouTube features A-list celebrity guests, memorable comedy, and topical monologue jokes.\n\nNBC ON SOCIAL \nLike NBC: http://Facebook.com/NBC\nFollow NBC: http://Twitter.com/NBC\nNBC Tumblr: http://NBCtv.tumblr.com/\nNBC Pinterest: http://Pinterest.com/NBCtv/\nYouTube: http://www.youtube.com/nbc\nNBC Instagram: http://instagram.com/nbctv\n\nCNN’s Democratic Debate, Night Two: A Closer Look- Late Night with Seth Meyers\nhttps://youtu.be/YKXPlkhLIPw\n\n\nLate Night with Seth Meyers\nhttp://www.youtube.com/user/latenightseth"
     },
     "defaultAudioLanguage": "en"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/WUwA_FxaXqdO4MfAJFxDVFPlKMU\"",
    "id": "vBV-mm84rSI",
    "snippet": {
     "publishedAt": "2018-04-05T03:40:55.000Z",
     "channelId": "UCPJzF9unCvZyqkLayIV8fnA",
     "title": "The Late Night War Part II - Jay Leno vs Conan O'Brien",
     "description": "A chronicle of the second late night war of words between between two multi-millionaires, Jay Leno and Conan O'Brien, for control of The Tonight Show; no matter the outcome, they will both come out of the war with their millions intact and both in control of some late night talk show or other.\n\nAll copyrights belong to their respective owners, this video was created simply to chronicle an event in TV history as permitted in the Fair and Archival Uses of Copyright.\n\nSource videos (some have been removed, some have been reposted):\n00:04 https://youtu.be/eWKwylGBSoI\n01:52 http://dai.ly/x2hxxd0\n02:31 https://youtu.be/Cz-O1qiBrgc\n03:01 https://youtu.be/eZh5LbS3jA0\n03:05 http://www.tmz.com/videos/0_4kui762e/\n03:38 https://youtu.be/Cz-O1qiBrgc\n03:43 [video] https://youtu.be/1OE-rmwxhpI\n03:43 [audio] https://youtu.be/kW-rahnWIgc\n03:57 https://youtu.be/eZh5LbS3jA0\n04:14 http://www.tmz.com/videos/0_4kui762e/\n05:08 https://youtu.be/wuxMpMZipmI (repost)\n05:59 https://youtu.be/39NJ0f7J4aY\n06:19 https://youtu.be/vREsbJ-FkSk\n06:22 https://youtu.be/VGmYfw4VyI8\n06:40 http://dai.ly/x1pomji (alt version)\n06:43 https://youtu.be/XTWCvEENccw\n06:44 [audio] https://youtu.be/7JnUrsPKy1M\n06:45 https://youtu.be/j_ieyWCTCKA\n06:47 https://youtu.be/2QkSNppgTKE\n06:54 https://youtu.be/m7G7DV42vhk\n06:57 https://youtu.be/2QkSNppgTKE\n07:15 http://www.tmz.com/videos/0_4kui762e/\n07:26 https://youtu.be/MKlYNW31HhE\n07:46 https://youtu.be/4-oZ1RQiiZQ\n08:04 https://youtu.be/m7G7DV42vhk \n08:17 https://youtu.be/j_ieyWCTCKA\n08:20 http://www.tmz.com/videos/0_4kui762e/\n09:16 https://youtu.be/2QkSNppgTKE\n09:30 https://youtu.be/u1-GtUCKd34\n09:46 [video] https://youtu.be/PZ-TSVqhlKA\n09:56 [audio] https://youtu.be/eZh5LbS3jA0\n10:07 [video] https://youtu.be/nie4mXqmWIE\n10:41 https://youtu.be/j_ieyWCTCKA\n10:42 http://www.tmz.com/videos/0_4kui762e/\n10:46 https://youtu.be/32MYp-WAl2E\n10:55 https://youtu.be/7VG2aJyIFrA\n11:01 https://youtu.be/bpNn3B4kRso\n11:17 video not found\n11:43 https://youtu.be/K6nuq-87iSk\n11:56 https://youtu.be/u1-GtUCKd34\n12:11 https://youtu.be/q9j__cs0ixI\n12:19 “”\n12:31 “”\n12:47 https://youtu.be/TtCVrHgNsMc\n12:59 https://youtu.be/m7G7DV42vhk \n13:16 https://youtu.be/nHdCWKSPSP8\n13:28 https://youtu.be/m7G7DV42vhk \n13:32 https://youtu.be/bCsFtmtY_8c\n13:37 https://youtu.be/wuxMpMZipmI (repost)\n14:08 https://youtu.be/4-oZ1RQiiZQ\n14:13 https://vimeo.com/8769876\n14:37 https://youtu.be/cNi3SYHSzPU\n14:58 https://youtu.be/JOh-zlJBSt0\n15:00 https://youtu.be/wuxMpMZipmI (repost)\n15:24 https://youtu.be/nHdCWKSPSP8\n15:28 https://youtu.be/I9hBlc99cz4\n16:00 https://youtu.be/m7G7DV42vhk \n16:10 https://youtu.be/scYeqZt9F9A\n16:28 https://youtu.be/Q0qA82UJLBY\n16:46 https://youtu.be/j_ieyWCTCKA\n16:48 https://youtu.be/R5wTGud1Kkg\n17:09 https://youtu.be/wuxMpMZipmI (repost)\n17:38 https://youtu.be/LTkz36pBCuU\n18:43 https://youtu.be/cNi3SYHSzPU\n18:57 https://youtu.be/9PksWXV7ue8\n19:03 http://www.tmz.com/videos/0_4kui762e/\n19:13 https://youtu.be/eZh5LbS3jA0\n19:40 https://youtu.be/q9j__cs0ixI\n19:51 https://youtu.be/u1-GtUCKd34\n20:05 https://youtu.be/vu7fkRX7MxE\n20:24 https://youtu.be/u1-GtUCKd34\n20:32 https://youtu.be/K6nuq-87iSk\n20:38 https://youtu.be/u1-GtUCKd34\n20:58 https://youtu.be/Hrb3HLB28Po\n22:01 [video] https://youtu.be/VxZVJLkWr1c\n22:16 [video] https://youtu.be/1q2IYgh_sjo\n23:11 https://youtu.be/KdxE3ID9Alg\n24:42 https://youtu.be/1OE-rmwxhpI\n25:53 https://youtu.be/OJ7eY9VlKcc\n26:09 https://youtu.be/9VbIPxvQDGU\n26:13 https://youtu.be/7zow-FeLT0w\n26:17 https://youtu.be/9VbIPxvQDGU\n26:32 https://youtu.be/32MYp-WAl2E\n26:41 [audio] https://youtu.be/scYeqZt9F9A \n26:44 [audio] https://youtu.be/eZh5LbS3jA0\n27:37 https://youtu.be/OOCTEUwHKFo\n28:05 https://youtu.be/BJwDuczNzYA\n28:10 https://youtu.be/B8mterMol_Q\n28:42 https://youtu.be/qPiieKM4Eek\n29:15 https://youtu.be/LTkz36pBCuU\n29:51 [video] https://youtu.be/W4NLepluu5A\n30:38 https://youtu.be/MvWJHQyBcsc\n30:47 http://dai.ly/x1belq9\n31:01 https://youtu.be/-VFgiPXisu8\n31:39 https://youtu.be/wuxMpMZipmI (repost)\n31:50 https://youtu.be/GB6vcL8zBLk\n32:21 [audio] https://youtu.be/LTkz36pBCuU\n32:52 https://youtu.be/y2sUHjG_gqs",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/vBV-mm84rSI/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/vBV-mm84rSI/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/vBV-mm84rSI/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/vBV-mm84rSI/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/vBV-mm84rSI/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "FanboyFilms",
     "tags": [
      "Late",
      "Night",
      "War",
      "Tonight",
      "Show",
      "Leno",
      "Conan",
      "Letterman",
      "Fallon",
      "Kimmel",
      "Ferguson",
      "O'Donnell",
      "CBS",
      "CNN",
      "Stern",
      "NBC",
      "Fox",
      "MSNBC",
      "King",
      "Lopez"
     ],
     "categoryId": "26",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "The Late Night War Part II - Jay Leno vs Conan O'Brien",
      "description": "A chronicle of the second late night war of words between between two multi-millionaires, Jay Leno and Conan O'Brien, for control of The Tonight Show; no matter the outcome, they will both come out of the war with their millions intact and both in control of some late night talk show or other.\n\nAll copyrights belong to their respective owners, this video was created simply to chronicle an event in TV history as permitted in the Fair and Archival Uses of Copyright.\n\nSource videos (some have been removed, some have been reposted):\n00:04 https://youtu.be/eWKwylGBSoI\n01:52 http://dai.ly/x2hxxd0\n02:31 https://youtu.be/Cz-O1qiBrgc\n03:01 https://youtu.be/eZh5LbS3jA0\n03:05 http://www.tmz.com/videos/0_4kui762e/\n03:38 https://youtu.be/Cz-O1qiBrgc\n03:43 [video] https://youtu.be/1OE-rmwxhpI\n03:43 [audio] https://youtu.be/kW-rahnWIgc\n03:57 https://youtu.be/eZh5LbS3jA0\n04:14 http://www.tmz.com/videos/0_4kui762e/\n05:08 https://youtu.be/wuxMpMZipmI (repost)\n05:59 https://youtu.be/39NJ0f7J4aY\n06:19 https://youtu.be/vREsbJ-FkSk\n06:22 https://youtu.be/VGmYfw4VyI8\n06:40 http://dai.ly/x1pomji (alt version)\n06:43 https://youtu.be/XTWCvEENccw\n06:44 [audio] https://youtu.be/7JnUrsPKy1M\n06:45 https://youtu.be/j_ieyWCTCKA\n06:47 https://youtu.be/2QkSNppgTKE\n06:54 https://youtu.be/m7G7DV42vhk\n06:57 https://youtu.be/2QkSNppgTKE\n07:15 http://www.tmz.com/videos/0_4kui762e/\n07:26 https://youtu.be/MKlYNW31HhE\n07:46 https://youtu.be/4-oZ1RQiiZQ\n08:04 https://youtu.be/m7G7DV42vhk \n08:17 https://youtu.be/j_ieyWCTCKA\n08:20 http://www.tmz.com/videos/0_4kui762e/\n09:16 https://youtu.be/2QkSNppgTKE\n09:30 https://youtu.be/u1-GtUCKd34\n09:46 [video] https://youtu.be/PZ-TSVqhlKA\n09:56 [audio] https://youtu.be/eZh5LbS3jA0\n10:07 [video] https://youtu.be/nie4mXqmWIE\n10:41 https://youtu.be/j_ieyWCTCKA\n10:42 http://www.tmz.com/videos/0_4kui762e/\n10:46 https://youtu.be/32MYp-WAl2E\n10:55 https://youtu.be/7VG2aJyIFrA\n11:01 https://youtu.be/bpNn3B4kRso\n11:17 video not found\n11:43 https://youtu.be/K6nuq-87iSk\n11:56 https://youtu.be/u1-GtUCKd34\n12:11 https://youtu.be/q9j__cs0ixI\n12:19 “”\n12:31 “”\n12:47 https://youtu.be/TtCVrHgNsMc\n12:59 https://youtu.be/m7G7DV42vhk \n13:16 https://youtu.be/nHdCWKSPSP8\n13:28 https://youtu.be/m7G7DV42vhk \n13:32 https://youtu.be/bCsFtmtY_8c\n13:37 https://youtu.be/wuxMpMZipmI (repost)\n14:08 https://youtu.be/4-oZ1RQiiZQ\n14:13 https://vimeo.com/8769876\n14:37 https://youtu.be/cNi3SYHSzPU\n14:58 https://youtu.be/JOh-zlJBSt0\n15:00 https://youtu.be/wuxMpMZipmI (repost)\n15:24 https://youtu.be/nHdCWKSPSP8\n15:28 https://youtu.be/I9hBlc99cz4\n16:00 https://youtu.be/m7G7DV42vhk \n16:10 https://youtu.be/scYeqZt9F9A\n16:28 https://youtu.be/Q0qA82UJLBY\n16:46 https://youtu.be/j_ieyWCTCKA\n16:48 https://youtu.be/R5wTGud1Kkg\n17:09 https://youtu.be/wuxMpMZipmI (repost)\n17:38 https://youtu.be/LTkz36pBCuU\n18:43 https://youtu.be/cNi3SYHSzPU\n18:57 https://youtu.be/9PksWXV7ue8\n19:03 http://www.tmz.com/videos/0_4kui762e/\n19:13 https://youtu.be/eZh5LbS3jA0\n19:40 https://youtu.be/q9j__cs0ixI\n19:51 https://youtu.be/u1-GtUCKd34\n20:05 https://youtu.be/vu7fkRX7MxE\n20:24 https://youtu.be/u1-GtUCKd34\n20:32 https://youtu.be/K6nuq-87iSk\n20:38 https://youtu.be/u1-GtUCKd34\n20:58 https://youtu.be/Hrb3HLB28Po\n22:01 [video] https://youtu.be/VxZVJLkWr1c\n22:16 [video] https://youtu.be/1q2IYgh_sjo\n23:11 https://youtu.be/KdxE3ID9Alg\n24:42 https://youtu.be/1OE-rmwxhpI\n25:53 https://youtu.be/OJ7eY9VlKcc\n26:09 https://youtu.be/9VbIPxvQDGU\n26:13 https://youtu.be/7zow-FeLT0w\n26:17 https://youtu.be/9VbIPxvQDGU\n26:32 https://youtu.be/32MYp-WAl2E\n26:41 [audio] https://youtu.be/scYeqZt9F9A \n26:44 [audio] https://youtu.be/eZh5LbS3jA0\n27:37 https://youtu.be/OOCTEUwHKFo\n28:05 https://youtu.be/BJwDuczNzYA\n28:10 https://youtu.be/B8mterMol_Q\n28:42 https://youtu.be/qPiieKM4Eek\n29:15 https://youtu.be/LTkz36pBCuU\n29:51 [video] https://youtu.be/W4NLepluu5A\n30:38 https://youtu.be/MvWJHQyBcsc\n30:47 http://dai.ly/x1belq9\n31:01 https://youtu.be/-VFgiPXisu8\n31:39 https://youtu.be/wuxMpMZipmI (repost)\n31:50 https://youtu.be/GB6vcL8zBLk\n32:21 [audio] https://youtu.be/LTkz36pBCuU\n32:52 https://youtu.be/y2sUHjG_gqs"
     },
     "defaultAudioLanguage": "en"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/BRU9wMvzIAqwmtfCe5g478PzkpY\"",
    "id": "I8_2hPjljag",
    "snippet": {
     "publishedAt": "2013-10-06T10:14:15.000Z",
     "channelId": "UCO54ztF2IfQjX86x-g9wbLg",
     "title": "Seinfeld: How It Began (FULL)",
     "description": "",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/I8_2hPjljag/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/I8_2hPjljag/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/I8_2hPjljag/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/I8_2hPjljag/sddefault.jpg",
       "width": 640,
       "height": 480
      }
     },
     "channelTitle": "pinkskies21",
     "tags": [
      "elaine benes",
      "jason alexander",
      "Jerry Seinfeld (Author)",
      "Cosmo Kramer (Fictional Character)",
      "Elaine Benes (Fictional Character)",
      "george costanza",
      "kramer",
      "Michael Richards (Comedian)",
      "julia louis-dreyfus",
      "Larry David (Comedian)",
      "Jerry Seinfeld (Fictional Character)",
      "Seinfeld (TV Show)",
      "jerry seinfeld",
      "Julia Louis-Dreyfus (Comedian)",
      "George Costanza (Fictional Character)",
      "seinfeld",
      "michael richards",
      "Jason Alexander (TV Program Creator)"
     ],
     "categoryId": "24",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "Seinfeld: How It Began (FULL)",
      "description": ""
     }
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/RtKoHt8mrImAHR2JFzJm_6w6zAI\"",
    "id": "xLetZ-36TYs",
    "snippet": {
     "publishedAt": "2019-03-17T19:27:43.000Z",
     "channelId": "UCSJ4gkVC6NrvII8umztf0Ow",
     "title": "Lofi hip hop mix - Beats to Relax/Study to [2019]",
     "description": "👕 New merch collection → https://chilledcow-merch.com\n🎼ChilledCow's Spotify playlist  → http://bit.ly/spotifychilledcow\n\n\n🎶 Tracklist (* = unreleased track)\n\n[00:00:00] Philanthrope x Yasper - Slopes \n[00:02:52] knowmadic - faces\n[00:05:02] Leavv - Candle\n[00:07:23] tomcbumpz - one of a kind\n[00:09:46] Philanthrope - tipsy ft dontcry & nokiaa\n[00:11:53] arbour x drkmnd - Interstellar\n[00:14:31] Kupla - In Your Eyes*\n[00:17:28] Leavv - Far Away*\n[00:20:45] Monma & Cocabona - Pyra (Chillhop Spring Essentials)*\n[00:23:26] hm surf - My Girl\n[00:25:40] delayde - sunday morning bacon\n[00:27:23] mommy x Philanthrope - embrace ft Misha, monma & Cocabona\n[00:29:30] Sarcastic Sounds - Wish You Were Mine*\n[00:31:28] j'san - delusion\n[00:33:55] Fantompower - Blankets\n[00:36:45] Bluntone - Memory Fragments (feat Stackone)\n[00:38:40] Kupla x j'san - Out of town\n[00:41:08] mell-ø - embrace it\n[00:43:05] kokoro - your touch\n[00:45:00] mell-ø - beside u*\n[00:46:40] mommy x Philanthrope - thinking of you ft Kyle McEvoy\n[00:48:42] hm surf - old friends (ft genser _ crwsox)\n[00:50:35] Philanthrope - Silence\n[00:52:18] Aso - Sundays\n[00:55:38] Sarcastic Sounds - Go To Bed\n[00:58:48] Loopschrauber - suave\n[01:00:04] mell-ø - Dreamin'* \n[01:01:45] Sazetrax - 4 AM\n[01:03:40] DLJ - Pretend\n[01:06:15] hm surf - Cloudy\n[01:08:26] Omaure - Down Under\n[01:10:10] Flitz & Suppe - Things That I See\n[01:12:41] Monma - Fira\n[01:15:03] Flitz & Suppe - Reverie (ft. Fujitsu)\n[01:17:26] mell-ø - Waiting For You\n[01:18:56] Flovry - Laze (Chillhop Spring Essentials)*\n[01:20:28] Slipfunc - summer luv\n[01:22:29] hoogway - ingenue\n[01:24:44] Fantompower - Morning Dew (Chillhop Spring Essentials)*\n[01:27:06] Aixion - Sweaters are for introverts (instrumental)\n[01:28:52] Flovry - car radio\n[01:31:28] masked man x lofty - rotom\n[01:33:33] H.1 - Elsewhere\n[01:35:25] Philanthrope - Blue pt 2\n[01:37:17] leavv - sleep by the waves\n[01:39:19] harris cole & aso - safe, now\n[01:42:17] mt fujitive - garden\n[01:44:05] Subtrailss - Leave\n[01:46:00] Philanthrope - Sleep Next to Me\n[01:49:13] Brenky - handwarmers\n[01:51:09] a l e x - yyyy\n[01:54:30] arbour x houseplants_ - serenity \n[01:56:20] two sleepy - she(was.)\n\nSpecial thanks to Chillhop for their music and all the artists featured\nhttps://www.youtube.com/user/Chillhopdotcom\nhttps://open.spotify.com/user/chillhopmusic\n\n❤️Support the beatmakers \n\nhttps://soundcloud.com/philanthrope1\nhttps://soundcloud.com/yasperrr\nhttps://soundcloud.com/knowmadicbeats\nhttps://soundcloud.com/leavv\nhttps://soundcloud.com/tomcbumpz\nhttps://soundcloud.com/dontcrybby\nhttps://soundcloud.com/arbour-eat-them\nhttps://soundcloud.com/drkmndmusic\nhttps://soundcloud.com/kuplasound\nhttps://soundcloud.com/monmabeats\nhttps://soundcloud.com/cocabona\nhttps://soundcloud.com/hmsurf\nhttps://soundcloud.com/delayde\nhttps://soundcloud.com/beatsbymommy\nhttps://soundcloud.com/mishabeatsyou\nhttps://soundcloud.com/the-sarcastic-ashole\nhttps://soundcloud.com/iamjsan\nhttps://soundcloud.com/fantompower\nhttps://soundcloud.com/bluntone\nhttps://soundcloud.com/stackoner\nhttps://soundcloud.com/mellomusicnl\nhttps://soundcloud.com/beatsbykokoro\nhttps://soundcloud.com/kylemcevoymusic\nhttps://soundcloud.com/mcnetik\nhttps://soundcloud.com/crwsox\nhttps://soundcloud.com/aricogle\nhttps://soundcloud.com/loop-schrauber\nhttps://soundcloud.com/sazetrax\nhttps://soundcloud.com/dljbeats\nhttps://soundcloud.com/omaure-1\nhttps://soundcloud.com/flitzsuppe\nhttps://soundcloud.com/fujitsuu1\nhttps://soundcloud.com/flovry\nhttps://soundcloud.com/pauli-niemi\nhttps://soundcloud.com/hoogway\nhttps://soundcloud.com/aixion\nhttps://soundcloud.com/masked-man-peace\nhttps://soundcloud.com/bylofty\nhttps://soundcloud.com/111h111\nhttps://soundcloud.com/iamharriscole\nhttps://soundcloud.com/mt_fujitive\nhttps://soundcloud.com/subtrailss\nhttps://soundcloud.com/brenky86\nhttps://soundcloud.com/worsethanthis\nhttps://soundcloud.com/twosleepy\nhttps://soundcloud.com/hsplnts\n\n🎨 Illustration by Basile Gouttenoire\n→ https://www.artstation.com/bazart\n\n🎨Animation by Nathalie Baraton\n→ https://www.instagram.com/nathalie.baraton/\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowinstagram\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowsoundcloud\n\n✔️ Copyright Free Playlist \n→ https://goo.gl/QtsxQG\n\n📝 Submissions\n→ Artwork : artwork@thechilledcow.com\n→ Music : https://soundcloud.com/chilledcow\n\n❌ Please, do not use these songs without artist's permission",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/xLetZ-36TYs/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/xLetZ-36TYs/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/xLetZ-36TYs/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/xLetZ-36TYs/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/xLetZ-36TYs/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "ChilledCow",
     "tags": [
      "chilledcow",
      "chilled cow",
      "lofi",
      "lofi hiphop",
      "lofi hip hop",
      "lo-fi hiphop",
      "lo fi hip-hop",
      "lofi mix",
      "lo-fi mix",
      "lofi hip hop mix",
      "lo-fi hip hop mix",
      "study",
      "study mix",
      "study music",
      "music to study",
      "study chill mix",
      "chillhop mix",
      "chilledcow mix",
      "chilled cow mix",
      "chill study beats",
      "chill beats",
      "study beats",
      "study music mix",
      "Lofi hip hop mix - Beats to Relax/Study to [2019]",
      "lofi 2019",
      "lofi hip hop 2019",
      "best of lofi 2019",
      "best of lofi hip hop 2019",
      "chillhop"
     ],
     "categoryId": "10",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "Lofi hip hop mix - Beats to Relax/Study to [2019]",
      "description": "👕 New merch collection → https://chilledcow-merch.com\n🎼ChilledCow's Spotify playlist  → http://bit.ly/spotifychilledcow\n\n\n🎶 Tracklist (* = unreleased track)\n\n[00:00:00] Philanthrope x Yasper - Slopes \n[00:02:52] knowmadic - faces\n[00:05:02] Leavv - Candle\n[00:07:23] tomcbumpz - one of a kind\n[00:09:46] Philanthrope - tipsy ft dontcry & nokiaa\n[00:11:53] arbour x drkmnd - Interstellar\n[00:14:31] Kupla - In Your Eyes*\n[00:17:28] Leavv - Far Away*\n[00:20:45] Monma & Cocabona - Pyra (Chillhop Spring Essentials)*\n[00:23:26] hm surf - My Girl\n[00:25:40] delayde - sunday morning bacon\n[00:27:23] mommy x Philanthrope - embrace ft Misha, monma & Cocabona\n[00:29:30] Sarcastic Sounds - Wish You Were Mine*\n[00:31:28] j'san - delusion\n[00:33:55] Fantompower - Blankets\n[00:36:45] Bluntone - Memory Fragments (feat Stackone)\n[00:38:40] Kupla x j'san - Out of town\n[00:41:08] mell-ø - embrace it\n[00:43:05] kokoro - your touch\n[00:45:00] mell-ø - beside u*\n[00:46:40] mommy x Philanthrope - thinking of you ft Kyle McEvoy\n[00:48:42] hm surf - old friends (ft genser _ crwsox)\n[00:50:35] Philanthrope - Silence\n[00:52:18] Aso - Sundays\n[00:55:38] Sarcastic Sounds - Go To Bed\n[00:58:48] Loopschrauber - suave\n[01:00:04] mell-ø - Dreamin'* \n[01:01:45] Sazetrax - 4 AM\n[01:03:40] DLJ - Pretend\n[01:06:15] hm surf - Cloudy\n[01:08:26] Omaure - Down Under\n[01:10:10] Flitz & Suppe - Things That I See\n[01:12:41] Monma - Fira\n[01:15:03] Flitz & Suppe - Reverie (ft. Fujitsu)\n[01:17:26] mell-ø - Waiting For You\n[01:18:56] Flovry - Laze (Chillhop Spring Essentials)*\n[01:20:28] Slipfunc - summer luv\n[01:22:29] hoogway - ingenue\n[01:24:44] Fantompower - Morning Dew (Chillhop Spring Essentials)*\n[01:27:06] Aixion - Sweaters are for introverts (instrumental)\n[01:28:52] Flovry - car radio\n[01:31:28] masked man x lofty - rotom\n[01:33:33] H.1 - Elsewhere\n[01:35:25] Philanthrope - Blue pt 2\n[01:37:17] leavv - sleep by the waves\n[01:39:19] harris cole & aso - safe, now\n[01:42:17] mt fujitive - garden\n[01:44:05] Subtrailss - Leave\n[01:46:00] Philanthrope - Sleep Next to Me\n[01:49:13] Brenky - handwarmers\n[01:51:09] a l e x - yyyy\n[01:54:30] arbour x houseplants_ - serenity \n[01:56:20] two sleepy - she(was.)\n\nSpecial thanks to Chillhop for their music and all the artists featured\nhttps://www.youtube.com/user/Chillhopdotcom\nhttps://open.spotify.com/user/chillhopmusic\n\n❤️Support the beatmakers \n\nhttps://soundcloud.com/philanthrope1\nhttps://soundcloud.com/yasperrr\nhttps://soundcloud.com/knowmadicbeats\nhttps://soundcloud.com/leavv\nhttps://soundcloud.com/tomcbumpz\nhttps://soundcloud.com/dontcrybby\nhttps://soundcloud.com/arbour-eat-them\nhttps://soundcloud.com/drkmndmusic\nhttps://soundcloud.com/kuplasound\nhttps://soundcloud.com/monmabeats\nhttps://soundcloud.com/cocabona\nhttps://soundcloud.com/hmsurf\nhttps://soundcloud.com/delayde\nhttps://soundcloud.com/beatsbymommy\nhttps://soundcloud.com/mishabeatsyou\nhttps://soundcloud.com/the-sarcastic-ashole\nhttps://soundcloud.com/iamjsan\nhttps://soundcloud.com/fantompower\nhttps://soundcloud.com/bluntone\nhttps://soundcloud.com/stackoner\nhttps://soundcloud.com/mellomusicnl\nhttps://soundcloud.com/beatsbykokoro\nhttps://soundcloud.com/kylemcevoymusic\nhttps://soundcloud.com/mcnetik\nhttps://soundcloud.com/crwsox\nhttps://soundcloud.com/aricogle\nhttps://soundcloud.com/loop-schrauber\nhttps://soundcloud.com/sazetrax\nhttps://soundcloud.com/dljbeats\nhttps://soundcloud.com/omaure-1\nhttps://soundcloud.com/flitzsuppe\nhttps://soundcloud.com/fujitsuu1\nhttps://soundcloud.com/flovry\nhttps://soundcloud.com/pauli-niemi\nhttps://soundcloud.com/hoogway\nhttps://soundcloud.com/aixion\nhttps://soundcloud.com/masked-man-peace\nhttps://soundcloud.com/bylofty\nhttps://soundcloud.com/111h111\nhttps://soundcloud.com/iamharriscole\nhttps://soundcloud.com/mt_fujitive\nhttps://soundcloud.com/subtrailss\nhttps://soundcloud.com/brenky86\nhttps://soundcloud.com/worsethanthis\nhttps://soundcloud.com/twosleepy\nhttps://soundcloud.com/hsplnts\n\n🎨 Illustration by Basile Gouttenoire\n→ https://www.artstation.com/bazart\n\n🎨Animation by Nathalie Baraton\n→ https://www.instagram.com/nathalie.baraton/\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowinstagram\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowsoundcloud\n\n✔️ Copyright Free Playlist \n→ https://goo.gl/QtsxQG\n\n📝 Submissions\n→ Artwork : artwork@thechilledcow.com\n→ Music : https://soundcloud.com/chilledcow\n\n❌ Please, do not use these songs without artist's permission"
     }
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/RyzLTks2AZ4jzSGqXfxkOqOlcoc\"",
    "id": "xaNs-m3RNFM",
    "snippet": {
     "publishedAt": "2018-07-02T02:33:51.000Z",
     "channelId": "UC9Pg1NZVnSf2eQpIiAugEKA",
     "title": "Beavis & Butt-Head (Documentary 001)",
     "description": "Beavis and Butt-Head is an American adult animated sitcom created and designed by Mike Judge. The series originated from Frog Baseball, a 1992 short film by Judge originally aired on Liquid Television. After seeing the short, MTV signed Judge to develop the concept. The series first ran from March 8, 1993, to November 28, 1997. The series was later renewed for an eighth season, which aired from October 27 to December 29, 2011. In 1996, the series was adapted into the animated feature film Beavis and Butt-Head Do America.\n\nThe show centers on two socially incompetent teenage delinquents, Beavis and Butt-Head (both voiced by Judge), who go to school at Highland High in Highland, Texas. They have no apparent adult supervision at home, are dim-witted, under-educated and barely literate. Both lack any empathy or moral scruples, even regarding each other. They will usually deem things they encounter as \"cool\" if they are associated with heavy metal, violence, sex, destruction or the macabre. While they have no experience with girls, the two share an obsession with sex, and tend to chuckle whenever they hear words or phrases that can even remotely be interpreted as sexual or scatological.\n\nEach episode features frequent interstitial scenes in which they critique music videos using commentary improvised by Judge (in season eight, they also commented on clips from other MTV shows such as The Jersey Shore and True Life, plus shows from other Viacom-owned networks such as Spike). The remainder of the episodes depict the duo embarking on some kind of scheme or adventure.Their teachers at Highland High are often at a loss as to how to deal with them, and in many episodes, they skip school altogether. Their actions sometimes result in serious consequences, but often for others, for which they themselves show no remorse.",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/xaNs-m3RNFM/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/xaNs-m3RNFM/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/xaNs-m3RNFM/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Unimportant Entertainment",
     "tags": [
      "BEAVIS & BUTT-HEAD",
      "MTV",
      "DOCUMENTARY",
      "COMMENTARY",
      "INTERVIEWS",
      "CAST INTERVIEWS",
      "COMEDY",
      "CARTOON",
      "ANIMATION"
     ],
     "categoryId": "20",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "Beavis & Butt-Head (Documentary 001)",
      "description": "Beavis and Butt-Head is an American adult animated sitcom created and designed by Mike Judge. The series originated from Frog Baseball, a 1992 short film by Judge originally aired on Liquid Television. After seeing the short, MTV signed Judge to develop the concept. The series first ran from March 8, 1993, to November 28, 1997. The series was later renewed for an eighth season, which aired from October 27 to December 29, 2011. In 1996, the series was adapted into the animated feature film Beavis and Butt-Head Do America.\n\nThe show centers on two socially incompetent teenage delinquents, Beavis and Butt-Head (both voiced by Judge), who go to school at Highland High in Highland, Texas. They have no apparent adult supervision at home, are dim-witted, under-educated and barely literate. Both lack any empathy or moral scruples, even regarding each other. They will usually deem things they encounter as \"cool\" if they are associated with heavy metal, violence, sex, destruction or the macabre. While they have no experience with girls, the two share an obsession with sex, and tend to chuckle whenever they hear words or phrases that can even remotely be interpreted as sexual or scatological.\n\nEach episode features frequent interstitial scenes in which they critique music videos using commentary improvised by Judge (in season eight, they also commented on clips from other MTV shows such as The Jersey Shore and True Life, plus shows from other Viacom-owned networks such as Spike). The remainder of the episodes depict the duo embarking on some kind of scheme or adventure.Their teachers at Highland High are often at a loss as to how to deal with them, and in many episodes, they skip school altogether. Their actions sometimes result in serious consequences, but often for others, for which they themselves show no remorse."
     }
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/XcZJTWTAjNaXZlRmffirypAfKIc\"",
    "id": "bebuiaSKtU4",
    "snippet": {
     "publishedAt": "2019-01-25T07:00:36.000Z",
     "channelId": "UCOxqgCwgOqC2lMqC5PYz_Dg",
     "title": "lofi hip hop radio - beats to study/relax to",
     "description": "We hope you enjoy these chill lofi hip hop tunes while studying / chilling / working. ♥\n\n🎶 Listen to the radio on Spotify / Apple\n・ https://chillhop.lnk.to/lofihiphop (Spotify)\n・ https://chillhop.lnk.to/applemusic (Apple Music)\n\n✔️ Add tracks from the radio directly to your playlists\n・ https://live.chillhop.com\n\n🐾 More Chillhop\n・ https://chillhop.com/listen\n\n🛍️ Chillhop Online Store\n・ https://shop.chillhop.com\n\n🎨 Illustration & Animation\n・ Jeoffrey Magellan » http://jeoffreymagellan.tumblr.com\n・ https://instagram.com/magellan_illustration\n・ Tevy Dubray » https://www.tev-art.com/\n\n🙏 The Chillhop Community\n・ https://discord.gg/chillhop\n・ https://reddit.com/r/chillhop\n・ https://www.facebook.com/groups/1561371024098016\n\n❔ Use our music in your videos\n・https://chillhop.com/license\n\nFAQ:\nHow can I add likes to a track or find back tracks?\nCheck out https://live.chillhop.com . You can directly like tracks, find back tracks and have an overview of tracks you liked. It also includes links to the tracks on Spotify and the artist. Bookmark that page!\n\n#liveradio #jazz #lofi",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/bebuiaSKtU4/default_live.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/bebuiaSKtU4/mqdefault_live.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/bebuiaSKtU4/hqdefault_live.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/bebuiaSKtU4/sddefault_live.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/bebuiaSKtU4/maxresdefault_live.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Chillhop Music",
     "tags": [
      "lofi hip hop",
      "lofi",
      "lo fi",
      "lo-fi",
      "lofi hiphop",
      "lofi radio",
      "lofi hip hop radio",
      "chill study beats",
      "nujabes",
      "lofi hiphop radio",
      "chill beats",
      "study beats",
      "chill gaming beats",
      "chilledcow",
      "study girl stream",
      "비트",
      "라디오",
      "로파이힙합",
      "lo-fi hip hop",
      "lofi hip hop mix",
      "study beats radio",
      "relax beats",
      "raccoon livestream",
      "fantastic music",
      "beats to study to",
      "beats to relax/study to",
      "lofi 2019",
      "lo fi beat",
      "24/7 lofi hip hop",
      "hip hop radio",
      "beats para estudiar",
      "sleepy music",
      "sleepy beats"
     ],
     "categoryId": "10",
     "liveBroadcastContent": "live",
     "localized": {
      "title": "lofi hip hop radio - beats to study/relax to",
      "description": "We hope you enjoy these chill lofi hip hop tunes while studying / chilling / working. ♥\n\n🎶 Listen to the radio on Spotify / Apple\n・ https://chillhop.lnk.to/lofihiphop (Spotify)\n・ https://chillhop.lnk.to/applemusic (Apple Music)\n\n✔️ Add tracks from the radio directly to your playlists\n・ https://live.chillhop.com\n\n🐾 More Chillhop\n・ https://chillhop.com/listen\n\n🛍️ Chillhop Online Store\n・ https://shop.chillhop.com\n\n🎨 Illustration & Animation\n・ Jeoffrey Magellan » http://jeoffreymagellan.tumblr.com\n・ https://instagram.com/magellan_illustration\n・ Tevy Dubray » https://www.tev-art.com/\n\n🙏 The Chillhop Community\n・ https://discord.gg/chillhop\n・ https://reddit.com/r/chillhop\n・ https://www.facebook.com/groups/1561371024098016\n\n❔ Use our music in your videos\n・https://chillhop.com/license\n\nFAQ:\nHow can I add likes to a track or find back tracks?\nCheck out https://live.chillhop.com . You can directly like tracks, find back tracks and have an overview of tracks you liked. It also includes links to the tracks on Spotify and the artist. Bookmark that page!\n\n#liveradio #jazz #lofi"
     },
     "defaultAudioLanguage": "en-US"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/jfdWrBSneTSbeV0C9uq-dIYcoeg\"",
    "id": "H-3EaHIsdrk",
    "snippet": {
     "publishedAt": "2017-10-20T20:14:43.000Z",
     "channelId": "UC3pdzvdXPFw7mgtrPdeC5aA",
     "title": "Rick and Morty - The Subtle Problem with Season 3 (Review/Analysis)",
     "description": "Spoilers for Seasons 1-3 of Rick and Morty\n\nAfter a 2 year wait, Season 3 of Rick and Morty has already come and gone, so of course now it's time to overanalyze it. How did the third season stack up against the previous seasons? Where did it improve, and where did it falter? \n\nIn this video I go over what I think are the strengths and weaknessess of season 3 of Rick and Morty, focusing on how the show has changed, how it lost some of its subtlety, and consequentely how that has effected the comedic storytelling and style of one of the best shows on television. \n\nSubscribe: https://goo.gl/mq6Bhd\n\nFootage used:\n\nRick and Morty (2013-)\n\nThe Thing (1982)\n\nTotal Recall (1990)\n\nAll music used comes from Pocket Mortys. Download for free here: https://goo.gl/LH1c9Z (Android), https://goo.gl/KmExm6 (iOS)\n\nFair Use Copyright Disclaimer:\nCopyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/H-3EaHIsdrk/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/H-3EaHIsdrk/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/H-3EaHIsdrk/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/H-3EaHIsdrk/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/H-3EaHIsdrk/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Brandon M. Jacobs",
     "tags": [
      "Rick and Morty",
      "Rick & Morty",
      "Rick and Morty review",
      "Rick and Morty episode review",
      "analysis",
      "Dan Harmon",
      "Justin Roiland",
      "reaction",
      "season one",
      "season two",
      "season three",
      "season 1",
      "season 2",
      "season 3",
      "moments",
      "scene",
      "sucks",
      "best",
      "szechuan sauce",
      "The Ricklantis Mixup",
      "Tales from the Citadel",
      "Evil Morty",
      "Rick",
      "Morty",
      "Summer",
      "Beth",
      "Jerry",
      "Mr. Poopybutthole",
      "season 4",
      "theory",
      "lore",
      "philosophy",
      "the problem with season 3",
      "season 3 critique",
      "Vindicators",
      "finale",
      "predictions",
      "scifi",
      "Birdperson"
     ],
     "categoryId": "24",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "Rick and Morty - The Subtle Problem with Season 3 (Review/Analysis)",
      "description": "Spoilers for Seasons 1-3 of Rick and Morty\n\nAfter a 2 year wait, Season 3 of Rick and Morty has already come and gone, so of course now it's time to overanalyze it. How did the third season stack up against the previous seasons? Where did it improve, and where did it falter? \n\nIn this video I go over what I think are the strengths and weaknessess of season 3 of Rick and Morty, focusing on how the show has changed, how it lost some of its subtlety, and consequentely how that has effected the comedic storytelling and style of one of the best shows on television. \n\nSubscribe: https://goo.gl/mq6Bhd\n\nFootage used:\n\nRick and Morty (2013-)\n\nThe Thing (1982)\n\nTotal Recall (1990)\n\nAll music used comes from Pocket Mortys. Download for free here: https://goo.gl/LH1c9Z (Android), https://goo.gl/KmExm6 (iOS)\n\nFair Use Copyright Disclaimer:\nCopyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use."
     },
     "defaultAudioLanguage": "en"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/aMRMHJK9ROmZ5Zx6rwFYpfj5Db0\"",
    "id": "F0IbjVq-fgs",
    "snippet": {
     "publishedAt": "2018-12-10T20:16:21.000Z",
     "channelId": "UCWzZ5TIGoZ6o-KtbGCyhnhg",
     "title": "24/7 lofi hip hop radio - beats to study/chill/relax",
     "description": "Welcome to our stream 👋 We hope you have a good time and enjoy the music :)\nMusic playing → lofi hip hop / beats\n \n🔈Got Spotify? Get the playlist here (재생 목록) 🎶\nhttp://lofi.collegemusic.co.uk\n\n--- --- ---\n\nWe care about our listeners, particularly those of you who have talked about feeling alone or depressed, or even suicidal. We know sometimes things can get tough, but we want to let you know you’re not alone and there are people out there who can help. \n\nOur study girl recently took a break to focus on her own mental health. To find out more about what happened, click here: \n\n→  https://www.collegemusic.co.uk/what-happened\n\nAt the link below, you’ll find a selection of VICE articles offering mental health support, which we hope will act as guidance, advice and simply a reminder: You are not alone.\n\n→ https://www.collegemusic.co.uk/vice-support\n\n--- --- ---\n\n환영합니다! 여기에서 즐거운 시간을 보내시고, 감미로운 비트를 즐겨주시기 바랍니다!\n\nSubscribing (with notifications 🔔 turned on) & liking the stream helps so much 💙 + if the stream goes down you'll get notified the new link immediately!\n\nHelp us keep this stream running 🔌 - \nPaypal: https://goo.gl/ySwmf7\n\nDiscord ✅ - https://discord.gg/dhthj5V\n\n▶️ YouTube Lofi Playlist - http://bit.ly/YouTubeLofiPlaylist\n\n↪︎ Twitter » http://twitter.collegemusic.co.uk\n↪︎ Soundcloud » http://soundcloud.collegemusic.co.uk\n↪︎ Spotify » http://spotify.collegemusic.co.uk\n↪︎ Snapchat » http://snapchat.collegemusic.co.uk\n↪︎ Facebook » http://facebook.collegemusic.co.uk\n\n- USEFUL NIGHTBOT COMMANDS (봇 명령어) -\n\u200b!talk \"Whatever you wanna say\"  » Nightbot will talk back to you!\n!song » Displays the current song playing\n!prev » Displays the previous song name\n!donate » Help us keep the stream going!\n!weather enterlocation » Tells you the weather at the location specified \n!share » Generates a Twitter link to share\n!social » Shows College Music social media links\n!subscribe » Gives you a link to subscribe to our channel\n!contact » Stream not working? Let us know \n!rules » Help familiarize yourself with our chat rules\n!hug » Feeling lonely?\n!funny » Our bot's funniest quote of the day\n\nIf you or a friend are experiencing suicidal feelings, please use the appropriate command in the live chat to show relevant helpline information:\n\n!helpusa » displays mental health helpline info for USA\n!helpuk » displays mental health helpline info for UK\n!helprussia » displays mental health helpline info for Russia\n!helpmexico » displays mental health helpline info for Mexico\n!helpkor » displays mental health helpline info for South Korea\n!helpjapan » displays mental health helpline info for Japan\n!helpgermany » displays mental health helpline info for Germany\n!helpfrance » displays mental health helpline info for France\n!helpcanda » displays mental health helpline info for Canada\n!helpbrazil » displays mental health helpline info for Brazil\n!global » displays mental health helpline for the rest of the world\n\n---- FAQs ----\n\n➤ Genres?\nLofi Hiphop - JazzHop - Chillhop - Ambient - Electronic\n\n➤ How long have you been streaming?\nWe were one of the first music channels to stream on YouTube + have the best uptime of any streamer. \n\n➤ How long will this be online?\nAll day, everyday.\n\n --------\n✖ Background and animation by Gloria Gemignani",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/F0IbjVq-fgs/default_live.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/F0IbjVq-fgs/mqdefault_live.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/F0IbjVq-fgs/hqdefault_live.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/F0IbjVq-fgs/sddefault_live.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/F0IbjVq-fgs/maxresdefault_live.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "College Music",
     "tags": [
      "카페음악",
      "로파이",
      "로파이 힙합",
      "24시간",
      "배경음악",
      "라디오",
      "비트",
      "잔잔한 음악",
      "공부할 때",
      "듣기 좋은 음악",
      "편안한 음악",
      "연주곡",
      "lofi",
      "lofi hip hop",
      "lofi hophop",
      "lofi hip hop radio",
      "radio",
      "hip hop",
      "24/7",
      "live",
      "live stream",
      "stream",
      "beat",
      "beats",
      "instrumental",
      "relax",
      "study",
      "game",
      "chill",
      "vibes",
      "anime",
      "mood",
      "분위기",
      "실시간",
      "hip-hop",
      "mellow",
      "mellow music",
      "수능",
      "수능공부",
      "수능시험",
      "공부",
      "시험",
      "수시",
      "집중",
      "집중 음악",
      "24/7 lofi hip hop radio - beats to study/chill/relax",
      "homework music",
      "lofi christmas",
      "24/7 Christmas Lofi",
      "christmas lofi"
     ],
     "categoryId": "10",
     "liveBroadcastContent": "live",
     "localized": {
      "title": "24/7 lofi hip hop radio - beats to study/chill/relax",
      "description": "Welcome to our stream 👋 We hope you have a good time and enjoy the music :)\nMusic playing → lofi hip hop / beats\n \n🔈Got Spotify? Get the playlist here (재생 목록) 🎶\nhttp://lofi.collegemusic.co.uk\n\n--- --- ---\n\nWe care about our listeners, particularly those of you who have talked about feeling alone or depressed, or even suicidal. We know sometimes things can get tough, but we want to let you know you’re not alone and there are people out there who can help. \n\nOur study girl recently took a break to focus on her own mental health. To find out more about what happened, click here: \n\n→  https://www.collegemusic.co.uk/what-happened\n\nAt the link below, you’ll find a selection of VICE articles offering mental health support, which we hope will act as guidance, advice and simply a reminder: You are not alone.\n\n→ https://www.collegemusic.co.uk/vice-support\n\n--- --- ---\n\n환영합니다! 여기에서 즐거운 시간을 보내시고, 감미로운 비트를 즐겨주시기 바랍니다!\n\nSubscribing (with notifications 🔔 turned on) & liking the stream helps so much 💙 + if the stream goes down you'll get notified the new link immediately!\n\nHelp us keep this stream running 🔌 - \nPaypal: https://goo.gl/ySwmf7\n\nDiscord ✅ - https://discord.gg/dhthj5V\n\n▶️ YouTube Lofi Playlist - http://bit.ly/YouTubeLofiPlaylist\n\n↪︎ Twitter » http://twitter.collegemusic.co.uk\n↪︎ Soundcloud » http://soundcloud.collegemusic.co.uk\n↪︎ Spotify » http://spotify.collegemusic.co.uk\n↪︎ Snapchat » http://snapchat.collegemusic.co.uk\n↪︎ Facebook » http://facebook.collegemusic.co.uk\n\n- USEFUL NIGHTBOT COMMANDS (봇 명령어) -\n\u200b!talk \"Whatever you wanna say\"  » Nightbot will talk back to you!\n!song » Displays the current song playing\n!prev » Displays the previous song name\n!donate » Help us keep the stream going!\n!weather enterlocation » Tells you the weather at the location specified \n!share » Generates a Twitter link to share\n!social » Shows College Music social media links\n!subscribe » Gives you a link to subscribe to our channel\n!contact » Stream not working? Let us know \n!rules » Help familiarize yourself with our chat rules\n!hug » Feeling lonely?\n!funny » Our bot's funniest quote of the day\n\nIf you or a friend are experiencing suicidal feelings, please use the appropriate command in the live chat to show relevant helpline information:\n\n!helpusa » displays mental health helpline info for USA\n!helpuk » displays mental health helpline info for UK\n!helprussia » displays mental health helpline info for Russia\n!helpmexico » displays mental health helpline info for Mexico\n!helpkor » displays mental health helpline info for South Korea\n!helpjapan » displays mental health helpline info for Japan\n!helpgermany » displays mental health helpline info for Germany\n!helpfrance » displays mental health helpline info for France\n!helpcanda » displays mental health helpline info for Canada\n!helpbrazil » displays mental health helpline info for Brazil\n!global » displays mental health helpline for the rest of the world\n\n---- FAQs ----\n\n➤ Genres?\nLofi Hiphop - JazzHop - Chillhop - Ambient - Electronic\n\n➤ How long have you been streaming?\nWe were one of the first music channels to stream on YouTube + have the best uptime of any streamer. \n\n➤ How long will this be online?\nAll day, everyday.\n\n --------\n✖ Background and animation by Gloria Gemignani"
     },
     "defaultAudioLanguage": "en-GB"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/kzuZOJqCuh3dO1N0NqlatFL0cbo\"",
    "id": "kcVtsnFeLC8",
    "snippet": {
     "publishedAt": "2015-10-17T17:00:02.000Z",
     "channelId": "UCTyHgU6ddX9eXLeSr6KUoSQ",
     "title": "107 Back To The Future Facts YOU Should Know! (Cinematica)",
     "description": "Check Out 107 Star Wars: A New Hope YOU Should Know: \nhttps://www.youtube.com/watch?v=GTKh9NJYIfY&index=2&list=PLJuFxb2ft3ZZtU4ObOkmxha-2MVGVXDR0\n\nSubscribe for more Movie/TV Facts:\nhttp://www.youtube.com/channel/UCTyHgU6ddX9eXLeSr6KUoSQ?sub_confirmation=1\n----------------------------------------\u00ad---------------------------------------\n\nWith this being the 30th anniversary of \"Back to the Future\" (as well as the year Marty McFly & Doc Brown go to in \"Back to the Future 2\"), it seemed only appropriate to give you revisit the awesome film series! Join us as we go back in time throughout the epic trilogy and reveal all sorts of crazy facts and secrets you never knew about the classic movies! So get ready because Cinematica is giving you 107 facts about one of the greatest time travel movies of all time: \"Back To The Future\"!\n\n-----------------------------------\nClick All The Links!\n-----------------------------------\n\nDownload the Channel Frederator app for chance to win awesome prizes!\nhttp://frdr.us/1hZ7Szo\n\nWHAT ALL THE 107s!\nhttps://www.youtube.com/watch?v=sz9ncrDlALQ&list=PLsvYuSgEtSsLiKq4f4oVTf7lb8PUTDKuy\n\nLike and Subscribe for more :D\nhttp://www.youtube.com/channel/UCTyHgU6ddX9eXLeSr6KUoSQ?sub_confirmation=1\n\nLearn more about the Channel Frederator Network here:\nhttp://frdr.us/1ybpOuJ\n\nCheck Out These 107s You May Have Missed!\n\nElf\nhttps://www.youtube.com/watch?v=f2V3az7gKGs&index=6&list=PLJuFxb2ft3ZZtU4ObOkmxha-2MVGVXDR0\n\nNightmare Before Christmas\nhttps://www.youtube.com/watch?v=BfXgn8wKz6g&index=9&list=PLJuFxb2ft3ZZtU4ObOkmxha-2MVGVXDR0\n\nMockingjay, Part 2\nhttps://www.youtube.com/watch?v=Z-QI0xq069s&index=4&list=PLJuFxb2ft3ZZtU4ObOkmxha-2MVGVXDR0\n\n-----------------------------------\nCredits\n-----------------------------------\n\nHosted & Edited by David Levin\nhttps://www.youtube.com/channel/UCFZd4bSVJCPG2iwXB4Ct15g\n\nCinematica is your new home for all things Movie & TV! From Doctor Who to Harry Potter, we'll be going through all your favorites and favorites you didn't know you even had! So grab your snacks and time to binge on Cinematica!",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/kcVtsnFeLC8/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/kcVtsnFeLC8/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/kcVtsnFeLC8/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/kcVtsnFeLC8/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/kcVtsnFeLC8/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Cinematica",
     "tags": [
      "Back to the future",
      "BTTF",
      "Back to the Future 1985",
      "Back to the Future 2011",
      "Back to Future",
      "Back to Future day",
      "Back to the future ii",
      "Back to the Future 1",
      "Back to the Future 2",
      "Back to the Future 4",
      "Back to the Future 2015",
      "Back to the Future 2015 date",
      "Back to the Future cast",
      "cast Back to the Future",
      "Back to the future 3",
      "Back to the Future movie",
      "Back to the Future part ii",
      "Back to the Future date",
      "Doc Brown",
      "Marty Mcfly",
      "facts",
      "fact video",
      "list top 10",
      "107 facts about"
     ],
     "categoryId": "1",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "107 Back To The Future Facts YOU Should Know! (Cinematica)",
      "description": "Check Out 107 Star Wars: A New Hope YOU Should Know: \nhttps://www.youtube.com/watch?v=GTKh9NJYIfY&index=2&list=PLJuFxb2ft3ZZtU4ObOkmxha-2MVGVXDR0\n\nSubscribe for more Movie/TV Facts:\nhttp://www.youtube.com/channel/UCTyHgU6ddX9eXLeSr6KUoSQ?sub_confirmation=1\n----------------------------------------\u00ad---------------------------------------\n\nWith this being the 30th anniversary of \"Back to the Future\" (as well as the year Marty McFly & Doc Brown go to in \"Back to the Future 2\"), it seemed only appropriate to give you revisit the awesome film series! Join us as we go back in time throughout the epic trilogy and reveal all sorts of crazy facts and secrets you never knew about the classic movies! So get ready because Cinematica is giving you 107 facts about one of the greatest time travel movies of all time: \"Back To The Future\"!\n\n-----------------------------------\nClick All The Links!\n-----------------------------------\n\nDownload the Channel Frederator app for chance to win awesome prizes!\nhttp://frdr.us/1hZ7Szo\n\nWHAT ALL THE 107s!\nhttps://www.youtube.com/watch?v=sz9ncrDlALQ&list=PLsvYuSgEtSsLiKq4f4oVTf7lb8PUTDKuy\n\nLike and Subscribe for more :D\nhttp://www.youtube.com/channel/UCTyHgU6ddX9eXLeSr6KUoSQ?sub_confirmation=1\n\nLearn more about the Channel Frederator Network here:\nhttp://frdr.us/1ybpOuJ\n\nCheck Out These 107s You May Have Missed!\n\nElf\nhttps://www.youtube.com/watch?v=f2V3az7gKGs&index=6&list=PLJuFxb2ft3ZZtU4ObOkmxha-2MVGVXDR0\n\nNightmare Before Christmas\nhttps://www.youtube.com/watch?v=BfXgn8wKz6g&index=9&list=PLJuFxb2ft3ZZtU4ObOkmxha-2MVGVXDR0\n\nMockingjay, Part 2\nhttps://www.youtube.com/watch?v=Z-QI0xq069s&index=4&list=PLJuFxb2ft3ZZtU4ObOkmxha-2MVGVXDR0\n\n-----------------------------------\nCredits\n-----------------------------------\n\nHosted & Edited by David Levin\nhttps://www.youtube.com/channel/UCFZd4bSVJCPG2iwXB4Ct15g\n\nCinematica is your new home for all things Movie & TV! From Doctor Who to Harry Potter, we'll be going through all your favorites and favorites you didn't know you even had! So grab your snacks and time to binge on Cinematica!"
     }
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/AhsM3jwFvAa4TWy9dwSZrSNZQGo\"",
    "id": "CWgcizAgxOs",
    "snippet": {
     "publishedAt": "2019-03-22T16:00:05.000Z",
     "channelId": "UCeGGpOehPGG7vQMUVc7tG8Q",
     "title": "What RUINED Hanna-Barbera?",
     "description": "Hanna-Barbera is a company that ruled televised animation for decades. There was a time when they controlled over 80% of the market but then it came crashing down. How did this happen? How did this studio fall so far from grace? \n\n\"What RUINED/What's RUINING...\" is a video series where Saber researches a topic, presents its history, and how it is or was presumably ruined: https://www.youtube.com/playlist?list=PLrtmY8lRImW_58wGRjcJFUDFwFmHhtu1n\n\nSaberspark is a YouTube channel who researches, reviews, and analyzes various movies and cartoon shows from the world of animation\n\n---Social Media Stuff---\n\nSupport the show on Patreon\nhttps://www.patreon.com/saberspark\n\nFollow me on Twitter\nhttps://twitter.com/Saberspark\n\n---Video Credits---\n\nResearch and Script Assistance by Jim Gisriel \nhttps://www.youtube.com/user/jimgisriel\n\nThumbnail by Cosmo\nhttps://www.youtube.com/user/okaymeis7\n\nAudio Edits by CookieSoup\nhttps://www.youtube.com/user/dBPonyMusic\n\nAvatar pics by Nathan Butler\nhttps://twitter.com/NathanButlerArt\n\nIntro and Outro Music by Hirosashii\nhttps://www.youtube.com/user/Hirosashii\n\nIntro Visuals by Acleps\nhttps://www.youtube.com/user/TheAcleps\n\nThumbnail and Outro Visual by Viktor Newman \nhttp://viktornewman.deviantart.com/\n\nMusic by Home\nhttps://soundcloud.com/home-2001\n\n---Art of the Week---\n\nFan Art by EmmieZimZam\nhttps://twitter.com/EmmieWowie\n\n---Sources---\n\nWhy was Hanna-Barbera dissolved?\nhttps://www.quora.com/Why-was-Hanna-Barbera-dissolved",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/CWgcizAgxOs/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/CWgcizAgxOs/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/CWgcizAgxOs/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/CWgcizAgxOs/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/CWgcizAgxOs/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Saberspark",
     "tags": [
      "saber",
      "saberspark",
      "hanna-barbera",
      "hanna barbera",
      "hanna-barbera studio",
      "what ruined hanna barbera",
      "what ruind hanna-barbera",
      "ruined",
      "ruining",
      "what's ruining",
      "flintstones",
      "jetsons",
      "scooby doo",
      "shaggy",
      "animation",
      "analysis",
      "video essay",
      "review",
      "sony",
      "illumination"
     ],
     "categoryId": "24",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "What RUINED Hanna-Barbera?",
      "description": "Hanna-Barbera is a company that ruled televised animation for decades. There was a time when they controlled over 80% of the market but then it came crashing down. How did this happen? How did this studio fall so far from grace? \n\n\"What RUINED/What's RUINING...\" is a video series where Saber researches a topic, presents its history, and how it is or was presumably ruined: https://www.youtube.com/playlist?list=PLrtmY8lRImW_58wGRjcJFUDFwFmHhtu1n\n\nSaberspark is a YouTube channel who researches, reviews, and analyzes various movies and cartoon shows from the world of animation\n\n---Social Media Stuff---\n\nSupport the show on Patreon\nhttps://www.patreon.com/saberspark\n\nFollow me on Twitter\nhttps://twitter.com/Saberspark\n\n---Video Credits---\n\nResearch and Script Assistance by Jim Gisriel \nhttps://www.youtube.com/user/jimgisriel\n\nThumbnail by Cosmo\nhttps://www.youtube.com/user/okaymeis7\n\nAudio Edits by CookieSoup\nhttps://www.youtube.com/user/dBPonyMusic\n\nAvatar pics by Nathan Butler\nhttps://twitter.com/NathanButlerArt\n\nIntro and Outro Music by Hirosashii\nhttps://www.youtube.com/user/Hirosashii\n\nIntro Visuals by Acleps\nhttps://www.youtube.com/user/TheAcleps\n\nThumbnail and Outro Visual by Viktor Newman \nhttp://viktornewman.deviantart.com/\n\nMusic by Home\nhttps://soundcloud.com/home-2001\n\n---Art of the Week---\n\nFan Art by EmmieZimZam\nhttps://twitter.com/EmmieWowie\n\n---Sources---\n\nWhy was Hanna-Barbera dissolved?\nhttps://www.quora.com/Why-was-Hanna-Barbera-dissolved"
     }
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/5SfQsEOL5Z1QhoJ3hQUHWixms6c\"",
    "id": "X3-hOigoxHs",
    "snippet": {
     "publishedAt": "2017-09-01T01:06:16.000Z",
     "channelId": "UCHiwtz2tCEfS17N9A-WoSSw",
     "title": "The Adorkable Misogyny of The Big Bang Theory",
     "description": "Watch part 2 here:\nhttps://www.youtube.com/watch?v=7L7NRONADJ4\n\nHelp me make more videos! \nhttps://www.patreon.com/popdetective\n\nThe Big Bang Theory provides a perfect lens through which to deconstruct a popular media trope I like to call the Adorkable Misogynist. Adorkable Misogynists are male characters whose geeky version of masculinity is framed as comically pathetic yet still endearing. Their status as nerdy “nice guys” then lets them off the hook for a wide range of creepy, entitled, and sexist behaviors.\n\nThis is the 1st of two video essays about gender on The Big Bang Theory. Next month I'll focus on how the show relentlessly mocks its four male leads for not acting like “real men,\" and in so doing reinforces a whole bunch of regressive ideas about masculinity.\n\n• Yes, The Big Bang Theory was the most watched scripted TV show in 2016 according to Nielsen: http://www.nielsen.com/us/en/insights/news/2016/tops-of-2016-tv.html\n\nPATREON\nThis video was made possible by support from viewers like you! If you’d like to see more videos focusing on the intersections of entertainment, politics and masculinity, please head over to my Patreon page and help fund this web series:\nhttps://www.patreon.com/popdetective\n\nPAYPAL\nIf you'd rather make a one-time donation you can do that via PayPal:\nhttps://www.paypal.me/popdetective\n\nFULL TEXT TRANSCRIPT\nhttp://popculturedetective.agency/2017/the-adorkable-misogyny-of-the-big-bang-theory\n\nCOMMENTS\nYouTube comments are held for approval due to harassment of this channel. If you would like to participate in constructive online conversations about this video, please share it on your social media networks, or join other supporters on Patreon, where backers-only discussion threads are provided for each new video. \nhttps://www.patreon.com/popdetective\n\nFAIR USE\nAll multimedia clips included in this video constitute a 'fair use' of any copyrighted material as provided for in Section 107 of U.S. Copyright law, which allows for criticism, comment and scholarship. Learn more about fair use with this awesome app by New Media Rights! http://newmediarights.org/fairuse\n\nCREDITS\nWriter/Producer: Jonathan McIntosh\nMotion Graphics: Jonathan McIntosh\nLogo Design: Justin McIntosh \nOutro music: Jonathan Mann\nhttps://www.patreon.com/jonathanmann\n\nHelp caption and translate this video!\nhttp://amara.org/v/9vWo/",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/X3-hOigoxHs/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/X3-hOigoxHs/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/X3-hOigoxHs/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/X3-hOigoxHs/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/X3-hOigoxHs/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Pop Culture Detective",
     "tags": [
      "The Big Bang Theory",
      "Leonard Hofstadter",
      "Sheldon Cooper",
      "Raj Koothrappali",
      "Howard Wolowitz",
      "sexism",
      "misogyny",
      "Adorkable Misogyny",
      "geeky sexism",
      "masculinity"
     ],
     "categoryId": "27",
     "liveBroadcastContent": "none",
     "defaultLanguage": "en",
     "localized": {
      "title": "The Adorkable Misogyny of The Big Bang Theory",
      "description": "Watch part 2 here:\nhttps://www.youtube.com/watch?v=7L7NRONADJ4\n\nHelp me make more videos! \nhttps://www.patreon.com/popdetective\n\nThe Big Bang Theory provides a perfect lens through which to deconstruct a popular media trope I like to call the Adorkable Misogynist. Adorkable Misogynists are male characters whose geeky version of masculinity is framed as comically pathetic yet still endearing. Their status as nerdy “nice guys” then lets them off the hook for a wide range of creepy, entitled, and sexist behaviors.\n\nThis is the 1st of two video essays about gender on The Big Bang Theory. Next month I'll focus on how the show relentlessly mocks its four male leads for not acting like “real men,\" and in so doing reinforces a whole bunch of regressive ideas about masculinity.\n\n• Yes, The Big Bang Theory was the most watched scripted TV show in 2016 according to Nielsen: http://www.nielsen.com/us/en/insights/news/2016/tops-of-2016-tv.html\n\nPATREON\nThis video was made possible by support from viewers like you! If you’d like to see more videos focusing on the intersections of entertainment, politics and masculinity, please head over to my Patreon page and help fund this web series:\nhttps://www.patreon.com/popdetective\n\nPAYPAL\nIf you'd rather make a one-time donation you can do that via PayPal:\nhttps://www.paypal.me/popdetective\n\nFULL TEXT TRANSCRIPT\nhttp://popculturedetective.agency/2017/the-adorkable-misogyny-of-the-big-bang-theory\n\nCOMMENTS\nYouTube comments are held for approval due to harassment of this channel. If you would like to participate in constructive online conversations about this video, please share it on your social media networks, or join other supporters on Patreon, where backers-only discussion threads are provided for each new video. \nhttps://www.patreon.com/popdetective\n\nFAIR USE\nAll multimedia clips included in this video constitute a 'fair use' of any copyrighted material as provided for in Section 107 of U.S. Copyright law, which allows for criticism, comment and scholarship. Learn more about fair use with this awesome app by New Media Rights! http://newmediarights.org/fairuse\n\nCREDITS\nWriter/Producer: Jonathan McIntosh\nMotion Graphics: Jonathan McIntosh\nLogo Design: Justin McIntosh \nOutro music: Jonathan Mann\nhttps://www.patreon.com/jonathanmann\n\nHelp caption and translate this video!\nhttp://amara.org/v/9vWo/"
     },
     "defaultAudioLanguage": "en"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/ERIIAWBKu124B8u3aSaVfA88MpE\"",
    "id": "xHVCTOmQNZM",
    "snippet": {
     "publishedAt": "2019-03-16T14:00:13.000Z",
     "channelId": "UCtGoikgbxP4F3rgI9PldI9g",
     "title": "The Undertaker: Long Term Story Telling in Wrestling",
     "description": "Here's the story of how an undead wrestling wizard made me cry\n\nPatreon: https://www.patreon.com/Supereyepatchwolf\n\nMy previous video on the Wrestling:\nhttps://www.youtube.com/watch?v=BQCPj-bGYro\n\nShowbuckle on Twitter: https://twitter.com/ShowbuckleVids\n\nLet’s Fight a Boss Podcast:\n\nItunes: https://itunes.apple.com/ie/podcast/lets-fight-a-boss/id1048483221?mt=2\nSound Cloud: https://soundcloud.com/letsfightaboss\nYoutube: https://www.youtube.com/channel/UCawXJIKUj2o_tFPMZ4xiXBw\n\nInstagram: https://www.instagram.com/super_eyepatch_wolf/\nTwitter: https://twitter.com/EyePatchWolf\nTwitch: https://www.twitch.tv/supereyepatchwolf\n\nSources:\nBeyond the Matt (Documentary) 1999\nHitman: My Real Life in the Cartoon World of Wrestling - Bret Hart\nSomething to Wrestle With bruce Prichard (Podcast) Episodes: 14, 39, 70, 86, 92, 98, 143 \nhttps://www.youtube.com/watch?v=O0DpjxeSaC0\n\n\nSong List:\nhttps://imgur.com/a/F8EtoQL",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/xHVCTOmQNZM/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/xHVCTOmQNZM/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/xHVCTOmQNZM/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/xHVCTOmQNZM/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/xHVCTOmQNZM/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Super Eyepatch Wolf",
     "tags": [
      "The Undertaker",
      "Undertaker",
      "wrestling",
      "Professional wrestling",
      "HHH",
      "Tetsuya Naito",
      "Why Professional Wrestling is Fascinating"
     ],
     "categoryId": "1",
     "liveBroadcastContent": "none",
     "defaultLanguage": "en-GB",
     "localized": {
      "title": "The Undertaker: Long Term Story Telling in Wrestling",
      "description": "Here's the story of how an undead wrestling wizard made me cry\n\nPatreon: https://www.patreon.com/Supereyepatchwolf\n\nMy previous video on the Wrestling:\nhttps://www.youtube.com/watch?v=BQCPj-bGYro\n\nShowbuckle on Twitter: https://twitter.com/ShowbuckleVids\n\nLet’s Fight a Boss Podcast:\n\nItunes: https://itunes.apple.com/ie/podcast/lets-fight-a-boss/id1048483221?mt=2\nSound Cloud: https://soundcloud.com/letsfightaboss\nYoutube: https://www.youtube.com/channel/UCawXJIKUj2o_tFPMZ4xiXBw\n\nInstagram: https://www.instagram.com/super_eyepatch_wolf/\nTwitter: https://twitter.com/EyePatchWolf\nTwitch: https://www.twitch.tv/supereyepatchwolf\n\nSources:\nBeyond the Matt (Documentary) 1999\nHitman: My Real Life in the Cartoon World of Wrestling - Bret Hart\nSomething to Wrestle With bruce Prichard (Podcast) Episodes: 14, 39, 70, 86, 92, 98, 143 \nhttps://www.youtube.com/watch?v=O0DpjxeSaC0\n\n\nSong List:\nhttps://imgur.com/a/F8EtoQL"
     },
     "defaultAudioLanguage": "en-GB"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/3u3-gmwiFHTqe_AL0tzRLKOjklg\"",
    "id": "TmYcoozFYnU",
    "snippet": {
     "publishedAt": "2017-10-14T13:00:04.000Z",
     "channelId": "UCtGoikgbxP4F3rgI9PldI9g",
     "title": "Why The Shining is Terrifying",
     "description": "Patreon:\nhttps://www.patreon.com/Supereyepatchwolf\n\nJcon:\nhttp://jconireland.com/\n\nSources:\nMaking of The Shining (Dvd Extra Feature)\nView from the Overlook- Crating the Shining (Bluray special feature)\nThe visions of Stanely Kubric (Bluray Specail Feature)\nThe Stanely Kubric Biography\nThe Stepehen King Compaion\nDanse Macarbe- Stephen King\nShelly Duvalle interview: https://www.youtube.com/watch?v=hFPmTV_UqKA\n\nLets Fight a Boss Podcast:\n\nItunes: https://itunes.apple.com/ie/podcast/lets-fight-a-boss/id1048483221?mt=2\nSound Cloud: https://soundcloud.com/letsfightaboss\nYoutube: https://www.youtube.com/channel/UCawXJIKUj2o_tFPMZ4xiXBw\n\nTwitter: https://twitter.com/EyePatchWolf\nInstagram: https://www.instagram.com/super_eyepatch_wolf/\n\nSong List:\n\nTo Keep from Falling Off - Jonathan Snipes & William Hutson\nDakarius - Night of the Sociopath\nIdealism - Lonely\nbeats for you and me ♥ - tender",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/TmYcoozFYnU/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/TmYcoozFYnU/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/TmYcoozFYnU/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/TmYcoozFYnU/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/TmYcoozFYnU/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Super Eyepatch Wolf",
     "tags": [
      "The Shining",
      "Horror Movies",
      "Stanely Kubric",
      "Conspiracy Theroies",
      "Steven King",
      "Heres Johnny",
      "Scary movie",
      "Room 237",
      "Conspiracy theroy",
      "twins",
      "heres johnny",
      "all work and no play makes jack a dull boy"
     ],
     "categoryId": "22",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "Why The Shining is Terrifying",
      "description": "Patreon:\nhttps://www.patreon.com/Supereyepatchwolf\n\nJcon:\nhttp://jconireland.com/\n\nSources:\nMaking of The Shining (Dvd Extra Feature)\nView from the Overlook- Crating the Shining (Bluray special feature)\nThe visions of Stanely Kubric (Bluray Specail Feature)\nThe Stanely Kubric Biography\nThe Stepehen King Compaion\nDanse Macarbe- Stephen King\nShelly Duvalle interview: https://www.youtube.com/watch?v=hFPmTV_UqKA\n\nLets Fight a Boss Podcast:\n\nItunes: https://itunes.apple.com/ie/podcast/lets-fight-a-boss/id1048483221?mt=2\nSound Cloud: https://soundcloud.com/letsfightaboss\nYoutube: https://www.youtube.com/channel/UCawXJIKUj2o_tFPMZ4xiXBw\n\nTwitter: https://twitter.com/EyePatchWolf\nInstagram: https://www.instagram.com/super_eyepatch_wolf/\n\nSong List:\n\nTo Keep from Falling Off - Jonathan Snipes & William Hutson\nDakarius - Night of the Sociopath\nIdealism - Lonely\nbeats for you and me ♥ - tender"
     },
     "defaultAudioLanguage": "en-GB"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/DyRE5MvXMug1uEMNnnXXOoDiN1o\"",
    "id": "BQCPj-bGYro",
    "snippet": {
     "publishedAt": "2018-04-01T13:34:45.000Z",
     "channelId": "UCtGoikgbxP4F3rgI9PldI9g",
     "title": "Why Professional Wrestling is Fascinating",
     "description": "I have resisted making a video about Wrestling for a long time. I am sorry. \n\nPatreon: https://www.patreon.com/Supereyepatchwolf\n\nLets Fight a Boss Podcast:\n\nItunes: https://itunes.apple.com/ie/podcast/lets-fight-a-boss/id1048483221?mt=2\nSound Cloud: https://soundcloud.com/letsfightaboss\nYoutube: https://www.youtube.com/channel/UCawXJIKUj2o_tFPMZ4xiXBw\n\nTwitter: https://twitter.com/EyePatchWolf\nInstagram: https://www.instagram.com/super_eyepatch_wolf/\n\nFootage from\n\nRakugo Footage:\nhttps://www.youtube.com/watch?v=ybUa1JoGTUQ\nhttps://www.youtube.com/watch?v=VuNtJGCzoGI\nhttps://www.youtube.com/watch?v=IkvKIedDUu0\nhttps://www.youtube.com/watch?v=KDswpTwmZ44\n\nSources:\n\nEffingBorrings Twitter:\nhttp://bleacherreport.com/articles/433611-the-history-of-pro-wrestling-in-the-us-part-1\nBlog:https://medium.com/we-need-to-talk-about-wrestling/that-one-tweet-thread-about-the-golden-lovers-annotated-e9fc604e3a7f\n\nShow Buckle:\nhttps://www.youtube.com/watch?v=Vx_pZWrHCng\nhttps://www.youtube.com/watch?v=Y82ElzYuMaY\n\nHistory of Pro Wrestling:\nhttp://bleacherreport.com/articles/433611-the-history-of-pro-wrestling-in-the-us-part-1\n\nThe Cutrain Call:\nhttp://bleacherreport.com/articles/986789-wwe-a-look-back-at-the-infamous-curtain-call-the-msg-incident\n\n\nSong List:\n\nA Woman - Persona 5 OST\nSarah - Le Matos\nIn the Face of Evil - Magic Sword\nFraunhofer Diffaction - Star trails\nSalvation - Lisa the Painful OST\nFetus - Tekken 4 OST\nWalking Across Jupitor - The Truth was Revealed\nCatalyst Mirrors Edge 2 ost",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/BQCPj-bGYro/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/BQCPj-bGYro/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/BQCPj-bGYro/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/BQCPj-bGYro/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/BQCPj-bGYro/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Super Eyepatch Wolf",
     "tags": [
      "wrestling",
      "New Japan Pro Wrestling",
      "NJPW",
      "The Golden Lovers",
      "The Curtain Call WWE",
      "CM Punk Pipe Bomb",
      "wwe",
      "wrestlemania"
     ],
     "categoryId": "22",
     "liveBroadcastContent": "none",
     "defaultLanguage": "en-GB",
     "localized": {
      "title": "Why Professional Wrestling is Fascinating",
      "description": "I have resisted making a video about Wrestling for a long time. I am sorry. \n\nPatreon: https://www.patreon.com/Supereyepatchwolf\n\nLets Fight a Boss Podcast:\n\nItunes: https://itunes.apple.com/ie/podcast/lets-fight-a-boss/id1048483221?mt=2\nSound Cloud: https://soundcloud.com/letsfightaboss\nYoutube: https://www.youtube.com/channel/UCawXJIKUj2o_tFPMZ4xiXBw\n\nTwitter: https://twitter.com/EyePatchWolf\nInstagram: https://www.instagram.com/super_eyepatch_wolf/\n\nFootage from\n\nRakugo Footage:\nhttps://www.youtube.com/watch?v=ybUa1JoGTUQ\nhttps://www.youtube.com/watch?v=VuNtJGCzoGI\nhttps://www.youtube.com/watch?v=IkvKIedDUu0\nhttps://www.youtube.com/watch?v=KDswpTwmZ44\n\nSources:\n\nEffingBorrings Twitter:\nhttp://bleacherreport.com/articles/433611-the-history-of-pro-wrestling-in-the-us-part-1\nBlog:https://medium.com/we-need-to-talk-about-wrestling/that-one-tweet-thread-about-the-golden-lovers-annotated-e9fc604e3a7f\n\nShow Buckle:\nhttps://www.youtube.com/watch?v=Vx_pZWrHCng\nhttps://www.youtube.com/watch?v=Y82ElzYuMaY\n\nHistory of Pro Wrestling:\nhttp://bleacherreport.com/articles/433611-the-history-of-pro-wrestling-in-the-us-part-1\n\nThe Cutrain Call:\nhttp://bleacherreport.com/articles/986789-wwe-a-look-back-at-the-infamous-curtain-call-the-msg-incident\n\n\nSong List:\n\nA Woman - Persona 5 OST\nSarah - Le Matos\nIn the Face of Evil - Magic Sword\nFraunhofer Diffaction - Star trails\nSalvation - Lisa the Painful OST\nFetus - Tekken 4 OST\nWalking Across Jupitor - The Truth was Revealed\nCatalyst Mirrors Edge 2 ost"
     },
     "defaultAudioLanguage": "en-GB"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/CbTz-cDXiFjyIuUh1uq2UKw-I9U\"",
    "id": "w7Ax3HQaPvM",
    "snippet": {
     "publishedAt": "2017-06-20T22:12:20.000Z",
     "channelId": "UCTnE9s4lmqim_I_ONG8H74Q",
     "title": "50 Facts You Didn't Know About Pulp Fiction",
     "description": "So excited to finally bring you guys 50 Facts You Didn't Know About Pulp Fiction!  Its easily one of the best movies ever made, and I think, one of the best videos I have ever made.  But I'll leave that one up to you, enjoy!\n\nSponsor\nDollarshaveclub.com/thewhy\n\nDon't forget to give us a like and subscribe :)",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/w7Ax3HQaPvM/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/w7Ax3HQaPvM/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/w7Ax3HQaPvM/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/w7Ax3HQaPvM/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/w7Ax3HQaPvM/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "The Why",
     "tags": [
      "pulp fiction",
      "pulp fiction facts",
      "things you didn't know about pulp fiction",
      "quentin tarantino",
      "bruce willis",
      "john travolta",
      "samuel l jackson",
      "uma thurman"
     ],
     "categoryId": "1",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "50 Facts You Didn't Know About Pulp Fiction",
      "description": "So excited to finally bring you guys 50 Facts You Didn't Know About Pulp Fiction!  Its easily one of the best movies ever made, and I think, one of the best videos I have ever made.  But I'll leave that one up to you, enjoy!\n\nSponsor\nDollarshaveclub.com/thewhy\n\nDon't forget to give us a like and subscribe :)"
     }
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/nNbof2dbYtx41rDKMJtRH0faBD8\"",
    "id": "y-eac-M1KpI",
    "snippet": {
     "publishedAt": "2018-10-23T16:00:08.000Z",
     "channelId": "UC1jyFTfku6mjXIXL_HwRtlA",
     "title": "How To Solve Who Shot Mr Burns - Eddache",
     "description": "Please support me on Patreon: https://www.patreon.com/eddache\nDid you know Who Shot Mr Burns can be solved with just the first episode alone? Let's see how they did it!\n\nSo yeah, I'm trying something brand new here, different to much of my previous videos. It's part video essay and part animated storytime, I guess? \n\nSubscribe: http://www.youtube.com/eddache\nTwitter: https://twitter.com/Eddache_\nWebsite: http://www.eddache.com\nStore: http://www.redbubble.com/people/eddache/shop\n\nJosh Weinstein tweet: https://twitter.com/Joshstrangehill/status/972915337132851200\n\nMusic used:\nBart Vs The World\nThe Simpsons Road Rage\nAlf Clausen - The Land Of Chocolate\nThe Springfield Files Theme",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/y-eac-M1KpI/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/y-eac-M1KpI/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/y-eac-M1KpI/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/y-eac-M1KpI/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/y-eac-M1KpI/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "Eddache",
     "tags": [
      "the simpsons",
      "simpsons",
      "who shot mr burns",
      "mr burns",
      "murder mystery",
      "cartoon",
      "review",
      "analysis",
      "video essay"
     ],
     "categoryId": "23",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "How To Solve Who Shot Mr Burns - Eddache",
      "description": "Please support me on Patreon: https://www.patreon.com/eddache\nDid you know Who Shot Mr Burns can be solved with just the first episode alone? Let's see how they did it!\n\nSo yeah, I'm trying something brand new here, different to much of my previous videos. It's part video essay and part animated storytime, I guess? \n\nSubscribe: http://www.youtube.com/eddache\nTwitter: https://twitter.com/Eddache_\nWebsite: http://www.eddache.com\nStore: http://www.redbubble.com/people/eddache/shop\n\nJosh Weinstein tweet: https://twitter.com/Joshstrangehill/status/972915337132851200\n\nMusic used:\nBart Vs The World\nThe Simpsons Road Rage\nAlf Clausen - The Land Of Chocolate\nThe Springfield Files Theme"
     },
     "defaultAudioLanguage": "en-GB"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/Skt__iW8yb4ZQgbNKX3ucMLq8LY\"",
    "id": "f6WbXmyHFVU",
    "snippet": {
     "publishedAt": "2015-08-09T19:00:00.000Z",
     "channelId": "UCaWd5_7JhbQBe4dknZhsHJg",
     "title": "Another Top 10 Controversial Cartoon Episodes",
     "description": "There just isn’t one list large enough to encompass all of the shockingly offensive moments in the world of animation. That’s why we’re giving you another one. Join http:// www.WatchMojo.com as we count down our picks for Another Top 10 Controversial Cartoon Episodes. Click here to subscribe: http://www.youtube.com/subscription_center?add_user=watchmojo or visit our channel page here: http://www.youtube.com/watchmojo Also, check out our interactive Suggestion Tool at http://www.WatchMojo.com/suggest :)\n\nCheck us out at http://www.Twitter.com/WatchMojo, http://instagram.com/watchmojo and http://www.Facebook.com/WatchMojo. \n\nSpecial thanks to our users Jack Walrath, Mitch Deans, Alex Canas and Cavery210 for submitting the idea on our Suggestions Tool at http://www.WatchMojo.com/suggest\n\nCheck out the voting page here, \nhttp://watchmojo.com/suggest/Top%2010%20Most%20Controversial%20Cartoon%20episodes%20of%20all%20time\n\nIf you want to suggest an idea for a WatchMojo video, check out our interactive Suggestion Tool at http://www.WatchMojo.com/suggest :)\n\nWant a WatchMojo cup, mug, t-shirts, pen, sticker and even a water bottle?  Get them all when you order your MojoBox gift set here:\nhttp://watchmojo.com/store/\n\nWatchMojo is a leading producer of reference online video content, covering the People, Places and Trends you care about.\nWe update DAILY with 4-5 Top 10 lists, Origins, Biographies, Versus clips on movies, video games, music, pop culture and more!",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/f6WbXmyHFVU/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/f6WbXmyHFVU/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/f6WbXmyHFVU/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/f6WbXmyHFVU/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/f6WbXmyHFVU/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "WatchMojo.com",
     "tags": [
      "Cartoon (TV Genre)",
      "Animated Cartoon (TV Genre)",
      "TV",
      "controversial cartoon episodes",
      "banned cartoon episodes",
      "Spongebob Squarepants",
      "Dexter’s Laboratory",
      "Barbequor",
      "Buffalo Gals",
      "Cow and Chicken",
      "TaleSpin",
      "The Simpsons",
      "Song of the South",
      "Rude Removal",
      "The Boondocks",
      "Merrie Melodies"
     ],
     "categoryId": "1",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "Another Top 10 Controversial Cartoon Episodes",
      "description": "There just isn’t one list large enough to encompass all of the shockingly offensive moments in the world of animation. That’s why we’re giving you another one. Join http:// www.WatchMojo.com as we count down our picks for Another Top 10 Controversial Cartoon Episodes. Click here to subscribe: http://www.youtube.com/subscription_center?add_user=watchmojo or visit our channel page here: http://www.youtube.com/watchmojo Also, check out our interactive Suggestion Tool at http://www.WatchMojo.com/suggest :)\n\nCheck us out at http://www.Twitter.com/WatchMojo, http://instagram.com/watchmojo and http://www.Facebook.com/WatchMojo. \n\nSpecial thanks to our users Jack Walrath, Mitch Deans, Alex Canas and Cavery210 for submitting the idea on our Suggestions Tool at http://www.WatchMojo.com/suggest\n\nCheck out the voting page here, \nhttp://watchmojo.com/suggest/Top%2010%20Most%20Controversial%20Cartoon%20episodes%20of%20all%20time\n\nIf you want to suggest an idea for a WatchMojo video, check out our interactive Suggestion Tool at http://www.WatchMojo.com/suggest :)\n\nWant a WatchMojo cup, mug, t-shirts, pen, sticker and even a water bottle?  Get them all when you order your MojoBox gift set here:\nhttp://watchmojo.com/store/\n\nWatchMojo is a leading producer of reference online video content, covering the People, Places and Trends you care about.\nWe update DAILY with 4-5 Top 10 lists, Origins, Biographies, Versus clips on movies, video games, music, pop culture and more!"
     },
     "defaultAudioLanguage": "en-CA"
    }
   },
   {
    "kind": "youtube#video",
    "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/FL39AeDjiXJYvHIoYAn1JvyVKWs\"",
    "id": "KAIz7k5If24",
    "snippet": {
     "publishedAt": "2018-07-16T11:38:14.000Z",
     "channelId": "UChz2g0uWjiqI_GROs-HUjxg",
     "title": "Is Pixar Dead? - NitPix",
     "description": "Get 10% off your first purchase at Squarespace.com by going to:\nhttp://squarespace.com/nitpix\n\nPixar is one of the greatest film studios of all time, but that mojo that was so present in the early days is now fading. This makes us ask the following questions; Did we need a sequel to Monsters Inc, Toy Story, Finding Nemo and Incredibles? Is Inside Out and Coco a cinematic masterpiece? Is Pixar dead?\n\n#Pixar #Incredibles2\n\nMerch:\nhttps://www.nitpix.co.uk\n\nPatreon:\nhttps://www.patreon.com/NitPix\n\nSecond Channel:\nhttps://www.youtube.com/channel/UCPSEq7RFYm5Usypxm2BbBZA\n\nDiscord:\nhttps://discord.gg/UXRMMjx\n\nTwitter:\nhttps://twitter.com/NitPix\n\nTwitch:\nhttps://www.twitch.tv/nitpix\n\nComplete Playlist of all NitPix music:\nhttps://t.co/IC9jDZTOju\n\nFull Track List:\nhttp://www.twitlonger.com/show/n_1sqjjk7",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/KAIz7k5If24/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/KAIz7k5If24/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/KAIz7k5If24/hqdefault.jpg",
       "width": 480,
       "height": 360
      },
      "standard": {
       "url": "https://i.ytimg.com/vi/KAIz7k5If24/sddefault.jpg",
       "width": 640,
       "height": 480
      },
      "maxres": {
       "url": "https://i.ytimg.com/vi/KAIz7k5If24/maxresdefault.jpg",
       "width": 1280,
       "height": 720
      }
     },
     "channelTitle": "NitPix",
     "tags": [
      "Nit Pix",
      "NitPix",
      "Nit",
      "Pix",
      "NitPicks",
      "Is Pixar Dead",
      "Pixar",
      "Dead",
      "Bad",
      "Sequels",
      "Awful",
      "Review",
      "Video Essay",
      "The Incredibles",
      "The Incredibles 2",
      "Brad Bird",
      "Video Rant",
      "Rant",
      "Angry",
      "The Worst",
      "Nemo",
      "Monsters Inc",
      "Dory",
      "Finding",
      "Monsters University",
      "Disney",
      "Animation",
      "CGI",
      "Toy Story",
      "Wall-e",
      "Coco",
      "Inside Out",
      "Brave",
      "The Good Dinosaur",
      "Cars",
      "Up",
      "Andrew Stanton",
      "Pete Docter",
      "ratatouille",
      "John Lasseter",
      "Film",
      "kids",
      "Movies",
      "History Of",
      "History"
     ],
     "categoryId": "1",
     "liveBroadcastContent": "none",
     "localized": {
      "title": "Is Pixar Dead? - NitPix",
      "description": "Get 10% off your first purchase at Squarespace.com by going to:\nhttp://squarespace.com/nitpix\n\nPixar is one of the greatest film studios of all time, but that mojo that was so present in the early days is now fading. This makes us ask the following questions; Did we need a sequel to Monsters Inc, Toy Story, Finding Nemo and Incredibles? Is Inside Out and Coco a cinematic masterpiece? Is Pixar dead?\n\n#Pixar #Incredibles2\n\nMerch:\nhttps://www.nitpix.co.uk\n\nPatreon:\nhttps://www.patreon.com/NitPix\n\nSecond Channel:\nhttps://www.youtube.com/channel/UCPSEq7RFYm5Usypxm2BbBZA\n\nDiscord:\nhttps://discord.gg/UXRMMjx\n\nTwitter:\nhttps://twitter.com/NitPix\n\nTwitch:\nhttps://www.twitch.tv/nitpix\n\nComplete Playlist of all NitPix music:\nhttps://t.co/IC9jDZTOju\n\nFull Track List:\nhttp://www.twitlonger.com/show/n_1sqjjk7"
     },
     "defaultAudioLanguage": "en-GB"
    }
   }
  ]
 }
