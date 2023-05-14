// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/'

const button = document.querySelector(".btn-warning");
const paragraph = document.querySelector("#activity");

const insertActivity = (data) => {
  paragraph.innerText = data.activity;
};

button.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      insertActivity(data);
    });
});
