document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        offset: 120,
        reset: true,
    });
});

window.addEventListener('scroll', function() {
    // Select the image
    const image = document.getElementById('rotatingChicken');

    // Calculate rotation: window.pageYOffset is the scroll distance
    // Multiply by 0.2 to make the rotation slower/smoother
    let rotation = window.pageYOffset * 0.2;

    image.style.transform = `rotate(${rotation}deg)`;
});

window.addEventListener('scroll', function() {

    const image = document.getElementById('rotatingChicken2');

    let rotation = window.pageYOffset * 0.2;

    image.style.transform = `rotate(${rotation}deg)`;
});


window.addEventListener('scroll', function() {
    // Select the image
    const image = document.getElementById('rotatingChicken3');

    let rotation = window.pageYOffset * 0.2;

    image.style.transform = `rotate(${rotation}deg)`;
});