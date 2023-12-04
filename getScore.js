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
    "/vids/madmad.mp4",
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
        const nextEvent = data.team.nextEvent[0];

        if (!nextEvent) {
            // No upcoming event
            const noEventElement = document.createElement('p');
            noEventElement.textContent = "UGA has not played anyone recently.";
            document.body.appendChild(noEventElement);
            return;
        }

        const competitions = nextEvent.competitions[0];

        if (!competitions || !competitions.competitors) {
            // No competition or competitors information
            const noEventElement = document.createElement('p');
            noEventElement.textContent = "UGA has not played anyone recently.";
            document.body.appendChild(noEventElement);
            return;
        }

        // Get UGA's score
        const ugaCompetitor = competitions.competitors.find(comp => comp.team.abbreviation === "UGA");
        const ugaScore = ugaCompetitor ? ugaCompetitor.score.value : "N/A";

        // Get the opponent's score
        const opponentsCompetitor = competitions.competitors.find(comp => comp.team.abbreviation !== "UGA");
        const opponentsScore = opponentsCompetitor ? opponentsCompetitor.score.value : "N/A";

        // Determine the result
        let result;
        if (ugaScore === "N/A" || opponentsScore === "N/A") {
            result = "Score information not available.";
        } else if (ugaScore > opponentsScore) {
            result = "UGA won.";
        } else if (ugaScore < opponentsScore) {
            result = "UGA lost! America won today.";
        } else {
            result = "It's a tie.";
        }

    // Create UGA's score element
    const ugaScoreElement = document.createElement('p');
    ugaScoreElement.textContent = `u[sic]ga's score: ${ugaScore}`;

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
  .catch(error => {
    const errorElement = document.createElement('p');
    errorElement.innerHTML = "u[sic]ga's score is not available. ";
    errorElement.innerHTML += "<br> It doesn't appear that they played anyone recently.";
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '30px';
    errorElement.style.textAlign = 'center';
    document.body.appendChild(errorElement);

    // Create a button
    const mutts = document.createElement('p');
    mutts.textContent = 'Wanna act like they did?';

    const clickMeButton = document.createElement('button');
    clickMeButton.textContent = 'Click Me';
    document.body.style.textAlign = 'center';

    // Add an event listener to the button
    clickMeButton.addEventListener('click', () => {
        // Redirect to another HTML site
        window.location.href = 'mutts.html';
    });

  // Append the button to the body
  document.body.appendChild(mutts);
  document.body.appendChild(clickMeButton);

    const footer = document.createElement('footer');
    footer.innerHTML = '<br>Made by <a href="https://www.alexj.io/">Alex Jenkins</a>,';
    footer.innerHTML += '<br> Go Jackets! <br>';
    footer.innerHTML += '<br> <a href="https://www.buymeacoffee.com/alexjenkins"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=alexjenkins&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    document.body.appendChild(footer);
});


