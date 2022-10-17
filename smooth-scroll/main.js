//?Smooth scroll via library github

const scroll = new SmoothScroll('nav a[href*="#"]',{
    speed:700,
});

//!mouse Change
const mouseCursor = document.querySelector('.cursor')
const navLink = document.querySelectorAll('nav ul li a')
console.log(navLink);


window.addEventListener('mousemove',cursor)

function cursor(e) {
    
    mouseCursor.style.top = `${e.pageY}px`
    mouseCursor.style.left =` ${e.pageX}px`
}

navLink.forEach(function(link){
    link.addEventListener('mouseover',function(){
        mouseCursor.classList.add('link-grow')
        link.classList.add('hovered-link')
        link.style.transform = `scale(${3})`
    })
    link.addEventListener('mouseout',function(){
        mouseCursor.classList.remove('link-grow')
        link.classList.remove('hovered-link')
    })
})
console.log(navLink);
//? observer functions
const section = document.querySelectorAll('section');
const nav = document.querySelector('a')
const show = document.querySelector('.show')
let colors = ['#bc6c25','#dda15e','#f4a261','#e9c46a']


const options ={
    threshold: 0.7
}
const observer = new IntersectionObserver(navScroll,options)


function navScroll(entries) {
    entries.forEach(entry => {
        
        const className = entry.target.className
        const anchor = document.querySelector(`[data-page="${className}"]`)
        const index = entry.target.getAttribute(`data-index`)
        const coords = anchor.getBoundingClientRect()
        const client = {
            left: coords.left,
            top: coords.top,
            height: coords.height,
            width: coords.width
        }

        if(entry.isIntersecting){
            show.style.setProperty('height',`${client.height}px`)
            show.style.setProperty('left',`${client.left}px`)
            show.style.setProperty('top',`${client.top}px`)
            show.style.setProperty('width',`${client.width}px`)
            show.style.backgroundColor = colors[index]
        }

        console.log(index);
    });
}


section.forEach(e=>{
    observer.observe(e)
})