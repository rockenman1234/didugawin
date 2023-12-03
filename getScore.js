const apiUrl = "https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/uga";

// Array of local video filenames
const localVideoFiles = [
    "/vids/glockinrari.mp4",
    "/vids/packwatch.mp4",
    "/vids/vonpack.mp4",
    "/vids/oldhead.mp4",
    "/vids/lilbaby.mp4",
    "/vids/vincemoney.mp4",
    "/vids/khaledflex.mp4",
    "/vids/joesmad.mp4",
  // Add more video filenames as needed
];

// Function to get a random video filename from the array
function getRandomVideoFilename() {
  const randomIndex = Math.floor(Math.random() * localVideoFiles.length);
  return localVideoFiles[randomIndex];
}

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Get UGA's score
    const ugaScore = data.team.nextEvent[0].competitions[0].competitors.find(comp => comp.team.abbreviation === "UGA").score.value;

    // Get the opponent's score
    const opponentsScore = data.team.nextEvent[0].competitions[0].competitors.find(comp => comp.team.abbreviation !== "UGA").score.value;

    // Determine the result
    let result;
    if (ugaScore > opponentsScore) {
      result = "uGA won.";
    } else if (ugaScore < opponentsScore) {
      result = "uGA lost! America won today.";
    } else {
      result = "It's a tie.";
    }

    // Create UGA's score element
    const ugaScoreElement = document.createElement('p');
    ugaScoreElement.textContent = `uGA's score: ${ugaScore}`;

    // Create opponent's score element
    const opponentScoreElement = document.createElement('p');
    opponentScoreElement.textContent = `Their opponent's score: ${opponentsScore}`;

    // Create result element
    const resultElement = document.createElement('p');
    resultElement.textContent = result;

    // Apply styles based on the result
    if (ugaScore < opponentsScore) {
      resultElement.style.fontSize = '30px'; // Set font size to 30px
      resultElement.style.color = 'green'; // Set font color to green

      // Get a random video filename
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

      flexContainer.appendChild(ugaScoreElement);
      flexContainer.appendChild(opponentScoreElement);
      flexContainer.appendChild(resultElement);
      flexContainer.appendChild(videoElement);

      // Append the flex container to the body
      document.body.appendChild(flexContainer);
    } else if (ugaScore > opponentsScore) {
        resultElement.style.color = 'red'; // Set font color to red
        resultElement.style.fontSize = '60px'; // Set font size to 30px
      
        // Append the elements to a flex container (excluding video)
        const flexContainer = document.createElement('div');
        flexContainer.style.display = 'flex';
        flexContainer.style.flexDirection = 'column';
        flexContainer.style.alignItems = 'center';
        flexContainer.style.justifyContent = 'center';
      
        flexContainer.appendChild(ugaScoreElement);
        flexContainer.appendChild(opponentScoreElement);
        flexContainer.appendChild(resultElement);
      
        // Append the flex container to the body
        document.body.appendChild(flexContainer);
      }

    // Add the footer dynamically after the script has executed
    const footer = document.createElement('footer');
    footer.innerHTML = '<br>Made by <a href="https://www.alexj.io/">Alex Jenkins</a>,';
    footer.innerHTML += '<br> Go Jackets! <br>';
    footer.innerHTML += '<br> <a href="https://www.buymeacoffee.com/alexjenkins"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=alexjenkins&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    document.body.appendChild(footer);
  })
  .catch(error => console.error("Error fetching data:", error));

