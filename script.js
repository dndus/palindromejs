const textinput = document.querySelector("input");
const checkbutton = document.querySelector("button")
textinput.addEventListener("keyup", () => {
    let filtervalue = textinput.value.replace(/[^A-Z0-9]/ig, "");
    console.log(textinput.value);

    if (filtervalue) {
        return checkbutton.classList.add("active");
    }
    checkbutton.classList.remove("active");
})