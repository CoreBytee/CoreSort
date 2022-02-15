import { WebRequest } from "/Script/WebRequest.js";
import { Sleep } from "/Script/Sleep.js";

async function load() {
    var Response = (await WebRequest(
        "GET",
        `https://api.coresort.corebyte.ga/Auth/Connect/?code=${Query.code}&url=${location.href.split("?")[0]}`
    )).Raw

    console.log(Response)

    if (Response.status == 408) {
        location = `${location.protocol}//${location.hostname}/login/?click`
    }

    if (Response.status == 403) {
        document.getElementById("title").innerText = "You do not have access!"
        document.getElementById("image").src = "./pensive.png"
    }

    var UserData = await Response.json()
    sessionStorage.UserData = await JSON.stringify(UserData)
    document.getElementById("title").innerText = `Welcome back ${UserData.Name}`

    await Sleep(1000)

    location = `${location.protocol}//${location.hostname}/`
}

window.addEventListener("load", load)