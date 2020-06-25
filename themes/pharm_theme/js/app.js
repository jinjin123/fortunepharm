Drupal.behaviors.yourmodulename = {
    attach: function(context, settings) {
        var $ = jQuery.noConflict();
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
        $('.path-news .pagination-btn .pagination-change').change(function() {
            //console.log($(this).val());
        });
        /*** News page ****/
        /*advertisements*/
        if ($('.path-advertisements').length > 0) {
            var title = $('#vid-content .vid-title').html();
            var date = $('#vid-content .vid-date').html();
            var body = $('#vid-content .vid-body').html();
            var v_url = $('#vid-content .vid-url').html();
            $('.path-advertisements .video').html('<iframe width="400" height="300" src="' + v_url + '" frameborder="0" allowfullscreen></iframe>');
            $('.advertisements-top .content1 h3').html(title);
            $('.advertisements-top .content1 p').html(date);
            $('.advertisements-top .content2').html(body);
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
        /*Charity Fund*/
        if ($('.fancybox').length > 0) {
            $(".fancybox").fancybox();
        }

    }
};