// Главный слайдер в шапке
$(document).ready(function(){
    let mainSlider = $("#main-slider");
    mainSlider.owlCarousel(
        {
            margin:0,
            items: 1,
            nav: false,
            loop: false,
            dots: true,
        }
    );
    $('.customNextBtn').click(function() {
        mainSlider.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function() {
        mainSlider.trigger('prev.owl.carousel', [300]);
    })
});


// Слайдер услуг
$(document).ready(function(){
    let uslugiSlider = $("#uslugi-slider");
    uslugiSlider.owlCarousel(
        {
            margin:0,
            autoWidth: true,
            margin: 8,
            center: true,
            items: 7,
            nav: false,
            loop: true,
            dots: false,
            startPosition: 3,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 1000,
            
            responsive : {
                0 : {
                    center: false,
                },
                376 : {
                    center: true,
                },
            }

        }
    );
});



// Слайдер СМИ
$(document).ready(function(){
    let smiSlider = $("#smi-slider");
    smiSlider.owlCarousel(
        {
            margin:0,
            items: 1,
            nav: false,
            loop: false,
            dots: false,
        }
    );
    $('.smiNextBtn').click(function() {
        smiSlider.trigger('next.owl.carousel');
    })
    $('.smiPrevBtn').click(function() {
        smiSlider.trigger('prev.owl.carousel', [300]);
    })
});


$(document).ready(function(){
    let newsSlider = $("#news-slider");
    newsSlider.owlCarousel(
        {
            margin:28,
            nav: false,
            loop: false,
            dots: false,
            autoWidth: false,
            responsive : {
                0 : {
                    items: 1,
                },
                700 : {
                    items: 2,
                },
            }
        }
    );
    $('.newsNextBtn').click(function() {
        newsSlider.trigger('next.owl.carousel');
    })
    $('.newsPrevBtn').click(function() {
        newsSlider.trigger('prev.owl.carousel', [300]);
    })
});




// Маленький слайдер в благотворительных карточках
$(document).ready(function(){

    $(function(){
        $('.mini-slider__SLIDER').each(function(){
            console.log($(this));
          $(this).owlCarousel(
            {
                margin:10,
                // items: 4,
                nav: false,
                loop: true,
                dots: false,
                responsive : {
                    0 : {
                        items: 1,
                        autoWidth: true,
                        center: true,
                    },
                    896 : {
                        items: 2,
                        autoWidth: false,
                        center: false,
                    },
                    1001 : {
                        items: 3,
                    },
                    1111 : {
                        items: 4,
                    },
                }
            } 
          );
        //   let btnPrev = 
          $('.mini-sliderNextBtn').click(function() {
            $('.mini-slider__SLIDER').trigger('next.owl.carousel');
          })
          $('.mini-sliderPrevBtn').click(function() {
            $('.mini-slider__SLIDER').trigger('prev.owl.carousel', [300]);
          })
        });
      });
});




// Слайдер у лицензий -1
$(document).ready(function(){
    let licSlider = $(".js-slider-lic");
    licSlider.owlCarousel(
        {
            margin:24,
            nav: false,
            loop: true,
            dots: false,
            autoWidth: true,
            responsive : {
                0 : {
                    items: 1,
                },
                700 : {
                    items: 4,
                },
            }
        }
    );
    $('.licenses-sliderNextBtn').click(function() {
        licSlider.trigger('next.owl.carousel');
    })
    $('.licenses-sliderPrevBtn').click(function() {
        licSlider.trigger('prev.owl.carousel', [300]);
    })
});

// Слайдер у лицензий -2
$(document).ready(function(){
    let certSlider = $(".js-slider-certificates");
    certSlider.owlCarousel(
        {
            margin:24,
            nav: false,
            loop: true,
            dots: false,
            autoWidth: true,
            responsive : {
                0 : {
                    items: 1,
                },
                700 : {
                    items: 3,
                },
            }
        }
    );
    $('.certificatesNextBtn').click(function() {
        certSlider.trigger('next.owl.carousel');
    })
    $('.certificatesPrevBtn').click(function() {
        certSlider.trigger('prev.owl.carousel', [300]);
    })
});

// Слайдер у лицензий -2
$(document).ready(function(){
    let lic2Slider = $(".js-slider-lic-2");
    lic2Slider.owlCarousel(
        {
            margin:24,
            nav: false,
            loop: true,
            dots: false,
            autoWidth: true,
            responsive : {
                0 : {
                    items: 1,
                },
                700 : {
                    items: 4,
                },
            }
        }
    );
    $('.licenses-sliderNextBtn').click(function() {
        lic2Slider.trigger('next.owl.carousel');
    })
    $('.licenses-sliderPrevBtn').click(function() {
        lic2Slider.trigger('prev.owl.carousel', [300]);
    })
});




// Делаем тублицу слайдером при 720
let tableTrack = document.querySelector('.js-table-slider');
if(tableTrack){
    if(document.querySelector('.researchers-table').clientWidth < 721){
        console.log('wwwww')
        tableTrack.id = 'table-slider';
        tableTrack.classList.add('owl-carousel');
    }
}

$(document).ready(function(){
    let tableSlider = $("#table-slider");
    tableSlider.owlCarousel(
        {
            margin:0,
            nav: false,
            loop: true,
            dots: true,
            autoWidth: false,
            responsive : {
                0 : {
                    startPosition: 2,
                    items: 1,
                },
                700 : {
                    items: 2,
                },
            }
        }
    );
    $('.researchers-tableNextBtn').click(function() {
        lic2Slider.trigger('next.owl.carousel');
    })
    $('.researchers-tablePrevBtn').click(function() {
        lic2Slider.trigger('prev.owl.carousel', [300]);
    })
});



// Слайдер для книг
$(document).ready(function(){
    let bookSlider = $("#book-slider");
    bookSlider.owlCarousel(
        {
            margin:0,
            nav: false,
            loop: true,
            dots: false,
            autoWidth: true,
            responsive : {
                0 : {
                    startPosition: 2,
                    items: 1,
                },
                700 : {
                    items: 5,
                },
            }
        }
    );
    $('.researchers-book-sliderNextBtn').click(function() {
        bookSlider.trigger('next.owl.carousel');
    })
    $('.researchers-book-sliderPrevBtn').click(function() {
        bookSlider.trigger('prev.owl.carousel', [300]);
    })
});

// Слайдер для книг
$(document).ready(function(){
    let bookSlider = $("#book-slider-2");
    bookSlider.owlCarousel(
        {
            margin:0,
            nav: false,
            loop: true,
            dots: false,
            autoWidth: true,
            responsive : {
                0 : {
                    startPosition: 2,
                    items: 1,
                },
                700 : {
                    items: 5,
                },
            }
        }
    );
    $('.researchers-book-sliderNextBtn-2').click(function() {
        bookSlider.trigger('next.owl.carousel');
    })
    $('.researchers-book-sliderPrevBtn-2').click(function() {
        bookSlider.trigger('prev.owl.carousel', [300]);
    })
});




// Блог слайдер 
if($("#blog-slider")){
    $(document).ready(function(){
        let blogSlider = $("#blog-slider");
        blogSlider.owlCarousel(
            {
                margin:0,
                items: 1,
                nav: false,
                loop: false,
                dots: true,
                autoWidth: false,
            }
        );
        $('.blogNextBtn').click(function() {
            blogSlider.trigger('next.owl.carousel');
        })
        $('.blogPrevBtn').click(function() {
            blogSlider.trigger('prev.owl.carousel', [300]);
        })
    });
}




// Слайдер отзывов
$(document).ready(function(){
    let reviewsSlider = $("#reviews-slider");
    reviewsSlider.owlCarousel(
        {
            margin:40,
            items: 1,
            nav: false,
            loop: true,
            dots: true,
            autoWidth: false,
        }
    );
    $('.reviews-contentNextBtn').click(function() {
        reviewsSlider.trigger('next.owl.carousel');
    })
    $('.reviews-contentPrevBtn').click(function() {
        reviewsSlider.trigger('prev.owl.carousel', [300]);
    })
});