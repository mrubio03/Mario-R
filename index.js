/* Practica 1 */
let msg = "hola mundo"

/**Esto mostrara un mensaje en la consola */
console.log("msg")
/**Esto cogera el valor de la variable "title" y nos devolvera el valor que guarda*/
/**let title = document.getElementById("title") */
document.addEventListener("DOMContentLoaded", init)
/** */
function init(event) {
    let title = document.getElementById("title")
    /*console.log(title)*/
    title.style.color = "red"
    title.innerHTML = msg
    loadData("data.json")
}

function loadData(url) {
    fetch(url)
        .then(Response => json = Response.json())
        .then("data.json")

    console.log(json)

}
 