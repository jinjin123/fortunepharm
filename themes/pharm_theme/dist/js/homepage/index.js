"use strict";jQuery(document).ready(function(){var o=jQuery,e=o(window),s=(o("footer.footer"),o("#block-pharm-theme-content")),t=null;function l(){null!==t&&0!==t.length||(t=o("ul.slick-dots")),t.css&&(e.width()<500?t.css("bottom","-"+(s.height()-100)+"px"):t.css("bottom",0))}o(".homepage-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e.on("load",l).on("resize",l)});