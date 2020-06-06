jQuery(document).ready(() => {
  const $ = jQuery
  const $window = $(window)
  const $footer = $('footer.footer')

  const $infobox = $('#block-nyu-theme-content')
  let $carouselDots = null


// for carousel
  $('.homepage-highlight .views-view-grid').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true
  }) 

  //
  $('.senior-spotlight ul').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    cssEase: 'ease',
    arrows: false,
    rows: 1,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  })

// for carousel dots postion
function calDotsPos() {
  if ($carouselDots === null || $carouselDots.length === 0) {
    $carouselDots = $('ul.slick-dots')
  }

  if ($carouselDots.css) {
    if ($window.width() < 500) {
      $carouselDots.css('bottom', `-${$infobox.height() - 100}px`)
    }
    else {
      $carouselDots.css('bottom', 0)
    }
  }
  
}
$window.on('load', calDotsPos).on('resize', calDotsPos)
})