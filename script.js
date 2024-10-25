const speakers = [
    {
        name: "Yochai Benkler",
        image: "pictures/guy.jpg",
        description: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School"
    },
    {
        name: "Jane Doe",
        image: "pictures/guy.jpg",
        description: "Expert in Creative Commons and Open Access"
    },
    {
        name: "John Smith",
        image: "pictures/guy.jpg",
        description: "Advocate for the sharing economy and open source solutions"
    },
    {
        name: "Jaden Smith",
        image: "pictures/guy.jpg",
        description: "Advocate for the sharing economy and open source solutions"
    },
    {
        name: "Marilla Mathews",
        image: "pictures/guy.jpg",
        description: "Advocate for the sharing economy and open source solutions"
    }
];

let displayedSpeakers = 3; // Track the number of speakers displayed

function createSpeakersSection() {
    const speakersContainer = document.querySelector(".speakers");
    speakersContainer.innerHTML = "<h3>Featured Speakers</h3>";

    for (let i = 0; i < displayedSpeakers; i++) {
        addSpeaker(speakers[i], speakersContainer);
    }
}

function loadMoreSpeakers() {
    const speakersContainer = document.querySelector(".speakers");

    // Load 1 more speaker each click until all speakers are displayed
    if (displayedSpeakers < speakers.length) {
        addSpeaker(speakers[displayedSpeakers], speakersContainer);
        displayedSpeakers++;
    }
}

function addSpeaker(speaker, container) {
    const speakerDiv = document.createElement("div");
    speakerDiv.classList.add("speaker");

    const img = document.createElement("img");
    img.src = speaker.image;
    img.alt = speaker.name;

    const speakerInfo = document.createElement("div");
    speakerInfo.classList.add("speaker-info");

    const nameElement = document.createElement("h4");
    nameElement.textContent = speaker.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = speaker.description;

    speakerInfo.appendChild(nameElement);
    speakerInfo.appendChild(descriptionElement);
    speakerDiv.appendChild(img);
    speakerDiv.appendChild(speakerInfo);
    container.appendChild(speakerDiv);
}

// Initialize with the first few speakers on load
window.onload = createSpeakersSection;
