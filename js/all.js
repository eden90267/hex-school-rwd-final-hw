$('.menu-hamburger').on('click',  function(e){
    e.preventDefault();
    $('body').toggleClass('menu-show');
});

$('.cart-content-item ul li button').hover(function() {
	$(this).toggleClass('btn-hover');
})