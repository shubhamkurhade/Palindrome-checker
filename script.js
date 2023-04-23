const textInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoText = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", ()=>{
    /*
split funtion will split the input string (characters) and then it revserses the same
again to connect the string, join function comes to help
    */
    let reversedInput = filterInput.split("").reverse().join("");
    infoText.style.display = "block";
    if(filterInput!= reversedInput){
        return infoText.innerHTML = `No, <span>'${textInput.value}'</span> is not a Palindrome! <i class="em em-confused" aria-role="presentation" aria-label="CONFUSED FACE"></i>!`
    }
    infoText.innerHTML = `Yes, <span>'${textInput.value}'</span> is a Palindrome! <i class="em em-sunglasses" aria-role="presentation" aria-label="SMILING FACE WITH SUNGLASSES"></i>`
})

textInput.addEventListener("keyup", ()=>{
    filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
});