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
