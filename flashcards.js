var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//create event listeners

document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard();
});

document.getElementById("delete_cards").addEventListener("click", () => {
  localStorage.clear();
  flashcards.innerHTML = '';
  contentArray = [];
});

document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none";
});

// create the cards the appear when the user puts their word and definition 

flashcardMaker = (text, delThisIndex) => {
  const flashcard = document.createElement("div");
  const acronym = document.createElement('h2');
  const answer = document.createElement('h2');
  const del = document.createElement('i');

  flashcard.className = 'flashcard';

  acronym.setAttribute("style", "border-top:1px solid black; padding: 15px; margin-top:30px");
  acronym.textContent = text.my_acronym;

  answer.setAttribute("style", "text-align:center; display:none; color: black");
  answer.textContent = text.my_answer;

  del.className = "fas fa-minus";
  del.addEventListener("click", () => {
    contentArray.splice(delThisIndex, 1);
    localStorage.setItem('items', JSON.stringify(contentArray));
    window.location.reload();
  })

  flashcard.appendChild(acronym);
  flashcard.appendChild(answer);
  flashcard.appendChild(del);

  flashcard.addEventListener("click", () => {
    if(answer.style.display == "none")
      answer.style.display = "block";
    else
      answer.style.display = "none";
  })

  document.querySelector("#flashcards").appendChild(flashcard);
}

contentArray.forEach(flashcardMaker);

addFlashcard = () => {
  const acronym = document.querySelector("#acronym");
  const answer = document.querySelector("#answer");

  let flashcard_info = {
    'my_acronym' :  acronym.value,
    'my_answer'  : answer.value
  }

  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
  acronym.value = "";
  answer.value = "";
}