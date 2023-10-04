console.log("HELLO");

// initialising Variables 

let index = 0;
let AudioElement = new Audio('Somewhere.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let progressBar = document.getElementsByClassName('progressBar');
let gif = document.getElementById('gif');

let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName : "somewhere only we know" , filePath : "somewhere.mp3" , coverPath : "logo.keane.jpg"},
    { songName : "Runaway - Aurora" , filePath : "runaway.mp3" , coverPath : "logo.aurora.jpg"},
    { songName : "Bella Ciao !" , filePath : "Bella.mp3" , coverPath : "logo.bellaciao.jpg"},
    { songName : "Hymn for the weekend" , filePath : "Hymnfortheweekend.mp3" , coverPath : "logo.hymn.jpg"},
    { songName : "Let her go - Passenger " , filePath : "Passanger.mp3" , coverPath : "logo.passanger.jpg"},
    { songName : "The Nights - Avicii" , filePath : "AviciiTheNights.mp3" , coverPath : "logo.nights.jpg"},
    { songName : "Nandemonaiya - Your Name" , filePath : "Nandemonaiya.mp3" , coverPath : "log.yourname.jpg"},
    { songName : "Another love - Tom odell" , filePath : "Anotherlove.mp3" , coverPath : "logo.another love.jpg"},
   
]



songItem.forEach((element , i)=>{
    console.log(element , i);

    document.getElementsByTagName("img")[i+1].src = songs[i].coverPath;
    document.getElementsByClassName("Name")[i].innerText = songs[i].songName;
    
})



// Event listing 

masterPlay.addEventListener('click' , ()=>{
    if(AudioElement.paused || AudioElement.currentTime <= 0){
        AudioElement.play();

        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
        document.getElementById('showName').innerText = songs[index].songName;
       
    }
    else{
        AudioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
        document.getElementById('showName').innerText = songs[index].songName;
    }
})


AudioElement.addEventListener('timeupdate' , ()=>{
    

    let progress = parseInt((AudioElement.currentTime/AudioElement.duration)*100);

    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener('change' , ()=>{
    AudioElement.currentTime = (myProgressBar.value * AudioElement.duration)/100 ;
})



function addPlay(){
    Array.from(document.getElementsByClassName('itemPlay')).forEach((element)=>{
        element.classList.add("fa-play");
    })
}
Array.from(document.getElementsByClassName('itemPlay')).forEach((element)=>{

    element.addEventListener('click' , (e)=>
    {
        addPlay();
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        index = parseInt(e.target.id);
        AudioElement.src = songs[index].filePath; 
        AudioElement.currentTime = 0;
        AudioElement.play();

        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;

        document.getElementById('showName').innerText = songs[index].songName;

    })
})


document.getElementById('next').addEventListener('click' , ()=>{

if(index >= 7){
    index = 0;
    
}
else{
    index += 1;
    
}
AudioElement.src = songs[index].filePath; 
AudioElement.currentTime = 0;
AudioElement.play();
masterPlay.classList.remove('fa-play');
masterPlay.classList.add('fa-pause');
gif.style.opacity=1;

addPlay();
document.getElementById(parseInt(index)).classList.remove('fa-play');
document.getElementById(parseInt(index)).classList.add('fa-pause');

document.getElementById('showName').innerText = songs[index].songName;



})

document.getElementById('back').addEventListener('click' , ()=>{

    if(index <= 0){
        index = 7;
        
        
    }
    else{
        index -= 1;
        
    }
    AudioElement.src = songs[index].filePath; 
    AudioElement.currentTime = 0;
    AudioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;

    addPlay();

    document.getElementById(parseInt(index)).classList.remove('fa-play');
    document.getElementById(parseInt(index)).classList.add('fa-pause');

    document.getElementById('showName').innerText = songs[index].songName;
})