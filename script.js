const speakers = [
    {
        name: "Yochai Benkler",
        image: "pictures/guy.jpg",
        description: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School"
    },
    {
        name: "Jane Doe",
        image: "pictures/janedoe.jpg",
        description: "Expert in Creative Commons and Open Access"
    },
    {
        name: "John Smith",
        image: "pictures/johnsmith.jpg",
        description: "Advocate for the sharing economy and open source solutions"
    }
    
];

function createSpeakersSection() {
    const speakersContainer = document.querySelector(".speakers");
    speakersContainer.innerHTML = "<h3>Featured Speakers</h3>"; // Clear existing content
    
    speakers.forEach(speaker => {
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
        speakersContainer.appendChild(speakerDiv);
    });
}

window.onload = createSpeakersSection;