const localVideoFiles = [
  // "/vids/glockinrari.mp4",
  // "/vids/packwatch.mp4",
  // "/vids/vonpack.mp4",
  // "/vids/oldhead.mp4",
  // "/vids/lilbaby.mp4",
  // "/vids/vincemoney.mp4",
  // "/vids/khaledflex.mp4",
  // "/vids/joesmad.mp4",
  // "/vids/madmad.mp4",
  "/vids/plugwalk.mp4",
  "/vids/nba.mp4",
  "/vids/ronaldo.mp4",
  "/vids/manymen.mp4",
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
    footer.innerHTML = 'Made by <a href="https://www.alexj.io/">Alex Jenkins</a>,';
    footer.innerHTML += '<br> Go Jackets! <br>';
    footer.innerHTML += '<iframe src="https://ghbtns.com/github-btn.html?user=rockenman1234&repo=didugawin&type=star&size=large&text=false" frameborder="0" scrolling="0" width="40" height="30" title="GitHub"></iframe>';
    footer.innerHTML += '<br> <a href="https://www.buymeacoffee.com/alexjenkins" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 30px !important; width: 109px !important; margin-right: 5px;"></a>';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    document.body.appendChild(footer);

    
