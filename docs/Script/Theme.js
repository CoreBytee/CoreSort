function UpdateTheme() {
    console.log(localStorage.Theme)
    document.documentElement.setAttribute("class", (localStorage.Theme != "true") ? "theme-dark" : "theme-light")
}

UpdateTheme()