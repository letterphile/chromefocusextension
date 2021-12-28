const targetNode = document.body;
const config = { attributes: false, childList: true, subtree: true };
function removeCraps(){
let images = document.getElementsByTagName('img')
let longImages = document.getElementsByTagName('image')
let videos = document.getElementsByTagName('video')
let classImages = document.getElementsByClassName('r-1wyyakw')
// let classVideos = document.getElementsByClassName('r-ipm5af')
    for (image of images){
        image.remove()
    }
    for (longImage of longImages){
        longImage.remove()
    }
    for (video of videos){
        video.remove()
    }
    for (classImage of classImages){
        classImage.remove()
    }

    // for (classVideo of classVideos){
    //     classVideo.remove()
    // }
}
removeCraps()
const observer = new MutationObserver(()=>{

   removeCraps()
});

observer.observe(targetNode,config)
