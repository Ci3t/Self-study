
const fullImg = document.querySelector('.full-img');
const modal = document.querySelector('.modal')
const smallImg = document.querySelectorAll('.wrapper img')


smallImg.forEach((img)=>{

    img.addEventListener('click', ()=>{    
        modal.classList.add('open')
        fullImg.classList.add('open');
        const originalQuality = img.getAttribute('alt');
        fullImg.src=`images/full/${originalQuality}.jpg`;
    })
   


    
})
modal.addEventListener('click',(e)=>{
    
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        fullImg.classList.remove('open');
    }
    
})