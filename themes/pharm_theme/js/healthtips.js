Drupal.behaviors.Healthtips = {
    attach: function(context, settings) {
        var $ = jQuery.noConflict();
        console.log('Healthtips');

        function change_size(id_name, width, height) {
            if ($('#' + id_name).length > 0) {
                $('#' + id_name).width("auto");
                $('#' + id_name).height("auto");
            }
        }
        $(document).ready(function() {
            // change_size('wrapper', $(window).width(), $(window).height());
            $('body').show();
            if ($('#health-tips .sub-tab-wrapper li').length > 0) {
                change_size('wrapper', $(window).width(), $(window).height());

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
                change_size('wrapper', $(window).width(), $(window).height());
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
            /*health-tips*/
        });
    }
};