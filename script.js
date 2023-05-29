// MODAL HELP FUNCTIONALITY

// Get modal elements
const modal = document.getElementById("modal");
const strengthBtn = document.getElementById("strength-modal");
const enduranceBtn = document.getElementById("endo-modal");
const agilityBtn = document.getElementById("agility-modal");
const wisdomBtn = document.getElementById("wisdom-modal");
const personalityBtn = document.getElementById("personality-modal");
const close = document.getElementById("close-modal");

//OPEN CLOSE MODAL WINDOW
function showModal(statModal) {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

//MODAL BUTTON ACTION
strengthBtn.addEventListener("click", showModal);
enduranceBtn.addEventListener("click", showModal);
agilityBtn.addEventListener("click", showModal);
wisdomBtn.addEventListener("click", showModal);
personalityBtn.addEventListener("click", showModal);

close.addEventListener("click", closeModal);

//================================================================================
//================================================================================
//Increment Buttons
function statBtnIncrease(e) {
  console.log(e);
  var statValue = document.getElementById(`${e}Value`);
  var value = parseInt(statValue.value, 10);
  value++;
  statValue.value = value;
}

function statBtnDecrease(e) {
  var statValue = document.getElementById(`${e}Value`);
  let value = parseInt(statValue.value, 10);
  console.log(value);
  value === 0 ? (value = 0) : value--;
  statValue.value = value;
}
