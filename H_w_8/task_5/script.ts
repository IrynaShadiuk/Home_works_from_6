document.getElementById("add-button")!.addEventListener("click", function() {
  const wordInput = document.getElementById("word-input") as HTMLInputElement;
  const word = wordInput.value.trim();
  
  if (word !== "") {
    const badWordsDiv = document.getElementById("bad-words");
    const wordElement = document.createElement("p");
    wordElement.style.color = "red";
    wordElement.textContent = word;
    badWordsDiv!.appendChild(wordElement);

    wordInput.value = "";
  } else {
    alert("Please enter a word.");
  }
});


document.getElementById("reset-button")!.addEventListener("click", function() {
  const badWordsDiv = document.getElementById("bad-words");
  
  while (badWordsDiv!.firstChild) {
    badWordsDiv!.removeChild(badWordsDiv!.firstChild);
  }
});


document.getElementById("censor-button")!.addEventListener("click", function() {
  const textArea = document.getElementById("text-area") as HTMLTextAreaElement;
  let inputText = textArea.value;
  const badWords = document.querySelectorAll("#bad-words p");

  if (inputText.trim() !== "") {
    for (let i = 0; i < badWords.length; i++) {
      const word = badWords[i].textContent;
      const regex = new RegExp(word!, "gi");
      inputText = inputText.replace(regex, "*".repeat(word!.length));
    }

    textArea.value = inputText;
  } else {
    alert("Please enter text in the textarea.");
  }
});


