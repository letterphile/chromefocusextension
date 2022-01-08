const targetNode = document.body;
const config = { attributes: false, childList: true, subtree: true };
function removeCraps(){
let images = document.getElementsByTagName('img')
let longImages = document.getElementsByTagName('image')
let videos = document.getElementsByTagName('video')
let classImages = document.getElementsByClassName('r-1wyyakw')

// let classVideos = document.getElementsByClassName('r-ipm5af')
let whiteListIg = ['lyitpgrs','lyit_literaturesociety',
'lyit_indian_society','lyitinternational.society','lyitcareersservice','lyit_int',
'careersportal.ie','mycareerplan.ie','lyit.su'];

let whiteFlag = false;


if(document.location.href=="https://www.instagram.com/"){
 let articles  = document.getElementsByTagName('article')
 for (article of articles){
    
     if (whiteListIg.includes(article.getElementsByTagName('a')[0].innerHTML)){
    
}
else{
    article.style.visibility = "hidden";
}
}
}
else{
if (whiteListIg.includes(document.location.href.split('/')[3])){
    console.log('hello, me, a whitelisted url')
    }
else{
if(!document.location.href.includes('medium.com') && !document.location.href.includes('whatsapp.com')){
    console.log("firs if is executed !!")
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
}

else{
    console.log("last else block is executed!!")
    //  let mediumProfileImages = document.querySelectorAll('')
    let mediumProfilePageImages = document.getElementsByClassName('cx')
    let whatsAppContactImages  = document.getElementsByClassName('_3GlyB')
    for (whatsAppContactImage of whatsAppContactImages){
        whatsAppContactImage.remove()
    }
    for (mediumProfilePageImage of mediumProfilePageImages){
        mediumProfilePageImage.remove()
    }
    // for (mediumProfileImage of mediumProfileImages){
   
    //     mediumProfileImage.remove()
        
    // }
    

}
}
    // for (classVideo of classVideos){
    //     classVideo.remove()
    // }
}
}

removeCraps()
const observer = new MutationObserver(()=>{

   removeCraps()
});

observer.observe(targetNode,config)
