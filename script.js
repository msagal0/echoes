let theme = 0;

window.onload = () => {
    const githubLink = document.getElementById("github");
    const enterButton = document.getElementById("enter");
    const codes = document.getElementById("codes");
    const title = document.getElementById("title1");
    const themeButton = document.getElementById("setting");
    const channelLink = document.getElementById("channel");
    
    enterButton.onclick = function () {
        const command = codes.value.trim();
        if (command === "writer"){
            window.open("https://writer.runningwave.com", "_blank")
        }
        else if (command === "home"){
            window.open(".", "_self");
        }
        else if (command === "manual"){
            window.open("manual/manual.html", "_self")
        }
    }

    themeButton.addEventListener('click', () => {
        if (theme === 1) {
            theme = 0;
            document.body.style.color = "lightBlue";
            document.body.style.backgroundColor = "black";
        } else {
            theme = 1;
            document.body.style.color = "black";
            document.body.style.backgroundColor = "lightBlue";
        } 
    });
    function showElements () {
        themeButton.style.display = "block";
        title.style.display = "block";
        channelLink.style.display = "block";
        codes.style.display = "block";
        enterButton.style.display = "block";
        githubLink.style.display = "block";
    }
    setTimeout(showElements, 3000)

}
