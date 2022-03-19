const textinput = document.querySelector("input");
const checkbutton = document.querySelector("button");
const infoTxt = document.querySelector(".info-text");
let filtervalue;

checkbutton.addEventListener("click", () => {
    let reverseInput = filtervalue.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filtervalue != reverseInput) {
        return infoTxt.innerHTML = `No, <span>${textinput.value}</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span>${textinput.value}</span> is a palindrome!`;
});

textinput.addEventListener("keyup", () => {
    filtervalue = textinput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  
    if (filtervalue) {
        return checkbutton.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkbutton.classList.remove("active");
})