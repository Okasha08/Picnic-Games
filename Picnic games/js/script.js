$(document).ready(function(){

    if($('.brands_slider').length)
    {
    var brandsSlider = $('.brands_slider');
    
    brandsSlider.owlCarousel(
    {
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    nav:false,
    dots:false,
    autoWidth:true,
    items:8,
    margin:42
    });
    
    if($('.brands_prev').length)
    {
    var prev = $('.brands_prev');
    prev.on('click', function()
    {
    brandsSlider.trigger('prev.owl.carousel');
    });
    }
    
    if($('.brands_next').length)
    {
    var next = $('.brands_next');
    next.on('click', function()
    {
    brandsSlider.trigger('next.owl.carousel');
    });
    }
    }
    
    
    });

    // hoverdetailsvanilia
    VanillaTilt.init(document.querySelectorAll(".box"), {
		max: 25,
		speed: 400
	});
    // hoverdetailsvaniliaend


    VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 15,
		speed: 200
	});
  // hoverdetailsvaniliaend


  const topscroll = document.querySelector("#topscroll");
  topscroll.addEventListener("click",function(){
      window.scrollTo({
          top: 0,
          left: 0,
          behavior:"smooth"
      });
  });








  // FLYINGCART
  
  // FLYINGCAREND


 