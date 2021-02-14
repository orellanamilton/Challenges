/* const collapse = document.querySelectorAll('.faqs');

for (i = 0; i < collapse.length; i++){
    collapse[i].onclick = function() {
        this.classList.toggle("active");
    }
} */



const collapse = document.querySelectorAll('.faqs');
let i;

for (i = 0; i < collapse.length; i++) {
    collapse[i].onclick = function() {
        noActive();

        this.classList.toggle('active');
    }
}

function noActive() {
    for (i = 0; i < collapse.length; i++) {
        collapse[i].classList.toggle('active', false);
    }
}