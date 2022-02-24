import { WebRequest } from "./Script/WebRequest.js";

const Items = await (await WebRequest("GET", "https://api.coresort.corebyte.ga/Storage/Items/")).Raw.json()
console.log(Items)
globalThis.Items = Items

const ItemsHolder = document.getElementById("itemsholder")
async function RenderItems() {
    ItemsHolder.childNodes.forEach(ItemElement => {
        ItemElement.remove()
    });
}
await RenderItems()

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
