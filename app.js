$('.slides').slick({
    slidesToShow: 5,
    arrows: false,
    dots:true,
    centerMode: true,
    centerPadding: 0,
    // initialSlide: 2,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 640,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

// FAQS
$('.question').on('click',function (){
    const parent = $(this).parent()
    const divItem = parent.parent()
    const span = divItem.find('.open-button')

    parent.toggleClass('active');
    span.toggleClass('active');
});

// typeWriter()


function typeWriter(){
    $('.type-effect').each(function (){
        $(this).clone().removeClass('type-effect').addClass('clone').appendTo($(this).parent())
        let clone = $('.clone')
        let initialWidth = clone.width()
        clone.remove()

        let root = document.documentElement;
        root.style.setProperty('--my-end-width', initialWidth + 5 + "px");
    })
}
