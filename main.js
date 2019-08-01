

//hackathon (newcourt)
//idea: yt extension --> have videos on watch next/recommended to 'hover' dates or print in box;
//approach: 
//(1) 'scrape' web page (of video we're on) for recommended IDs;
//it's located in class'ytd-watch-next-secondary-results-render'
//ytd-compact-radio-renderer (tag)
//ytd-compact-video-renderer (tag)

const targetNode = document.getElementById('related');
const sidebarVideos = [];
const API_KEY = `AIzaSyDg6lpc7p_KCGp3rax0MyzYb3ieEV2vj6Y` //created thru google credentials to access the api;
//let myFetchReq =  `https://www.googleapis.com/youtube/v3/videos?part=snippet&id={VIDEOIDHERE}={YOUR_API_KEY}`
                        //api key + this link = for the api;
let nodeList;
let ourDate;
const config = {attributes: true, childlist: true, subtree: true};
let makeIDListCalled = 0;
let IDList = [];
//json = obj > 'items' = [] > {"id", "publishedAt"}

function renderDates(jsoninfo, vidnodelist){
// info is a (fake) JSON response with data on all our recommended ids
	for (let item of jsoninfo.items) {
			let id = item.id;
			console.log(`ITEM: ${item}`)
			let date = item.snippet.publishedAt;
			let dateObj = new Date (date)
			date = dateObj.toDateString().slice(4);

			//if videos[id] === vidnodelist items, append videos[publishedat] inside its div;
			//look to nodelist that matches id, paste its date in it;
			for (let vid of vidnodelist) {
				let link = vid.getAttribute('href').split("v=")[1]
				console.log('item id:', item.id)
				console.log('link:' + link)
				if (item.id === link) {
					//put date here 
					console.log('match', vid)
					vid.appendChild(document.createTextNode(date));
					vid.style.fontSize = "12px";
					vid.style.color = "red";
				}
		}
	}
}
//// obj.appendChild(ourDate);
						// obj.style.fontSize = "12px";
						// obj.style.color = "red";

getDates = function(json, list){
	// ?lsdjglsjgflf
	renderDates(json, list);
}

function makeIDList(arr) {
	makeIDListCalled++;
	if (makeIDListCalled<=1){
		for (let obj of arr) {
                        let sliced = obj.search.slice(3);
			IDList.push(sliced);
                        //PSEUDO/HARDCODE: should pass in the fetched obj's values into ourData
						// ourDate = document.createTextNode('July 19, 2019'); 

						// fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=jcuAlQY-QNY=AIzaSyDg6lpc7p_KCGp3rax0MyzYb3ieEV2vj6Y')
						// 	.then(resp => resp.text())
						// 	.then(retrieved => console.log(retrieved))
                        //this appends it to the space under (approrpiately) (doesn't work when i try to do a sample fetch req)
						
		} 		
				getDates(myJSONAPI, arr);
                console.log(IDList);
        }
}


const callback = function(mutationList, observer) {
	for (let mutation of mutationList) {    
		if (mutation.type === 'attributes' && mutation.target.className === 'video-skeleton hidden') {
			nodeList = document.querySelectorAll('.yt-simple-endpoint.style-scope.ytd-compact-video-renderer'); //this works, but executes faster than the page loads and will return 0 nodes;
                        if (nodeList.length>14){
                                //executes the creation of arrays(of videoIDs)
                                return makeIDList(nodeList);

                }         
        }
}
}

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

//(2) YT API --> input IDs into search and populate data
        //should search for date created and return those dates in order to us
//courtney: tried to do a fetch req to yt api with key + link, seem to be unable to pull information... 'unresolved promise due to CORB error' => tried to resolve thru setting permissions in manifest?

//MUST WORK ON THIS DURING LUNCH & DINNER;

//resolved promise should return an {videoID : snippet.publishedAt}

//(3) Append the API's results (dates) to the Original page's recommended videos (in order)
//using returned promise obj from (2), we should promise.all() so we can iterate thru -- the order is preserved when .all'ed
//we can now iterate thru arr and place it accordingly;

//const resolvedPromise.all() => [resolved,elements,from.promise]
//for (let promise in resolvedPromise){}
//json = obj > 'items' = [] > {"id", "publishedAt"}
const myJSONAPI = {
	"kind": "youtube#videoListResponse",
	"etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/KwwG5a05WUJhlEkASpjJXofreaE\"",
	"pageInfo": {
	 "totalResults": 19,
	 "resultsPerPage": 19
	},
	"items": [ 
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/8VqSwxTNt2phYfnqOBCum6p274Y\"",
	  "id": "TrrQAea0RCk",
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
	  "id": "Fr-qagv7ig0",
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
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/P12lT1hOPOBGa9HDXeHpIPmXNoU\"",
	  "id": "WUjVPIEtJd0&t=399s",
	  "snippet": {
	   "publishedAt": "2019-06-24T12:41:41.000Z",
	   "channelId": "UCSJ4gkVC6NrvII8umztf0Ow",
	   "title": "lofi hip hop radio - beats to sleep/chill to",
	   "description": "Welcome to the sleepy lofi hip hop radio. This playlist contains the smoothest lofi hip hop beats, perfect to help you chill or fall asleep 😴\n\n🎼 Listen to the study girl's Spotify playlist \n→ http://bit.ly/chilledcowspotify\n\n👕 New merch available!\n→ http://bit.ly/chilledcowmerch\n\n🎧 My secondary channel\n→ http://bit.ly/Lopheemusic\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowsoundcloud\n\n📌Update \n- 22/07/2019 New beats added\n\n🎶 Full playlist/support beatmakers\n→ Available soon\n\n🎨 Illustration by Basile Gouttenoire\n→ https://www.artstation.com/bazart\n\n🎨Animation by Nathalie Baraton\n→ https://www.instagram.com/nathalie.baraton/\n\n📝 Submissions\n→  Artwork : artwork@thechilledcow.com\n→  Music : https://soundcloud.com/chilledcow",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/EcEMX-63PKY/default_live.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/EcEMX-63PKY/mqdefault_live.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/EcEMX-63PKY/hqdefault_live.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/EcEMX-63PKY/sddefault_live.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/EcEMX-63PKY/maxresdefault_live.jpg",
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
		"lo fi hip hop",
		"lofi radio",
		"lo-fi radio",
		"lo fi radio",
		"lofi hip hop radio",
		"lo fi hip hop radio",
		"chilledcow",
		"chilled cow",
		"chilledcow radio",
		"sleepy radio",
		"sleep radio",
		"lofi radio chilledcow",
		"chillhop",
		"study music",
		"beats to sleep",
		"sleep",
		"music to sleep",
		"radio",
		"sleepy music",
		"sleep music"
	   ],
	   "categoryId": "10",
	   "liveBroadcastContent": "live",
	   "localized": {
		"title": "lofi hip hop radio - beats to sleep/chill to",
		"description": "Welcome to the sleepy lofi hip hop radio. This playlist contains the smoothest lofi hip hop beats, perfect to help you chill or fall asleep 😴\n\n🎼 Listen to the study girl's Spotify playlist \n→ http://bit.ly/chilledcowspotify\n\n👕 New merch available!\n→ http://bit.ly/chilledcowmerch\n\n🎧 My secondary channel\n→ http://bit.ly/Lopheemusic\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowsoundcloud\n\n📌Update \n- 22/07/2019 New beats added\n\n🎶 Full playlist/support beatmakers\n→ Available soon\n\n🎨 Illustration by Basile Gouttenoire\n→ https://www.artstation.com/bazart\n\n🎨Animation by Nathalie Baraton\n→ https://www.instagram.com/nathalie.baraton/\n\n📝 Submissions\n→  Artwork : artwork@thechilledcow.com\n→  Music : https://soundcloud.com/chilledcow"
	   }
	  }
	 },
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/oaYi20D0BtL43Kpr4zn-ZyPsPWs\"",
	  "id": "E991yX1WiEI",
	  "snippet": {
	   "publishedAt": "2019-01-05T10:49:50.000Z",
	   "channelId": "UCzV70CnYw_6HjBE78XPTSGQ",
	   "title": "Jazz Music 카페에서 듣기 좋은 재즈 모음  카페음악 모음",
	   "description": "어느새 봄이 왔군요!\n카페에서 듣기좋은 재즈 모음입니다!\n\n*여기의 모든 음악은 저작권 등록이 되어있어 감상 외 사용은 불가능하며, 발생된 수익은 저작권자에게 돌아가고 있습니다\n*곡제목은 음원수가 많아 정리가 어려워 알려드리지 못한점 양해부탁드립니다.\n\n\n#카페에서듣기좋은노래 #재즈 #카페음악\n#듣기좋은재즈 #봄노래 #재즈음악\n#재즈모음 #힐링음악",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/giouzUH5rOc/default.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/giouzUH5rOc/mqdefault.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/giouzUH5rOc/hqdefault.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/giouzUH5rOc/sddefault.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/giouzUH5rOc/maxresdefault.jpg",
		 "width": 1280,
		 "height": 720
		}
	   },
	   "channelTitle": "Play the Music",
	   "tags": [
		"듣기좋은 재즈음악",
		"카페에서 듣기좋은 음악",
		"재즈음악",
		"Sweet Jazz",
		"Jazz cafe",
		"jazz for cafe",
		"카페음악",
		"Cafe music",
		"카페음악 모음",
		"재즈",
		"듣기좋은 재즈",
		"재즈 음악 모음",
		"재즈 추천",
		"Jazz music",
		"smooth jazz"
	   ],
	   "categoryId": "10",
	   "liveBroadcastContent": "none",
	   "defaultLanguage": "ko",
	   "localized": {
		"title": "Jazz Music 카페에서 듣기 좋은 재즈 모음  카페음악 모음",
		"description": "어느새 봄이 왔군요!\n카페에서 듣기좋은 재즈 모음입니다!\n\n*여기의 모든 음악은 저작권 등록이 되어있어 감상 외 사용은 불가능하며, 발생된 수익은 저작권자에게 돌아가고 있습니다\n*곡제목은 음원수가 많아 정리가 어려워 알려드리지 못한점 양해부탁드립니다.\n\n\n#카페에서듣기좋은노래 #재즈 #카페음악\n#듣기좋은재즈 #봄노래 #재즈음악\n#재즈모음 #힐링음악"
	   },
	   "defaultAudioLanguage": "ko"
	  }
	 },
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/BRU9wMvzIAqwmtfCe5g478PzkpY\"",
	  "id": "bXEOkjr48S4",
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
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/XS9aBZnlgghasDgjo6Y81br3cjA\"",
	  "id": "KWM76KMQ-7Q",
	  "snippet": {
	   "publishedAt": "2018-03-19T16:27:06.000Z",
	   "channelId": "UCSJ4gkVC6NrvII8umztf0Ow",
	   "title": "Lofi hip hop mix - Beats to Relax/Study to [2018]",
	   "description": "👕 New merch collection → https://chilledcow-merch.com\n🎼ChilledCow's Spotify playlist  → http://bit.ly/spotifychilledcow\n\nFull tracklist\n\n[00:00:00] idealism - last time\n[00:02:50] Philanthrope X Kupla - Cycles\n[00:05:25] bloopr - mondayloop [no friends, no worries]\n[00:06:50] leavv - within \n[00:09:30] leavv & misc.inc - Pictures (unreleased)\n[00:11:35] fortnight - 2000\n[00:13:03] Soho - At Peace\n[00:14:58] blnkspc_  - Sticky\n[00:18:30] j'san - in time (unreleased)\n[00:20:43] Dweeb -'72 Audi Coupe\n[00:21:45] sumwun - men cry\n[00:23:37] ṰṏỞ↑ἧᾯrṰḩ - over it\n[00:25:33] saiko - untitled (unreleased)\n[00:26:48] Saito & Lester, Nowhere - Glare (w/ otesla)\n[00:29:00] Philanthrope - Leavin'\n[00:31:08] hm SURF - Flunked This Semester \n[00:32:44] leavv - park walk\n[00:34:12] Kaizen 92´- lost n´ found\n[00:36:20] fortnight - 5AM\n[00:37:55] fortnight - the keys\n[00:39:41] Aeson - a l l u r e\n[00:42:15] Yaken & Nymano - Untitled (Unreleased)\n[00:44:26] Fortnight - Balcony settings\n[00:46:05] prima - Jin\n[00:47:25] Aeson - dreamin'\n[00:49:10] Leavv - Tomorrow (Chillhop Spring 2018)\n[00:51:52] asbeluxt - calming tea\n[00:53:07] BLVK. - affection (unreleased)\n[00:54:44] hm surf - Take Care\n[00:56:47] Psalm Trees - Wherever You Are (Chillhop Spring 2018)\n[00:58:47] Omaure - Honeypot\n[01:00:58] Joe Corfield - Wildflower (Chillhop Spring 2018)\n[01:03:18] ihaveaface - rainy/forest\n[01:05:13] hm surf - didn't get a switch for christmas\n[01:06:35] Orca Vibes - Intuition\n[01:08:20] Kaizen 92 - Magenta\n[01:09:45] Juan RIOS - Otoño\n[01:13:19] j'san - the voice inside my head (beat)\n[01:15:22] Peter Bark - L'aldilà\n[01:16:30] Philanthrope - Dromeda \n[01:18:41] charlie toØ human - moonlight love\n[01:21:58] saiko - bruh\n[01:23:45] chief - i am nobody\n[01:25:14] charlie toØ human - Autumn Daze\n[01:27:45] philanthrope - Blue w∕ drwn.\n[01:29:38] Aeson - smile\n[01:33:33] Omaure - Bunte Hunde (beat)\n[01:36:15] COMODO - 303\n[01:37:33] hm surf - 6am\n[01:39:17] mt. fujitive - trees\n[01:41:30] chief - tired\n[01:42:50] dweeb & too ugly - how you think (beat)\n[01:45:10] Clouds x HM Surf - Cloudsurfing \n[01:46:48] saiko - offtherecord\n[01:49:39] knowmadic - empty\n[01:52:13] sensi sye - no sleep\n[01:54:12] chief - stay\n[01:55:58] oatmello - inside (w/chief)\n[01:57:50] hm surf - corolla cruising (unreleased)\n\n🎶 Support the beatmakers\n\nhttps://soundcloud.com/idealismus (idealism)\nhttps://soundcloud.com/philanthrope1 (Philanthrope)\nhttps://soundcloud.com/kuplasound (Kupla)\nhttps://soundcloud.com/bloopr420 (b l o o p r)\nhttps://soundcloud.com/leavv (leavv.)\nhttps://soundcloud.com/miscinc (misc.inc)\nhttps://soundcloud.com/fortnight1 (fortnight)\nhttps://soundcloud.com/soundsbysoho (soho)\nhttps://soundcloud.com/b-side-production (B-side)\nhttps://soundcloud.com/tesk (TESK)\nhttps://soundcloud.com/iamjsan (j'san)\nhttps://soundcloud.com/beet_farmer (Dweeb)\nhttps://soundcloud.com/smwun (sumwun)\nhttps://soundcloud.com/countbazzy-2 (ṰṏỞ↑ἧᾯrṰḩ)\nhttps://soundcloud.com/saikotropic (saiko)\nhttps://soundcloud.com/bscsaito (Saito)\nhttps://soundcloud.com/arturofratini (Lester, Nowhere)\nhttps://soundcloud.com/tesla77 (OTESLA)\nhttps://soundcloud.com/hmsurf (hm SURF)\nhttps://soundcloud.com/bess-one (Kaizen 92´)\nhttps://soundcloud.com/a-e-s-t-r-o (Aeson)\nhttps://soundcloud.com/nymano (nymano)\nhttps://soundcloud.com/primabeats (prima)\nhttps://soundcloud.com/asbeluxt (asbeluxt)\nhttps://soundcloud.com/yungmai (BLVK.)\nhttps://soundcloud.com/psalm-trees (Psalm//Trees)\nhttps://soundcloud.com/omaure-1 (Omaure)\nhttps://soundcloud.com/joe-corfield-1 (Joe Corfield)\nhttps://soundcloud.com/ihaveaface (ihaveaface)\nhttps://soundcloud.com/orcavibes (Orca Vibes)\nhttps://soundcloud.com/juan-rios-beats (Juan RIOS)\nhttps://soundcloud.com/peterbark (PETER BARK)\nhttps://soundcloud.com/charlietoohuman (charlie toØ human)\nhttps://soundcloud.com/chieffrombmb (chief.)\nhttps://soundcloud.com/drwn_dot (drwn.)\nhttps://soundcloud.com/willgregory (COMODO)\nhttps://soundcloud.com/mt_fujitive (mt. fujitive)\nhttps://soundcloud.com/toouglyboi (too ugly)\nhttps://soundcloud.com/knowmadicbeats (knowmadic)\nhttps://soundcloud.com/sensisye (Sensi Sye)\nhttps://soundcloud.com/oatmello (oatmello)\n\n🎨 Artwork by Juan Pablo Machado\n→ https://www.facebook.com/machadoillustrator/\n→ http://machado.portfoliobox.io/\n→ http://jpmachado.art\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowsoundcloud\n\n✔️ Copyright Free Playlist \n→ https://goo.gl/QtsxQG\n\n📝 Submissions\n→ Artwork : artwork@thechilledcow.com\n→ Music : https://soundcloud.com/chilledcow\n\n❌ Please, do not use these songs without artist's permissions",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/-FlxM_0S2lA/default.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/-FlxM_0S2lA/mqdefault.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/-FlxM_0S2lA/hqdefault.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/-FlxM_0S2lA/sddefault.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/-FlxM_0S2lA/maxresdefault.jpg",
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
		"relax music",
		"relaxing music",
		"music to study",
		"study chill mix",
		"chillhop mix",
		"chilledcow mix",
		"chilled cow mix",
		"chill study beats",
		"beats",
		"chill beats",
		"study beats",
		"jazz",
		"chill jazz",
		"jazzhop",
		"study music mix",
		"concentration music"
	   ],
	   "categoryId": "10",
	   "liveBroadcastContent": "none",
	   "localized": {
		"title": "Lofi hip hop mix - Beats to Relax/Study to [2018]",
		"description": "👕 New merch collection → https://chilledcow-merch.com\n🎼ChilledCow's Spotify playlist  → http://bit.ly/spotifychilledcow\n\nFull tracklist\n\n[00:00:00] idealism - last time\n[00:02:50] Philanthrope X Kupla - Cycles\n[00:05:25] bloopr - mondayloop [no friends, no worries]\n[00:06:50] leavv - within \n[00:09:30] leavv & misc.inc - Pictures (unreleased)\n[00:11:35] fortnight - 2000\n[00:13:03] Soho - At Peace\n[00:14:58] blnkspc_  - Sticky\n[00:18:30] j'san - in time (unreleased)\n[00:20:43] Dweeb -'72 Audi Coupe\n[00:21:45] sumwun - men cry\n[00:23:37] ṰṏỞ↑ἧᾯrṰḩ - over it\n[00:25:33] saiko - untitled (unreleased)\n[00:26:48] Saito & Lester, Nowhere - Glare (w/ otesla)\n[00:29:00] Philanthrope - Leavin'\n[00:31:08] hm SURF - Flunked This Semester \n[00:32:44] leavv - park walk\n[00:34:12] Kaizen 92´- lost n´ found\n[00:36:20] fortnight - 5AM\n[00:37:55] fortnight - the keys\n[00:39:41] Aeson - a l l u r e\n[00:42:15] Yaken & Nymano - Untitled (Unreleased)\n[00:44:26] Fortnight - Balcony settings\n[00:46:05] prima - Jin\n[00:47:25] Aeson - dreamin'\n[00:49:10] Leavv - Tomorrow (Chillhop Spring 2018)\n[00:51:52] asbeluxt - calming tea\n[00:53:07] BLVK. - affection (unreleased)\n[00:54:44] hm surf - Take Care\n[00:56:47] Psalm Trees - Wherever You Are (Chillhop Spring 2018)\n[00:58:47] Omaure - Honeypot\n[01:00:58] Joe Corfield - Wildflower (Chillhop Spring 2018)\n[01:03:18] ihaveaface - rainy/forest\n[01:05:13] hm surf - didn't get a switch for christmas\n[01:06:35] Orca Vibes - Intuition\n[01:08:20] Kaizen 92 - Magenta\n[01:09:45] Juan RIOS - Otoño\n[01:13:19] j'san - the voice inside my head (beat)\n[01:15:22] Peter Bark - L'aldilà\n[01:16:30] Philanthrope - Dromeda \n[01:18:41] charlie toØ human - moonlight love\n[01:21:58] saiko - bruh\n[01:23:45] chief - i am nobody\n[01:25:14] charlie toØ human - Autumn Daze\n[01:27:45] philanthrope - Blue w∕ drwn.\n[01:29:38] Aeson - smile\n[01:33:33] Omaure - Bunte Hunde (beat)\n[01:36:15] COMODO - 303\n[01:37:33] hm surf - 6am\n[01:39:17] mt. fujitive - trees\n[01:41:30] chief - tired\n[01:42:50] dweeb & too ugly - how you think (beat)\n[01:45:10] Clouds x HM Surf - Cloudsurfing \n[01:46:48] saiko - offtherecord\n[01:49:39] knowmadic - empty\n[01:52:13] sensi sye - no sleep\n[01:54:12] chief - stay\n[01:55:58] oatmello - inside (w/chief)\n[01:57:50] hm surf - corolla cruising (unreleased)\n\n🎶 Support the beatmakers\n\nhttps://soundcloud.com/idealismus (idealism)\nhttps://soundcloud.com/philanthrope1 (Philanthrope)\nhttps://soundcloud.com/kuplasound (Kupla)\nhttps://soundcloud.com/bloopr420 (b l o o p r)\nhttps://soundcloud.com/leavv (leavv.)\nhttps://soundcloud.com/miscinc (misc.inc)\nhttps://soundcloud.com/fortnight1 (fortnight)\nhttps://soundcloud.com/soundsbysoho (soho)\nhttps://soundcloud.com/b-side-production (B-side)\nhttps://soundcloud.com/tesk (TESK)\nhttps://soundcloud.com/iamjsan (j'san)\nhttps://soundcloud.com/beet_farmer (Dweeb)\nhttps://soundcloud.com/smwun (sumwun)\nhttps://soundcloud.com/countbazzy-2 (ṰṏỞ↑ἧᾯrṰḩ)\nhttps://soundcloud.com/saikotropic (saiko)\nhttps://soundcloud.com/bscsaito (Saito)\nhttps://soundcloud.com/arturofratini (Lester, Nowhere)\nhttps://soundcloud.com/tesla77 (OTESLA)\nhttps://soundcloud.com/hmsurf (hm SURF)\nhttps://soundcloud.com/bess-one (Kaizen 92´)\nhttps://soundcloud.com/a-e-s-t-r-o (Aeson)\nhttps://soundcloud.com/nymano (nymano)\nhttps://soundcloud.com/primabeats (prima)\nhttps://soundcloud.com/asbeluxt (asbeluxt)\nhttps://soundcloud.com/yungmai (BLVK.)\nhttps://soundcloud.com/psalm-trees (Psalm//Trees)\nhttps://soundcloud.com/omaure-1 (Omaure)\nhttps://soundcloud.com/joe-corfield-1 (Joe Corfield)\nhttps://soundcloud.com/ihaveaface (ihaveaface)\nhttps://soundcloud.com/orcavibes (Orca Vibes)\nhttps://soundcloud.com/juan-rios-beats (Juan RIOS)\nhttps://soundcloud.com/peterbark (PETER BARK)\nhttps://soundcloud.com/charlietoohuman (charlie toØ human)\nhttps://soundcloud.com/chieffrombmb (chief.)\nhttps://soundcloud.com/drwn_dot (drwn.)\nhttps://soundcloud.com/willgregory (COMODO)\nhttps://soundcloud.com/mt_fujitive (mt. fujitive)\nhttps://soundcloud.com/toouglyboi (too ugly)\nhttps://soundcloud.com/knowmadicbeats (knowmadic)\nhttps://soundcloud.com/sensisye (Sensi Sye)\nhttps://soundcloud.com/oatmello (oatmello)\n\n🎨 Artwork by Juan Pablo Machado\n→ https://www.facebook.com/machadoillustrator/\n→ http://machado.portfoliobox.io/\n→ http://jpmachado.art\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowsoundcloud\n\n✔️ Copyright Free Playlist \n→ https://goo.gl/QtsxQG\n\n📝 Submissions\n→ Artwork : artwork@thechilledcow.com\n→ Music : https://soundcloud.com/chilledcow\n\n❌ Please, do not use these songs without artist's permissions"
	   }
	  }
	 },
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/5Kmb4pVajO4eNz4ihE2XBZg7VFQ\"",
	  "id": "A9sOb_r6Hy0",
	  "snippet": {
	   "publishedAt": "2018-12-27T20:34:49.000Z",
	   "channelId": "UCOxqgCwgOqC2lMqC5PYz_Dg",
	   "title": "Chillhop Yearmix 2018  ☕️ chillhop & lofi hip hop",
	   "description": "Chillhop / lofi hip hop had a great 2018, so here's a 2 hour mix of the best tunes from this year's Chillhop Records releases. Thanks for another chill year!\n\n🎶 Listen to chillhop on Spotify & Apple Music\n・ https://chillhop.lnk.to/sptfySi (Spotify)\n・ https://chillhop.lnk.to/applemusic (Apple Music)\n\n🎧 Tracklist: (* = Unreleased)\n 00:00:00 L’indecis - Soulful\n 00:03:39 nymano x Pandrezz - Fireworks\n 00:05:54 oddfish - Indelible\n 00:08:10 Pandrezz - Takin You For a Ride\n 00:10:28 Cap Kendricks - The One\n 00:13:55 Philanthrope x Yasper - Slopes\n 00:16:54 j’san - good morning sunshine\n 00:19:23 chief - yesterday\n 00:21:57 L’indecis - Blind\n 00:24:49 Ruck P - Destination\n 00:29:31 mommy x Philanthrope - embrace w/ monma , cocabona & Misha\n00:31:52 Gonza - Relax your Mind\n00:35:26 Ruck P - Spring in La Coruña\n00:39:04 santpoort - the great ocean road\n00:41:28  The Breed - Chocolate covered Dreams\n00:43:34 plusma - albatros\n00:46:20 mommy x Philanthrope - throwback port\n00:48:00 C Y G N - Mindfulness\n00:50:48 masked man - coupe_90\n00:51:56 FloFilz x Psalm Trees - Smooth wit’ any groove\n00:54:38 Birocratic _ Belly Breathing\n00:57:27 j’san - movie scene\n00:59:53 Kupla - Tiger\n01:02:29 Flitz & Suppe - About the Distance\n01:05:41 swuM - this again w/ quickly , quickly \n01:07:56 Tesk - burn my mind\n01:10:27 j'san x nymano - autumn breeze\n01:12:46 Joe Corfield - Wildflower\n01:15:14 mommy X delayde - flashes of calm\n01:17:47 harris cole - larkspur\n01:20:59 hm surf - couch day\n01:23:32 invention_ - ebb//flo\n01:26:01 Ian Ewing x Philanthrope - Smart Girl in a Skurt\n01:28:51 seneca b - sunshine\n01:32:22 Sarcastic Sounds x Beowulf - Runaway (Ft. Mishaal)\n01:34:24 leavv - Candle\n01:36:48 Aso - Closer\n01:39:54 Smeyeul - Distant Travels\n01:42:30 digitalluc - Float\n01:44:16 invention_ - landrace\n01:46:41 Ian Ewing - LuvnYou\n01:49:56 Toonorth - Silience\n01:53:10 hm surf - oracle night\n01:55:39 arbour x Underbelly - borren\n01:58:30 Amonos - Montrose\n\n🙌 Follow the artists\nL’indécis » https://soundcloud.com/iamharriscole\nHarris Cole » https://soundcloud.com/iamharriscole\nAso » https://soundcloud.com/aricogle\nJ’san » https://soundcloud.com/iamjsan\nFujitsu » https://soundcloud.com/fujitsuu1\nleavv » https://soundcloud.com/leavv\nplusma » https://soundcloud.com/plusma\nMonma » https://soundcloud.com/monmabeats\nhm Surf » https://soundcloud.com/hmsurf\nPhilanthrope » https://soundcloud.com/philanthrope1\nFloFilz » https://soundcloud.com/flofills\nchief. » https://soundcloud.com/chiefslc\nPsalm Trees » https://soundcloud.com/psalm-trees\nsantpoort » https://soundcloud.com/santpoortnoord\nmommy » https://soundcloud.com/beatsbymommy\ndelayde » https://soundcloud.com/delayde\nTesk » https://soundcloud.com/tesk\ninvention_ » https://soundcloud.com/invention\nquickly , quickly » https://soundcloud.com/quicklyquickly\nJoe Corfield » https://soundcloud.com/joe-corfield-1\nKupla » https://soundcloud.com/kuplasound\nmasked man » https://soundcloud.com/masked-man-peace\nToonorth » https://soundcloud.com/countbazzy-2\nPandrezz » https://soundcloud.com/pandrezz\nFlitz&Suppe » https://soundcloud.com/flitzsuppe\nSeneca B » https://soundcloud.com/senecabeats\n\n\n#chillhop #lofihiphop #studybeats\n\n\n🎨 Artwork by Wenyi Geng\n・ https://www.instagram.com/wenyigeng\n・http://www.wenyigeng.com/\n\n✔️ Check out our 24/7 livestream\n・ https://live.chillhop.com\n\n\n🛍Chillhop Webshop\n・ https://shop.chillhop.com\n\n🐾 More Chillhop?\n・ https://chillhop.com/listen\n\n❔ Use our music in your videos\n・https://chillhop.com/license\n\n🙏 The Chillhop Community\n・ https://discord.gg/chillhop\n・ https://reddit.com/r/chillhop\n・ https://www.facebook.com/groups/1561371024098016",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/A9sOb_r6Hy0/default.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/A9sOb_r6Hy0/mqdefault.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/A9sOb_r6Hy0/hqdefault.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/A9sOb_r6Hy0/sddefault.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/A9sOb_r6Hy0/maxresdefault.jpg",
		 "width": 1280,
		 "height": 720
		}
	   },
	   "channelTitle": "Chillhop Music",
	   "tags": [
		"lofi hip hop",
		"chillhop",
		"lofi",
		"soulful",
		"chill beats",
		"라디오",
		"로파이힙합",
		"lofi radio",
		"jazz hip hop",
		"chill study beats",
		"chill gaming beats",
		"chill relax beats",
		"beats to study to",
		"anime beats",
		"chillhop records",
		"chill mix",
		"study mix",
		"lo-fi beats",
		"lo fi hip hop",
		"nujabes",
		"yearmix 2018",
		"chillhop essentials",
		"best of lofi hip hop",
		"beats to relax to",
		"year mix 2018",
		"lofi yearmix",
		"chillhop raccoon"
	   ],
	   "categoryId": "10",
	   "liveBroadcastContent": "none",
	   "localized": {
		"title": "Chillhop Yearmix 2018  ☕️ chillhop & lofi hip hop",
		"description": "Chillhop / lofi hip hop had a great 2018, so here's a 2 hour mix of the best tunes from this year's Chillhop Records releases. Thanks for another chill year!\n\n🎶 Listen to chillhop on Spotify & Apple Music\n・ https://chillhop.lnk.to/sptfySi (Spotify)\n・ https://chillhop.lnk.to/applemusic (Apple Music)\n\n🎧 Tracklist: (* = Unreleased)\n 00:00:00 L’indecis - Soulful\n 00:03:39 nymano x Pandrezz - Fireworks\n 00:05:54 oddfish - Indelible\n 00:08:10 Pandrezz - Takin You For a Ride\n 00:10:28 Cap Kendricks - The One\n 00:13:55 Philanthrope x Yasper - Slopes\n 00:16:54 j’san - good morning sunshine\n 00:19:23 chief - yesterday\n 00:21:57 L’indecis - Blind\n 00:24:49 Ruck P - Destination\n 00:29:31 mommy x Philanthrope - embrace w/ monma , cocabona & Misha\n00:31:52 Gonza - Relax your Mind\n00:35:26 Ruck P - Spring in La Coruña\n00:39:04 santpoort - the great ocean road\n00:41:28  The Breed - Chocolate covered Dreams\n00:43:34 plusma - albatros\n00:46:20 mommy x Philanthrope - throwback port\n00:48:00 C Y G N - Mindfulness\n00:50:48 masked man - coupe_90\n00:51:56 FloFilz x Psalm Trees - Smooth wit’ any groove\n00:54:38 Birocratic _ Belly Breathing\n00:57:27 j’san - movie scene\n00:59:53 Kupla - Tiger\n01:02:29 Flitz & Suppe - About the Distance\n01:05:41 swuM - this again w/ quickly , quickly \n01:07:56 Tesk - burn my mind\n01:10:27 j'san x nymano - autumn breeze\n01:12:46 Joe Corfield - Wildflower\n01:15:14 mommy X delayde - flashes of calm\n01:17:47 harris cole - larkspur\n01:20:59 hm surf - couch day\n01:23:32 invention_ - ebb//flo\n01:26:01 Ian Ewing x Philanthrope - Smart Girl in a Skurt\n01:28:51 seneca b - sunshine\n01:32:22 Sarcastic Sounds x Beowulf - Runaway (Ft. Mishaal)\n01:34:24 leavv - Candle\n01:36:48 Aso - Closer\n01:39:54 Smeyeul - Distant Travels\n01:42:30 digitalluc - Float\n01:44:16 invention_ - landrace\n01:46:41 Ian Ewing - LuvnYou\n01:49:56 Toonorth - Silience\n01:53:10 hm surf - oracle night\n01:55:39 arbour x Underbelly - borren\n01:58:30 Amonos - Montrose\n\n🙌 Follow the artists\nL’indécis » https://soundcloud.com/iamharriscole\nHarris Cole » https://soundcloud.com/iamharriscole\nAso » https://soundcloud.com/aricogle\nJ’san » https://soundcloud.com/iamjsan\nFujitsu » https://soundcloud.com/fujitsuu1\nleavv » https://soundcloud.com/leavv\nplusma » https://soundcloud.com/plusma\nMonma » https://soundcloud.com/monmabeats\nhm Surf » https://soundcloud.com/hmsurf\nPhilanthrope » https://soundcloud.com/philanthrope1\nFloFilz » https://soundcloud.com/flofills\nchief. » https://soundcloud.com/chiefslc\nPsalm Trees » https://soundcloud.com/psalm-trees\nsantpoort » https://soundcloud.com/santpoortnoord\nmommy » https://soundcloud.com/beatsbymommy\ndelayde » https://soundcloud.com/delayde\nTesk » https://soundcloud.com/tesk\ninvention_ » https://soundcloud.com/invention\nquickly , quickly » https://soundcloud.com/quicklyquickly\nJoe Corfield » https://soundcloud.com/joe-corfield-1\nKupla » https://soundcloud.com/kuplasound\nmasked man » https://soundcloud.com/masked-man-peace\nToonorth » https://soundcloud.com/countbazzy-2\nPandrezz » https://soundcloud.com/pandrezz\nFlitz&Suppe » https://soundcloud.com/flitzsuppe\nSeneca B » https://soundcloud.com/senecabeats\n\n\n#chillhop #lofihiphop #studybeats\n\n\n🎨 Artwork by Wenyi Geng\n・ https://www.instagram.com/wenyigeng\n・http://www.wenyigeng.com/\n\n✔️ Check out our 24/7 livestream\n・ https://live.chillhop.com\n\n\n🛍Chillhop Webshop\n・ https://shop.chillhop.com\n\n🐾 More Chillhop?\n・ https://chillhop.com/listen\n\n❔ Use our music in your videos\n・https://chillhop.com/license\n\n🙏 The Chillhop Community\n・ https://discord.gg/chillhop\n・ https://reddit.com/r/chillhop\n・ https://www.facebook.com/groups/1561371024098016"
	   },
	   "defaultAudioLanguage": "en"
	  }
	 },
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/kU-tt7qnhwGQKqEiIdNEFcONdCg\"",
	  "id": "I7GIFjILeCc",
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
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/sXMHXp9j3JTDBbCkEUKTNJPzd5w\"",
	  "id": "gnhub9-KLsE",
	  "snippet": {
	   "publishedAt": "2018-09-12T18:42:58.000Z",
	   "channelId": "UCZyyXrEF2WCZbI653PFNBbA",
	   "title": "New York | JazzHop",
	   "description": "🌈 Similar music on Spotify : \nhttps://open.spotify.com/user/nsqx6avzxhybkmfumqb1juwmn/playlist/5jtIpYaaFTza3O9ZnaVrLa?si=pEQTCIstRjymQlqXA-Qjaw\n\n\nFollow Fantastic Music\nhttps://www.facebook.com/fantasticmusic.lofi/\nhttps://twitter.com/FantasticMusicR\nhttps://soundcloud.com/user-360836154\nhttps://www.instagram.com/fantasticmusique/\nhttps://open.spotify.com/user/chillhopmusic/playlist/0CFuMybe6s77w6QQrJjW7d?\n\n© For any Copyright Claim : mailfantasticmusic@gmail.com\n\n---------------------------------------------------------------\n♫ Tracklist ♫\n00:00 Beamic - Charl's Bronx\n02:54 Devaloop - No sides \n06:19 Coops - That Jazz (Instrumental)\n08:55 AK420 - Long Way Home \n11:42 Remulak - New Cone\n14:24 Devaloop - Holzige Süße (Instrumental)\n16:47 Tesk - B U T T E R \n18:18 KarmawiN - Killing Time \n21:14 KarmawiN - Raw\n24:48 snares - verwelkt\n27:41 Beamic - Pack Die Reisetasche\n29:08 x Snares - Zweifalt part II\n---------------------------------------------------------------\n\nFollow\nBeamic https://soundcloud.com/beamic\nDevaloop https://soundcloud.com/devaloop\nCoops https://soundcloud.com/coopsofficial\nAK420 https://soundcloud.com/akfourtwozero\nRemulak https://soundcloud.com/remulakbeats\nTesk https://soundcloud.com/tesk\nKarmawiN https://soundcloud.com/karmawinlyon\nsnares https://soundcloud.com/snares1998\nMAFFYN https://soundcloud.com/maffynbeats\n\n🎨 Original picture by Gavin Glakas\nhttps://www.gavinglakas.com/artwork\nhttps://www.instagram.com/gavin_glakas/",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/6u5a7_-a3vM/default.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/6u5a7_-a3vM/mqdefault.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/6u5a7_-a3vM/hqdefault.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/6u5a7_-a3vM/sddefault.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/6u5a7_-a3vM/maxresdefault.jpg",
		 "width": 1280,
		 "height": 720
		}
	   },
	   "channelTitle": "Fantastic Music",
	   "tags": [
		"New York",
		"Jazzy",
		"Jazz",
		"Jazzhop",
		"HipHop",
		"Hip Hop",
		"Soul",
		"Music",
		"Musica",
		"Musique",
		"Sound",
		"Mix",
		"Mixtape",
		"Fantastic Music",
		"Chillhop",
		"Chilledcow",
		"Fantastic",
		"Snares",
		"Tesk",
		"KarmawiN",
		"Beamic",
		"Kazam",
		"HipDozer",
		"Majestic Casual",
		"Majestic",
		"remulak",
		"AK420",
		"Coops",
		"That Jazz",
		"Instrumental",
		"Sax",
		"Saxo",
		"Study",
		"Homework",
		"Night",
		"USA",
		"Time Square"
	   ],
	   "categoryId": "10",
	   "liveBroadcastContent": "none",
	   "localized": {
		"title": "New York | JazzHop",
		"description": "🌈 Similar music on Spotify : \nhttps://open.spotify.com/user/nsqx6avzxhybkmfumqb1juwmn/playlist/5jtIpYaaFTza3O9ZnaVrLa?si=pEQTCIstRjymQlqXA-Qjaw\n\n\nFollow Fantastic Music\nhttps://www.facebook.com/fantasticmusic.lofi/\nhttps://twitter.com/FantasticMusicR\nhttps://soundcloud.com/user-360836154\nhttps://www.instagram.com/fantasticmusique/\nhttps://open.spotify.com/user/chillhopmusic/playlist/0CFuMybe6s77w6QQrJjW7d?\n\n© For any Copyright Claim : mailfantasticmusic@gmail.com\n\n---------------------------------------------------------------\n♫ Tracklist ♫\n00:00 Beamic - Charl's Bronx\n02:54 Devaloop - No sides \n06:19 Coops - That Jazz (Instrumental)\n08:55 AK420 - Long Way Home \n11:42 Remulak - New Cone\n14:24 Devaloop - Holzige Süße (Instrumental)\n16:47 Tesk - B U T T E R \n18:18 KarmawiN - Killing Time \n21:14 KarmawiN - Raw\n24:48 snares - verwelkt\n27:41 Beamic - Pack Die Reisetasche\n29:08 x Snares - Zweifalt part II\n---------------------------------------------------------------\n\nFollow\nBeamic https://soundcloud.com/beamic\nDevaloop https://soundcloud.com/devaloop\nCoops https://soundcloud.com/coopsofficial\nAK420 https://soundcloud.com/akfourtwozero\nRemulak https://soundcloud.com/remulakbeats\nTesk https://soundcloud.com/tesk\nKarmawiN https://soundcloud.com/karmawinlyon\nsnares https://soundcloud.com/snares1998\nMAFFYN https://soundcloud.com/maffynbeats\n\n🎨 Original picture by Gavin Glakas\nhttps://www.gavinglakas.com/artwork\nhttps://www.instagram.com/gavin_glakas/"
	   }
	  }
	 },
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/XcZJTWTAjNaXZlRmffirypAfKIc\"",
	  "id": "jcuAlQY-QNY",
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
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/aMRMHJK9ROmZ5Zx6rwFYpfj5Db0\"",
	  "id": "1p8r-2ffK_c",
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
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/LNZO5EdlsTaMUn0k6dKltQf56B8\"",
	  "id": "YqFen-4pUvw",
	  "snippet": {
	   "publishedAt": "2018-11-26T13:00:35.000Z",
	   "channelId": "UCncxHd8o_VhhHAJ7QqB5azg",
	   "title": "lofi hip hop and chillhop radio 24/7 - chill beats to relax/study to ☕️",
	   "description": "lofi hip hop and chillhop radio 24/7 - chill beats to relax/study to ☕️\nThanks for listening, I hope you will have a good time and relax here.\n\nSpotify Playlists\n✘  lofi hip hop: https://bit.ly/IYCSpotifyLofi\n✘  Chillhop and Lofi: https://bit.ly/IYCSpotifyChillhopLofi\n✘  InYourChill Uploads: https://bit.ly/IYCSpotifyYTUploads\n\n🔔 Turn on the bell to be the first to listen to new music! \n\nIf you want isolate yourself for studying, relaxing, focusing, thinking or just having a good time, this lofi hip hop and chillhop livestream is for you !\n\nListen to the lofi hip hop and chillhop radio offline with my Spotify playlist: https://bit.ly/InYourChillSpotify \n\n💪 Follow InYourChill! ツ\nInYourChill Website: https://www.inyourchill.com\nInYourChill Soundcloud: https://soundcloud.com/InYourChill\nInYourChill Spotify: https://bit.ly/InYourChillSpotify \nInYourChill Twitter: https://twitter.com/InYourChill\nInYourChill Instagram: https://www.instagram.com/InYourChillMusic\nInYourChill Discord: https://discord.gg/nTreycA\nInYourChill Patreon: https://www.patreon.com/InYourChill \n\nSubmissions for YouTube: bit.ly/2CLOUtm\nSubmissions for Spotify: bit.ly/2O8EHcI\n\nGenre: lofi hip hop, lofi, chillhop, hip hop, smooth music, chill beats\n\n☕️ DISCLAIMERS:\nThis livestream is an original content, an agreed collaboration between InYourChill and music creators.\nThe background is a commitionned work, InYourChill detain all the rights.\n\n🎨 EXCLUSIVE Background for InYourChill by Julien Rambaldini\nhttp://julienrambaldini.wixsite.com/animation\n\n#lofihiphop #lofi #chillhop #lofiradio #relax #lofichill #studybeats #relaxingradio #inyourchill\n\nThis livestream is the 2nd version of the Best of Chillout Music ♫ 24/7 Music Livestream ♫ lofi hip hop, chillhop, jazzhop",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/B8tQ8RUbTW8/default_live.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/B8tQ8RUbTW8/mqdefault_live.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/B8tQ8RUbTW8/hqdefault_live.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/B8tQ8RUbTW8/sddefault_live.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/B8tQ8RUbTW8/maxresdefault_live.jpg",
		 "width": 1280,
		 "height": 720
		}
	   },
	   "channelTitle": "InYourChill",
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
		"inyourchill",
		"in your chill",
		"inyourchill radio",
		"inyourchill station",
		"lofi radio inyourchill",
		"chillhop",
		"chillhop music",
		"chillhop radio",
		"beats to relax",
		"music to study",
		"chill out",
		"radio live",
		"best of chillout",
		"lofi chill",
		"study music"
	   ],
	   "categoryId": "10",
	   "liveBroadcastContent": "live",
	   "localized": {
		"title": "lofi hip hop and chillhop radio 24/7 - chill beats to relax/study to ☕️",
		"description": "lofi hip hop and chillhop radio 24/7 - chill beats to relax/study to ☕️\nThanks for listening, I hope you will have a good time and relax here.\n\nSpotify Playlists\n✘  lofi hip hop: https://bit.ly/IYCSpotifyLofi\n✘  Chillhop and Lofi: https://bit.ly/IYCSpotifyChillhopLofi\n✘  InYourChill Uploads: https://bit.ly/IYCSpotifyYTUploads\n\n🔔 Turn on the bell to be the first to listen to new music! \n\nIf you want isolate yourself for studying, relaxing, focusing, thinking or just having a good time, this lofi hip hop and chillhop livestream is for you !\n\nListen to the lofi hip hop and chillhop radio offline with my Spotify playlist: https://bit.ly/InYourChillSpotify \n\n💪 Follow InYourChill! ツ\nInYourChill Website: https://www.inyourchill.com\nInYourChill Soundcloud: https://soundcloud.com/InYourChill\nInYourChill Spotify: https://bit.ly/InYourChillSpotify \nInYourChill Twitter: https://twitter.com/InYourChill\nInYourChill Instagram: https://www.instagram.com/InYourChillMusic\nInYourChill Discord: https://discord.gg/nTreycA\nInYourChill Patreon: https://www.patreon.com/InYourChill \n\nSubmissions for YouTube: bit.ly/2CLOUtm\nSubmissions for Spotify: bit.ly/2O8EHcI\n\nGenre: lofi hip hop, lofi, chillhop, hip hop, smooth music, chill beats\n\n☕️ DISCLAIMERS:\nThis livestream is an original content, an agreed collaboration between InYourChill and music creators.\nThe background is a commitionned work, InYourChill detain all the rights.\n\n🎨 EXCLUSIVE Background for InYourChill by Julien Rambaldini\nhttp://julienrambaldini.wixsite.com/animation\n\n#lofihiphop #lofi #chillhop #lofiradio #relax #lofichill #studybeats #relaxingradio #inyourchill\n\nThis livestream is the 2nd version of the Best of Chillout Music ♫ 24/7 Music Livestream ♫ lofi hip hop, chillhop, jazzhop"
	   },
	   "defaultAudioLanguage": "en"
	  }
	 },
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/QVU43Gzubic_ztsTdvNikZwAn7Q\"",
	  "id": "IjWfwkLSKtA",
	  "snippet": {
	   "publishedAt": "2017-03-28T09:35:17.000Z",
	   "channelId": "UC-Q1o43AToT9V6dPTLykEog",
	   "title": "24/7 - Chilled Tide Beats 🎧 Lofi Hip Hop - Study Music",
	   "description": "Hey and welcome to our stream. Come listen to some of the best lofi Hip Hop music.\n\nMusic by Chillhop: http://youtube.com/chillhopdotcom\nAll songs played are listed in the Spotify link\nListen on Spotify: http://bit.ly/ChillhopSpotify",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/IjWfwkLSKtA/default.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/IjWfwkLSKtA/mqdefault.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/IjWfwkLSKtA/hqdefault.jpg",
		 "width": 480,
		 "height": 360
		}
	   },
	   "channelTitle": "ChilledTideBeats",
	   "tags": [
		"Music",
		"Lofi",
		"Hip",
		"Hop",
		"Hiphop",
		"24/7",
		"chill",
		"relaxing",
		"relax",
		"beats",
		"beat",
		"tide",
		"study",
		"study music"
	   ],
	   "categoryId": "10",
	   "liveBroadcastContent": "none",
	   "localized": {
		"title": "24/7 - Chilled Tide Beats 🎧 Lofi Hip Hop - Study Music",
		"description": "Hey and welcome to our stream. Come listen to some of the best lofi Hip Hop music.\n\nMusic by Chillhop: http://youtube.com/chillhopdotcom\nAll songs played are listed in the Spotify link\nListen on Spotify: http://bit.ly/ChillhopSpotify"
	   }
	  }
	 },
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/jC-gBu6836C-vwfVpK4e7xzZLSI\"",
	  "id": "fA551WpQaO4",
	  "snippet": {
	   "publishedAt": "2017-12-29T18:40:51.000Z",
	   "channelId": "UCZyyXrEF2WCZbI653PFNBbA",
	   "title": "HomeTown | Jazzy HipHop",
	   "description": "Follow Fantastic Music\nhttps://www.facebook.com/fantasticmusic.lofi/\nhttps://twitter.com/FantasticMusicR\nhttps://soundcloud.com/user-360836154\nhttps://www.instagram.com/instafantasticmusic/\nhttps://open.spotify.com/user/nsqx6avzxhybkmfumqb1juwmn?si=Sv42MtkGRg6RAdC_rCljiw\n\n© For any Copyright Claim : mailfantasticmusic@gmail.com\n\n---------------------------------------------------------------\n♫ Tracklist ♫\n00:00 Pslam Tress - Crystal Silence\n03:09 Gorila - Akaido\n05:39 Remulak - On The Atlas\n08:40 Tesk - Green Stamps\n11:15 less.people - Plenty\n14:11 Limes - Cocktails\n15:51 enjo - No Thoughts\n18:12 Pabzzz - Delicious\n20:43 Philanthrope, Omaure, Flitzsuppe - Halftime\n22:34 Limes - Blasé\n25:15 burbank - lemonade\n26:36 Bassti - Der Dritte\n27:38 gny - reinvented with these\n29:30 Psalm//Trees - Frank Again\n31:34 Bassti - Bex\n33:34 Kupla - Jazz Cats\n35:58 Flitz&Suppe x Philanthrope - Solitude\n38:04 BluntOne - Sahasrara\n39:36 Jazzinuf - MILKSHAKE\n---------------------------------------------------------------\n\nFollow\nHip Dozer https://soundcloud.com/hipdozer\nPsalm//Trees https://soundcloud.com/psalm-trees\nGorila https://soundcloud.com/gorilamc\nRemulak https://soundcloud.com/remulakbeats\nTesk https://soundcloud.com/tesk\nless.people https://soundcloud.com/lesspeople\nLimes https://soundcloud.com/limes-3\nenjo https://soundcloud.com/ajmwthrowaways\nPabzzz https://soundcloud.com/pabzzz\nPhilanthrope https://soundcloud.com/philanthrope1\nOmaure https://soundcloud.com/omaure-1\nFlitzsuppe https://soundcloud.com/flitzsuppe\nburbank https://soundcloud.com/danielburbank\nBassti https://soundcloud.com/bassti_music\ngny https://soundcloud.com/jee-knee\nKupla https://soundcloud.com/kuplasound\nBluntOne https://soundcloud.com/bluntone\nJazzinuf https://soundcloud.com/jazzinuf\n\nOriginal picture by Evgeny Lushpin\nhttp://lushpin.com\nhttps://www.instagram.com/lushpin_/",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/fA551WpQaO4/default.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/fA551WpQaO4/mqdefault.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/fA551WpQaO4/hqdefault.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/fA551WpQaO4/sddefault.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/fA551WpQaO4/maxresdefault.jpg",
		 "width": 1280,
		 "height": 720
		}
	   },
	   "channelTitle": "Fantastic Music",
	   "tags": [
		"Jazzy",
		"City",
		"Jazz",
		"HipHop",
		"Chillhop",
		"Lofi",
		"Relax",
		"Painting",
		"Evegeny Lushpin",
		"San Fransisco",
		"USA",
		"US",
		"Music",
		"Musique",
		"Musica",
		"Relaxing",
		"Study",
		"Gaming",
		"Oldschool",
		"hiphop",
		"Hometown",
		"Downtown",
		"Nights",
		"Night",
		"Light",
		"Orange",
		"Christmas",
		"Winter",
		"Rain",
		"Water",
		"Weather",
		"Gorila",
		"Détente",
		"Pabzzz",
		"HipDozer",
		"Art",
		"Concept Art",
		"Bass",
		"Trumpet",
		"Underground",
		"Town",
		"Sax",
		"Saxo",
		"Bassti",
		"Jazzinuf",
		"BluntOne",
		"Philanthrope",
		"Kupla",
		"Tesk",
		"Limes",
		"enjo"
	   ],
	   "categoryId": "10",
	   "liveBroadcastContent": "none",
	   "localized": {
		"title": "HomeTown | Jazzy HipHop",
		"description": "Follow Fantastic Music\nhttps://www.facebook.com/fantasticmusic.lofi/\nhttps://twitter.com/FantasticMusicR\nhttps://soundcloud.com/user-360836154\nhttps://www.instagram.com/instafantasticmusic/\nhttps://open.spotify.com/user/nsqx6avzxhybkmfumqb1juwmn?si=Sv42MtkGRg6RAdC_rCljiw\n\n© For any Copyright Claim : mailfantasticmusic@gmail.com\n\n---------------------------------------------------------------\n♫ Tracklist ♫\n00:00 Pslam Tress - Crystal Silence\n03:09 Gorila - Akaido\n05:39 Remulak - On The Atlas\n08:40 Tesk - Green Stamps\n11:15 less.people - Plenty\n14:11 Limes - Cocktails\n15:51 enjo - No Thoughts\n18:12 Pabzzz - Delicious\n20:43 Philanthrope, Omaure, Flitzsuppe - Halftime\n22:34 Limes - Blasé\n25:15 burbank - lemonade\n26:36 Bassti - Der Dritte\n27:38 gny - reinvented with these\n29:30 Psalm//Trees - Frank Again\n31:34 Bassti - Bex\n33:34 Kupla - Jazz Cats\n35:58 Flitz&Suppe x Philanthrope - Solitude\n38:04 BluntOne - Sahasrara\n39:36 Jazzinuf - MILKSHAKE\n---------------------------------------------------------------\n\nFollow\nHip Dozer https://soundcloud.com/hipdozer\nPsalm//Trees https://soundcloud.com/psalm-trees\nGorila https://soundcloud.com/gorilamc\nRemulak https://soundcloud.com/remulakbeats\nTesk https://soundcloud.com/tesk\nless.people https://soundcloud.com/lesspeople\nLimes https://soundcloud.com/limes-3\nenjo https://soundcloud.com/ajmwthrowaways\nPabzzz https://soundcloud.com/pabzzz\nPhilanthrope https://soundcloud.com/philanthrope1\nOmaure https://soundcloud.com/omaure-1\nFlitzsuppe https://soundcloud.com/flitzsuppe\nburbank https://soundcloud.com/danielburbank\nBassti https://soundcloud.com/bassti_music\ngny https://soundcloud.com/jee-knee\nKupla https://soundcloud.com/kuplasound\nBluntOne https://soundcloud.com/bluntone\nJazzinuf https://soundcloud.com/jazzinuf\n\nOriginal picture by Evgeny Lushpin\nhttp://lushpin.com\nhttps://www.instagram.com/lushpin_/"
	   }
	  }
	 },
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/nOaKSfbCfqDt9e9booqqQJW-uoE\"",
	  "id": "TRgAfvzHdT8",
	  "snippet": {
	   "publishedAt": "2019-07-01T18:50:45.000Z",
	   "channelId": "UCOgYxEFQIVkmo4865ap0Zbw",
	   "title": "Malcolm in the Middle Retrospective | Life is Unfair",
	   "description": "Hey, does anyone remember that show Bryan Cranston did before Breaking Bad?\n\n Fox's Patreon: https://www.patreon.com/Foxcade\n Fox's Twitter: https://twitter.com/SuperFoxcade",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/TRgAfvzHdT8/default.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/TRgAfvzHdT8/mqdefault.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/TRgAfvzHdT8/hqdefault.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/TRgAfvzHdT8/sddefault.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/TRgAfvzHdT8/maxresdefault.jpg",
		 "width": 1280,
		 "height": 720
		}
	   },
	   "channelTitle": "Foxcade",
	   "tags": [
		"Malcolm in the Middle",
		"Fox Studio",
		"20th Century Fox",
		"Disney",
		"Foxcade",
		"Retrospective",
		"Analysis",
		"Sitcom",
		"Television",
		"Malcolm",
		"Dewey",
		"Hal",
		"Lois",
		"Reese",
		"Francis",
		"Franky Muniz",
		"Bryan Cranston",
		"The Simpsons",
		"Friends",
		"Seinfeld",
		"90's Sitcom",
		"Linwood Boomer",
		"Review"
	   ],
	   "categoryId": "1",
	   "liveBroadcastContent": "none",
	   "localized": {
		"title": "Malcolm in the Middle Retrospective | Life is Unfair",
		"description": "Hey, does anyone remember that show Bryan Cranston did before Breaking Bad?\n\n Fox's Patreon: https://www.patreon.com/Foxcade\n Fox's Twitter: https://twitter.com/SuperFoxcade"
	   },
	   "defaultAudioLanguage": "en"
	  }
	 },
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/gnQfME2Lz3zcZrLQDV-l8Dkovt0\"",
	  "id": "GGBm9gTY2NU",
	  "snippet": {
	   "publishedAt": "2017-11-08T11:28:08.000Z",
	   "channelId": "UCZyyXrEF2WCZbI653PFNBbA",
	   "title": "DownTown | Jazzhop",
	   "description": "🌈 Similar music on Spotify : \nhttps://open.spotify.com/user/nsqx6avzxhybkmfumqb1juwmn/playlist/5jtIpYaaFTza3O9ZnaVrLa?si=pEQTCIstRjymQlqXA-Qjaw\n\n\nFollow Fantastic Music\nhttps://www.facebook.com/fantasticmusic.lofi/\nhttps://twitter.com/FantasticMusicR\nhttps://soundcloud.com/user-360836154\nhttps://www.instagram.com/fantasticmusique/\nhttps://open.spotify.com/user/chillhopmusic/playlist/0CFuMybe6s77w6QQrJjW7d?\n\n© For any Copyright Claim : mailfantasticmusic@gmail.com\n\n---------------------------------------------------------------\n♫ Tracklist ♫\n00:00 RudeManners - The Last Cherry Blossom\n01:49 Jinsang - Flow On \n05:22 Nohidea. - Haiku \n07:03 mr. käfer - Cosmic Harmonies\n09:29 Gorila - takeshi \n12:09 BluntOne - New Dawn \n14:32 Flofilz - Dulce \n16:36 Freddie Joachim - Breeze \n18:50 charlie toØ human - Walk in the park \n20:55 Gorila - Vous\n24:07 B-Side. - Pair \n27:08 Gorila - Parttime \n29:30 Freddie Joachim - Autumn Rain \n31:45 Oskar Hahn - Triggers \n34:28 Pabzzz - Together\n36:42 BluntOne - Sunny Side Up\n38:30 Oskar Hahn - Anikawer\n41:20 BROCKBEATS - Hot Spring\n43:23 BluntOne - passing by.\n---------------------------------------------------------------\n\nFollow\nHip Dozer https://soundcloud.com/hipdozer\nRudeManners https://soundcloud.com/rudemanners\nJinsang https://soundcloud.com/jinsangbeats\nNohidea https://soundcloud.com/nohidea\nmr. käfer https://soundcloud.com/mr-k-fer\nGorila https://soundcloud.com/gorilamc\nBluntOne https://soundcloud.com/bluntone\nFlofilz https://soundcloud.com/flofills\ncharlie toØ human https://soundcloud.com/charlietoohuman\nB-Side. https://soundcloud.com/b-side-production\nFreddie Joachim https://soundcloud.com/freddiejoachim\nOskar Hahn https://open.spotify.com/artist/5D47BWKQT56z8xey53ZxmL\nPabzzz https://soundcloud.com/pabzzz\nBROCKBEATS https://soundcloud.com/brock1112\n\nOriginal picture by Evgeny Lushpin\nhttp://lushpin.com\nhttps://www.instagram.com/lushpin_/",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/GGBm9gTY2NU/default.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/GGBm9gTY2NU/mqdefault.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/GGBm9gTY2NU/hqdefault.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/GGBm9gTY2NU/sddefault.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/GGBm9gTY2NU/maxresdefault.jpg",
		 "width": 1280,
		 "height": 720
		}
	   },
	   "channelTitle": "Fantastic Music",
	   "tags": [
		"Jazzy",
		"Jazz",
		"DownTown",
		"Town",
		"City",
		"San Fransisco",
		"Musique",
		"Musica",
		"Music",
		"Mix",
		"Mixtape",
		"Saxo",
		"Study",
		"Relax",
		"Anime",
		"Painting",
		"Art",
		"Colors",
		"Concept Art",
		"Nights",
		"Night",
		"Fantastic Music",
		"Fantastic",
		"Jinsang",
		"FloFilz",
		"RudeManners",
		"Hip Dozer",
		"Chillout",
		"Chill",
		"Chilled",
		"Zen",
		"Works",
		"Work",
		"Beautiful",
		"Nice",
		"Artwork",
		"Paint",
		"Cabes",
		"Lofi",
		"Jazz Vibes",
		"Vibes",
		"Vibe",
		"Nuajbes",
		"saxo",
		"Trumpet",
		"Underground",
		"Subway",
		"Beauty",
		"Gorila",
		"Chilledcow",
		"Chillhop",
		"Oskar Hahn",
		"Pabzzz",
		"Freddie Joachim",
		"B-Side",
		"Majestic",
		"Studing",
		"Relaxing",
		"Samurai Champloo"
	   ],
	   "categoryId": "10",
	   "liveBroadcastContent": "none",
	   "localized": {
		"title": "DownTown | Jazzhop",
		"description": "🌈 Similar music on Spotify : \nhttps://open.spotify.com/user/nsqx6avzxhybkmfumqb1juwmn/playlist/5jtIpYaaFTza3O9ZnaVrLa?si=pEQTCIstRjymQlqXA-Qjaw\n\n\nFollow Fantastic Music\nhttps://www.facebook.com/fantasticmusic.lofi/\nhttps://twitter.com/FantasticMusicR\nhttps://soundcloud.com/user-360836154\nhttps://www.instagram.com/fantasticmusique/\nhttps://open.spotify.com/user/chillhopmusic/playlist/0CFuMybe6s77w6QQrJjW7d?\n\n© For any Copyright Claim : mailfantasticmusic@gmail.com\n\n---------------------------------------------------------------\n♫ Tracklist ♫\n00:00 RudeManners - The Last Cherry Blossom\n01:49 Jinsang - Flow On \n05:22 Nohidea. - Haiku \n07:03 mr. käfer - Cosmic Harmonies\n09:29 Gorila - takeshi \n12:09 BluntOne - New Dawn \n14:32 Flofilz - Dulce \n16:36 Freddie Joachim - Breeze \n18:50 charlie toØ human - Walk in the park \n20:55 Gorila - Vous\n24:07 B-Side. - Pair \n27:08 Gorila - Parttime \n29:30 Freddie Joachim - Autumn Rain \n31:45 Oskar Hahn - Triggers \n34:28 Pabzzz - Together\n36:42 BluntOne - Sunny Side Up\n38:30 Oskar Hahn - Anikawer\n41:20 BROCKBEATS - Hot Spring\n43:23 BluntOne - passing by.\n---------------------------------------------------------------\n\nFollow\nHip Dozer https://soundcloud.com/hipdozer\nRudeManners https://soundcloud.com/rudemanners\nJinsang https://soundcloud.com/jinsangbeats\nNohidea https://soundcloud.com/nohidea\nmr. käfer https://soundcloud.com/mr-k-fer\nGorila https://soundcloud.com/gorilamc\nBluntOne https://soundcloud.com/bluntone\nFlofilz https://soundcloud.com/flofills\ncharlie toØ human https://soundcloud.com/charlietoohuman\nB-Side. https://soundcloud.com/b-side-production\nFreddie Joachim https://soundcloud.com/freddiejoachim\nOskar Hahn https://open.spotify.com/artist/5D47BWKQT56z8xey53ZxmL\nPabzzz https://soundcloud.com/pabzzz\nBROCKBEATS https://soundcloud.com/brock1112\n\nOriginal picture by Evgeny Lushpin\nhttp://lushpin.com\nhttps://www.instagram.com/lushpin_/"
	   }
	  }
	 },
	 {
	  "kind": "youtube#video",
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/P5eDIFOd8OspLdgm5xHSWifMQb0\"",
	  "id": "A6eupBe1c6I",
	  "snippet": {
	   "publishedAt": "2019-07-20T18:30:00.000Z",
	   "channelId": "UC-pE29OUR43BqqBxIeyo_GA",
	   "title": "The Complete Rick And Morty Timeline | Channel Frederator",
	   "description": "Ready to go on an adventure through time and space and many multiverses. Yep, that's right here at Channel Frederator we are going to explore the complete Rick and Morty timeline. We will be covering everything up to season 3, so here is a refresher before season 4. \n\n\nSubscribe\nhttp://frdr.us/CHFsubscribe\n\nCheck out our Patreon\nhttp://frdr.us/YTCFPatreon\n\nWebsite\nhttp://frdr.us/YTCFdotcom\n\nTwitter\nhttp://frdr.us/YTCFtwitter\n\nInstagram\nhttp://frdr.us/YTCFinsta\n\nFacebook\nhttp://frdr.us/YTCFfacebook\n\nGet Email Updates\nhttps://frdr.us/CFemail\n\nCheck out our other channels!\nCartoon Hangover - http://frdr.us/YTCHyoutube\nThe Leaderboard - http://frdr.us/YTTLByoutube\n\nContact Info:\nchannelfred@gmail.com\n\nWork With Us\nhttp://frdr.us/YTFREDjobs\n\n-----------------------------------\nCredits\n-----------------------------------\nResearched by: Jessica Klein\nWritten by: Jessica Klein\nHosted by: Jacob Atkinson\nEdited by: Phoenix Williams\n\nGraphics & Thumbnail by: Alexandria Batchelor\nProducers: Adrian Apolonio\nProduction Assistant: Chantel Ikotidem \nExecutive Producers: Carrie Miller, Fred Seibert, Jeremy Rosen\n\nMusic Provided by Epidemic Sound\n\n-----------------------------------\nImage Source List\n-----------------------------------\n\nChannel Frederator is cartoon central on the Internet.\n\nRemember: Frederator loves you.",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/A6eupBe1c6I/default.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/A6eupBe1c6I/mqdefault.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/A6eupBe1c6I/hqdefault.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/A6eupBe1c6I/sddefault.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/A6eupBe1c6I/maxresdefault.jpg",
		 "width": 1280,
		 "height": 720
		}
	   },
	   "channelTitle": "ChannelFrederator",
	   "tags": [
		"rick and morty",
		"rick and morty season 3",
		"rick and morty timeline",
		"the complete rick and morty timeline",
		"rick and morty timeline explained",
		"complete rick and morty timeline",
		"rick and morty season 4",
		"adult swim",
		"rick and morty season 1",
		"timeline of rick and morty",
		"rick and morty recap",
		"cronenburg",
		"complete rick and morty story",
		"channel frederator",
		"timelines",
		"rick and morty explained",
		"rick and morty storyline",
		"rick and morty story circle",
		"rick and morty full recap",
		"cartoons"
	   ],
	   "categoryId": "24",
	   "liveBroadcastContent": "none",
	   "defaultLanguage": "en",
	   "localized": {
		"title": "The Complete Rick And Morty Timeline | Channel Frederator",
		"description": "Ready to go on an adventure through time and space and many multiverses. Yep, that's right here at Channel Frederator we are going to explore the complete Rick and Morty timeline. We will be covering everything up to season 3, so here is a refresher before season 4. \n\n\nSubscribe\nhttp://frdr.us/CHFsubscribe\n\nCheck out our Patreon\nhttp://frdr.us/YTCFPatreon\n\nWebsite\nhttp://frdr.us/YTCFdotcom\n\nTwitter\nhttp://frdr.us/YTCFtwitter\n\nInstagram\nhttp://frdr.us/YTCFinsta\n\nFacebook\nhttp://frdr.us/YTCFfacebook\n\nGet Email Updates\nhttps://frdr.us/CFemail\n\nCheck out our other channels!\nCartoon Hangover - http://frdr.us/YTCHyoutube\nThe Leaderboard - http://frdr.us/YTTLByoutube\n\nContact Info:\nchannelfred@gmail.com\n\nWork With Us\nhttp://frdr.us/YTFREDjobs\n\n-----------------------------------\nCredits\n-----------------------------------\nResearched by: Jessica Klein\nWritten by: Jessica Klein\nHosted by: Jacob Atkinson\nEdited by: Phoenix Williams\n\nGraphics & Thumbnail by: Alexandria Batchelor\nProducers: Adrian Apolonio\nProduction Assistant: Chantel Ikotidem \nExecutive Producers: Carrie Miller, Fred Seibert, Jeremy Rosen\n\nMusic Provided by Epidemic Sound\n\n-----------------------------------\nImage Source List\n-----------------------------------\n\nChannel Frederator is cartoon central on the Internet.\n\nRemember: Frederator loves you."
	   },
	   "defaultAudioLanguage": "en"
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
	  "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/V7R4vHV1hyambUDO_fPLPSbQL8A\"",
	  "id": "bQzIQa5YKvw",
	  "snippet": {
	   "publishedAt": "2019-05-22T16:48:43.000Z",
	   "channelId": "UCOxqgCwgOqC2lMqC5PYz_Dg",
	   "title": "Chill Study Beats 6  • instrumental hip hop mix [2019]",
	   "description": "🐾 Listen to the mix on Spotify: https://open.spotify.com/track/0oZAxySv2ClJfWK8DyMx1i?si=AFX3NPnqTMih0snCfpg-Vg\n\n🎶 Listen to Chillhop on Spotify & Apple Music\n・ https://chillhop.lnk.to/sptfySi (Spotify)\n・ https://chillhop.lnk.to/applemusic (Apple Music)\n\n🐾Hey folks, here’s our latest Chill Study Beats mix, made out of one hour of smooth instrumentals beats. Cheers to all the artists in this list and good luck with studying for your exams!\n\n 🎧 Tracklist (* = Unreleased)\n00:00 mommy x Philanthrope - thinking of you w/Kyle Mc Evoy\n*02:11 leavv - driftwood\n04:54 blnkspc_ - quietly\n07:32 Toonorth - Effervescent\n09:49 Tom Doolie - Lemon\n*11:37 middle school - wannabe w/Aso\n13:58 psalm trees - Clocks Forward w/Guillaume Muschalle\n16:20 less.people - what will you do\n19:26 Ian Ewing - LuvnYou\n22:38 saib. - rainforest\n28:02 chief. - yesterday\n30:36 sleepy fish - i wish it would never stop snowing\n33:52 mommy - polarbeer\n*36:36 middle school - do you want to pretend we’re in love sometime\n38:54 tesk - burnmymind\n41:24 City Girl - Eowyn\n44:23 Moose Dawa - Remember\n46:26 Swørn - Far Away\n*48:12 sleepy fish - forgot it was monday\n50:46 fantompower - in a new space\n53:16 Smoke Trees - takondwa\n55:22 Deeb - Swiss\n\n\n🙌 Follow the artists\nmommy » https://soundcloud.com/beatsbymommy\nPhilanthrope » https://soundcloud.com/philanthrope1\nKyle McEvoy » https://soundcloud.com/kylemcevoymusic\nleavv » https://soundcloud.com/leavv\nB-Side » https://soundcloud.com/b-side-production\nTesk » https://soundcloud.com/tesk\nToonorth » https://soundcloud.com/countbazzy-2\nTom Doolie » https://soundcloud.com/tomdoolieofficial\nAso » https://soundcloud.com/aricogle\nMiddle School » https://soundcloud.com/yungmiddleschool\nPsalm Trees » https://soundcloud.com/psalm-trees\nGuillaume Muschalle » https://soundcloud.com/guillaume-muschalle\nless.people » https://soundcloud.com/lesspeople\nIan Ewing » https://soundcloud.com/ianewingmke\nsaib » https://soundcloud.com/saib_eats\nchief. » https://soundcloud.com/chiefslc\nSleepy Fish » https://soundcloud.com/sleeepyfish\nCity Girl » https://soundcloud.com/citygrl\nMoose Dawa » https://soundcloud.com/moose-dawa\nSwørn » https://soundcloud.com/prodsworn\nfantompower » https://soundcloud.com/fantompower\nSmoke Trees » https://soundcloud.com/smoke_them_trees\ndeeB » https://soundcloud.com/deeb\n\n\n🎨 Animation by Tévy Dubray & Jeoffrey Magellan\n・https://www.tev-art.com/\n・https://www.instagram.com/tevy_dub/\n\n・http://jeoffreymagellan.tumblr.com\n・https://instagram.com/magellan_illustration\n\n\n✔️ Check out our 24/7 livestream\n・ https://live.chillhop.com\n\n🛍Chillhop Webshop\n・ https://shop.chillhop.com\n\n🐾 More Chillhop?\n・ https://chillhop.com/listen\n\n🌎 Website\n・ https://chillhop.com\n\n❔ Use our music in your videos\n・https://chillhop.com/license\n\n🙏 The Chillhop Community\n・ https://discord.gg/chillhop\n・ https://reddit.com/r/chillhop\n・ https://www.facebook.com/groups/1561371024098016\n\n#lofihiphopmix #beatstostudyto #chillhopmix",
	   "thumbnails": {
		"default": {
		 "url": "https://i.ytimg.com/vi/bQzIQa5YKvw/default.jpg",
		 "width": 120,
		 "height": 90
		},
		"medium": {
		 "url": "https://i.ytimg.com/vi/bQzIQa5YKvw/mqdefault.jpg",
		 "width": 320,
		 "height": 180
		},
		"high": {
		 "url": "https://i.ytimg.com/vi/bQzIQa5YKvw/hqdefault.jpg",
		 "width": 480,
		 "height": 360
		},
		"standard": {
		 "url": "https://i.ytimg.com/vi/bQzIQa5YKvw/sddefault.jpg",
		 "width": 640,
		 "height": 480
		},
		"maxres": {
		 "url": "https://i.ytimg.com/vi/bQzIQa5YKvw/maxresdefault.jpg",
		 "width": 1280,
		 "height": 720
		}
	   },
	   "channelTitle": "Chillhop Music",
	   "tags": [
		"chill study beats",
		"chillhop 2019",
		"blnkspc_ - quietly",
		"chillhop raccoon",
		"beats to study to",
		"study mix",
		"chill beats",
		"raccoon beats",
		"lofi hip hop",
		"chillhop",
		"lofi",
		"soulful",
		"라디오",
		"로파이힙합",
		"lofi radio",
		"jazz hip hop",
		"chill gaming beats",
		"chill relax beats",
		"anime beats",
		"chillhop records",
		"chill mix",
		"lo-fi beats",
		"lo fi hip hop",
		"nujabes",
		"lofi mix",
		"mommy x Philanthrope",
		"sleepy fish - i wish it would never",
		"City Girl"
	   ],
	   "categoryId": "10",
	   "liveBroadcastContent": "none",
	   "defaultLanguage": "en",
	   "localized": {
		"title": "Chill Study Beats 6  • instrumental hip hop mix [2019]",
		"description": "🐾 Listen to the mix on Spotify: https://open.spotify.com/track/0oZAxySv2ClJfWK8DyMx1i?si=AFX3NPnqTMih0snCfpg-Vg\n\n🎶 Listen to Chillhop on Spotify & Apple Music\n・ https://chillhop.lnk.to/sptfySi (Spotify)\n・ https://chillhop.lnk.to/applemusic (Apple Music)\n\n🐾Hey folks, here’s our latest Chill Study Beats mix, made out of one hour of smooth instrumentals beats. Cheers to all the artists in this list and good luck with studying for your exams!\n\n 🎧 Tracklist (* = Unreleased)\n00:00 mommy x Philanthrope - thinking of you w/Kyle Mc Evoy\n*02:11 leavv - driftwood\n04:54 blnkspc_ - quietly\n07:32 Toonorth - Effervescent\n09:49 Tom Doolie - Lemon\n*11:37 middle school - wannabe w/Aso\n13:58 psalm trees - Clocks Forward w/Guillaume Muschalle\n16:20 less.people - what will you do\n19:26 Ian Ewing - LuvnYou\n22:38 saib. - rainforest\n28:02 chief. - yesterday\n30:36 sleepy fish - i wish it would never stop snowing\n33:52 mommy - polarbeer\n*36:36 middle school - do you want to pretend we’re in love sometime\n38:54 tesk - burnmymind\n41:24 City Girl - Eowyn\n44:23 Moose Dawa - Remember\n46:26 Swørn - Far Away\n*48:12 sleepy fish - forgot it was monday\n50:46 fantompower - in a new space\n53:16 Smoke Trees - takondwa\n55:22 Deeb - Swiss\n\n\n🙌 Follow the artists\nmommy » https://soundcloud.com/beatsbymommy\nPhilanthrope » https://soundcloud.com/philanthrope1\nKyle McEvoy » https://soundcloud.com/kylemcevoymusic\nleavv » https://soundcloud.com/leavv\nB-Side » https://soundcloud.com/b-side-production\nTesk » https://soundcloud.com/tesk\nToonorth » https://soundcloud.com/countbazzy-2\nTom Doolie » https://soundcloud.com/tomdoolieofficial\nAso » https://soundcloud.com/aricogle\nMiddle School » https://soundcloud.com/yungmiddleschool\nPsalm Trees » https://soundcloud.com/psalm-trees\nGuillaume Muschalle » https://soundcloud.com/guillaume-muschalle\nless.people » https://soundcloud.com/lesspeople\nIan Ewing » https://soundcloud.com/ianewingmke\nsaib » https://soundcloud.com/saib_eats\nchief. » https://soundcloud.com/chiefslc\nSleepy Fish » https://soundcloud.com/sleeepyfish\nCity Girl » https://soundcloud.com/citygrl\nMoose Dawa » https://soundcloud.com/moose-dawa\nSwørn » https://soundcloud.com/prodsworn\nfantompower » https://soundcloud.com/fantompower\nSmoke Trees » https://soundcloud.com/smoke_them_trees\ndeeB » https://soundcloud.com/deeb\n\n\n🎨 Animation by Tévy Dubray & Jeoffrey Magellan\n・https://www.tev-art.com/\n・https://www.instagram.com/tevy_dub/\n\n・http://jeoffreymagellan.tumblr.com\n・https://instagram.com/magellan_illustration\n\n\n✔️ Check out our 24/7 livestream\n・ https://live.chillhop.com\n\n🛍Chillhop Webshop\n・ https://shop.chillhop.com\n\n🐾 More Chillhop?\n・ https://chillhop.com/listen\n\n🌎 Website\n・ https://chillhop.com\n\n❔ Use our music in your videos\n・https://chillhop.com/license\n\n🙏 The Chillhop Community\n・ https://discord.gg/chillhop\n・ https://reddit.com/r/chillhop\n・ https://www.facebook.com/groups/1561371024098016\n\n#lofihiphopmix #beatstostudyto #chillhopmix"
	   },
	   "defaultAudioLanguage": "en"
	  }
	 }
	]
   }
   