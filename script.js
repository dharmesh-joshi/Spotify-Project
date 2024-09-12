
// const audioPLayBtn = document.querySelector("audioPlayBtn")
// let songIndex = 0;
// let audio = new Audio("file:///C:/Users/dharm/OneDrive/Documents/Spotify%20Project/songs/Tu_Hai___.mp3");
// let masterPlay = document.getElementById("masterPlay");

// let songs = [
//     {songName: "tu hai", filePath: "songs/Tu_Hai__.mp3", coverPath: "covers/Tu_Hai__.mp3"}
// ]
// masterPlay.addEventListener("click", () => {
//     if(audio.paused || audio.currentTime <= 0) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// })

// document.addEventListener("time");


async function main() {
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    console.log(response);
    // let div = document.createElement("div");
    // div.innerHTML = response;
    // let as = div.getElementsByTagName("a");
    // let songs = []
    // for (let index = 0; index < as.length; index++) {
    //     const element = as[index];
    //     if (element.href.endsWith(".mp3")) {
    //         songs.push(element.href)
    //     }
    // }
    // return songs
}

// async function main() {
//     // Get the list of all songs
//     let songs = await getSongs()

//     // Play the first songs
//     var audio = new Audio('songs');
//     audio.play();
// }

main()

