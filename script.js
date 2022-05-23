const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass that to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log("Error occurred in selectMediaStream", error);
    }
}

//Making picture in picture appear on click of a button
button.addEventListener('click', async () => {
    console.log("Clicked");
    //Disable button
    button.disabled = true;
    //Starting picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;

});

//On Load
selectMediaStream();