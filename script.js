let theme = 1;

window.onload = () => {
    const title = document.getElementById("title1");
    const themeButton = document.getElementById("setting");
    const channelLink = document.getElementById("channel");
    themeButton.addEventListener('click', () => {
        if (theme === 1) {
            theme = 0;
            document.body.style.color = "white";
            document.body.style.backgroundColor = "black";
        } else {
            theme = 1;
            document.body.style.color = "black";
            document.body.style.backgroundColor = "white";
        } 
    });
    function showElements () {
        themeButton.style.display = "block";
        title.style.display = "block";
        channelLink.style.display = "block";
    }
    setTimeout(showElements, 3000)

}
