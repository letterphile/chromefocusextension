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
let i=0;
const lenWhiteList = whiteListIg.length;

while(i<lenWhiteList){
    if(document.location.href.includes(whiteListIg[i])){
        whiteFlag=true;
        break;
    }
}

if(!document.location.href.includes('medium.com') && !document.location.href.includes('whatsapp.com')){
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
else if (whiteFlag){

}
else{
 
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
    // for (classVideo of classVideos){
    //     classVideo.remove()
    // }
}
removeCraps()
const observer = new MutationObserver(()=>{

   removeCraps()
});

observer.observe(targetNode,config)
