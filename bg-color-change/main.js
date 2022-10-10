


    let change = document.querySelector('.change');
    let reset = document.querySelector('.reset')

    const random = (e) =>{
        let y = Math.floor(Math.random() * (e))
        return y
    }
    change.addEventListener('click',()=>{
        const rand = `rgb(${random(255)},${random(255)},${random(255)})`;
           document.body.style.backgroundColor = rand;
    });
    reset.addEventListener('click',(e)=>{
       document.body.style.backgroundColor = '';
    })