let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = function(){
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

document.documentElement.scrollTop = 0;

function scrollToSection(event, sectionId) {
    // Prevent the default anchor link behavior
    event.preventDefault();
  
    // Get the section element by ID
    const section = document.getElementById(sectionId);
  
    // Scroll to the section smoothly
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  



  const text1_options = [
    "After countless hours of refinement and collaboration, we achieved a flawless orthopedic design for our robot, ensuring optimal functionality and structural precision.",
    "After extensive hard work, we achieved a perfect design for our robot, emphasizing balance and efficiency.",
    "Our efforts resulted in a flawless design with optimal component placement and seamless integration.",
    "The precision and attention to detail in our robot's design are evident, showcasing the culmination of our dedication."
  ];
  const text2_options = [
    " ",
    " ",
    " ",
    " "
  ];
  const color_options = ["#8A3E3E26", "#EB313126", "#99484826", "#63060626"];
  const image_options = [
    "https://github.com/Niskayuna-RoboWarriors/website/blob/main/imgs/robotModel/orthopedic-removebg-preview.png?raw=true",
    "https://github.com/Niskayuna-RoboWarriors/website/blob/main/imgs/robotModel/sideView-removebg-preview.png?raw=true",
    "https://github.com/Niskayuna-RoboWarriors/website/blob/main/imgs/robotModel/topView-removebg-preview.png?raw=true",
    "https://raw.githubusercontent.com/Niskayuna-RoboWarriors/website/refs/heads/main/imgs/robotModel/bottomLeftFrontView-removebg-preview.png?raw=true"
  ];
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("next-option");
  const optionNext = document.getElementById("previous-option");
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
  