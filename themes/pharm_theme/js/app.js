Drupal.behaviors.yourmodulename = {
    attach: function(context, settings) {
        var $ = jQuery.noConflict();
        console.log(settings.path.currentPath);
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
    }
};