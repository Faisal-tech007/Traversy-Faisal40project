const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    }else {
        nav.classList.remove('active')
    }
}

function fixDiv() {
    if(window.scrollY > nameofdiv.offsetHeight + 250){
        nameofdiv.classList.add('active')
    }else{
        nameofdiv.classList.remove('active')
    }
}