const localVideoFiles = [
    "/vids/glockinrari.mp4",
    "/vids/packwatch.mp4",
    "/vids/vonpack.mp4",
    "/vids/oldhead.mp4",
    "/vids/lilbaby.mp4",
    "/vids/vincemoney.mp4",
    "/vids/khaledflex.mp4",
    "/vids/joesmad.mp4",
    "/vids/madmad.mp4",
  // Add more video filenames as needed
];

// Function to get a random video filename from the array
function getRandomVideoFilename() {
  const randomIndex = Math.floor(Math.random() * localVideoFiles.length);
  return localVideoFiles[randomIndex];
}

const randomVideoFilename = getRandomVideoFilename();

    // Add video player with the random video filename
    const videoElement = document.createElement('video');
    videoElement.width = "560";
    videoElement.height = "315";
    videoElement.controls = true;
    videoElement.autoplay = true;

    // Create source element for the video
    const sourceElement = document.createElement('source');
    sourceElement.src = randomVideoFilename;
    sourceElement.type = 'video/mp4';

    // Append the source element to the video element
    videoElement.appendChild(sourceElement);

    // Append the elements to a flex container
    const flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';
    flexContainer.style.flexDirection = 'column';
    flexContainer.style.alignItems = 'center';
    flexContainer.style.justifyContent = 'center';
    flexContainer.appendChild(videoElement);

    // Append the flex container to the body
    document.body.appendChild(flexContainer);

    // Add padding before the button
    const paddingElement = document.createElement('p');
    paddingElement.innerHTML = '';
    document.body.appendChild(paddingElement);



    // Add go back button
    const goBackButton = document.createElement('button');
    goBackButton.textContent = 'Go Back';
    document.body.style.textAlign = 'center';
    document.body.style.padding = '10px';

    goBackButton.addEventListener('click', () => {
        // Redirect to another HTML site
        window.location.href = 'index.html';
    });

    document.body.appendChild(goBackButton);

    // Create footer element
    const footer = document.createElement('footer');
    footer.innerHTML = '<br>Made by <a href="https://www.alexj.io/">Alex Jenkins</a>,';
    footer.innerHTML += '<br> Go Jackets! <br>';
    footer.innerHTML += '<br> <a href="https://www.buymeacoffee.com/alexjenkins"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=alexjenkins&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    document.body.appendChild(footer);