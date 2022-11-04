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

$('.question').on('click',function (){
    const parent = $(this).parent()
    const divItem = parent.parent()
    const span = divItem.find('.open-button')
    const faqsSection = $('.faqs_section')

    parent.toggleClass('active');
    span.toggleClass('active');
});
