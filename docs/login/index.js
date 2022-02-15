var LoginData = {
    "client_id": "943102492537917490",
    "redirect_uri": `${location.protocol}//${location.hostname}/login/callback/`,
    "response_type": "code",
    "scope": "identify",
    "prompt": "consent"
}

const encodeGetParams = p => 
  Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");


function load() {
    document.getElementById("login-button").href = `https://discord.com/oauth2/authorize?${encodeGetParams(LoginData)}`
}

window.addEventListener("load", load)