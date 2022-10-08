let test = $(".test");
test.on("click", function () {
        test.animate({
            width: '0'}
            );
    test.promise().done(function(){
        test.animate({
            width: '190'}
        );

    })

})

$('.slides').slick({
    slidesToShow: 5,
    dots:true,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 2,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});
