var navbar = document.querySelector("nav");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const features = document.querySelector("#features");

features.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "yoga":
      yoga();
      break;

    case "group":
      group();
      break;

    case "solo":
      solo();
      break;

    case "stretching":
      stretching();
      break;

    default:
      break;
  }
});

function yoga() {
  document.querySelector("#yoga-arrow").classList.remove("hidden");
  document.querySelector("#group-arrow").classList.add("hidden");
  document.querySelector("#solo-arrow").classList.add("hidden");
  document.querySelector("#stretching-arrow").classList.add("hidden");
  document.querySelector("#yoga").classList.add("bg-orange");
  document.querySelector("#group").classList.remove("bg-orange");
  document.querySelector("#solo").classList.remove("bg-orange");
  document.querySelector("#stretching").classList.remove("bg-orange");

  document.querySelector("#features-content h2").innerHTML =
    "Why are Your Yoga?";
  document.querySelector("#features-content p").innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda quibusdam adipisci itaque temporibus labore praesentium sed consequuntur sit, rem officia fugiat reiciendis tenetur accusantium atque voluptates? Omnis, odit consequuntur!";
  document.querySelector("#features-inner-content h2").innerHTML =
    "When comes Yoga Your Time.";
  document.querySelector("#features-inner-content p").innerHTML =
    "Saturday-Sunday: 8:00am - 10:00am <br/> Monday-Tuesday: 10:00am - 12:00am <br/> Wednesday-Friday: 3:00pm - 6:00pm";

  document.querySelector("#features-content img").src = "img/yoga.jpg";
}

function group() {
  document.querySelector("#yoga-arrow").classList.add("hidden");
  document.querySelector("#group-arrow").classList.remove("hidden");
  document.querySelector("#solo-arrow").classList.add("hidden");
  document.querySelector("#stretching-arrow").classList.add("hidden");
  document.querySelector("#yoga").classList.remove("bg-orange");
  document.querySelector("#group").classList.add("bg-orange");
  document.querySelector("#solo").classList.remove("bg-orange");
  document.querySelector("#stretching").classList.remove("bg-orange");

  document.querySelector("#features-content h2").innerHTML = "Group Class";
  document.querySelector("#features-content p").innerHTML =
    "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
  document.querySelector("#features-inner-content h2").innerHTML =
    "When comes Group Class Time.";
  document.querySelector("#features-inner-content p").innerHTML =
    "Saturday-Sunday: 11:00am - 12:00am <br> Monday-Tuesday: 1:00pm - 3:00pm <br> Wednesday-Friday: 10:00am - 12:00pm";

  document.querySelector("#features-content img").src = "img/group.webp";
}

function solo() {
  document.querySelector("#yoga-arrow").classList.add("hidden");
  document.querySelector("#group-arrow").classList.add("hidden");
  document.querySelector("#solo-arrow").classList.remove("hidden");
  document.querySelector("#stretching-arrow").classList.add("hidden");
  document.querySelector("#yoga").classList.remove("bg-orange");
  document.querySelector("#group").classList.remove("bg-orange");
  document.querySelector("#solo").classList.add("bg-orange");
  document.querySelector("#stretching").classList.remove("bg-orange");

  document.querySelector("#features-content h2").innerHTML = "Solo Class";
  document.querySelector("#features-content p").innerHTML =
    "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";
  document.querySelector("#features-inner-content h2").innerHTML =
    "Solo Class Time.";
  document.querySelector("#features-inner-content p").innerHTML =
    "Saturday-Sunday: 1:00pm - 6:00pm <br> Monday-Tuesday: 4:00pm - 6:00pm";

  document.querySelector("#features-content img").src = "img/solo.jpg";
}

function stretching() {
  document.querySelector("#yoga-arrow").classList.add("hidden");
  document.querySelector("#group-arrow").classList.add("hidden");
  document.querySelector("#solo-arrow").classList.add("hidden");
  document.querySelector("#stretching-arrow").classList.remove("hidden");
  document.querySelector("#yoga").classList.remove("bg-orange");
  document.querySelector("#group").classList.remove("bg-orange");
  document.querySelector("#solo").classList.remove("bg-orange");
  document.querySelector("#stretching").classList.add("bg-orange");

  document.querySelector("#features-content h2").innerHTML = "Stretching";
  document.querySelector("#features-content p").innerHTML =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";
  document.querySelector("#features-inner-content h2").innerHTML =
    "Stretching Time.";
  document.querySelector("#features-inner-content p").innerHTML =
    "Wednesday-Friday: 12:00pm - 3:00pm <br> Saturday-Sunday: 10:00am - 12:00pm";

  document.querySelector("#features-content img").src = "img/stret.webp";
}

function onlyNumberKey(evt, value) {
  // Only ASCII character in that range allowed
  let ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;

  return true;
}

function calculateBmi() {
  // min & max values for bmi arrow in order to show correct value on the bmi scale
  const minLeft = 7;

  const height = document.getElementById("height-input").value;
  const weight = document.getElementById("weight-input").value;
  const heightInMeter = height / 100;

  let bmiElement = document.getElementById("bmi-arrow-id");
  let bmiArrow = minLeft;

  if (!height || !weight) {
    bmiElement.style.left = `${minLeft}%`;
    return;
  }

  const bmi = weight / (heightInMeter * heightInMeter);

  // underweight, 7 - 22
  if (bmi < 18.5) {
    bmiArrow = 15;
  }
  // normal, 23 - 38
  else if (bmi < 25) {
    bmiArrow = 31;
  }
  // overweight 40 - 55
  else if (bmi < 30) {
    bmiArrow = 48;
  }
  // obese 56 - 71
  else if (bmi < 35) {
    bmiArrow = 64;
  }
  // extremely obese 73 - 88
  else {
    bmiArrow = 81;
  }

  bmiElement.style.left = `${bmiArrow}%`;
}

function openHamburgerMenu() {
  const navItems = document.querySelector("#nav-items-id");
  navItems.classList.toggle("hamburger-open");
}

function scrollToSection(sectionName) {
  const element = document.getElementById(sectionName);
  window.scrollTo({
    top: element.offsetTop - 70,
    behavior: "smooth",
  });
}
