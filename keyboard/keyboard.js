const notes = document.querySelectorAll("audio");
const note = document.querySelector(".nowplaying");
const tiles = document.querySelectorAll(".key");

for (let index = 0; index < tiles.length; index++) {
  tiles[index].addEventListener("click", () => {
    notes[index].play();
  });
}
document.addEventListener("keydown", (e) => {
  // console.log(e.key);
  try {
    if (isNaN(e.key)) {
      const element = document.querySelector(`.${e.key}`).textContent;
      const parentNode = document.querySelector(`.${element}`).parentNode;
      parentNode.classList.add("playing");
      const key = parentNode.dataset.note;
      note.innerHTML = key;
      playNOte(key, parentNode);
    } else {
      const parentNode = document.querySelector(`.num${e.key}`).parentNode;
      parentNode.classList.add("playing");
      const key = parentNode.dataset.note;
      playNOte(key, parentNode);
    }
  } catch (error) {
    console.log(error);
  }
});

function playNOte(key, parentNode) {
  const tile = document.getElementById(`${key}`);
  tile.currentTime = 0;
  tile.volume = 1.0;
  tile.play();
  setTimeout(function () {
    parentNode.classList.remove("playing");
  }, 200);
}
// document.addEventListener('keydown', function(e){console.log(e.key)});
