const list = document.querySelector("ol");
const btn = document.querySelector(".up");
console.log(list.children);

// Sort rankings

function rankCharacters() {
  list.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      if (e.target.className === "up") {
        let character = e.target.parentElement.parentElement.parentElement;
        let prevCharacter = character.previousElementSibling;
        if (prevCharacter) {
          list.insertBefore(character, prevCharacter);
        }
      }

      if (e.target.className === "down") {
        let character = e.target.parentElement.parentElement.parentElement;
        let nextCharacter = character.nextElementSibling;
        if (nextCharacter) {
          list.insertBefore(nextCharacter, character);
        }
      }
    }
  });
}

rankCharacters();

// ---------------------------------------

// Save rankings
