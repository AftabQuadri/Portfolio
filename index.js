function displayTechnicalSkill() {
    var education = document.getElementsByClassName("education");
    education[0].style.display = 'none';
    var element = document.getElementsByClassName("softSkills");
    element[0].style.display = 'none';
    var technical = document.getElementsByClassName("technicalskills");
    technical[0].style.display = 'block';
}

function displaySoftSkill() {

    var technical = document.getElementsByClassName("technicalskills");
    technical[0].style.display = 'none';
    var education = document.getElementsByClassName("education");
    education[0].style.display = 'none';
    var element = document.getElementsByClassName("softSkills");
    element[0].style.display = 'block';
}
function displayEducation() {
    var technical = document.getElementsByClassName("technicalskills");
    technical[0].style.display = 'none';
    var element = document.getElementsByClassName("softSkills");
    element[0].style.display = 'none';
    var education = document.getElementsByClassName("education");
    education[0].style.display = 'block';
}

function openNavBar() {
    console.log("Opening nav menu");
    document.getElementById("nav_ul").style.right='0px';
   
}
function closeNavBar() {
    document.getElementById("nav_ul").style.right='-120px';


}
//closing navbar whenever clicked outside 
document.addEventListener('click', function(event) {
    var navbar = document.getElementById('navbar');
    var bars = document.getElementById('bars');
    var navBarUl = document.getElementById('nav_ul');
    if (event.target !== navbar && event.target !== bars && event.target !== navBarUl && !navbar.contains(event.target)) {
        closeNavBar(); 
    }
});

// Define the text to be displayed dynamically
// Define the text to be displayed dynamically
const textParts = [
    { text: " I am a ", color: "#ffffff" },
    { text: "Java", color: "#ff0000" },
    { text: " and ", color: "#ffffff" },
    { text: "Frontend", color: "#ff0000" },
    { text: " developer.", color: "#ffffff" }
];

// Get the element where you want to display the text
const dynamicTextElement = document.getElementById("dynamicText");

// Function to display text with each letter appearing after a delay
function displayDynamicText(parts, delay) {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < parts.length) {
            const part = parts[index];
            for (let i = 0; i < part.text.length; i++) {
                const element = part.text[i];
                setTimeout(() => {
                    dynamicTextElement.innerHTML += `<span style="color: ${part.color};">${element}</span>`;

                }, i*100);
                console.log(element);
            }
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, delay);
}

// Delay (in milliseconds) between each letter
const delay = 1000; // Adjust as needed

// Call the function to display the text dynamically
displayDynamicText(textParts, delay);
