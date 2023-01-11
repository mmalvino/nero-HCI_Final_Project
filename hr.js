//button selectors
const addButton = document.querySelector(".add"),
    removeButton = document.querySelector(".remove");

//elements for update 

const currentCupsEl = document.querySelector(".current-cups"),
currentLitersEl = document.querySelector(".current-liters"),
currentPercentageEl = document.querySelector(".current-percentage"),
progressArea = document.querySelector(".progress");

const MAX_CUPS = 10,
    MIN_CUPS = 0;

let cups = 0,
    liters = 0,
    percentage = 0;


addButton.addEventListener("click", addCup);
removeButton.addEventListener("click", removeCup);

function addCup() {
    cups++;
    liters += 250
    percentage = (cups/MAX_CUPS) * 100;

    updateLayout();
    
    if (cups === MAX_CUPS) {
        addButton.disabled = true;
    }   else {
        removeButton.disabled = false;
    }
}

function removeCup() {
    cups--;
    liters -= 250
    percentage = (cups/MAX_CUPS) * 100;
 
    updateLayout();

    if (cups === MIN_CUPS) {
        removeButton.disabled = true;
    }   else {
        addButton.disabled = false;
    }
}

function updateLayout() {
    currentCupsEl.textContent = `${cups}/10`;
    currentLitersEl.textContent = `${liters / 500}l/5l`;
    currentPercentageEl.textContent = `${percentage}%`;
    progressArea.style.height = `${percentage}%`;
}

//start calculator
function calculateWater() {
    var weight = document.getElementById("weight").value;
    var activity = document.getElementById("exercise").value;
    var requiredWaterOz = weight / 2 + (activity / 30) * 12;
    var waterBottles = requiredWaterOz / 16.9;
    var waterBottles2 = waterBottles.toFixed(2);
    if (isNaN(weight) || isNaN(activity)) {
      alert("Please enter only numeric values.");
    }
    else if (weight === "") {
      alert("Please enter your weight.");
    }
    else if (activity === "") {
      alert("Please enter your exercise time. If you have not been active, please enter 0.");
    }
    else {
      document.getElementById("required_water").value = requiredWaterOz;
      document.getElementById("water_bottles").value = waterBottles2;
    }
  }
  function resetForm() {
      document.getElementById("personal_info").reset();
  }
  