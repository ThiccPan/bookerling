console.log("hello from script aaa");

let popupTrigger = document.getElementById("popup");
console.log(popupTrigger)
popupTrigger.addEventListener("click", (ev) => {
    console.log("clicked")
})