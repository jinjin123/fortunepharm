jQuery(document).ready(() => {
  const $ = jQuery
  const $window     = $(window)


  // All NYU Link
  $("#btn-open-all-nyu").bind("click", function(){
  $("#popup-all-nyu").addClass("active");
  });

  $("#btn-close-all-nyu").bind("click", function(){
    $("#popup-all-nyu").removeClass("active");
  });

  $('.main-menu-toggle, #btn-close-navigation').click(function () {
    $("#navigation, #global-topbar, #modalBackdrop").toggleClass("active");
  });

  // for language switcher
  if (window.location.href.indexOf('/en') > 0) {
    $('ul.links > li.en').css('display', 'none')
  }
  else if (window.location.href.indexOf('/zh-hans') > 0) {
    $('ul.links > li.zh-hans').css('display', 'none')
  }
  else {
    $('ul.links > li.en').css('display', 'none')
  }

  // Search top bar
  $("#topbar-search-toggle").bind("click", function(){
    if ($("#topbar-search-form .form-text").hasClass("active")) {
      if ($("#topbar-search-form .form-text").val().length > 0) {
        $("#topbar-search-form #search-block-form").submit();
        if ($(window).width() <=400) {
          $('.topbar-search .topbar-search-form').css({right: "-78px"});
          $(".topbar-logo").hide();
        } else {
          $('.topbar-search .topbar-search-form').css({right: "12px"});
        }
      } else {
        if ($(window).width() <=400) {
          $('.topbar-search .topbar-search-form').css({right: "-78px"});
          $(".topbar-logo").hide();
        } else {
          $('.topbar-search .topbar-search-form').css({right: "12px"});
        }
        $("#topbar-search-form .form-text").addClass("active").focus();
      }
    } else {
      if ($(window).width() <=400) {
        $('.topbar-search .topbar-search-form').css({right: "-78px"});
        $(".topbar-logo").hide();
      } else {
        $('.topbar-search .topbar-search-form').css({right: "12px"});
      }
      $("#topbar-search-form .form-text").addClass("active").focus();
    }
  });

  $("#topbar-search-form .form-text").bind("blur", function(){
    var that = $(this);
    setTimeout(function(){
      that.removeClass("active").text("");
      $('.topbar-search .topbar-search-form').css({right: "0"});
      $(".topbar-logo").show();
    }, 100);
  });


(function() {
    $('.navigation .main-menu >li.root ul').each(function() {
      $(this).addClass('sub-menu');
      $(this).find('ul').addClass('nested sub-menu');
    });

    $('.navigation .main-menu >li').each(function() {
      if ($(this).find('>.is-active')) {
        $(this).find('>.is-active').parent().addClass('opened');
        $(this).find('>.is-active').parent().find('> ul').show();
      }
    });

    $('.navigation .main-menu >li .sub-menu > li').each(function() {
      if ($(this).find('>.is-active')) {
        $(this).find('>.is-active').parent('.root').addClass('opened');
        $(this).find('>.is-active').parent('.root').find('> .nested').show();
        $(this).find('>.is-active').parent().parent().show();
        $(this).find('>.is-active').parent().parent().parent().addClass('opened');
        $(this).find('>.is-active').parent().parent().addClass('opened');
      }
    });

    $('.navigation .main-menu >li .nested > li').each(function() {
      if ($(this).find('>.is-active')) {
        $(this).find('>.is-active').parents().show();
       $(this).find('>.is-active').parents().addClass('opened');
      }
    });

    const $headerMenu = $('.header .main-nav-menu')
    const $toggleBtn  = $('.main-menu-toggle')

    $('.navigation .main-menu li').on('click', function(e) {
      if ($(this).hasClass('opened')) {
        $(this).removeClass('opened');
        $(this).addClass('closed');
      } else {
        $(this).addClass('opened');
      }
      $(this).children('ul').toggle();
      $(this).children('ul').toggleClass('opened');
      e.stopPropagation();
    });

     // Mobile menu
    $('#block-nyu-theme-mainnavigation .main-menu li').on('click', function(e) {
      if ($(this).hasClass('opened')) {
        $(this).removeClass('opened minus');
        $(this).addClass('closed');
      } else {
        $(this).removeClass('closed');
        $(this).addClass('opened minus');
      }
      $(this).children('ul').toggle();
      $(this).children('ul').toggleClass('opened');
      e.stopPropagation();
    });

    $toggleBtn.on('click', function() {
      const $this = $(this)
      if ($this.hasClass('opened')) {
        $toggleBtn.removeClass('opened').addClass('closed')
        $headerMenu.fadeOut(300)
      }
      else {
        $this.removeClass('closed').addClass('opened')
        $headerMenu.fadeIn(300)
      }
    })

    $window.on('resize', function() {
      $window.width() >= 800
        && $toggleBtn.hasClass('closed') 
        && $headerMenu.css('display', 'flex')

      $window.width() < 800
        && $headerMenu.css('display') === 'flex'
        && $toggleBtn.addClass('closed')
        && $headerMenu.css('display', 'none')
    })

  })()

  const $search = $('.header #search')
  const $searchIcon = $('.header .top-nav-search-icon')
  const $realSearch = $('.header #block-searchform #edit-keys')
  const $realSubmit = $('.header #block-searchform #edit-submit')
  const realSearch = document.querySelector('.header #block-searchform #edit-keys')
  // for header
  ;(function() {
    $searchIcon.on('click', function() {
      if ($window.width() <= 600) {
        window.location.href = '/search/node'
      }
      else {
        const $this = $(this)
        if ($this.hasClass('opened')) {
          $realSearch.val() && ($realSearch.val().length !== 0) && $realSubmit.trigger('click')

          $search.fadeOut('fast')
          $this.removeClass('opened').addClass('closed')
        }
        else {
          $search.fadeIn('fast')
          $this.removeClass('closed').addClass('opened')
        }
      }
    })
    let isFocus = false
    $search.on('input', e => {
      try {
        realSearch && (realSearch.value = $search.val())
      } catch(e) {
        console.log(e)
        window.location.href = '/search/node?keys=' + $search.val()
      }
    }).on('focus', e => {
      isFocus = true
    }).on('blur', e => {
      isFocus = false
    }).keyup(e => {
      if (e.which === 13) {
        $realSearch.val() && ($realSearch.val().length !== 0) && $realSubmit.trigger('click')
      }
    })
    $(document.body).on('click', e => {
      let $obj = $(e.target)
      if ($obj.is('.top-nav-search-icon')
        || $obj.is($search)) {
        return
      }
      else {
        $search.fadeOut('fast')
        $searchIcon.removeClass('opened').addClass('closed')
      }
    })
  })()

  fqController('.collapse-box .collapse-title', '.collapse-box .collapse-content');
  function fqController (controller, content) {
      $(controller).click(function () {
        var triggered = $(this).siblings(content);
        if (triggered.is(":visible") == false) {
          triggered.animate({height: 'show', opacity: 'show'}, 500, function () {
            triggered.show();
          });
          $(this).addClass('active');
          var field = $(this).closest('.field-item');
          var other = field.siblings('.field-item').find(controller);

          other.siblings(content).each(function(){
            var box = $(this);
            var p_box = box.prev();
              box.animate({height: 'hide', opacity: 'hide'}, 500, function () {
                box.hide();
              });
              p_box.removeClass('active');
          });
        } else {
          triggered.animate({height: 'hide', opacity: 'hide'}, 500, function () {
            triggered.hide();
          });
          $(this).removeClass('active');
        }
      });
  }


})
