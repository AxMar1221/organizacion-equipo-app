window.addEventListener("load", ()=> {
    console.log("App React loaded")
})

let changeTitle = false;

setInterval(() => {
    document.title =
    changeTitle ? "Organización Alura" : "React: desarrollando con javascript"

    changeTitle = !changeTitle

}, 30000);