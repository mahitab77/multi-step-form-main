////////////variables declaration////////////////
var stepsnoarray = Array.from(document.getElementsByClassName("number"));
var userInfo = {
  name: "",
  email: "",
  phone: "",
  selectedPlan: "",
  billingFrequency: "",
  planPrice:""
}
var selectedPlan = ""
var billingFrequency = ""
var planPrice = ""
userInfo.addons = {
  service: document.getElementById("service").checked,
  storage: document.getElementById("storage").checked,
  profile: document.getElementById("profile").checked
}
const addonClassMapping = {
  service: "slctdadonsrv",
  storage: "slctdadonstrg",
  profile: "slctdadonprfl"
}
var selectedPlancard
///////////slider btn in step 2//////////////////
// Get a reference to the checkbox input element
var checkbox = document.getElementById("scheckbox");

// Get a reference to the element with the "Yearly" class
var yearlyElements = document.getElementsByClassName("yearly")

// Get a reference to the element with the "monthlyprice" class
var monthlyElements = document.getElementsByClassName("monthlyprice")

// Get a reference to the "Monthly" and "Yearly" header elements
var slidemo = document.getElementById("slidemo")
var slideyr = document.getElementById("slideyr")

// Add an event listener to the checkbox input
checkbox.addEventListener("change", function() {
        for (var i = 0; i < yearlyElements.length; i++) {
            // Check if the checkbox is checked (toggled right)
            if (checkbox.checked) {
               // If checked, show the yearlyElement
               yearlyElements[i].style.display = "flex"
               // Change the color of the "Yearly" text to navy
               slideyr.style.color = "hsl(213, 96%, 18%)"
               // Change the color of the "Monthly" text to grey
               slidemo.style.color = "hsl(231, 11%, 63%)"
            } else {
                // If unchecked, hide the yearlyElement
                yearlyElements[i].style.display = "none"
                slideyr.style.color = "hsl(231, 11%, 63%)"
                slidemo.style.color = "hsl(213, 96%, 18%)";
            }
        }
        for (var i = 0; i < monthlyElements.length; i++) { 
            if (checkbox.checked) {
                // If checked, hide the monthly element
                monthlyElements[i].style.display = "none"
                slidemo.style.color = "hsl(231, 11%, 63%)"
                slideyr.style.color = "hsl(213, 96%, 18%)";
             } else {
                 // If unchecked, show the monthly element 
                 monthlyElements[i].style.display = "flex"
                 slideyr.style.color = "hsl(231, 11%, 63%)"
                 slidemo.style.color = "hsl(213, 96%, 18%)";
             }
        }
})
///////////// Add hover effect and click effect on step 2//////////////
var cards = document.getElementsByClassName("cards")

for (var i = 0; i < cards.length; i++) {
  var card = cards[i]
  card.isClicked = false; // Initialize a custom attribute for each card
  /////only in display bigger than 375 hover effects is applied
  if (window.innerWidth > 375) {
    console.log("desktop")
  card.addEventListener('mouseenter', function() {
    if (!this.isClicked) {
      this.style.border = '2px solid hsl(213, 96%, 18%)';
    }
  });

  card.addEventListener('mouseleave', function() {
    if (!this.isClicked) {
      this.style.border = '2px solid hsl(229, 24%, 87%)'
    }
  });
}
  card.addEventListener('click', function() {
    // Reset the state for all cards
    for (var j = 0; j < cards.length; j++) {
      cards[j].isClicked = false;
      cards[j].style.backgroundColor = 'white';
      cards[j].style.border = '2px solid hsl(229, 24%, 87%)';
    }

    // Update the state for the clicked card
    this.isClicked = true
    this.style.backgroundColor = 'hsl(220, 12%, 95%)'
    this.style.border = '2px solid hsl(213, 96%, 18%)'
    selectedPlancard=this
  })
}
/////////add hover effect and click effect on step 3/////////////////
document.addEventListener('DOMContentLoaded', function() {
var checkboxes = document.querySelectorAll('.checboxsdiv input[type="checkbox"]')
var boxes = document.querySelectorAll('.checboxsdiv');

checkboxes.forEach(function(checkbox, index) {
checkbox.addEventListener('change', function() {

  if (checkbox.checked) {
        // Apply styles to the clicked box
        boxes[index].style.border = '2px solid hsl(213, 96%, 18%)'
        boxes[index].style.backgroundColor = 'hsl(220, 12%, 95%)'
  } else {
        // Reset styles when the checkbox is unchecked
        boxes[index].style.border = '1px solid hsl(229, 24%, 87%)'
        boxes[index].style.backgroundColor = 'white'
  }
})
/////only in display bigger than 375 hover effects is applied
if (window.innerWidth > 375) {
    boxes[index].addEventListener('mouseenter', function() {
      if (!checkbox.checked) {
        this.style.border = '2px solid hsl(213, 96%, 18%)';
      }
    });

    boxes[index].addEventListener('mouseleave', function() {
      if (!checkbox.checked) {
        this.style.border = '2px solid hsl(229, 24%, 87%)';
      }
    });
  }
  });

});
///////////////////////////////////////////////////////////////
///////Validate step 1///////////
function validateStep1() {
  var nameInput = document.getElementById("fname");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phoneno");
  var isValid = true;

  if (nameInput.value.trim() === "") {
    isValid = false;
    document.getElementById("namealert").textContent = "This field is required";
    document.getElementById("namealert").style.display = "block";
    nameInput.style.border = "1px solid red";
  } else if (!isValidName(nameInput.value)) {
    isValid = false;
    document.getElementById("namealert").textContent = "Invalid name format";
    document.getElementById("namealert").style.display = "block";
    nameInput.style.border = "1px solid red";
  } else {
    document.getElementById("namealert").style.display = "none";
    nameInput.style.border = "1px solid hsl(229, 24%, 87%)";
  }

  if (emailInput.value.trim() === "") {
    isValid = false;
    document.getElementById("emailalert").textContent = "This field is required";
    document.getElementById("emailalert").style.display = "block";
    emailInput.style.border = "1px solid red";
  } else if (!isValidEmail(emailInput.value)) {
    isValid = false;
    document.getElementById("emailalert").textContent = "Email should be in the right format";
    document.getElementById("emailalert").style.display = "block";
    emailInput.style.border = "1px solid red";
  } else {
    document.getElementById("emailalert").style.display = "none";
    emailInput.style.border = "1px solid hsl(229, 24%, 87%)";
  }

  if (phoneInput.value.trim() === "") {
    isValid = false;
    document.getElementById("phonenoalert").textContent = "This field is required";
    document.getElementById("phonenoalert").style.display = "block";
    phoneInput.style.border = "1px solid red";
  } else if (!isValidPhoneNumber(phoneInput.value)) {
    isValid = false;
    document.getElementById("phonenoalert").textContent = "Phone number format should be +0123456789";
    document.getElementById("phonenoalert").style.display = "block";
    phoneInput.style.border = "1px solid red";
  } else {
    document.getElementById("phonenoalert").style.display = "none";
    phoneInput.style.border = "1px solid hsl(229, 24%, 87%)";
  }

  return isValid;
}
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidPhoneNumber(phone) {
  var phoneRegex = /^\+?\d{10}$/;
  return phoneRegex.test(phone);
}
function isValidName(name) {
  // Allow letters, spaces, dots, and dashes
  var nameRegex = /^[a-zA-Z.\-\s]+$/;
  return nameRegex.test(name.trim());
}
////////Validate step 2////////
function validateStep2() {

  var sliderCheckbox = document.getElementById("scheckbox")
  var isValid = true;

  if (!selectedPlancard) {
    // If no plan is selected, default to the Arcade plan
    var defaultPlanElement = document.querySelector(".cards:first-child");
    if (defaultPlanElement) {
      selectedPlancard = defaultPlanElement
    } else {
      isValid = false;
      // Handle the case where there is no default plan
      console.error("No default plan available.");
    }
  }

  // Extract plan details from the selected plan element
   selectedPlan = selectedPlancard.querySelector(".plan").textContent
   billingFrequency = sliderCheckbox.checked ? "Yearly" : "Monthly";
   if (billingFrequency=="Yearly"){
      planPrice = selectedPlancard.querySelector(".priceyearly").textContent
   }
   else{
      planPrice = selectedPlancard.querySelector(".monthlyprice").textContent
   }
   // Store plan details in the userInfo object
  userInfo.selectedPlan = selectedPlan + " (" + billingFrequency + ")"
  userInfo.billingFrequency = billingFrequency
  userInfo.planPrice = planPrice

  //console.log("Selected Plan: " + userInfo.selectedPlan)
  //console.log(planPrice)

  return isValid;
}
///////////displaying next step when next button is clicked////////////////
function shownextstep(i) {
  return function () {
    if (i < stepsnoarray.length - 1) {
      stepsnoarray[i].style.backgroundColor = "unset"
      stepsnoarray[i].style.color = "hsl(229, 24%, 87%)"
      stepsnoarray[i + 1].style.backgroundColor = "hsl(206, 94%, 87%)"
      stepsnoarray[i + 1].style.color = "black"

      if (i === 0 && validateStep1()) {
        // If transitioning from Step 1 to Step 2, validate Step 1
        userInfo.name = document.getElementById("fname").value
        userInfo.email = document.getElementById("email").value
        userInfo.phone = document.getElementById("phoneno").value

        document.getElementById("step2").style.display = "flex"
        document.getElementById("step1").style.display = "none"
         
        // If transitioning from Step 2 to Step 3, validate Step 2
      } else if (i === 1 && validateStep2()) {
        
          userInfo.selectedPlan = selectedPlan
          userInfo.billingFrequency = billingFrequency
          userInfo.planPrice = planPrice

          document.getElementById("step3").style.display = "flex"
          document.getElementById("step2").style.display = "none"
          // Show/hide elements based on billingFrequency in Step 3
          var monthlyElements = document.querySelectorAll(".monthly")
          var yearlyElements = document.querySelectorAll(".yearly")

          if (userInfo.billingFrequency === "Yearly") {
              monthlyElements.forEach(function (element) {
              element.style.display = "none"});
              yearlyElements.forEach(function (element) {
              element.style.display = "flex"});
          } else {
              monthlyElements.forEach(function (element) {
              element.style.display = "flex"});
              yearlyElements.forEach(function (element) {
               element.style.display = "none"});
          }
      } else if (i === 2) {
        //transitioning from Step 3 to Step 4, display user info on Step 4
        // Get the selected addons
        userInfo.addons = {
          service: document.getElementById("service").checked,
          storage: document.getElementById("storage").checked,
          profile: document.getElementById("profile").checked
        };
        console.log(userInfo.addons)
        displayUserInfo()
        document.getElementById("step4").style.display = "flex"
        document.getElementById("step3").style.display = "none"
      }
    }
  }
}     
var nxtbtnElements = document.getElementsByClassName("nextbtn");
for (let i = 0; i < nxtbtnElements.length; i++) {
  nxtbtnElements[i].onclick = shownextstep(i);
}
///////showstep5 when confirm button is clicked///////////////////////////
var confirmbtn=document.getElementById("confirm")
function thanku(){
  //transitioning from Step 4 to Step 5, display thank you
  document.getElementById("step5").style.display = "flex"
  document.getElementById("step4").style.display = "none"
}
confirmbtn.onclick= thanku
/////////////goback links////////////////////////////////////////////////
function previouspage(i) {
  return function () {
    stepsnoarray[i + 1].style.backgroundColor = "unset";
    stepsnoarray[i + 1].style.color = "hsl(229, 24%, 87%)";
    stepsnoarray[i].style.backgroundColor = "hsl(206, 94%, 87%)";
    stepsnoarray[i].style.color = "black";

    var elementId = "step" + (i + 2);
    var elementIdprev = "step" + (i + 1);

    document.getElementById(elementId).style.display = "none";
    document.getElementById(elementIdprev).style.display = "flex";
    return false;
  };
}

var goback = document.getElementsByClassName("left-anchor");
for (let i = 0; i < goback.length; i++) {
  goback[i].onclick = previouspage(i);
}
//////////////////////////////////////////////////////////////////////////
 /// Function to display user information on Step 4
function displayUserInfo() {
  // Display selected plan according to billing frequency
  const selectedMonthlyPlanElement=document.getElementById("selectedmonthlyplan")
  const selectedYearlyPlanElement=document.getElementById("selectedyearlyplan")
  if (billingFrequency == "Monthly") {
    selectedMonthlyPlanElement.style.display = "flex"
    selectedYearlyPlanElement.style.display="none"
    // Update the content of the <p> element with the plan and billing frequency
    const selectedMonthlyPlanP = selectedMonthlyPlanElement.querySelector('p');
    selectedMonthlyPlanP.innerText = selectedPlan + "(" + billingFrequency + ")";
    // Update the content of the <h> element with the plan price
    const selectedMonthlyPlanH = selectedMonthlyPlanElement.querySelector('h');
    selectedMonthlyPlanH.innerText = planPrice

  } else {
    selectedMonthlyPlanElement.style.display = "none"
    selectedYearlyPlanElement.style.display="flex"
    // Update the content of the <p> element with the plan and billing frequency
    const selectedMonthlyPlanP = selectedYearlyPlanElement.querySelector('p');
    selectedMonthlyPlanP.innerText = selectedPlan + "(" + billingFrequency + ")";
    // Update the content of the <h> element with the plan price
    const selectedMonthlyPlanH = selectedYearlyPlanElement.querySelector('h');
    selectedMonthlyPlanH.innerText= planPrice

  }

  
//intiaally all addons are hidden
const alladdons = document.getElementsByClassName("selectedaddon");
for (var j = 0; j < alladdons.length; j++) {
    alladdons[j].style.display = 'none';
}
//display only addons selected by the user
var totalAddonPrice = 0 
for (const addon in userInfo.addons) {
    var addonE = []
    var addonClassName

    if (userInfo.addons[addon] && billingFrequency === "Monthly") 
      {
        addonClassName = addonClassMapping[addon]
        addonE = document.querySelectorAll("." + addonClassName + ".monthly")
      } 
    else if (userInfo.addons[addon] && billingFrequency === "Yearly") 
      {
        addonClassName = addonClassMapping[addon]
        addonE = document.querySelectorAll("." + addonClassName + ".yearly")
      }

      for (var i = 0; i < addonE.length; i++) {
          addonE[i].style.display = 'flex'
          const addonPriceElement = addonE[i].querySelector('h')
          if (addonPriceElement) {
             // Extract the numeric value from the format "+$1/mo" or "+$1/yr"
             const priceText = addonPriceElement.innerText
             var numericValue = parseFloat(priceText.replace(/[^\d.]/g, '')) || 0
             totalAddonPrice += numericValue
            console.log(totalAddonPrice)
          }
      }
}
   //display the total
   var planpricenumeric=parseFloat(planPrice.replace(/[^\d.]/g, '')) || 0
   var totalCost = planpricenumeric + totalAddonPrice
   console.log(totalCost)
   var totalCostElement
  // Update the content of the .total h element with the total cost
  if (billingFrequency=="Monthly"){
    totalCostElement = document.getElementById("mtotalh")
    console.log(totalCostElement)
    totalCostElement.innerText =`$${totalCost}/${billingFrequency.toLowerCase().substring(0, 2)}`
    console.log("$"+totalCost+"/mo")
  } else {
    totalCostElement = document.getElementById("ytotalh")
    console.log(totalCostElement)
    totalCostElement.innerText ="$"+totalCost+"/yr"
    console.log("$"+totalCost+"/yr")
  }

}
//////////////////////////////////////////////////////////////////////////
// Function to handle changing the plan
function changePlan() {
  
  document.getElementById("step2").style.display = "flex";
  document.getElementById("step4").style.display = "none";
}
// Update the "Change" link to trigger the changePlan function
document.getElementById("changePlanLink").addEventListener("click", changePlan)
