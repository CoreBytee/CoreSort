var LoginData = {
    "client_id": "943102492537917490",
    "redirect_uri": `${location.protocol}//${location.hostname}/login/callback/`,
    "response_type": "code",
    "scope": "identify",
    "prompt": "none"
}

const encodeGetParams = p => 
  Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");


function load() {
    Button = document.getElementById("login-button")
    Button.href = `https://discord.com/oauth2/authorize?${encodeGetParams(LoginData)}`

    if (Query.click != null) {
      Button.click()
    }
}

window.addEventListener("load", load)