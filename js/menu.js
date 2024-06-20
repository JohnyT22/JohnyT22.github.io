const nav = document.querySelector('nav')
const toggleBtn = document.querySelector('.toggleBTN')
const checkBox = document.querySelector('nav input')
const root = document.querySelector(':root');
const dataSet = document.documentElement.dataset;
var theme = 'light';

toggleBtn.addEventListener('click', ()=>{
    nav.classList.toggle('navActive')
    toggleBtn.classList.toggle('BTNactive')
})

const allNavLinks = document.querySelectorAll('nav ul li a')
const allSections = document.querySelectorAll('main section')
const body = document.querySelector('body')

document.addEventListener('scroll', ()=>{
    allSections.forEach((section,index) => {
        if(isOnScreen(section)){
            allNavLinks[index].classList.add('navlinkActive')
        }else{
            allNavLinks[index].classList.remove('navlinkActive')
        }
    });
})

allSections.forEach((section,index) => {
    if(isOnScreen(section)){
        allNavLinks[index].classList.add('navlinkActive')
    }else{
        allNavLinks[index].classList.remove('navlinkActive')
    }
});

function isOnScreen(section) {
    var boudries = section.getBoundingClientRect();
    var bool = boudries.top >= -window.innerHeight*0.6 && boudries.bottom <= window.innerHeight +window.innerHeight*0.6
    return bool
}

function ChangeTheme(){
    if(theme == 'light'){
        dataSet.theme = 'darkTheme';
        theme = 'dark';
    }else if(theme == 'dark'){
        dataSet.theme = '';
        theme = 'light';
    }
}