const remoteDataUrl = "https://api.jsonbin.io/v3/b/67d796978960c979a57303ac";

// Function to create and display project cards
function displayProjects(data) {
    const projectContainer = document.querySelector('project-container');
    projectContainer.innerHTML = ''; // Clear existing cards
    data.forEach(project => {
        const projectCard = document.createElement('project-card');
        projectCard.setAttribute('title', project.title);
        projectCard.setAttribute('image', project.image);
        projectCard.setAttribute('alt', project.alt);
        projectCard.setAttribute('description', project.description);
        projectCard.setAttribute('link', project.link);
        projectCard.setAttribute('date', project.date);
        projectCard.setAttribute('keywords', project.keywords);

        projectContainer.appendChild(projectCard);
    });
}

// Load Local Button Click Event
document.getElementById('loadLocalBtn').addEventListener('click', () => {
    const savedData = localStorage.getItem('projects');
    
    if (!savedData) {
        alert("You need to load from remote first!");
        return;
    }

    displayProjects(JSON.parse(savedData));
});

// Load Remote Button Click Event
document.getElementById('loadRemoteBtn').addEventListener('click', () => {
    fetch(remoteDataUrl, {
        headers: {
            'X-Access-Key': '$2a$10$MgMTsshNS.iGR2y0OX.kDuG3tN19n3TdpWr2xwyf0VZE4WDw2B6ZG' //bad practice, but needed for now
        }
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('projects', JSON.stringify(data.record)); // Save fetched data to localStorage
        displayProjects(data.record);
    })
    .catch(error => console.error('Error loading remote data:', error));
});