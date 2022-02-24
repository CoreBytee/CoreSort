import { WebRequest } from "./Script/WebRequest.js";

var Items = await WebRequest("GET", "https://api.coresort.corebyte.ga/Storage/Items/")
console.log(Items)

async function RenderItems() {

}

async function load() {
    document.getElementById("change-theme").addEventListener(
        "click",
        function() {
            localStorage.Theme = !(localStorage.Theme == "true")
            UpdateTheme()
        }
    )

    
}

window.addEventListener("load", load)
