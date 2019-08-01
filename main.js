
//hackathon (newcourt)
//idea: yt extension --> have videos on watch next/recommended to 'hover' dates or print in box;
//approach: 
//(1) 'scrape' web page (of video we're on) for recommended IDs;
//it's located in class'ytd-watch-next-secondary-results-render'
//ytd-compact-radio-renderer (tag)
//ytd-compact-video-renderer (tag)

//mutaation observer approach?

const targetNode = document.getElementById('related');
const sidebarVideos = [];
let nodeList;
const config = {attributes: true, childlist: true, subtree: true};

let makeIDListCalled = 0;
let IDList = [];
function makeIDList(arr) {
	makeIDListCalled++;
	if (makeIDListCalled<=1){
		for (let obj of arr) {
			let sliced = obj.search.slice(4);
			IDList.push(sliced);
		}
		console.log(IDList);
	}
}


const callback = function(mutationList, observer) {
	for (let mutation of mutationList) {                
		if (mutation.type === 'attributes' && mutation.target.className === 'video-skeleton hidden') {
			nodeList = document.querySelectorAll('.yt-simple-endpoint.style-scope.ytd-compact-video-renderer'); //this works, but executes faster than the page loads and will return 0 nodes;
			if (nodeList.length>14){
				makeIDList(nodeList);
			}
		}       
	}
}



const observer = new MutationObserver(callback);
observer.observe(targetNode, config);








// console.log(videoLinks);

// $(window).bind("load", () => {
//         console.log(document.querySelectorAll('.style-scope ytd-compact-video-renderer'))
// })
        
// console.log(document.querySelectorAll('.style-scope ytd-compact-video-renderer')); //this works, but executes faster than the page loads and will return 0 nodes;
//...vi/YT_ID_HERE/hqd...

//(2) YT API --> input IDs into search and populate data
        //should search for date created and return those dates in order to us







//(3) Append the API's results (dates) to the Original page's recommended videos (in order)
