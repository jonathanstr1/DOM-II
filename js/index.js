// Your code goes here
// Your code goes here
document.querySelector(".logo-heading").addEventListener("click", function (event) {
    alert('Welcome!');
});

document.querySelector(".nav-link").addEventListener("mouseover", function (event) {
    alert('You are Here');
});
document.querySelector(".nav-link").nextElementSibling.addEventListener("mouseover", function (event) {
    alert('You hit another link!');
});
// ^Could keep doing this, but I think the idea is there.
document.querySelector(".content-section").addEventListener("dblclick", function (event) { 
    event.target.style.color = 'blue'; 
});


document.querySelector(".inverse-content").addEventListener("click", function (event) { 
    event.target.style.background = 'orange'; 
    event.target.style.color = 'white';
});

window.addEventListener('resize', function (event) {
    alert('Hey! Quit messing with that!');
    // document.style.background = 'red';
});



document.querySelector(".footer").addEventListener("dblclick", function (event) { 
    event.target.style.background = 'pink' ; 
});

