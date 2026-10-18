const text = "Full-Stack Developer & Final Year IT Student";
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Speed of typing (in milliseconds)
    }
}

// Start the typing effect when the page loads
window.onload = function() {
    setTimeout(typeWriter, 500); // Wait half a second before typing
};