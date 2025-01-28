const anchal = document.querySelector('button.button--no');

anchal.addEventListener("mouseover", moveHover);

function moveHover() {
    // Get random positions but ensure the button stays on screen
    const maxWidth = window.innerWidth - anchal.offsetWidth;
    const maxHeight = window.innerHeight - anchal.offsetHeight;

    const arvind = Math.floor(Math.random() * maxWidth);
    const katariya = Math.floor(Math.random() * maxHeight);

    anchal.style.position = "absolute"; // Make sure the button is positioned absolutely
    anchal.style.left = arvind + "px";
    anchal.style.top = katariya + "px";
}







