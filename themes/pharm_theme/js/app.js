Drupal.behaviors.PharmaTheme = {
    attach: function(context, settings) {
        var $ = jQuery.noConflict();
        $('#sidebar-wrapper .sidebar-nav .nolink ul li a, #header .nolink ul li a').attr('target', '_blank');

        if ($('#company-timeline', context).length > 0) {
            var lang = settings.path.pathPrefix;
            var json_lang = lang.replace('/', '');
            var crt_path = settings.path.currentPath;
            crt_path = crt_path.replace("node/", "");
            var title_lang = "title_" + json_lang;
            var zoom_in_detail_lang = "zoom_in_detail_" + json_lang;
            var timeline_data = [];
            var JsonAPI = "/" + lang + lang + "timeline-json/" + crt_path;
            $.getJSON(JsonAPI, callbackFuncWithData);

            function callbackFuncWithData(data) {
                for (var i in data) {
                    var images = data[i]['img'];
                    var imgs = [];
                    var content = "";
                    var body_content = data[i][zoom_in_detail_lang];
                    images = images.split(",");
                    for (var x = 0; x < 21; x++) {
                        if (images[x]) {
                            imgs.push(images[x]);
                        }
                    }
                    content = data[i][title_lang] + body_content;
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
        $('.homepage-slider .field-content ul', context).slick({
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
        $('.homepage-mobile-slider .field-content ul', context).slick({
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
            // scroll bar for health tips or other has scroll bar page
        if ($('.scroll-wrapper', context).length > 0) {
            clearTimeout($.data(this, 'scroll-wrapper'));
            $.data(this, 'scroll-wrapper', setTimeout(function() {
                $('.scroll-wrapper').each(function() {
                    if ($(this).children().width() - $(this).width() > 10) {
                        nice = $(this).niceScroll();
                        var _super = nice.getContentSize;
                        nice.getContentSize = function() {
                            $('.sub-tab-session .arrow-right').fadeIn();
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
                    $('.scroll-wrapper').each(function() {
                        $(this).getNiceScroll().remove();
                        if ($(this).children().width() - $(this).width() > 10) {
                            nice = $(this).niceScroll();
                            var _super = nice.getContentSize;
                            nice.getContentSize = function() {
                                $('.sub-tab-session .arrow-right').fadeIn();
                                var page = _super.call(nice);
                                page.h = nice.win.height();
                                return page;
                            }
                        }
                    });
                }, 800));
            });
        }

        /*sub-tab-session*/
        if ($('.sub-tab-session').length > 0) {
            clearTimeout($.data(this, 'sub-tab-session'));
            $.data(this, 'sub-tab-session', setTimeout(function() {
                if ($('.sub-tab-outer-wrapper').width() + $('.sub-tab-outer-wrapper').scrollLeft() + 20 >= $('.sub-tab-outer-wrapper').children().width()) {
                    $('.sub-tab-session .arrow-right').fadeOut();
                } else {
                    $('.sub-tab-session .arrow-right').fadeIn();
                }
            }, 500));

            $('.sub-tab-outer-wrapper').scroll(function() {
                if ($(this).width() + $(this).scrollLeft() + 20 >= $(this).children().width()) {
                    $('.sub-tab-session .arrow-right').fadeOut();
                } else {
                    $('.sub-tab-session .arrow-right').fadeIn();
                }

                if ($(this).width() + $(this).scrollLeft() - 20 >= $(this).width()) {
                    $('.sub-tab-session .arrow-left').fadeIn();
                } else {
                    $('.sub-tab-session .arrow-left').fadeOut();
                }
            });

            $(".sub-tab-session .arrow", context).on("click", function() {
                var target = $('.sub-tab-session .sub-tab-outer-wrapper');
                var arrow = $(this);
                if (!$(target).is(':animated')) {
                    scrolled = $(target).scrollLeft();
                    if ($(arrow).hasClass('arrow-left')) {
                        scrolled -= 100;
                    }
                    if ($(arrow).hasClass('arrow-right')) {
                        scrolled += 100;
                    }
                    $(target).animate({
                        scrollLeft: scrolled
                    });
                }
            });
        }

        if ($('.path-product').length > 0) {
            $(window).resize(function() {
                if ($(window).width() <= 1410) {
                    $('.sub-tab-session .arrow-right').fadeIn();
                }
            });
        }
        /** Health tips scroll **/
        // if ($('.path-healthtips').length > 0) {
        //   if ($('.sub-tab-outer-wrapper').width()  >= $('.sub-tab-outer-wrapper').children().width()) {
        //     $('.sub-tab-session .arrow-right').fadeOut();
        //   } else {
        //     $('.sub-tab-session .arrow-right').fadeIn();
        //   }
        // }
        /** Health tips scroll **/




        /*sub-tab-session*/
        // scroll bar for health tips or other has scroll bar page
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
        $('.year-wrapper-div', context).parent('h3').addClass('year-wrapper');
        if ($('.path-news .content-row', context).length > 0) {
            $('.path-news .content-row')[0].className = "content-row active";
            $.data(this, 'news', setTimeout(function() {
                $('.path-news .content-row .colume2').each(function() {
                    $(this).siblings('.colume1').height($(this).height());
                });
                $('.path-news .content-row').show();
            }, 200));
            $(window).resize(function() {
                clearTimeout($.data(this, 'news2'));
                $.data(this, 'news2', setTimeout(function() {
                    $('.path-news .content-row .colume2').each(function() {
                        $(this).siblings('.colume1').height($(this).height());
                    });
                    $('.path-news  .content-row').show();
                }, 800));
            });
        }
        $('.path-news .content-row .colume2 .title-wrapper a', context).click(function() {
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
        $('.path-news .pagination-btn .pagination-change', context).change(function() {
            var path = $(this).val();
            window.location.assign(path);
        });
        /*** News page ****/

        /*advertisements*/
        if ($('.path-advertisements', context).length > 0) {
            if (settings.path.currentQuery.y) {
                if (settings.path.currentQuery.y == '2020') {
                    $('#block-pagerforadverisement').hide();
                    $('#block-pagerforadverisement-2').hide();
                    $('#block-pagerforadverisement').show();
                } else {
                    $('#block-pagerforadverisement').hide();
                    $('#block-pagerforadverisement-2').hide();
                }
            } else {
                $('#block-pagerforadverisement').show();
                $('#block-pagerforadverisement-2').hide();
            }

            $('.path-advertisements .rightmove', context).click(function() {
                var current_page = $('#next_page').attr('rel');
                var lang = settings.path.pathPrefix;
                window.location.assign('?y=' + current_page);
            });
            $('.path-advertisements .leftmove', context).click(function() {
                var current_page = $('#prev_page').attr('rel');
                var lang = settings.path.pathPrefix;
                window.location.assign('?y=' + current_page);
            });
            // On Click
            var title = $('#vid-content .vid-title').html();
            var date = $('#vid-content .vid-date').html();
            var body = $('#vid-content .vid-body').html();
            var v_url = $('#vid-content .vid-url').html();
            $('.path-advertisements .video').html('<iframe width="400" height="300" src="' + v_url + '" frameborder="0" allowfullscreen></iframe>');
            $('.advertisements-top .content1 h3').html(title);
            $('.advertisements-top .content1 p').html(date);
            $('.advertisements-top .content2').html(body);
            $('.view-video', context).click(function() {
                var title = $(this).parent().parent().find('#vid-content .vid-title').html();
                var date = $(this).parent().parent().find('#vid-content .vid-date').html();
                var body = $(this).parent().parent().find('#vid-content .vid-body').html();
                var v_url = $(this).parent().parent().find('#vid-content .vid-url').html();
                $('.path-advertisements .video').html('<iframe width="400" height="300" src="' + v_url + '" frameborder="0" allowfullscreen></iframe>');
                $('.advertisements-top .content1 h3').html(title);
                $('.advertisements-top .content1 p').html(date);
                $('.advertisements-top .content2').html(body);
                scrolled = $('.advertisements-top').scrollTop();
                $('html, body').animate({
                    scrollTop: $('.advertisements-top').offset().top - 5
                });
            });
            $(".path-advertisements .pagination-change", context).on('focus', function() {}).change(function() {
                var yr = $(this).val();
                var lang = settings.path.pathPrefix;
                window.location.assign("/" + lang + "advertisements/?y=" + yr);
            });
            $('.path-advertisements .pagination-btn.withmovebutt', context).click(function() {
                var lang = settings.path.pathPrefix;
                var page = $(this).attr('rel');
                window.location.assign("/" + lang + "advertisements/?y=" + page);
            });
        }
        /*advertisements*/
        /*Charity Fund*/
        if ($('#fund-timeline', context).length > 0) {
            var timeline_data = [];
            var firstYear = '';
            var secondYear = '';
            $('#first-year', context).click(function() {
                changeYear('2016')
            });
            $('#second-year', context).click(function() {
                changeYear('2015')
            });
            $('#year-drop-down', context).change(function() {
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
            var JsonAPI = "/" + lang + lang + "timeline-json/" + crt_path;
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
                            imgString += "<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src=" + images[x] + "></div>"
                            imgs.push(images[x]);
                        }
                    }
                    if (_.size(charList[i][zoom_in_detail_lang]) && !_.size(imgs)) {
                        content = "<a href='#charity-light-box" + i + "' class='fancybox'><span id='charity-fund-title'>" + charList[i][title_lang] + "</span></a><div class='charity_popup_dialog' id='charity-light-box" + i + "' style='display: none'><span class='charity_popup_date'>" + charList[i]["date"].substring(0, 7) + "</span><br><br><span id='charity-fund-detail'>" + charList[i][zoom_in_detail_lang] + "</span></div>";
                    } else if (_.size(charList[i][zoom_in_detail_lang]) && _.size(imgs)) {
                        content = "<a href='#charity-light-box" + i + "' class='fancybox'><span id='charity-fund-title'>" + charList[i][title_lang] + "</span></a><div class='charity_popup_dialog' id='charity-light-box" + i + "' style='display: none'><span class='charity_popup_date'>" + charList[i]["date"].substring(0, 7) + "</span><div style='margin-top:2%' class='row'>  " + imgString + "</div><span id='charity-fund-detail'>" + charList[i][zoom_in_detail_lang] + "</span></div>";
                    } else {
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
        /*index*/

        /*contact-us-offers*/
        if ($('#block-contactus #offers-wrapper', context).length > 0) {
            $.data(this, 'blcok-contactus', setTimeout(function() {
                $('#block-contactus #offers-wrapper .img-wrapper').each(function() {
                    $(this).siblings('.content-wrapper').height($(this).height());
                });
                $('#block-contactus #offers-wrapper .content-wrapper').show();
            }, 200));
            $(window).resize(function() {
                clearTimeout($.data(this, 'blcok-contactus2'));
                $.data(this, 'blcok-contactus2', setTimeout(function() {
                    $('#block-contactus #offers-wrapper .img-wrapper').each(function() {
                        $(this).siblings('.content-wrapper').height($(this).height());
                    });
                    $('#block-contactus #offers-wrapper .content-wrapper').show();
                }, 800));
            });
        }
        $('#block-contactus #offers-wrapper .more-btn', context).click(function() {
            $('#block-contactus #offers-wrapper > div.hide').each(function(key) {
                if (key < 3) $(this).removeClass('hide');
                if ($('#block-contactus #offers-wrapper > div.hide').length == 0) $('#block-contactus #offers-wrapper .more-btn').remove();
            });
            $('#block-contactus #offers-wrapper .img-wrapper').each(function() {
                $(this).siblings('.content-wrapper').height($(this).height());
            });
        });
        if ($('#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper', context).length > 0) {
            $.data(this, 'blcok-contactus', setTimeout(function() {
                $('#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper').each(function() {
                    $(this).siblings('.content-wrapper').height($(this).height());
                });
                $('#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper').show();
            }, 200));
            $(window).resize(function() {
                clearTimeout($.data(this, 'blcok-contactus2'));
                $.data(this, 'blcok-contactus2', setTimeout(function() {
                    $('#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper').each(function() {
                        $(this).siblings('.content-wrapper').height($(this).height());
                    });
                    $('#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper').show();
                }, 800));
            });
        }
        $('#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn', context).click(function() {
            $('#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide').each(function(key) {
                if (key < 3) $(this).removeClass('hide');
                if ($('#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide').length == 0) $('#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn').remove();
            });
            $('#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper').each(function() {
                $(this).siblings('.content-wrapper').height($(this).height());
            });
        });
        if ($('#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper', context).length > 0) {
            $.data(this, 'block-lianxiwomenjizhaopindibuneirongfanti', setTimeout(function() {
                $('#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper').each(function() {
                    $(this).siblings('.content-wrapper').height($(this).height());
                });
                $('#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper').show();
            }, 200));
            $(window).resize(function() {
                clearTimeout($.data(this, 'block-lianxiwomenjizhaopindibuneirongfanti2'));
                $.data(this, 'block-lianxiwomenjizhaopindibuneirongfanti2', setTimeout(function() {
                    $('#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper').each(function() {
                        $(this).siblings('.content-wrapper').height($(this).height());
                    });
                    $('#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper').show();
                }, 800));
            });
        }
        $('#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn', context).click(function() {
            $('#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide').each(function(key) {
                if (key < 3) $(this).removeClass('hide');
                if ($('#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide').length == 0) $('#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn').remove();
            });
            $('#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper').each(function() {
                $(this).siblings('.content-wrapper').height($(this).height());
            });
        });
        /*contact-us-offers*/

        /*lastest-offers*/
        if ($('.path-latest-offers', context).length > 0) {
            $.data(this, 'lastest-offers', setTimeout(function() {
                $('.path-latest-offers .img-wrapper').each(function() {
                    $(this).siblings('.content-wrapper').height($(this).height());
                });
                $('.path-latest-offers .content-wrapper').show();
            }, 200));
            $(window).resize(function() {
                clearTimeout($.data(this, 'lastest-offers2'));
                $.data(this, 'lastest-offers2', setTimeout(function() {
                    $('.path-latest-offers .img-wrapper').each(function() {
                        $(this).siblings('.content-wrapper').height($(this).height());
                    });
                    $('.path-latest-offers .content-wrapper').show();
                }, 800));
            });
        }
        $('.path-latest-offers .more-btn', context).click(function() {
            $('.path-latest-offers > div.hide').each(function(key) {
                if (key < 3) $(this).removeClass('hide');
                if ($('.path-latest-offers > div.hide').length == 0) $('.path-latest-offers .more-btn').remove();
            });
            $('.path-latest-offers .img-wrapper').each(function() {
                $(this).siblings('.content-wrapper').height($(this).height());
            });
        });
        /*lastest-offers*/

        /*health-tips*/
        if ($('.page-node-type-healthtips .sub-tab-wrapper li', context).length > 0) {
            change_size('wrapper', $(window).width(), $(window).height());
            var tab_width = 0;
            clearTimeout($.data(this, 'health-tips-tab'));
            $.data(this, 'health-tips-tab', setTimeout(function() {
                $('.page-node-type-healthtips .sub-tab-wrapper li').each(function() {
                    tab_width += $(this).width();
                });
                $('.page-node-type-healthtips .sub-tab-wrapper').width(tab_width);
            }, 500));
        }
        /**** Mobile menu ****/
        /*sidebar*/
        var trigger = $('.hamburger'),
            overlay = $('.overlay'),
            isClosed = false;
        trigger.click(function() {
            hamburger_cross();
        });

        function hamburger_cross() {
            if (isClosed == true) {
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                isClosed = false;
            } else {
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                isClosed = true;
            }
        }

        $('[data-toggle="offcanvas"]', context).click(function() {
            $('#wrapper').toggleClass('toggled');
        });
        $('.sidebar-nav > li', context).click(function() {
            if (!$(this).hasClass('parent')) {
                $('.sidebar-nav > li').each(function() {
                    $(this).removeClass('active');
                });
                $(this).addClass('active');
            }
        });
        $('.sidebar-nav > li.parent', context).click(function() {
            $('.sidebar-nav > li.parent').find('.sub-sidebar-nav').hide();
            if ($(this).hasClass('show-sub')) {
                $(this).removeClass('show-sub');
            } else {
                $(this).addClass('show-sub');
            }
            $(this).find('.sub-sidebar-nav').slideToggle();
        });
        // Remove first existant
        $('.sidebar-nav > li.parent', context).each(function() {
            $(this).find('li').first().remove();
        });
        /*sidebar*/

        /**** Mobile menu ****/
        /******* Faq ******/
        function faq_detail2(element) {
            var id = $(element).attr('rel');
            var position = $(element).parent().parent().parent().position();
            var big_width = $('.path-faq .detail-wrapper').width();
            var width = $(element).parent().parent().parent().width();
            var lang = settings.path.pathPrefix;
            var langname = lang.replace('/', '');
            var imaeg_path = $(element).parent().parent().parent().find('.img-wrapper img').attr('src');
            var question = $(element).parent().find('.grey').html();
            var answer = $(element).parent().find('.faq_content').html();
            if (langname == 'eng') {
                var label_question = 'Question:';
                var label_answer = 'Find answer on:';
            } else if (langname == 'cht') {
                var label_question = '問題:';
                var label_answer = '在幸福FAQ找答案:';
            } else if (langname == 'chs') {
                var label_question = '问题:';
                var label_answer = '在幸福FAQ找答案:';
            }
            $('.path-faq div.share-wrapper a.fb-share').attr('href', "https://www.facebook.com/dialog/feed?app_id=105148586494382&display=popup&caption=" + $.trim(question) + "&description=" + answer + "&picture=http://www.fortunepharm.com" + imaeg_path + "&link=http://www.fortunepharm.com/&redirect_uri=http://www.fortunepharm.com/");
            $('.path-faq .detail-wrapper h4').html(question);
            $('.path-faq .detail-wrapper .description').html(answer);
            $('.path-faq .detail-wrapper img').attr('src', imaeg_path);
            if ((position.left + big_width) > $('.content-outer-wrapper').width()) {
                $('.path-faq .detail-wrapper').css('top', position.top).css('left', 'auto').css('right', 0).show();
            } else {
                $('.path-faq .detail-wrapper').css('top', position.top).css('left', position.left).show();
            }
            var diff = ($('.path-faq .detail-wrapper').position().top + $('.path-faq .detail-wrapper').height() + 10) - $('.path-faq .content-outer-wrapper').height();
            if (diff > 0) {
                $('.path-faq .content-outer-wrapper').css('margin-bottom', diff + 10);
            } else {
                $('.path-faq .content-outer-wrapper').css('margin-bottom', 0);
            }
            $('html, body').animate({
                scrollTop: $('.path-faq .detail-wrapper').offset().top - 5
            }, 500);
        }

        $('.path-faq .content-wrapper .detail').click(function() {
            faq_detail2($(this));
        });
        $('.path-faq .detail-wrapper .detail').click(function() {
            $(this).parent().parent().hide();
            $('.path-faq .content-outer-wrapper').css('margin-bottom', 0);
        });
        if ($('.path-faq .sub-tab-wrapper li', context).length > 0) {
            var tab_width = 0;
            clearTimeout($.data(this, 'faq-tab'));
            $.data(this, 'faq-tab', setTimeout(function() {
                $('.path-faq .sub-tab-wrapper li').each(function() {
                    tab_width += $(this).width();
                });
                $('.path-faq .sub-tab-wrapper').width(tab_width);
            }, 500));

            $('.path-faq .sub-tab-wrapper li a', context).each(function() {
                if ($(this).attr('href') == window.location.pathname) {
                    $(this).parent().addClass('active');
                }
            });
        }

        /***** code end ******/
        function unique(arr) {
            return Array.from(new Set(arr))
        }

        //global  product_finder index
        var SymptomsDataSymptoms = {
            "field_symptom_running_nose": 1,
            "field_symptom_sneezing": 2,
            "field_symptom_nasal_congestion": 3,
            "field_symptom_fever": 4,
            "field_headache": 5,
            "field_symptom_sore_throat": 6,
            "field_symptom_menstrual_pain": 7,
            "field_symptom_toothache": 8,
            "field_watery_eyes": 9,
            "field_symptom_dry_cough": 10,
            "field_symptom_productive_cough": 11,
            "field_symptom_heartbum": 12,
            "field_symptomstomach_pain": 13,
            "field_symptomflatulence": 14,
            "field_symptom_acid_reflux": 15,
            "field_symptom_diarrhea": 16,
            "field_symptom_motion_sickness": 17,
        }
        var lang = settings.path.pathPrefix;
        var langname = lang.replace('/', '');
        // view size design
        if ($('.path-product-finder #product-take-wrapper .content-left > div').length > 0) {
            $.data(this, 'product-take', setTimeout(function() {
                $('.path-product-finder #product-take-wrapper .content-right').each(function() {
                    $(this).height($(this).width() * 3 / 2);
                });
                index_row_wrapper('content-left', 'content-left', 12);
            }, 200));
            $(window).resize(function() {
                clearTimeout($.data(this, 'product-take2'));
                $.data(this, 'product-take2', setTimeout(function() {
                    $('.path-product-finder #product-take-wrapper .content-right').each(function() {
                        $(this).height($(this).width() * 3 / 2);
                    });
                    index_row_wrapper('content-left', 'content-left', 12);
                }, 800));
            });
            //修改搜索右边结果右边显示背景图片

            if (langname == "chs") {
                if ($('.path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer').length > 0) {
                    $('.path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer').css("background-image", "url(/themes/pharm_theme/dist/images/product-take/which_bg_chs.jpg)");
                }


            }
            if (langname == "cht") {
                if ($('.path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer').length > 0) {
                    $('.path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer').css("background-image", "url(/themes/pharm_theme/dist/images/product-take/which_bg_cht.jpg)");
                }
                console.log("打印此时输出的cht");

            }

            var product = [];
            //reset choose symptoms
            $('.path-product-finder #product-take-wrapper .content-left .index-wrapper .clear-select').click(function() {
                $('.path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper').each(function() {
                    $(this).removeClass('active inactive');
                });
            });
            //active : blue  inactive: grey  nil: yellow
            var symptomsData = {
                    1: "field_symptom_running_nose",
                    2: "field_symptom_sneezing",
                    3: "field_symptom_nasal_congestion",
                    4: "field_symptom_fever",
                    5: "field_headache",
                    6: "field_symptom_sore_throat",
                    7: "field_symptom_menstrual_pain",
                    8: "field_symptom_toothache",
                    9: "field_watery_eyes",
                    10: "field_symptom_dry_cough",
                    11: "field_symptom_productive_cough",
                    12: "field_symptom_heartbum",
                    13: "field_symptomstomach_pain",
                    14: "field_symptomflatulence",
                    15: "field_symptom_acid_reflux",
                    16: "field_symptom_diarrhea",
                    17: "field_symptom_motion_sickness",
                }
                //定义数组
            var listjson = [{
                    "1": 1
                }, {
                    "2": 1
                }, {
                    "3": 1
                }, {
                    "4": 1
                }, {
                    "5": 1
                }, {
                    "6": 1
                }, {
                    "9": 1
                }, {
                    "1": 3
                }, {
                    "2": 3
                }, {
                    "3": 3
                }, {
                    "4": 3
                }, {
                    "5": 3
                }, {
                    "6": 3
                }, {
                    "11": 3
                }, {
                    "9": 3
                }, {
                    "1": 4
                }, {
                    "2": 4
                }, {
                    "3": 4
                }, {
                    "4": 4
                }, {
                    "5": 4
                }, {
                    "6": 4
                }, {
                    "9": 4
                }, {
                    "12": 5
                }, {
                    "13": 5
                }, {
                    "14": 5
                }, {
                    "15": 5
                }, {
                    "11": 6
                }, {
                    "17": 8
                }, {
                    "1": 9
                }, {
                    "2": 9
                }, {
                    "9": 9
                }, {
                    "1": 10
                }, {
                    "2": 10
                }, {
                    "9": 10
                }, {
                    "6": 7
                }, {
                    "3": 12
                }, {
                    "4": 12
                }, {
                    "5": 12
                }, {
                    "6": 12
                }, {
                    "1": 14
                }, {
                    "2": 14
                }, {
                    "3": 14
                }, {
                    "4": 14
                }, {
                    "5": 14
                }, {
                    "6": 14
                }, {
                    "9": 14
                }, {
                    "1": 15
                }, {
                    "2": 15
                }, {
                    "3": 15
                }, {
                    "4": 15
                }, {
                    "5": 15
                }, {
                    "6": 15
                }, {
                    "9": 15
                }, {
                    "4": 18
                }, {
                    "5": 18
                }, {
                    "6": 18
                }, {
                    "8": 18
                }, {
                    "1": 26
                }, {
                    "2": 26
                }, {
                    "3": 26
                }, {
                    "4": 26
                }, {
                    "5": 26
                }, {
                    "6": 26
                }, {
                    "10": 26
                }, {
                    "11": 26
                }, {
                    "9": 26
                }, {
                    "4": 25
                }, {
                    "5": 25
                }, {
                    "6": 25
                }, {
                    "7": 25
                }, {
                    "8": 25
                }, {
                    "4": 19
                }, {
                    "5": 19
                }, {
                    "6": 19
                }, {
                    "7": 19
                }, {
                    "8": 19
                }, {
                    "4": 24
                }, {
                    "5": 24
                }, {
                    "6": 24
                }, {
                    "7": 24
                }, {
                    "8": 24
                }, {
                    "12": 27
                }, {
                    "13": 27
                }, {
                    "14": 27
                }, {
                    "15": 27
                }, {
                    "10": 23
                }, {
                    "10": 11
                }, {
                    "6": 2
                }, {
                    "16": 30
                }, {
                    "11": 11
                }, {
                    "11": 23
                }, {
                    "12": 29
                }, {
                    "13": 29
                }, {
                    "14": 29
                }, {
                    "15": 29
                }, {
                    "3": 44
                }, {
                    "4": 44
                }, {
                    "5": 44
                }, {
                    "6": 44
                }, {
                    "11": 44
                }, {
                    "4": 46
                }, {
                    "3": 46
                }, {
                    "5": 46
                }, {
                    "6": 46
                }, {
                    "7": 46
                }, {
                    "11": 46
                }]
                //获取显示症状和显示药品的方法 
            function get_display_symptoms_product_id(input_symptoms) {
                var all_product_id_display = []
                var all_symptoms_id_display = []
                var all_symptoms_id = []
                for (var i = 0, l = input_symptoms.length; i < l; i++) {
                    var all_symptoms_id_new = []
                    input_symptoms_id = input_symptoms[i]
                    productid = list_product_and_symptoms[0][input_symptoms_id]
                    for (var ii = 0, ll = productid.length; ii < ll; ii++) {
                        let all_product_id3 = list_product_and_symptoms[1][productid[ii]]
                        let all_symptoms_id4 = Array.from(new Set([...all_product_id3, ...all_symptoms_id_new]));
                        all_symptoms_id_new = all_symptoms_id4
                    }
                    if (i == 0) {
                        all_symptoms_id_display = all_symptoms_id_new;
                        all_product_id_display = productid;
                    } else {
                        let intersection = all_symptoms_id_new.filter(v => all_symptoms_id_display.includes(v))
                        all_symptoms_id_display = intersection
                    }
                    let intersection1 = all_product_id_display.filter(v => productid.includes(v))
                    all_product_id_display = intersection1
                }
                judgearr1_6 = [1, 2, 3, 4, 5, 6];
                judgearr4568 = [4, 5, 6, 8]
                judgearr1_6_tag = (judgearr1_6.length == Array.from(new Set([...input_symptoms, ...judgearr1_6])).length) && !(input_symptoms.indexOf(10) > -1) && !(input_symptoms.indexOf(11) > -1);
                judgearr1_6_12tag = (judgearr1_6.length == Array.from(new Set([...input_symptoms, ...judgearr1_6])).length) && !(input_symptoms.indexOf(10) > -1) && !(input_symptoms.indexOf(11) > -1) && !(input_symptoms.indexOf(1) > -1) && !(input_symptoms.indexOf(2) > -1);
                judgearr4568_tag = (judgearr4568.length == Array.from(new Set([...input_symptoms, ...judgearr4568])).length) && !(input_symptoms.indexOf(10) > -1) && !(input_symptoms.indexOf(11) > -1);
                if (judgearr1_6_tag) {
                    all_product_id_display = [1, 4, 14, 15]
                }
                if (judgearr1_6_12tag) {
                    all_product_id_display = [1, 4, 12, 14, 15]
                }
                if (judgearr4568_tag) {
                    all_product_id_display = [18, 19, 24, 25]
                }
                if (input_symptoms.length == 2) {
                    if ((input_symptoms.indexOf(10) > -1) && (input_symptoms.indexOf(11) > -1)) {
                        all_product_id_display = [6, 11, 13]
                    }
                }
                if (input_symptoms.length == 1) {
                    if (input_symptoms[0] == 6) {
                        all_product_id_display = [2, 7]
                    }
                }
                if (input_symptoms.length == 1) {
                    if (input_symptoms[0] == 9) {
                        all_product_id_display = [9, 10]
                    }
                }
                return [all_symptoms_id_display, all_product_id_display];
            }

            function get_product_and_symptoms_id() {
                list_symptoms_productid = {}
                list_productid_symptoms = {}
                for (var i = 0, l = listjson.length; i < l; i++) {
                    for (var key in listjson[i]) {
                        if (JSON.stringify(list_symptoms_productid) == "{}") {
                            list_symptoms_productid[key] = [listjson[i][key]]
                        } else if (typeof(list_symptoms_productid[parseInt(key)]) == "undefined") {
                            list_symptoms_productid[key] = [listjson[i][key]]
                        } else {
                            list_symptoms_productid[key].push(listjson[i][key])
                        }
                        product_id = listjson[i][key]
                        var newjson = {};
                        newjson[product_id] = key;
                        if (1) {
                            if (JSON.stringify(list_productid_symptoms) == "{}") {

                                list_productid_symptoms[product_id] = [parseInt(key)]

                            } else if (typeof(list_productid_symptoms[parseInt(product_id)]) == "undefined") {

                                list_productid_symptoms[product_id] = [parseInt(key)]

                            } else {

                                list_productid_symptoms[product_id].push(parseInt(key))
                            }
                        }
                    }
                }
                return [list_symptoms_productid, list_productid_symptoms];
            }
            $('.path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper').click(function() {
                if (!$(this).hasClass('inactive')) {
                    if (!$(this).hasClass('active')) {
                        var target = $(this);
                        $(target).addClass('active');
                    } else {
                        $(this).removeClass('active');
                    }
                    var symptoms = [];
                    var symptomsDataarr = [];
                    var display_product_arr = []
                    var temp = [];
                    $('.path-product-finder #product-take-wrapper .content-left .index-wrapper a.active').each(function() {
                        symptoms.unshift($(this).attr('rel'));
                        list_product_and_symptoms = get_product_and_symptoms_id()
                        var symptoms1 = symptoms
                        for (var i = 0, l = symptoms1.length; i < l; i++) {
                            symptoms1[i] = parseInt(symptoms1[i])

                        }
                        all_display_symptoms_product_id = get_display_symptoms_product_id(symptoms1)
                        display_symptoms_arr = all_display_symptoms_product_id[0];
                        display_product_arr = all_display_symptoms_product_id[1];
                        temp = (Array.from(new Set(display_symptoms_arr)))



                    });


                    if (symptoms.length > 0) {
                        $.get(langname + '/productfinderjson', function(data) {
                            for (var p_index in data) {

                                find_field_product_id = parseInt(data[p_index]["field_product_id"])

                                if (display_product_arr.indexOf(find_field_product_id) > -1) {
                                    symptomsDataarr.push(data[p_index])
                                }


                                product = symptomsDataarr;
                            }
                            if (product.length == 0) {
                                if ($(window).width() < 768) {
                                    $('.content-right').hide();
                                }
                                $('.level-wrapper').hide();
                                $('.matched-product-wrapper').html('');
                                $('.arrow').hide();
                            } else {
                                $('.matched-product-wrapper').html('');
                                $(product).each(function(index, value) {
                                    $('.path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper').each(function() {
                                        if ($.inArray(parseInt($(this).attr('rel')), temp) != -1) {
                                            $(this).removeClass('inactive');
                                        } else {
                                            $(this).addClass('inactive');
                                        }
                                    })
                                    var urlsplit1 = value.field_product_url.split("\"");
                                    var text = '<div class="matched-product"><a href="' + urlsplit1[1] + '"><img src=' + value.field_product_image + '><h4>' + value.field_product_name + '</h4>';
                                    if (value.field_symptoms_level == "Onset") {
                                        if (langname == "eng")
                                            text += '<p class="level1 grey">Onset</p>';
                                        else if (langname == "cht")
                                            text += '<p class="level1 grey">初發</p>';
                                        else if (langname == "chs")
                                            text += '<p class="level1 grey">初发</p>';
                                    } else if (value.field_symptoms_level == "Slight") {
                                        if (langname == "eng")
                                            text += '<p class="level2 grey">Slight</p>';
                                        else if (langname == "cht")
                                            text += '<p class="level2 grey">輕微</p>';
                                        else if (langname == "chs")
                                            text += '<p class="level2 grey">轻微</p>';
                                    } else if (value.field_symptoms_level == "Critical") {
                                        if (langname == "eng")
                                            text += '<p class="level3 grey">Crictical</p>';
                                        else if (langname == "cht")
                                            text += '<p class="level3 grey">嚴重</p>';
                                        else if (langname == "chs")
                                            text += '<p class="level3 grey">严重</p>';
                                    }
                                    text += '</a></div>';
                                    $('.level-wrapper').show();
                                    $('.matched-product-wrapper').append(text);
                                });
                                if ($('.matched-product-wrapper').height() > $('.matched-outer').height()) {
                                    $('.arrow-down').show();
                                }
                                if ($(window).width() < 768) {
                                    $('.content-right').show();
                                }
                            }
                        });
                    } else {
                        // go back origin state
                        product = [];
                        $('.path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper').each(function() {
                            $(this).removeClass('inactive');
                            $(this).removeClass('active');
                        });
                        $('.matched-product-wrapper').html('');
                    }
                } else {
                    // reset color status
                    var target = $(this);
                    if ($(this).hasClass('inactive')) {
                        $(target).removeClass('inactive');
                    } else {
                        $(target).removeClass('active');
                    }
                }
            });
            // scroll overflow on right box
            $('.path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer').scroll(function() {
                if ($(this).scrollTop() == 0) {
                    $(".path-product-finder #product-take-wrapper .content-right .arrow-up").hide();
                } else if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                    $(".path-product-finder #product-take-wrapper .content-right .arrow-down").hide();
                } else {
                    $(".path-product-finder #product-take-wrapper .content-right .arrow").show();
                }
            });
            $(".path-product-finder #product-take-wrapper .content-right .arrow").on("click", function() {
                var target = $('.path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer');
                var arrow = $(this);
                if (!$(target).is(':animated')) {
                    scrolled = $(target).scrollTop();
                    if ($(arrow).hasClass('arrow-up')) {
                        scrolled -= 200;
                    }
                    if ($(arrow).hasClass('arrow-down')) {
                        scrolled += 200;
                    }
                    $(target).animate({
                        scrollTop: scrolled
                    });
                }
            });
        }
        /*product-take*/

        /*product*/
        function product_image_height() {
            if ($(window).width() < 768) {
                var wrapper_width = $('.product-big-image').width();
                change_height('product-big-image', wrapper_width);
                change_height('product-small-image', wrapper_width);
            } else {
                $('.product-big-image').attr("style", "");
                $('.product-small-image').attr("style", "");
            }
        }

        if ($('.path-product .product-big-image', context).length > 0) {
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

        $('.path-product #product-wrapper .product-small-image a', context).click(function() {
            var image = $(this).attr('rel');
            var fancybox_img = $(this).attr('fancyboxdata');
            $('.path-product #product-wrapper .product-big-image img').attr('src', image);
            $('.node--type-product #product-wrapper .product-big-image .zoom-btn').attr('href', fancybox_img);
        });

        if ($('.path-product .tab-icon-outer-wrapper .tab-icon-wrapper li', context).length > 0) {
            var tab_width = 0;
            var icon_width = 0;
            clearTimeout($.data(this, 'product-tab'));
            $.data(this, 'product-tab', setTimeout(function() {
                $('.path-product .sub-tab-wrapper li', context).each(function() {
                    console.log($(this).width());
                    tab_width += $(this).width();
                });
                $('.path-product .tab-icon-wrapper li', context).each(function() {
                    icon_width += $(this).width();
                });

                $('.path-product .sub-tab-wrapper').width(tab_width);
                $('.path-product .tab-icon-wrapper').width(icon_width);
            }, 500));
        }

        $('.path-product .product-content-tab-wrapper ul li', context).click(function() {
            $(this).siblings().each(function() {
                if ($(this).hasClass('active')) {
                    $('.product-content-wrapper.product-content' + $(this).attr('rel')).hide();
                    $(this).removeClass('active');
                }
            });
            $(this).addClass('active');
            $('.product-content-wrapper.product-content' + $(this).attr('rel')).show();
        });
        /*product*/
        /*privacy */

        if ($('#privacy_terms #terms-wrapper .terms-left').length > 0) {

            $("#block-pharm-theme-content").css("max-width", "1200px");
            $("#banner-wrapper").css("margin-bottom", "1px");

        }
        /*privacy */
    }
};