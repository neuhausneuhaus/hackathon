
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

function makeIDList(arr) {
	makeIDListCalled++;
	if (makeIDListCalled<=1){
		for (let obj of arr) {
                        let sliced = obj.search.slice(3);
			IDList.push(sliced);
                        //PSEUDO/HARDCODE: should pass in the fetched obj's values into ourData
                        ourDate = document.createTextNode('July 19, 2019'); 
                        //this appends it to the space under (approrpiately) (doesn't work when i try to do a sample fetch req)
                        obj.appendChild(ourDate);
		}
                return IDList
        }
}


const callback = function(mutationList, observer) {
	for (let mutation of mutationList) {    
		if (mutation.type === 'attributes' && mutation.target.className === 'video-skeleton hidden') {
			nodeList = document.querySelectorAll('.yt-simple-endpoint.style-scope.ytd-compact-video-renderer'); //this works, but executes faster than the page loads and will return 0 nodes;
                        if (nodeList.length>14){
                                //executes the creation of arrays(of videoIDs)
                                console.log(makeIDList(nodeList));

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