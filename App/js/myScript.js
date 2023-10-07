/********************************************
 ************** Helper Functions ************
 *******************************************/

// Returns the id from the HTML element
let getID = (id) => {
  return document.getElementById(`${id}`);
}


/*******************************************
 *************** Variables *****************
 ******************************************/

let signupBtn = getID("signup-btn");
let loginBtn = getID("login-btn");
let guestBtn = getID("guest-btn");
let signUpSubmitBtn = getID("submit-signup-form-btn");


/*******************************************
 *************** Functions *****************
 ******************************************/
function showMenuLinks() {
  document.getElementById("mobile-nav").style.width = "250px";
}

function hideMenuLinks() {
  document.getElementById("mobile-nav").style.width = "0px";
}

/*************************************************
 *************** Event Listeners *****************
 ************************************************/

signupBtn.addEventListener('click', () => {
  location.href = "/signup.html";
})
