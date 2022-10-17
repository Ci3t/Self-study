//?Smooth scroll via library github

const scroll = new SmoothScroll('nav a[href*="#"]',{
    speed:700,
});

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