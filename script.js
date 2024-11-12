const storyStages = {
    start: {
        text: "You stand before the Cave of Wonders. Do you enter?",
        choices: ["Enter with caution", "Rush inside"],
        consequence: ["enterCautiously", "rushInside"],
        image: "start.jpeg"
    },
    enterCautiously: {
        text: "You carefully step inside, noticing pressure plates on the floor.",
        choices: ["Follow the main path", "Investigate a glowing side chamber"],
        consequence: ["mainPath", "sideChamber"],
        image: "cautious.jpeg"
    },
    rushInside: {
        text: "Your quick steps trigger a trap, and darts fly from the walls!",
        choices: ["Continue despite the pain", "Retreat to tend to your wound"],
        consequence: ["continueOn", "retreat"],
        image: "trap.jpeg"
    },
    mainPath: {
        text: "You reach a chamber filled with treasures and the mystical lamp.",
        choices: ["Take the lamp only", "Grab the gem first"],
        consequence: ["takeLamp", "grabGem"],
        image: "treasureRoom.jpeg"
    },
    sideChamber: {
        text: "You find a room with strange symbols. Do you explore further?",
        choices: ["Yes", "No"],
        consequence: ["mysteriousEnding", "mainPath"],
        image: "sideChamber.jpeg"
    },
    takeLamp: {
        text: "You carefully take the lamp. Now, what will you do?",
        choices: ["Rub the lamp", "Wait until outside to rub it"],
        consequence: ["rubLamp", "outsideRub"],
        image: "lamp.jpeg"
    },
    grabGem: {
        text: "As soon as you touch the gem, the cave starts to collapse!",
        choices: ["Escape with both", "Drop the gem to move faster"],
        consequence: ["escapeBoth", "escapeLampOnly"],
        image: "gem.jpeg"
    },
    rubLamp: {
        text: "A mighty Genie appears, offering three wishes with a warning of consequences.",
        choices: ["Wish for wealth", "Wish for power", "Wish for freedom"],
        consequence: ["wealthWish", "powerWish", "freedomWish"],
        image: "genie.jpeg"
    },
    wealthWish: {
        text: "You wish for wealth. Gold rains around you, but guards arrive...",
        choices: ["Bribe the guards", "Escape"],
        consequence: ["bribeGuards", "escapeWealth"],
        image: "wealth.jpeg"
    },
    powerWish: {
        text: "You wish for power. You are now supernaturally strong but feared by others.",
        choices: ["Protect the city", "Gain trust with kindness"],
        consequence: ["protectCity", "winTrust"],
        image: "power.jpeg"
    },
    freedomWish: {
        text: "You wish for freedom. The Genie grants you a map of treasures worldwide.",
        choices: ["Follow the map", "Wish for safety"],
        consequence: ["adventurerEnding", "safetyWish"],
        image: "freedom.jpeg"
    },
    mysteriousEnding: {
        text: "You unlock secrets that change your destiny. You become a wise sage.",
        choices: [],
        consequence: [],
        image: "sage.jpeg"
    },
    adventurerEnding: {
        text: "You travel endlessly in search of treasures, a life of adventure awaits!",
        choices: [],
        consequence: [],
        image: "adventure.jpeg"
    },
    safetyWish: {
        text: "You wish for safety. The Genie keeps you safe, but you live a quiet life.",
        choices: [],
        consequence: [],
        image: "safety.jpeg"
    },
    bribeGuards: {
        text: "You bribe the guards and live a life of luxury, but always in fear of betrayal.",
        choices: [],
        consequence: [],
        image: "luxury.jpeg"
    },
    escapeWealth: {
        text: "You escape with your riches but are hunted constantly.",
        choices: [],
        consequence: [],
        image: "flee.jpeg"
    },
    protectCity: {
        text: "You protect the city and are remembered as a hero, despite being feared.",
        choices: [],
        consequence: [],
        image: "hero.jpeg"
    },
    winTrust: {
        text: "You win the people's trust and live peacefully as a beloved protector.",
        choices: [],
        consequence: [],
        image: "trust.jpeg"
    },
    retreat: {
        text: "You escaped the cave.",
        choices: [],
        consequence: [],
        image: "run.jpeg"

    },
    continueOn: {
        text: "You reach a chamber filled with treasures and the mystical lamp.",
        choices: ["Take the lamp only", "Grab the gem first"],
        consequence: ["takeLamp", "grabGem"],
        image: "treasureRoom.jpeg"

    },
    outsideRub:{
        text: "You reached outside and rub the lamp, a mighty Genie appears, offering three wishes with a warning of consequences.",
        choices: ["Wish for wealth", "Wish for power", "Wish for freedom"],
        consequence: ["wealthWish", "powerWish", "freedomWish"],
        image: "genie.jpeg"

    },
    escapeBoth: {
        text: "You escape with both lamp and gem.",
        choices: [],
        consequence: [],
        image: "flee.jpeg"

    },
    escapeLampOnly: {
        text: "you escaped with lamp only.",
        choices: [],
        consequence: [],
        image: "flee.jpeg"
    }
};

let currentStage = "start";

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = storyStages[currentStage];
    
    document.getElementById("story").textContent = stage.text;
    const storyImage = document.getElementById("storyImage");
    storyImage.src = stage.image;
    storyImage.style.display = "block";
    
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    
    if (stage.choices.length === 0) {
        endGame();
        return;
    }

    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => makeChoice(index));
        choicesDiv.appendChild(button);
    });
}

function makeChoice(choiceIndex) {
    const nextStage = storyStages[currentStage].consequence[choiceIndex];
    currentStage = nextStage;
    updatePage();
}

function endGame() {
    const stage = storyStages[currentStage];
    document.getElementById("story").textContent = stage.text;
    document.getElementById("choices").innerHTML = "";
    document.getElementById("storyImage").src = stage.image;
}

document.addEventListener("DOMContentLoaded", startGame);
