const show = document.querySelector('.mobi')
const ani = document.querySelector('.ulll')
const closes = document.querySelector('.mobis')

    if(show){
        show.addEventListener('click',()=>{
            ani.classList.add('show')
            show.classList.add('none')
            closes.classList.add('active')
        })
    }
    if(closes){
        closes.addEventListener('click',()=>{
            ani.classList.remove('show')
            show.classList.remove('none')
            closes.classList.remove('active')

        })
    }
