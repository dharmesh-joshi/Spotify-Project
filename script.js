
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
    console.log(a);
    let response =  await a.json();
    console.log(response);
}
  

main()

// async function main() {
//     try {
//         // Fetch the response from the server
//         let a = await fetch("http://127.0.0.1:5500/songs/");
        
//         // Log the full response object
//         console.log(a);

//         // Check if the response is OK (status code 200-299)
//         if (!a.ok) {
//             throw new Error(`HTTP error! Status: ${a.status}`);
//         }

//         // Convert the response to text
//         let response = await a.text();

//         // Log the response body
//         console.log(response);
//     } catch (error) {
//         // Catch any errors that occurred during the fetch or conversion
//         console.error("Error:", error);
//     }
// }

// main();


// async function main() {
//     try {
//         // Fetch the response from the server
//         let a = await fetch("http://127.0.0.1:5500/songs/");
        
//         // Log the full response object
//         console.log(a);

//         // Check if the response is OK (status code 200-299)
//         if (!a.ok) {
//             throw new Error(`HTTP error! Status: ${a.status}`);
//         }

//         // Convert the response to JSON (assuming the response is in JSON format)
//         let response = await a.json(); // Ensure your server returns JSON data

//         // Log the data in table format
//         console.table(response);
//     } catch (error) {
//         // Catch any errors that occurred during the fetch or conversion
//         console.error("Error:", error);
//     }
// }

// main();


// async function main() {
//     try {
//         // Fetch the response from the server
//         let a = await fetch("http://127.0.0.1:5500/songs/");
        
//         // Log the full response object
//         console.log(a);

//         // Check if the response is OK (status code 200-299)
//         if (!a.ok) {
//             throw new Error(`HTTP error! Status: ${a.status}`);
//         }

//         // Check the content type of the response
//         const contentType = a.headers.get("content-type");

//         if (contentType && contentType.includes("application/json")) {
//             // Parse the response as JSON if it's JSON
//             let jsonResponse = await a.json();
//             console.table(jsonResponse); // Log the data in table format
//         } else {
//             // Handle non-JSON response (likely HTML)
//             let textResponse = await a.text();
//             console.log("Response is not JSON:", textResponse);
//         }
//     } catch (error) {
//         // Catch any errors that occurred during the fetch or conversion
//         console.error("Error:", error);
//     }
// }

// main();
