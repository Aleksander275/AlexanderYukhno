$(function(){
  $(".slider").slick({
    slidesToShow: 3,
    responsive:[
      {
        breakpoint: 1052,
        settings: {
          slidesToShow: 2
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});