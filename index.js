
//NAVBAR
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//SLIDESHOW
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    } 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 6000);

    
}


//ABOUT SCRIPT

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


//CALCULATOR

// Custom function
function calculateTip() {
    
  // Store the data of inputs
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("totalPeople").value;
  
  // Quick validation
  if(billAmount === "" || serviceQuality == 0) {
     return alert("Please complete each field!");
       // this will prevent the function from continuing
  } else if ( isNaN(billAmount) || isNaN(numPeople) ){    // check if value is not a number
    alert("Please introduce only numbers!");
    return;
}

  // Check to see if this input is empty or less than or equal to 1
  if(numPeople === "" || numPeople <= 1) {
      numPeople = 1;
      
      document.getElementById("each").style.display = "none";
      
  } else {
      
      document.getElementById("each").style.display = "block";
      
  }
  
  // Do some math!
  var total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  
  
  // Display the tip!
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
  
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };






















