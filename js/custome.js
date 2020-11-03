document.addEventListener("DOMContentLoaded", () => {

    // Открытие выбора города
    let btnSelect = document.querySelector('.select-js');
    let select = document.querySelector('.select-sub-js');

    btnSelect.addEventListener('click', (e) => {
        select.classList.toggle('open');
        btnSelect.classList.toggle('open');
    })

    // Меню раскрытие в мобиле подменю
    function sumMenuOpen (){
        let btn = document.querySelectorAll('.nav__item ul');
        btn.forEach( item => {
            item.parentNode.addEventListener('click', () => {
                item.classList.toggle('open')
            })
        })
    }
    sumMenuOpen();


    // Меню в шапке
    let menuBtn = document.querySelector('.header__menu-btn');
    let menuClozeBtn = document.querySelector('.nav__cloze');
    let headerMenu = document.querySelector('.header__nav');
    menuBtn.addEventListener('click', () => {
        headerMenu.classList.add('open');
    });
    menuClozeBtn.addEventListener('click', () => {
        headerMenu.classList.remove('open');
    });


    // Открываем поиск
    function search () {
        let searchBtn = document.querySelector('.search-header-js');
        let search = document.querySelector('.tools__input-search');

        searchBtn.addEventListener('click', () => {
            search.classList.toggle('open');
        })
    }
    if(window.innerWidth <= 1164){
        search();
    }






















    // Табы
    function tabClick(){
        let tabContainer = document.querySelectorAll('.tab__container');
        tabContainer.forEach( item => {
            let btnContainer = item.querySelector('.tab__btns');
            let btnAll = item.querySelectorAll('.tab__btn');
            let contentContainer = item.querySelector('.tab__contents');
            let contentAll = item.querySelectorAll('.tab__content');

            btnAll.forEach( (item, i) => {
                item.addEventListener('click', () => {
                    btnRemoveActive(btnAll, i);
                    contentRemoveActive(contentAll, i);
                })
            });

            
            btnRemoveActive(btnAll);
            contentRemoveActive(contentAll);
        })
    }
    if(document.querySelectorAll('.tab__container')){
        tabClick();
    }
    // Убираем активный класс у таба и добавляем его
    function btnRemoveActive(btnAll, i = 1){
        btnAll.forEach( item => {
            item.classList.remove('active');
        });
        btnAll[i].classList.add('active');
    }
    // Убираем активный класс у контента и добавляем его
    function contentRemoveActive(contentAll, i = 1){
        contentAll.forEach( item => {
            item.classList.remove('active');
        });
        contentAll[i].classList.add('active');
    }






    // Рейтинг
    // Рейтинг
    let itemList = document.querySelectorAll('.reviews-form__raiting-item');
    let itemArr = Array.prototype.slice.call(itemList);

    itemArr.forEach( item => {
        item.addEventListener('click', () => {
            let res = item.getAttribute('data-rai');
            item.parentNode.setAttribute('data-rai-res', res); 
        });
    });




})