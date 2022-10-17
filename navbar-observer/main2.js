let home = document.querySelectorAll('section')
let tag = document.querySelectorAll('a')
let show = document.querySelector('.show')
let show2 = document.querySelector('.show2')
// console.log(tag);

const colors = ['#6b9080','#a4c3b2','#cce3de','#eaf4f4']
const colors2 = ['#2a9d8f','#e9c46a','#f4a261','#e76f51']



const options = {
    root:null,
    threshold: 0.7
}

const observer = new IntersectionObserver(scrollnav,options)
const observer2 = new IntersectionObserver(scrollnav2,options)

function scrollnav (entries){
    entries.forEach(entry => {
        
        const className = entry.target.className
        
        const anchor = document.querySelector(`[data-page="${className}"]`)
        const index = entry.target.getAttribute('data-index')
        const coords = anchor.getBoundingClientRect();
        const client = {
            height: coords.height,
            width: coords.width,
            left: coords.left,
            top: coords.top,
            right: coords.right,
            bottom: coords.bottom,
            
        }
        
        if(entry.isIntersecting){
            show.style.setProperty('top',`${client.top}px`)
            show.style.setProperty('left',`${client.left}px`)
            show.style.setProperty('height',`${client.height}px`)
            show.style.setProperty('width',`${client.width}px`)
            show.style.backgroundColor = colors[index];

        }
        
    });
    
}

function scrollnav2 (entries){
    entries.forEach(entry => {
        
        const className = entry.target.id
        const anchor = document.querySelector(`[data-page="${className}"]`)
        const index = entry.target.getAttribute('data-index')
        const coords = anchor.getBoundingClientRect();
        const client = {
            height: coords.height,
            width: coords.width,
            left: coords.left,
            top: coords.top,
            right: coords.right,
            bottom: coords.bottom,
            
        }
        
        if(entry.isIntersecting){
            

            show2.style.setProperty('top',`${client.top}px`)
            show2.style.setProperty('left',`${client.left}px`)
            show2.style.setProperty('height',`${client.height}px`)
            show2.style.setProperty('width',`${client.width}px`)
            show2.style.backgroundColor = colors2[index];
        }
        
    });
    
}


home.forEach(entry=>{
    observer.observe(entry)
    observer2.observe(entry)
})

console.log(observer);