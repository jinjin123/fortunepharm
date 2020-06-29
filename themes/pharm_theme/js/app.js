Drupal.behaviors.yourmodulename = {
  attach: function(context, settings) {
    var $ = jQuery.noConflict();
    if ($('#company-timeline').length > 0) {
      var lang = settings.path.pathPrefix;
      var json_lang = lang.replace('/', '');
      var crt_path = settings.path.currentPath;
      crt_path = crt_path.replace("node/", "");
      var title_lang = "title_" + json_lang;
      var timeline_data = [];
      var JsonAPI = "/" + lang + "timeline-json/" + crt_path;
      $.getJSON(JsonAPI, callbackFuncWithData);

      function callbackFuncWithData(data) {
        for (var i in data) {
          var images = data[i]['img'];
          var imgs = [];
          var content = "";
          images = images.split(",");
          for (var x = 0; x < 21; x++) {
            if (images[x]) {
              imgs.push(images[x]);
            }
          }
          content = data[i][title_lang];
          timeline_data[i] = {
            type: 'blog_post',
            date: data[i]["date"].substring(0, 4),
            title: data[i]["date"].substring(0, 4),
            content: content,
            images: imgs
          };
        }
        timeline = new Timeline($('#company-timeline'), timeline_data);
        timeline.setOptions({
          dateFormat: 'YYYY',
          animation: true,
          lightbox: true,
          columnMode: 'dual',
          order: 'desc',
          separator: 'year',
          first_separator: true,
          responsive_width: 768
        });
        timeline.display();
      }
    }
    /***** Homepage slide *****/
    $('.homepage-slider .field-content ul').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: false,
      cssEase: 'ease',
      arrows: false,
      rows: 1,
      responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    })
    /**** homepage mobile slider *****/
    $('.homepage-mobile-slider .field-content ul').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: false,
      cssEase: 'ease',
      arrows: false,
      rows: 1,
      responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    })
    /*index*/
    if ($('.homepage .body .main-wrapper').length > 0) {
      index_row_wrapper('desktop-main', 'mobile-main', 9);
      $(window).resize(function() {
        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function() {
          index_row_wrapper('desktop-main', 'mobile-main', 9);
        }, 800));
      });
    }
    if ($('#banner-wrapper-mobile').length > 0) {
      $('#banner-wrapper-mobile').carousel({
        interval: false
      });
    }
    /*all*/
    function change_size(id_name, width, height) {
      if ($('#' + id_name).length > 0) {
        $('#' + id_name).width(width);
        $('#' + id_name).height(height);
      }
    }

    function change_height(class_name, height) {
      if ($('.' + class_name).length > 0) {
        $('.' + class_name).each(function() {
          $(this).height(height);
        });
      }
    }
    /*window resize*/
    change_size('wrapper', $(window).width(), $(window).height());
    $('body').show();
    $(window).resize(function() {
      clearTimeout($.data(this, 'resizeTimer2'));
      $.data(this, 'resizeTimer2', setTimeout(function() {
        change_size('wrapper', $(window).width(), $(window).height());
      }, 200));
      if ($(window).width() >= 768) {
        if ($('#wrapper').hasClass('toggled')) {
          $('#wrapper').removeClass('toggled');
        }
        if ($('.hamburger').hasClass('is-open')) {
          $('.hamburger').removeClass('is-open');
          $('.hamburger').addClass('is-closed');
        }
      }
    });
    /*window resize*/
    function index_row_wrapper(desktop_class, mobile_class, unit) {
      if ($(window).width() >= 768) var main_width = $('.' + desktop_class).width();
      else var main_width = $('.' + mobile_class).width();
      change_height('row-xs-4', Math.round(main_width / 12 * 4));
      change_height('row-xs-9', Math.round(main_width / 12 * 9));
      change_height('row-xs-12', Math.round(main_width));
      if ($(window).width() >= 768) {
        change_height('row-sm-' + unit + '-9', main_width);
        change_height('row-sm-' + unit + '-8', Math.round(main_width / unit * 8));
        change_height('row-sm-' + unit + '-7', Math.round(main_width / unit * 7));
        change_height('row-sm-' + unit + '-6', Math.round(main_width / unit * 6));
        change_height('row-sm-' + unit + '-5', Math.round(main_width / unit * 5));
        change_height('row-sm-' + unit + '-4', Math.round(main_width / unit * 4));
        change_height('row-sm-' + unit + '-3', Math.round(main_width / unit * 3));
        change_height('row-sm-' + unit + '-2', Math.round(main_width / unit * 2));
        change_height('row-sm-' + unit + '-1', Math.round(main_width / unit));
      }
      if ($(window).width() >= 992) {
        change_height('row-md-' + unit + '-9', main_width);
        change_height('row-md-' + unit + '-8', Math.round(main_width / unit * 8));
        change_height('row-md-' + unit + '-7', Math.round(main_width / unit * 7));
        change_height('row-md-' + unit + '-6', Math.round(main_width / unit * 6));
        change_height('row-md-' + unit + '-5', Math.round(main_width / unit * 5));
        change_height('row-md-' + unit + '-4', Math.round(main_width / unit * 4));
        change_height('row-md-' + unit + '-3', Math.round(main_width / unit * 3));
        change_height('row-md-' + unit + '-2', Math.round(main_width / unit * 2));
        change_height('row-md-' + unit + '-1', Math.round(main_width / unit));
      }
      if ($(window).width() >= 1200) {
        change_height('row-lg-' + unit + '-9', main_width);
        change_height('row-lg-' + unit + '-8', Math.round(main_width / unit * 8));
        change_height('row-lg-' + unit + '-7', Math.round(main_width / unit * 7));
        change_height('row-lg-' + unit + '-6', Math.round(main_width / unit * 6));
        change_height('row-lg-' + unit + '-5', Math.round(main_width / unit * 5));
        change_height('row-lg-' + unit + '-4', Math.round(main_width / unit * 4));
        change_height('row-lg-' + unit + '-3', Math.round(main_width / unit * 3));
        change_height('row-lg-' + unit + '-2', Math.round(main_width / unit * 2));
        change_height('row-lg-' + unit + '-1', Math.round(main_width / unit));
      }
    }
    /*index*/
    /*** News page ****/
    $('.year-wrapper-div').parent('h3').addClass('year-wrapper');
    if ($('.path-news .content-row').length > 0) {
      $(".fancybox_popup").fancybox().trigger('click');
      $('.path-news .content-row').show();
      $.data(this, 'news', setTimeout(function() {
        $('.path-news .content-row .colume2').each(function() {
          $(this).siblings('.colume1').height($(this).height());
        });
        $('.path-news .views-row .content-row').show();
      }, 200));
      $(window).resize(function() {
        clearTimeout($.data(this, 'news2'));
        $.data(this, 'news2', setTimeout(function() {
          $('.path-news .content-row .colume2').each(function() {
            $(this).siblings('.colume1').height($(this).height());
          });
          $('.path-news .views-row .content-row').show();
        }, 800));
      });
    }
    $('.path-news .content-row .colume2 .title-wrapper a').click(function() {
      if ($(this).parent().parent().parent().hasClass('active')) {
        $(this).parent().siblings('.content-wrapper').slideUp(400, function() {
          $(this).parent().siblings('.colume1').height($(this).parent().height());
          $(this).parent().parent().removeClass('active');
        });
      } else {
        $(this).parent().siblings('.content-wrapper').slideDown(400, function() {
          $(this).parent().siblings('.colume1').height($(this).parent().height());
          $(this).parent().parent().addClass('active');
        });
      }
    });
    // Pager
    var pager = settings.path.currentQuery.page;
    $('.path-news .pagination-btn .pagination-change option[rel=' + pager + ']').attr('selected', 'selected');
    $('.path-news .pagination-btn .pagination-change').change(function() {
      var path = $(this).val();
      window.location.assign(path);
    });
    /*** News page ****/
    /*advertisements*/
    if ($('.path-advertisements').length > 0) {
      $('.path-advertisements .rightmove').click(function() {
        var current_page = $('#next_page').attr('rel');
        var lang = settings.path.pathPrefix;
        window.location.assign(current_page);
      });
      $('.path-advertisements .leftmove').click(function() {
        var current_page = $('#prev_page').attr('rel');
        var lang = settings.path.pathPrefix;
        window.location.assign(current_page);
      });
      // On Click
      $('.path-advertisements .view-video').click(function() {
        var title = $(this).parent().find('#vid-content .vid-title').html();
        var date = $(this).parent().find('#vid-content .vid-date').html();
        var body = $(this).parent().find('#vid-content .vid-body').html();
        var v_url = $(this).parent().find('#vid-content .vid-url').html();
        $('.path-advertisements .video').html('<iframe width="400" height="300" src="' + v_url + '" frameborder="0" allowfullscreen></iframe>');
        $('.advertisements-top .content1 h3').html(title);
        $('.advertisements-top .content1 p').html(date);
        $('.advertisements-top .content2').html(body);
        scrolled = $('.advertisements-top').scrollTop();
        $('html, body').animate({
          scrollTop: $('.advertisements-top').offset().top - 5
        });
      });
      $(".path-advertisements .pagination-change").on('focus', function() {}).change(function() {
        var yr = $(this).val();
        var lang = settings.path.pathPrefix;
        window.location.assign("/" + lang + "advertisements/" + yr);
      });
      $('.path-advertisements .pagination-btn.withmovebutt').click(function() {
        var lang = settings.path.pathPrefix;
        var page = $(this).attr('rel');
        window.location.assign("/" + lang + "advertisements/" + page);
      });
    }
    /*advertisements*/
    /*Charity Fund*/
    if ($('#fund-timeline').length > 0) {
      var timeline_data = [];
      var firstYear = '';
      var secondYear = '';
      $('#first-year').click(function() {
        changeYear('2016')
      });
      $('#second-year').click(function() {
        changeYear('2015')
      });
      $('#year-drop-down').change(function() {
        changeYear($(this).val());
      });

      function changeYear(passInYear) {
        var selectedYear = passInYear ? passInYear : $('#year-drop-down').val();
        var finalRes = [];
        _.forEach(timeline_data, function(o) {
          var year = _.split(o.date, '-')[0];
          if (_.toString(year) === _.toString(selectedYear)) {
            finalRes.push(o);
          }
        });
        var currentYear = selectedYear;
        if (_.toString(currentYear) === _.toString(firstYear)) $('#first-year').addClass('active');
        else $('#first-year').removeClass('active');
        if (_.toString(currentYear) === _.toString(secondYear)) $('#second-year').addClass('active');
        else $('#second-year').removeClass('active');
        $('#year-drop-down').val(selectedYear);
        $('#fund-timeline').empty();
        timeline = new Timeline($('#fund-timeline'), finalRes);
        timeline.setOptions({
          dateFormat: 'YYYY-MM',
          animation: true,
          lightbox: true,
          columnMode: 'dual',
          order: 'desc',
          separator: 'null',
          first_separator: true,
          responsive_width: 768
        });
        timeline.display();
        if ($('.fancybox').length > 0) {
          $(".fancybox").fancybox();
        }
      }
      firstYear = 2016;
      secondYear = 2015;
      var lang = settings.path.pathPrefix;
      var json_lang = lang.replace('/', '');
      var crt_path = settings.path.currentPath;
      crt_path = crt_path.replace("node/", "");
      var title_lang = "title_" + json_lang;
      var zoom_in_detail_lang = "zoom_in_detail_" + json_lang;
      var JsonAPI = "/" + lang + "timeline-json/" + crt_path;
      $.getJSON(JsonAPI, callbackFundWithData);

      function callbackFundWithData(charList) {
        var imgString = '';
        for (var i in charList) {
          var images = charList[i]['img'];
          var imgs = [];
          var content = "";
          images = images.split(",");
          for (var x = 0; x < 21; x++) {
            if (images[x]) {
              imgString += "<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src=https://www.fortunepharm.com/app/storage/uploads/thumbs/" + charList[i]['img' + x] + "/></div>"
              imgs.push(images[x]);
            }
          }
          if (_.size(charList[i][zoom_in_detail_lang]) && !_.size(imgs)) content = "<a href='#charity-light-box" + i + "' class='fancybox'><span id='charity-fund-title'>" + charList[i][title_lang] + "</span></a><div class='charity_popup_dialog' id='charity-light-box" + i + "' style='display: none'><span class='charity_popup_date'>" + charList[i]["date"].substring(0, 7) + "</span><br><br><span id='charity-fund-detail'>" + charList[i][zoom_in_detail_lang] + "</span></div>";
          else if (_.size(charList[i][zoom_in_detail_lang]) && _.size(imgs)) content = "<a href='#charity-light-box" + i + "' class='fancybox'><span id='charity-fund-title'>" + charList[i][title_lang] + "</span></a><div class='charity_popup_dialog' id='charity-light-box" + i + "' style='display: none'><span class='charity_popup_date'>" + charList[i]["date"].substring(0, 7) + "</span><div style='margin-top:2%' class='row'>  " + imgString + "</div><span id='charity-fund-detail'>" + charList[i][zoom_in_detail_lang] + "</span></div>";
          else {
            content = charList[i][title_lang];
          }
          timeline_data[i] = {
            type: 'blog_post',
            date: charList[i]["date"].substring(0, 7),
            title: charList[i]["date"].substring(0, 7),
            content: content,
            images: imgs
          };
        }
        changeYear(firstYear);
        if ($('.fancybox').length > 0) {
          $(".fancybox").fancybox();
        }
      }
    }
    /*Charity Fund*/
    if ($('.fancybox').length > 0) {
      $(".fancybox").fancybox();
    }
    /*news */

    //lhz
    /*all*/
    function change_size(id_name, width, height) {
      if ($('#' + id_name).length > 0) {
        $('#' + id_name).width("auto");
        $('#' + id_name).height("auto");
      }
    }

    /*index*/
    function change_height(class_name, height) {
      if ($('.' + class_name).length > 0) {
        $('.' + class_name).each(function() {
          $(this).height(height);
        });
      }
    }


    /*product*/


    $(document).ready(function() {
      var hash = document.URL.substr(document.URL.indexOf('#') + 1);

      change_size('wrapper', $(window).width(), $(window).height());
      $('body').show();
      $(window).resize(function() {
        clearTimeout($.data(this, 'resizeTimer2'));
        $.data(this, 'resizeTimer2', setTimeout(function() {
          change_size('wrapper', $(window).width(), $(window).height());
        }, 200));
        if ($(window).width() >= 768) {
          if ($('#wrapper').hasClass('toggled')) {
            $('#wrapper').removeClass('toggled');
          }
          if ($('.hamburger').hasClass('is-open')) {
            $('.hamburger').removeClass('is-open');
            $('.hamburger').addClass('is-closed');
          }
        }
      });
      /*window resize*/

      /*sidebar*/
      var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

      trigger.click(function() {
        hamburger_cross();
      });

      function hamburger_cross() {

        if (isClosed == true) {
          //overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {
          //overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
      }

      $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
      });

      $('.sidebar-nav > li').click(function() {
        if (!$(this).hasClass('parent')) {
          $('.sidebar-nav > li').each(function() {
            $(this).removeClass('active');
          });
          $(this).addClass('active');
        }
      });

      $('.sidebar-nav > li.parent').click(function() {
        if ($(this).hasClass('show-sub')) {
          $(this).removeClass('show-sub');
        } else {
          $(this).addClass('show-sub');
        }
        $(this).find('.sub-sidebar-nav').slideToggle();
      });

      if ($('#health-tips .sub-tab-wrapper li').length > 0) {
        var tab_width = 0;
        clearTimeout($.data(this, 'health-tips-tab'));
        $.data(this, 'health-tips-tab', setTimeout(function() {
          $('#health-tips .sub-tab-wrapper li').each(function() {
            tab_width += $(this).width();
          });

          $('#health-tips .sub-tab-wrapper').width(tab_width);
        }, 500));
      }

      function health_tips() {
        if ($(window).width() >= 768) {
          $('#health-tips .function-wrapper .function-btn').each(function() {
            if ($('#health-tips').hasClass('cold_and_flu'))
              $(this).height($(this).width() / 280 * 195);
            else if ($('#health-tips').hasClass('children'))
              $(this).height($(this).width() / 100 * 50);
            else if ($('#health-tips').hasClass('pain') || $('#health-tips').hasClass('allergy') || $('#health-tips').hasClass('gerd'))
              $(this).height($(this).width() / 280 * 196);
          });

          $('.function-middle-wrapper').height($('.function-left-wrapper:visible').height());
        } else {
          $('#health-tips .function-wrapper .function-btn').each(function() {
            if ($('#health-tips').hasClass('cold_and_flu') || $('#health-tips').hasClass('pain') || $('#health-tips').hasClass('allergy') || $('#health-tips').hasClass('gerd'))
              $(this).height(Math.floor($(this).width() / 385 * 293));
            if ($('#health-tips').hasClass('children'))
              $(this).height(Math.floor($(this).width() / 516 * 293));
          });
        }
      }
      if ($('#health-tips .function-wrapper .function-btn').length > 0) {
        $.data(this, 'function', setTimeout(function() {
          health_tips();
        }, 200));
        $(window).resize(function() {
          clearTimeout($.data(this, 'health-btn'));
          $.data(this, 'health-btn', setTimeout(function() {
            health_tips();
          }, 800));
        });

        $('#health-tips .function-wrapper .function-btn').click(function() {
          if (typeof($(this).attr('rel')) !== 'undefined') {
            var rel = $(this).attr('rel');
            $('#health-tips .function-wrapper .function-btn').each(function() {
              $(this).removeClass('active');
            });
            $('#health-tips .function-wrapper .function-btn[rel="' + rel + '"]').addClass('active');

            $('#health-tips .function-wrapper .function-middle-wrapper img').each(function() {
              $(this).removeClass('active');
            });
            $('#health-tips .function-wrapper .function-middle-wrapper img[rel="' + rel + '"]').addClass('active');

            if ($('#health-tips .function-wrapper .function-middle-wrapper p').length > 0) {
              $('#health-tips .function-wrapper .function-middle-wrapper p').each(function() {
                $(this).removeClass('active');
              });
              $('#health-tips .function-wrapper .function-middle-wrapper p[rel="' + rel + '"]').addClass('active');
            }
            if ($('#health-tips .function-detail-wrapper .detail-right-wrapper').length > 0) {
              $('#health-tips .function-detail-wrapper .detail-right-wrapper').each(function() {
                $(this).removeClass('active');
              });
              $('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="' + rel + '"]').addClass('active');
            }
          }
        });

        $('#health-tips .function-tab-wrapper .function-tab-btn').click(function() {
          if (typeof($(this).attr('rel')) !== 'undefined') {
            var rel = $(this).attr('rel');
            $('#health-tips .function-tab-wrapper .function-tab-btn').each(function() {
              $(this).removeClass('active');
            });
            $('#health-tips .function-tab-wrapper .function-tab-btn[rel="' + rel + '"]').addClass('active');

            if ($(window).width() >= 768) {
              var temp = 'left';
            } else {
              var temp = 'right';
            }
            $('#health-tips .function-' + temp + '-wrapper').each(function() {
              $(this).removeClass('active');
            });
            $('#health-tips .function-' + temp + '-wrapper[rel="' + rel + '"]').addClass('active');
            health_tips();

            $('.function-' + temp + '-wrapper:visible .function-btn').each(function() {
              $(this).removeClass('active');
            });
            $('.function-' + temp + '-wrapper:visible .function-btn:first-child').addClass('active');

            var rel2 = $('.function-' + temp + '-wrapper:visible .function-btn:first-child').attr('rel');
            $('#health-tips .function-wrapper .function-middle-wrapper img').each(function() {
              $(this).removeClass('active');
            });
            $('#health-tips .function-wrapper .function-middle-wrapper img[rel="' + rel2 + '"]').addClass('active');

            $('#health-tips .function-wrapper .function-middle-wrapper p').each(function() {
              $(this).removeClass('active');
            });
            $('#health-tips .function-wrapper .function-middle-wrapper p[rel="' + rel2 + '"]').addClass('active');
            $('#health-tips .function-detail-wrapper .detail-right-wrapper').each(function() {
              $(this).removeClass('active');
            });
            $('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="' + rel2 + '"]').addClass('active');
          }
        });
      }

    });
    //lhz
  }
};
