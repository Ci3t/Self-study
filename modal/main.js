


const show =()=>{
    let open = document.querySelector('.open');
    let close = document.querySelector('.modal-btn')

    // console.log(close);
    
    open.addEventListener("click",()=>{
        document.querySelector('.modal-container').classList.add('show')
    })
    // return open
    close.addEventListener("click",()=>{
        document.querySelector('.modal-container').classList.remove('show')
    })

}

show()