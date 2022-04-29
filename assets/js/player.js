console.log("connected");
/* pour déclarer des variables */
const back = document.getElementById("back");
const play = document.getElementById("play");
const next = document.getElementById("next");
/* let current =  array.findIndex(function(currentValue, index, arr)); */
const audio = new Audio("./assets/audio/its-bigger-than-hip-hop-dead-prez.mp3");

const TbPlaylist = [
    {
      mp3: "its-bigger-than-hip-hop-dead-prez.mp3",
      cover: "coverDeadPrez.jpg",
      title: "It's bigger than Hip Hop",
      artiste: "Dead Prez",
      genre: "Hip Hop",
      annee: 1998,
      desc: "blblablablbl qsdgkq",
      prix: 20
    },
    {
      mp3: "soul-of-mischief-93-til-infinity.mp3",
      cover: "coverSoulOf.jpg",
      title: "93 til infinity",
      artiste: "Soul Of Mischief",
      genre: "Hip Hop",
      annee: 1993,
      desc: "blblablablbl qsdgkq",
      prix: 30
    },
    {
      mp3: "the-pharcyde-passin-me-by.mp3",
      cover: "coverPharcyde.jpg",
      title: "Passin me by",
      artiste: "The Pharcyde",
      genre: "Hip Hop",
      annee: 1993,
      desc: "blblablablbl qsdgkq",
      prix: 40
    }
  ];


//console.dir(play);
play.addEventListener("click", function(){
    console.log("click on play");
    if(audio.paused)
    {
        audio.play();
        play.src = "./assets/img/play-circle-solid.svg"
    }
    else
    {
        audio.pause();
        play.src = "./assets/img/pause-circle-regular.svg"
    }
   
});

next.addEventListener("click", function(){
    console.log("click on next");
   
   
});