const paralax = () => {
    const elem = document.querySelector('.utp__top-logo');
    console.log(elem)
    if(window.innerWidth > 1260){
        document.addEventListener('mousemove', (event) => {
        
            elem.style.transform = `translateY(-${event.clientX/70}px)`;
        });
    }
};
if(document.querySelector('.utp__top-logo')){
    // paralax();
}



    // Анимация первой богини
    function mouhenOne (){
        const elem = document.querySelector('.utp__top-logo');
        document.addEventListener('scroll', () => {
            elem.style.top = `calc(-70px - ${pageYOffset/6}px`;
            // console.log(pageYOffset);
        })
    };
    if(document.querySelector('.utp__top-logo')){
        mouhenOne();
    }
    

    
    // Анимация второй богини
    function mouhenTwo (){
        const elem = document.querySelectorAll('.main-form__top-logo')[0];
        document.addEventListener('scroll', () => {
            elem.style.bottom = `calc(-740px + ${pageYOffset/6}px`;
            // console.log(pageYOffset);
        })
    };
    if(window.innerWidth > 1030){
        if(document.querySelectorAll('.main-form__top-logo')[0]){
            mouhenTwo();
        }
    }
    
    

    // Анимация льва
    function mouhenTree (){
        const elem = document.querySelectorAll('.main-form__top-logo')[1];
        console.log(elem)
        document.addEventListener('scroll', () => {
            elem.style.top = `calc(740px - ${pageYOffset/6}px`;
            // console.log(pageYOffset);
        })
    };
    if(window.innerWidth > 1030){
        if(document.querySelectorAll('.main-form__top-logo')[1]){
            mouhenTree();
        }
    }
    
    