const targetNode = document.body;
const config = { attributes: false, childList: true, subtree: true };
let images = document.getElementsByTagName('img')
    let videos = document.getElementsByTagName('video')
    for (image of images){
        image.remove()
    }
    for (video of videos){
        video.remove()
    }
const observer = new MutationObserver(()=>{

    let images = document.getElementsByTagName('img')
    let videos = document.getElementsByTagName('video')
    for (image of images){
        image.remove()
    }
    for (video of videos){
        video.remove()
    }
});

observer.observe(targetNode,config)
