document.addEventListener("DOMContentLoaded", function () {
    const nouns = ["cat", "dog", "bird", "elephant", "fish"];
    const verbs = ["runs", "jumps", "flies", "swims", "sings"];
    const adjectives = ["happy", "sad", "funny", "fast", "slow"];
    const places = ["park", "beach", "mountain", "forest", "city"];

    function getRandomWord(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function addToOutput(word) {
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML += word + " ";
    }

    function speakNow(string) {
        const utterThis = new SpeechSynthesisUtterance(string);
        speechSynthesis.speak(utterThis);
    }

    function surprise() {
        resetOutput();
        addToOutput(getRandomWord(nouns));
        addToOutput(getRandomWord(verbs));
        addToOutput(getRandomWord(adjectives));
        addToOutput(getRandomWord(nouns));
        addToOutput(getRandomWord(places));
    }

    function resetOutput() {
        document.getElementById("output").innerHTML = "";
    }

    document.getElementById("nounBtn").addEventListener("click", function () {
        addToOutput(getRandomWord(nouns));
    });

    document.getElementById("verbBtn").addEventListener("click", function () {
        addToOutput(getRandomWord(verbs));
    });

    document.getElementById("adjBtn").addEventListener("click", function () {
        addToOutput(getRandomWord(adjectives));
    });

    document.getElementById("nounBtn2").addEventListener("click", function () {
        addToOutput(getRandomWord(nouns));
    });

    document.getElementById("placeBtn").addEventListener("click", function () {
        addToOutput(getRandomWord(places));
    });

    document.getElementById("speakBtn").addEventListener("click", function () {
        const outputText = document.getElementById("output").innerText;
        speakNow(outputText);
    });

    document.getElementById("surpriseBtn").addEventListener("click", function () {
        surprise();
    });

    document.getElementById("resetBtn").addEventListener("click", function () {
        resetOutput();
    });
});
