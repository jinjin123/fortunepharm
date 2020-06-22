Drupal.behaviors.yourmodulename = {
    attach: function(context, settings) {
        var $ = jQuery.noConflict();
        var lang = settings.path.pathPrefix;
        var json_lang = lang.replace('/', '');
        var crt_path = settings.path.currentPath;
        crt_path = crt_path.replace("node/", "");
        var title_lang = "title_" + json_lang;
        var timeline_data = [];
        var JsonAPI = "/timeline-json/" + crt_path;
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

        function change_height(class_name, height) {
            if ($('.' + class_name).length > 0) {
                $('.' + class_name).each(function() {
                    $(this).height(height);
                });
            }
        }
      /*all*/
      function change_size(id_name, width, height){
        if($('#'+id_name).length > 0){
          $('#'+id_name).width(width);
          $('#'+id_name).height(height);
        }
      }

      /*index*/
      function change_height(class_name, height){
        if($('.'+class_name).length > 0){
          $('.'+class_name).each(function(){
            $(this).height(height);
          });
        }
      }
        function index_row_wrapper(desktop_class, mobile_class, unit) {
            if ($(window).width() >= 768) var main_width = $('.' + desktop_class).width();
            else var main_width = $('.' + mobile_class).width();
            /*change_height('row-xs-'+unit+'-9', main_width);
            change_height('row-xs-'+unit+'-8', Math.round(main_width/9*8));
            change_height('row-xs-'+unit+'-7', Math.round(main_width/9*7));
            change_height('row-xs-'+unit+'-6', Math.round(main_width/9*6));
            change_height('row-xs-'+unit+'-5', Math.round(main_width/9*5));
            change_height('row-xs-'+unit+'-4', Math.round(main_width/9*4));
            change_height('row-xs-'+unit+'-3', Math.round(main_width/9*3));
            change_height('row-xs-'+unit+'-2', Math.round(main_width/9*2));
            change_height('row-xs-'+unit+'-1', Math.round(main_width/9));*/
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
        if($('.fancybox').length > 0) {
            $(".fancybox").fancybox();
        }
        $('.year-wrapper-div').parent('h3').addClass('year-wrapper');
        if ($('.path-news .content-row').length > 0) {
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
        $('.path-news .pagination-btn .pagination-change').change(function () {
          console.log($(this).val());
        });
        /*** News page ****/

        console.log('test');

      if ($('.scroll-wrapper').length > 0){
        clearTimeout($.data(this, 'scroll-wrapper'));
        $.data(this, 'scroll-wrapper', setTimeout(function() {
          $('.scroll-wrapper').each(function(){
            if($(this).children().width() - $(this).width() > 10){
              nice = $(this).niceScroll();
              var _super = nice.getContentSize;
              nice.getContentSize = function() {
                var page = _super.call(nice);
                page.h = nice.win.height();
                return page;
              }
            }
          });
        }, 800));
        $(window).resize(function() {
          clearTimeout($.data(this, 'scroll-wrapper2'));
          $.data(this, 'scroll-wrapper2', setTimeout(function() {
            $('.scroll-wrapper').each(function(){
              $(this).getNiceScroll().remove();
              if($(this).children().width() - $(this).width() > 10){
                nice = $(this).niceScroll();
                var _super = nice.getContentSize;
                nice.getContentSize = function() {
                  var page = _super.call(nice);
                  page.h = nice.win.height();
                  return page;
                }
              }
            });
          }, 800));
        });
      }

      /*window resize*/
      change_size('wrapper', $(window).width(), $(window).height());
      $('body').show();
      $(window).resize(function() {
        clearTimeout($.data(this, 'resizeTimer2'));
        $.data(this, 'resizeTimer2', setTimeout(function() {
          change_size('wrapper', $(window).width(), $(window).height());
        }, 200));
        if($(window).width() >= 768){
          if($('#wrapper').hasClass('toggled')){
            $('#wrapper').removeClass('toggled');
          }
          if($('.hamburger').hasClass('is-open')){
            $('.hamburger').removeClass('is-open');
            $('.hamburger').addClass('is-closed');
          }
        }
      });
      /*window resize*/
      /*index*/
      if($('#index .main-wrapper').length > 0){
        index_row_wrapper('desktop-main', 'mobile-main', 9);
        $(window).resize(function() {
          clearTimeout($.data(this, 'resizeTimer'));
          $.data(this, 'resizeTimer', setTimeout(function() {
            index_row_wrapper('desktop-main', 'mobile-main', 9);
          }, 800));
        });
      }
      if($('#banner-wrapper-mobile').length > 0){
        $('#banner-wrapper-mobile').carousel({
          interval: false
        });
      }
      /*index*/
      /*product*/
      if($('#product .product-big-image').length > 0){
        $.data(this, 'product-image', setTimeout(function() {
          product_image_height();
        }, 200));
        $(window).resize(function() {
          clearTimeout($.data(this, 'product-image2'));
          $.data(this, 'product-image2', setTimeout(function() {
            product_image_height();
          }, 800));
        });
      }

      /*product-healthcare*/
      if($('#product.healthcare .image-wrapper').length > 0){
        $.data(this, 'product-healthcare', setTimeout(function() {
          product_healthcare_image_height();
        }, 200));
        $(window).resize(function() {
          clearTimeout($.data(this, 'product-healthcare2'));
          $.data(this, 'product-healthcare2', setTimeout(function() {
            product_healthcare_image_height();
          }, 800));
        });
      }
      /*product-healthcare*/

      /*lastest-offers*/
      if($('#lastest-offers #offers-wrapper').length > 0){
        $.data(this, 'lastest-offers', setTimeout(function() {
          $('#lastest-offers #offers-wrapper .img-wrapper').each(function(){
            $(this).siblings('.content-wrapper').height($(this).height());
          });
          $('#lastest-offers #offers-wrapper .content-wrapper').show();
        }, 200));
        $(window).resize(function() {
          clearTimeout($.data(this, 'lastest-offers2'));
          $.data(this, 'lastest-offers2', setTimeout(function() {
            $('#lastest-offers #offers-wrapper .img-wrapper').each(function(){
              $(this).siblings('.content-wrapper').height($(this).height());
            });
            $('#lastest-offers #offers-wrapper .content-wrapper').show();
          }, 800));
        });
      }

      /*news*/
      if($('#news .content-row').length > 0){
        $.data(this, 'news', setTimeout(function() {
          $('#news .content-row .colume2').each(function(){
            $(this).siblings('.colume1').height($(this).height());
          });
          $('#news .content-row').show();
        }, 200));
        $(window).resize(function() {
          clearTimeout($.data(this, 'news2'));
          $.data(this, 'news2', setTimeout(function() {
            $('#news .content-row .colume2').each(function(){
              $(this).siblings('.colume1').height($(this).height());
            });
            $('#news .content-row').show();
          }, 800));
        });
      }
      /*product-take*/
      if($('#product-take #product-take-wrapper .content-left > div').length > 0){
        $.data(this, 'product-take', setTimeout(function() {
          $('#product-take #product-take-wrapper .content-right').each(function(){
            $(this).height($(this).width()*3/2);
          });
          index_row_wrapper('content-left', 'content-left', 12);
        }, 200));
        $(window).resize(function() {
          clearTimeout($.data(this, 'product-take2'));
          $.data(this, 'product-take2', setTimeout(function() {
            $('#product-take #product-take-wrapper .content-right').each(function(){
              $(this).height($(this).width()*3/2);
            });
            index_row_wrapper('content-left', 'content-left', 12);
          }, 800));
        });

        var product = [];
        var series =[];


        $('#product-take #product-take-wrapper .content-left .index-wrapper .clear-select').click(function(){
          $('#product-take #product-take-wrapper .content-left .index-wrapper a.wrapper').each(function() {
            $( this ).removeClass('active inactive');
          });
        });


        $('#product-take #product-take-wrapper .content-left .index-wrapper a.wrapper').click(function(){


          if(!$(this).hasClass('inactive')){

            if(!$(this).hasClass('active')){
              var target = $(this);
              $(target).addClass('active');
            }else{
              var target = $(this);
              $(this).removeClass('active');
            }

            var langname=$('#langname').attr('rel');
            var symptoms = [];


            $('#product-take #product-take-wrapper .content-left .index-wrapper a.active').each(function(){
              symptoms.unshift($(this).attr('rel'));
            });

            console.log('Seletced: '+symptoms);
            //alert(JSON.stringify(symptoms));

            if(symptoms.length > 0){

              $.post('/product_take',{symptoms:symptoms,langname:langname,match:"match"},function(data){

                //console.log(data);


                $('#product-take #product-take-wrapper .content-left .index-wrapper a.wrapper').each(function(){

                  //alert($(this).attr('rel'));
                  //console.log(data.input_symptoms);

                  if($.inArray(parseInt($(this).attr('rel')), data.first_matched_product_symptoms) != -1){
                    $(this).removeClass('inactive');
                  }else{
                    $(this).addClass('inactive');
                  }

                });
                product = data.products_details;
                series = data.series;
                //alert(series[0].main_series);

              });

            }else{
              $('#product-take #product-take-wrapper .content-left .index-wrapper a.inactive').each(function(){
                $(this).removeClass('inactive');
              });
              product = [];
              series=[];
            }
          }
        });

        $('#product-take #product-take-wrapper .content-left .index-wrapper a.result').click(function(){


          if(product.length == 0){
            if($(window).width() < 768){
              $('.content-right').hide();
            }
            $('.level-wrapper').hide();
            $('.matched-product-wrapper').html('');
            $('.arrow').hide();
          }else{
            //console.log(product);
            for (i = 0; i < series.length; i++) {
              //alert(series[i].main_series);
            }

            $('.matched-product-wrapper').html('');
            $(product).each(function(index, value){
              var cond=value.condition;
              var langname=$('#langname').attr('rel');
              var globalpath=$('#globalpath').attr('rel');
              var img_path= globalpath+"/app/storage/uploads/thumbs/"+value.product_img1;
              var which_page=value.series_id;
              var which_market=value.markets_id;


              if (series[which_page-1].main_series=="Normal Series"){
                which_page="product";
              }else{
                which_page="children-product";
              }


              if (which_market==1){
                which_market="hongkong";
              }else if (which_market==2){
                which_market="china";
              }else{
                which_market="oversea";
              }

              if(langname == "eng")
                var text = '<div class="matched-product"><a href="'+globalpath+langname+'/'+which_page+'/'+which_market+'/'+value.series_id+'/0/'+value.id+'"><img src='+img_path+'><h4>'+value.name_eng+'</h4>';
              else if(langname == "cht")
                var text = '<div class="matched-product"><a href="'+globalpath+langname+'/'+which_page+'/'+which_market+'/'+value.series_id+'/0/'+value.id+'"><img src='+img_path+'><h4>'+value.name_cht+'</h4>';
              else if(langname == "chs")
                var text = '<div class="matched-product"><a href="'+globalpath+langname+'/'+which_page+'/'+which_market+'/'+value.series_id+'/0/'+value.id+'"><img src='+img_path+'><h4>'+value.name_chs+'</h4>';

              if(cond == "onset"){
                if(langname == "eng")
                  text += '<p class="level1 grey">Onset</p>';
                else if(langname == "cht")
                  text += '<p class="level1 grey">鍒濈櫦</p>';
                else if(langname == "chs")
                  text += '<p class="level1 grey">鍒濆彂</p>';
              }else if(cond == "slight"){
                if(langname == "eng")
                  text += '<p class="level2 grey">Slight</p>';
                else if(langname == "cht")
                  text += '<p class="level2 grey">杓曞井</p>';
                else if(langname == "chs")
                  text += '<p class="level2 grey">杞诲井</p>';
              }else if(cond == "critical"){
                if(langname == "eng")
                  text += '<p class="level3 grey">Crictical</p>';
                else if(langname == "cht")
                  text += '<p class="level3 grey">鍤撮噸</p>';
                else if(langname == "chs")
                  text += '<p class="level3 grey">涓ラ噸</p>';
              }
              text += '</a></div>';
              $('.level-wrapper').show();
              $('.matched-product-wrapper').append(text);

            });
            if($('.matched-product-wrapper').height() > $('.matched-outer').height()){
              $('.arrow-down').show();
            }
            if($(window).width() < 768){
              $('.content-right').show();
            }
          }
        });
        $('#product-take #product-take-wrapper .content-right .index-wrapper .matched-outer').scroll(function() {
          if($(this).scrollTop() == 0){
            $("#product-take #product-take-wrapper .content-right .arrow-up").hide();
          }else if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            $("#product-take #product-take-wrapper .content-right .arrow-down").hide();
          }else{
            $("#product-take #product-take-wrapper .content-right .arrow").show();
          }
        });

        $("#product-take #product-take-wrapper .content-right .arrow").on("click" ,function(){
          var target = $('#product-take #product-take-wrapper .content-right .index-wrapper .matched-outer');
          var arrow = $(this);
          if (!$(target).is(':animated')){
            scrolled = $(target).scrollTop();
            if($(arrow).hasClass('arrow-up')){
              scrolled -= 200;
            }
            if($(arrow).hasClass('arrow-down')){
              scrolled += 200;
            }
            $(target).animate({
              scrollTop:  scrolled
            });
          }
        });
      }
      /*product-take*/
      if($('#health-tips .function-wrapper .function-btn').length > 0){
        $.data(this, 'function', setTimeout(function() {
          health_tips();
        }, 200));
        $(window).resize(function() {
          clearTimeout($.data(this, 'health-btn'));
          $.data(this, 'health-btn', setTimeout(function() {
            health_tips();
          }, 800));
        });

        $('#health-tips .function-wrapper .function-btn').click(function(){
          if (typeof($(this).attr('rel')) !== 'undefined') {
            var rel = $(this).attr('rel');
            $('#health-tips .function-wrapper .function-btn').each(function(){
              $(this).removeClass('active');
            });
            $('#health-tips .function-wrapper .function-btn[rel="'+rel+'"]').addClass('active');

            $('#health-tips .function-wrapper .function-middle-wrapper img').each(function(){
              $(this).removeClass('active');
            });
            $('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+rel+'"]').addClass('active');

            if($('#health-tips .function-wrapper .function-middle-wrapper p').length > 0){
              $('#health-tips .function-wrapper .function-middle-wrapper p').each(function(){
                $(this).removeClass('active');
              });
              $('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+rel+'"]').addClass('active');
            }
            if($('#health-tips .function-detail-wrapper .detail-right-wrapper').length > 0){
              $('#health-tips .function-detail-wrapper .detail-right-wrapper').each(function(){
                $(this).removeClass('active');
              });
              $('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+rel+'"]').addClass('active');
            }
          }
        });

        $('#health-tips .function-tab-wrapper .function-tab-btn').click(function(){
          if (typeof($(this).attr('rel')) !== 'undefined') {
            var rel = $(this).attr('rel');
            $('#health-tips .function-tab-wrapper .function-tab-btn').each(function(){
              $(this).removeClass('active');
            });
            $('#health-tips .function-tab-wrapper .function-tab-btn[rel="'+rel+'"]').addClass('active');

            if($(window).width() >= 768) {
              var temp = 'left';
            }else{
              var temp = 'right';
            }
            $('#health-tips .function-'+temp+'-wrapper').each(function(){
              $(this).removeClass('active');
            });
            $('#health-tips .function-'+temp+'-wrapper[rel="'+rel+'"]').addClass('active');
            health_tips();

            $('.function-'+temp+'-wrapper:visible .function-btn').each(function(){
              $(this).removeClass('active');
            });
            $('.function-'+temp+'-wrapper:visible .function-btn:first-child').addClass('active');

            var rel2 = $('.function-'+temp+'-wrapper:visible .function-btn:first-child').attr('rel');
            $('#health-tips .function-wrapper .function-middle-wrapper img').each(function(){
              $(this).removeClass('active');
            });
            $('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+rel2+'"]').addClass('active');

            $('#health-tips .function-wrapper .function-middle-wrapper p').each(function(){
              $(this).removeClass('active');
            });
            $('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+rel2+'"]').addClass('active');
            $('#health-tips .function-detail-wrapper .detail-right-wrapper').each(function(){
              $(this).removeClass('active');
            });
            $('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+rel2+'"]').addClass('active');
          }
        });
      }
      /*health-tips*/

    }
};
