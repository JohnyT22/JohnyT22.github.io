const leftBTN = document.querySelector('.projectsScrollContainer .fa-arrow-left')
const rightBTN = document.querySelector('.projectsScrollContainer .fa-arrow-right')
const container = document.querySelector('.projectsScrollContainer .scrollGalery')
var col = container.querySelectorAll('.col')
var localNav = document.querySelector('.projectsScrollContainer .localnav')
var scrollGalery = document.querySelector('.scrollGalery')



rightBTN.addEventListener("click", () => {
    container.scrollBy(col[0].offsetWidth, 0);
})
leftBTN.addEventListener("click", () => {
    container.scrollBy(-col[0].offsetWidth, 0);
})

col.forEach((item, index) => {
    var dot = document.createElement('i');
    dot.classList.add("fas", "fa-circle");
    if (index == 0) dot.classList.add('selected');
    var newDot = dot.cloneNode(true);
    newDot.addEventListener("click", () => {
        dots = document.querySelectorAll('.projectsScrollContainer .localnav i');
        dots.forEach(singledot => {
            singledot.classList.remove('selected');
        });
        newDot.classList.add('selected');
        container.scroll(index * col[0].offsetWidth, 0);
    })
    localNav.appendChild(newDot);
});

scrollGalery.addEventListener('scroll', () => {
    dots = document.querySelectorAll('.projectsScrollContainer .localnav i');
    dots.forEach((dot, index) => {
        if (index * col[0].offsetWidth <= container.scrollLeft && container.scrollLeft < (index + 1) * col[0].offsetWidth) {
            dot.classList.add('selected');
        } else {
            dot.classList.remove('selected');
        }
    });
}
);