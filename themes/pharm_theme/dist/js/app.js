"use strict";Drupal.behaviors.yourmodulename={attach:function(t,s){var c=jQuery.noConflict();function e(t,e,i){0<c("#"+t).length&&(c("#"+t).width(e),c("#"+t).height(i))}function n(t,e){0<c("."+t).length&&c("."+t).each(function(){c(this).height(e)})}function i(t,e,i){var a;a=768<=c(window).width()?c("."+t).width():c("."+e).width(),n("row-xs-4",Math.round(a/12*4)),n("row-xs-9",Math.round(a/12*9)),n("row-xs-12",Math.round(a)),768<=c(window).width()&&(n("row-sm-"+i+"-9",a),n("row-sm-"+i+"-8",Math.round(a/i*8)),n("row-sm-"+i+"-7",Math.round(a/i*7)),n("row-sm-"+i+"-6",Math.round(a/i*6)),n("row-sm-"+i+"-5",Math.round(a/i*5)),n("row-sm-"+i+"-4",Math.round(a/i*4)),n("row-sm-"+i+"-3",Math.round(a/i*3)),n("row-sm-"+i+"-2",Math.round(a/i*2)),n("row-sm-"+i+"-1",Math.round(a/i))),992<=c(window).width()&&(n("row-md-"+i+"-9",a),n("row-md-"+i+"-8",Math.round(a/i*8)),n("row-md-"+i+"-7",Math.round(a/i*7)),n("row-md-"+i+"-6",Math.round(a/i*6)),n("row-md-"+i+"-5",Math.round(a/i*5)),n("row-md-"+i+"-4",Math.round(a/i*4)),n("row-md-"+i+"-3",Math.round(a/i*3)),n("row-md-"+i+"-2",Math.round(a/i*2)),n("row-md-"+i+"-1",Math.round(a/i))),1200<=c(window).width()&&(n("row-lg-"+i+"-9",a),n("row-lg-"+i+"-8",Math.round(a/i*8)),n("row-lg-"+i+"-7",Math.round(a/i*7)),n("row-lg-"+i+"-6",Math.round(a/i*6)),n("row-lg-"+i+"-5",Math.round(a/i*5)),n("row-lg-"+i+"-4",Math.round(a/i*4)),n("row-lg-"+i+"-3",Math.round(a/i*3)),n("row-lg-"+i+"-2",Math.round(a/i*2)),n("row-lg-"+i+"-1",Math.round(a/i)))}0<c("#company-timeline").length&&(w=(x=s.path.pathPrefix).replace("/",""),u=(u=s.path.currentPath).replace("node/",""),m="title_"+w,g="zoom_in_detail_"+w,l=[],b="/"+x+x+"timeline-json/"+u,c.getJSON(b,function(t){for(var e in t){for(var i,a=t[e].img,n=[],r=t[e][g],a=a.split(","),o=0;o<21;o++)a[o]&&n.push(a[o]);i=t[e][m]+r,l[e]={type:"blog_post",date:t[e].date.substring(0,4),title:t[e].date.substring(0,4),content:i,images:n}}timeline=new Timeline(c("#company-timeline"),l),timeline.setOptions({dateFormat:"YYYY",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"year",first_separator:!0,responsive_width:768}),timeline.display()})),c(".homepage-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),c(".homepage-mobile-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),0<c(".scroll-wrapper").length&&(clearTimeout(c.data(this,"scroll-wrapper")),c.data(this,"scroll-wrapper",setTimeout(function(){c(".scroll-wrapper").each(function(){var e;10<c(this).children().width()-c(this).width()&&(nice=c(this).niceScroll(),e=nice.getContentSize,nice.getContentSize=function(){var t=e.call(nice);return t.h=nice.win.height(),t})})},800)),c(window).resize(function(){clearTimeout(c.data(this,"scroll-wrapper2")),c.data(this,"scroll-wrapper2",setTimeout(function(){c(".scroll-wrapper").each(function(){var e;c(this).getNiceScroll().remove(),10<c(this).children().width()-c(this).width()&&(nice=c(this).niceScroll(),e=nice.getContentSize,nice.getContentSize=function(){var t=e.call(nice);return t.h=nice.win.height(),t})})},800))})),0<c(".sub-tab-session").length&&(clearTimeout(c.data(this,"sub-tab-session")),c.data(this,"sub-tab-session",setTimeout(function(){c(".sub-tab-outer-wrapper").width()+c(".sub-tab-outer-wrapper").scrollLeft()+20>=c(".sub-tab-outer-wrapper").children().width()?c(".sub-tab-session .arrow-right").fadeOut():c(".sub-tab-session .arrow-right").fadeIn()},500)),c(".sub-tab-outer-wrapper").scroll(function(){c(this).width()+c(this).scrollLeft()+20>=c(this).children().width()?c(".sub-tab-session .arrow-right").fadeOut():c(".sub-tab-session .arrow-right").fadeIn(),c(this).width()+c(this).scrollLeft()-20>=c(this).width()?c(".sub-tab-session .arrow-left").fadeIn():c(".sub-tab-session .arrow-left").fadeOut()}),c(".sub-tab-session .arrow").on("click",function(){var t=c(".sub-tab-session .sub-tab-outer-wrapper"),e=c(this);c(t).is(":animated")||(scrolled=c(t).scrollLeft(),c(e).hasClass("arrow-left")&&(scrolled-=100),c(e).hasClass("arrow-right")&&(scrolled+=100),c(t).animate({scrollLeft:scrolled}))})),0<c(".homepage .body .main-wrapper").length&&(i("desktop-main","mobile-main",9),c(window).resize(function(){clearTimeout(c.data(this,"resizeTimer")),c.data(this,"resizeTimer",setTimeout(function(){i("desktop-main","mobile-main",9)},800))})),0<c("#banner-wrapper-mobile").length&&c("#banner-wrapper-mobile").carousel({interval:!1}),e("wrapper",c(window).width(),c(window).height()),c("body").show(),c(window).resize(function(){clearTimeout(c.data(this,"resizeTimer2")),c.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",c(window).width(),c(window).height())},200)),768<=c(window).width()&&(c("#wrapper").hasClass("toggled")&&c("#wrapper").removeClass("toggled"),c(".hamburger").hasClass("is-open")&&(c(".hamburger").removeClass("is-open"),c(".hamburger").addClass("is-closed")))}),c(".year-wrapper-div").parent("h3").addClass("year-wrapper"),0<c(".path-news .content-row").length&&(c(".path-news .content-row")[0].className="content-row active",c.data(this,"news",setTimeout(function(){c(".path-news .content-row .colume2").each(function(){c(this).siblings(".colume1").height(c(this).height())}),c(".path-news .content-row").show()},200)),c(window).resize(function(){clearTimeout(c.data(this,"news2")),c.data(this,"news2",setTimeout(function(){c(".path-news .content-row .colume2").each(function(){c(this).siblings(".colume1").height(c(this).height())}),c(".path-news  .content-row").show()},800))})),c(".path-news .content-row .colume2 .title-wrapper a").click(function(){c(this).parent().parent().parent().hasClass("active")?c(this).parent().siblings(".content-wrapper").slideUp(400,function(){c(this).parent().siblings(".colume1").height(c(this).parent().height()),c(this).parent().parent().removeClass("active")}):c(this).parent().siblings(".content-wrapper").slideDown(400,function(){c(this).parent().siblings(".colume1").height(c(this).parent().height()),c(this).parent().parent().addClass("active")})});var a,r,o,h,p,l,d,f,w,u,m,g,b,v=s.path.currentQuery.page;c(".path-news .pagination-btn .pagination-change option[rel="+v+"]").attr("selected","selected"),c(".path-news .pagination-btn .pagination-change").change(function(){var t=c(this).val();window.location.assign(t)}),0<c(".path-advertisements").length&&(c(".path-advertisements .rightmove").click(function(){var t=c("#next_page").attr("rel");s.path.pathPrefix;window.location.assign(t)}),c(".path-advertisements .leftmove").click(function(){var t=c("#prev_page").attr("rel");s.path.pathPrefix;window.location.assign(t)}),a=c("#vid-content .vid-title").html(),r=c("#vid-content .vid-date").html(),o=c("#vid-content .vid-body").html(),h=c("#vid-content .vid-url").html(),c(".path-advertisements .video").html('<iframe width="400" height="300" src="'+h+'" frameborder="0" allowfullscreen></iframe>'),c(".advertisements-top .content1 h3").html(a),c(".advertisements-top .content1 p").html(r),c(".advertisements-top .content2").html(o),c(".path-advertisements .view-video").click(function(){var t=c(this).parent().find("#vid-content .vid-title").html(),e=c(this).parent().find("#vid-content .vid-date").html(),i=c(this).parent().find("#vid-content .vid-body").html(),a=c(this).parent().find("#vid-content .vid-url").html();c(".path-advertisements .video").html('<iframe width="400" height="300" src="'+a+'" frameborder="0" allowfullscreen></iframe>'),c(".advertisements-top .content1 h3").html(t),c(".advertisements-top .content1 p").html(e),c(".advertisements-top .content2").html(i),scrolled=c(".advertisements-top").scrollTop(),c("html, body").animate({scrollTop:c(".advertisements-top").offset().top-5})}),c(".path-advertisements .pagination-change").on("focus",function(){}).change(function(){var t=c(this).val(),e=s.path.pathPrefix;window.location.assign("/"+e+"advertisements/"+t)}),c(".path-advertisements .pagination-btn.withmovebutt").click(function(){var t=s.path.pathPrefix,e=c(this).attr("rel");window.location.assign("/"+t+"advertisements/"+e)})),0<c("#fund-timeline").length&&(p=function(t){var i=t||c("#year-drop-down").val(),a=[];_.forEach(l,function(t){var e=_.split(t.date,"-")[0];_.toString(e)===_.toString(i)&&a.push(t)});var e=i;_.toString(e)===_.toString(d)?c("#first-year").addClass("active"):c("#first-year").removeClass("active"),_.toString(e)===_.toString(f)?c("#second-year").addClass("active"):c("#second-year").removeClass("active"),c("#year-drop-down").val(i),c("#fund-timeline").empty(),timeline=new Timeline(c("#fund-timeline"),a),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<c(".fancybox").length&&c(".fancybox").fancybox()},l=[],f=d="",c("#first-year").click(function(){p("2016")}),c("#second-year").click(function(){p("2015")}),c("#year-drop-down").change(function(){p(c(this).val())}),d=2016,f=2015,w=(x=s.path.pathPrefix).replace("/",""),u=(u=s.path.currentPath).replace("node/",""),m="title_"+w,g="zoom_in_detail_"+w,b="/"+x+x+"timeline-json/"+u,c.getJSON(b,function(t){var e="";for(var i in t){for(var a=[],n="",r=(r=t[i].img).split(","),o=0;o<21;o++)r[o]&&(e+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src="+r[o]+"></div>",a.push(r[o]));n=_.size(t[i][g])&&!_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][m]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[i][g]+"</span></div>":_.size(t[i][g])&&_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][m]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+e+"</div><span id='charity-fund-detail'>"+t[i][g]+"</span></div>":t[i][m],l[i]={type:"blog_post",date:t[i].date.substring(0,7),title:t[i].date.substring(0,7),content:n,images:a}}p(d),0<c(".fancybox").length&&c(".fancybox").fancybox()})),0<c(".fancybox").length&&c(".fancybox").fancybox();document.URL.substr(document.URL.indexOf("#")+1);function y(){e("wrapper",c(window).width(),c(window).height()),768<=c(window).width()?(c("#health-tips .function-wrapper .function-btn").each(function(){c("#health-tips").hasClass("cold_and_flu")?c(this).height(c(this).width()/280*195):c("#health-tips").hasClass("children")?c(this).height(c(this).width()/100*50):(c("#health-tips").hasClass("pain")||c("#health-tips").hasClass("allergy")||c("#health-tips").hasClass("gerd"))&&c(this).height(c(this).width()/280*196)}),c(".function-middle-wrapper").height(c(".function-left-wrapper:visible").height())):c("#health-tips .function-wrapper .function-btn").each(function(){(c("#health-tips").hasClass("cold_and_flu")||c("#health-tips").hasClass("pain")||c("#health-tips").hasClass("allergy")||c("#health-tips").hasClass("gerd"))&&c(this).height(Math.floor(c(this).width()/385*293)),c("#health-tips").hasClass("children")&&c(this).height(Math.floor(c(this).width()/516*293))})}e("wrapper",c(window).width(),c(window).height()),c("body").show(),c(window).resize(function(){clearTimeout(c.data(this,"resizeTimer2")),c.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",c(window).width(),c(window).height())},200)),768<=c(window).width()&&(c("#wrapper").hasClass("toggled")&&c("#wrapper").removeClass("toggled"),c(".hamburger").hasClass("is-open")&&(c(".hamburger").removeClass("is-open"),c(".hamburger").addClass("is-closed")))}),0<c("#block-contactus #offers-wrapper").length&&(c.data(this,"blcok-contactus",setTimeout(function(){c("#block-contactus #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-contactus #offers-wrapper .content-wrapper").show()},200)),c(window).resize(function(){clearTimeout(c.data(this,"blcok-contactus2")),c.data(this,"blcok-contactus2",setTimeout(function(){c("#block-contactus #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-contactus #offers-wrapper .content-wrapper").show()},800))})),c("#block-contactus #offers-wrapper .more-btn").click(function(){c("#block-contactus #offers-wrapper > div.hide").each(function(t){t<3&&c(this).removeClass("hide"),0==c("#block-contactus #offers-wrapper > div.hide").length&&c("#block-contactus #offers-wrapper .more-btn").remove()}),c("#block-contactus #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())})}),0<c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper").length&&(c.data(this,"blcok-contactus",setTimeout(function(){c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},200)),c(window).resize(function(){clearTimeout(c.data(this,"blcok-contactus2")),c.data(this,"blcok-contactus2",setTimeout(function(){c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},800))})),c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").click(function(){c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").each(function(t){t<3&&c(this).removeClass("hide"),0==c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").length&&c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").remove()}),c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())})}),0<c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper").length&&(c.data(this,"block-lianxiwomenjizhaopindibuneirongfanti",setTimeout(function(){c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},200)),c(window).resize(function(){clearTimeout(c.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2")),c.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2",setTimeout(function(){c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},800))})),c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").click(function(){c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").each(function(t){t<3&&c(this).removeClass("hide"),0==c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").length&&c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").remove()}),c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())})}),0<c(".path-latest-offers").length&&(c.data(this,"lastest-offers",setTimeout(function(){c(".path-latest-offers .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c(".path-latest-offers .content-wrapper").show()},200)),c(window).resize(function(){clearTimeout(c.data(this,"lastest-offers2")),c.data(this,"lastest-offers2",setTimeout(function(){c(".path-latest-offers .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c(".path-latest-offers .content-wrapper").show()},800))})),c(".path-latest-offers .more-btn").click(function(){c(".path-latest-offers > div.hide").each(function(t){t<3&&c(this).removeClass("hide"),0==c(".path-latest-offers > div.hide").length&&c(".path-latest-offers .more-btn").remove()}),c(".path-latest-offers .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())})}),0<c(".page-node-type-healthtips .sub-tab-wrapper li").length&&(e("wrapper",c(window).width(),c(window).height()),k=0,clearTimeout(c.data(this,"health-tips-tab")),c.data(this,"health-tips-tab",setTimeout(function(){c(".page-node-type-healthtips .sub-tab-wrapper li").each(function(){k+=c(this).width()}),c(".page-node-type-healthtips .sub-tab-wrapper").width(k)},500))),0<c("#health-tips .function-wrapper .function-btn").length&&(c.data(this,"function",setTimeout(function(){y()},200)),c(window).resize(function(){clearTimeout(c.data(this,"health-btn")),c.data(this,"health-btn",setTimeout(function(){y()},800))}),c("#health-tips .function-wrapper .function-btn").click(function(){var t;void 0!==c(this).attr("rel")&&(t=c(this).attr("rel"),c("#health-tips .function-wrapper .function-btn").each(function(){c(this).removeClass("active")}),c('#health-tips .function-wrapper .function-btn[rel="'+t+'"]').addClass("active"),c("#health-tips .function-wrapper .function-middle-wrapper img").each(function(){c(this).removeClass("active")}),c('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+t+'"]').addClass("active"),0<c("#health-tips .function-wrapper .function-middle-wrapper p").length&&(c("#health-tips .function-wrapper .function-middle-wrapper p").each(function(){c(this).removeClass("active")}),c('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+t+'"]').addClass("active")),0<c("#health-tips .function-detail-wrapper .detail-right-wrapper").length&&(c("#health-tips .function-detail-wrapper .detail-right-wrapper").each(function(){c(this).removeClass("active")}),c('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+t+'"]').addClass("active")))}),c("#health-tips .function-tab-wrapper .function-tab-btn").click(function(){var t,e,i;void 0!==c(this).attr("rel")&&(t=c(this).attr("rel"),c("#health-tips .function-tab-wrapper .function-tab-btn").each(function(){c(this).removeClass("active")}),c('#health-tips .function-tab-wrapper .function-tab-btn[rel="'+t+'"]').addClass("active"),e=768<=c(window).width()?"left":"right",c("#health-tips .function-"+e+"-wrapper").each(function(){c(this).removeClass("active")}),c("#health-tips .function-"+e+'-wrapper[rel="'+t+'"]').addClass("active"),y(),c(".function-"+e+"-wrapper:visible .function-btn").each(function(){c(this).removeClass("active")}),c(".function-"+e+"-wrapper:visible .function-btn:first-child").addClass("active"),i=c(".function-"+e+"-wrapper:visible .function-btn:first-child").attr("rel"),c("#health-tips .function-wrapper .function-middle-wrapper img").each(function(){c(this).removeClass("active")}),c('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+i+'"]').addClass("active"),c("#health-tips .function-wrapper .function-middle-wrapper p").each(function(){c(this).removeClass("active")}),c('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+i+'"]').addClass("active"),c("#health-tips .function-detail-wrapper .detail-right-wrapper").each(function(){c(this).removeClass("active")}),c('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+i+'"]').addClass("active"))}));var k,C=c(".hamburger"),T=(c(".overlay"),!1);C.click(function(){T=1==T?(C.removeClass("is-open"),C.addClass("is-closed"),!1):(C.removeClass("is-closed"),C.addClass("is-open"),!0)}),c('[data-toggle="offcanvas"]').click(function(){c("#wrapper").toggleClass("toggled")}),c(".sidebar-nav > li").click(function(){c(this).hasClass("parent")||(c(".sidebar-nav > li").each(function(){c(this).removeClass("active")}),c(this).addClass("active"))}),c(".sidebar-nav > li.parent").click(function(){c(this).hasClass("show-sub")?c(this).removeClass("show-sub"):c(this).addClass("show-sub"),c(this).find(".sub-sidebar-nav").slideToggle()}),c(".sidebar-nav > li.parent").each(function(){c(this).find("li").first().remove()}),c(".path-faq .content-wrapper .detail").click(function(){!function(t){c(t).attr("rel");var e=c(t).parent().parent().position(),i=c(".path-faq .detail-wrapper").width(),a=(c(t).parent().parent().width(),s.path.pathPrefix.replace("/",""),c(t).parent().parent().parent().find(".img-wrapper img").attr("src")),n=c(t).parent().find(".grey").html(),r=c(t).parent().find(".faq_content").html();c(".path-faq div.share-wrapper > a").attr("href","https://www.facebook.com/dialog/feed?app_id=105148586494382&display=popup&caption="+n+"&description="+r+"&picture="+a+"&link=http://www.fortunepharm.com/&redirect_uri=http://www.fortunepharm.com/"),c(".path-faq .detail-wrapper h4").html(n),c(".path-faq .detail-wrapper .description").html(r),c(".path-faq .detail-wrapper img").attr("src",a),e.left+i>c(".content-outer-wrapper").width()?c(".path-faq .detail-wrapper").css("top",e.top).css("left","auto").css("right",0).show():c(".path-faq .detail-wrapper").css("top",e.top).css("left",e.left).show();var o=c(".path-faq .detail-wrapper").position().top+c(".path-faq .detail-wrapper").height()+10-c(".path-faq .content-outer-wrapper").height();0<o?c(".path-faq .content-outer-wrapper").css("margin-bottom",10+o):c(".path-faq .content-outer-wrapper").css("margin-bottom",0),c("html, body").animate({scrollTop:c(".path-faq .detail-wrapper").offset().top-5},500)}(c(this))}),c(".path-faq .detail-wrapper .detail").click(function(){c(this).parent().parent().hide(),c(".path-faq .content-outer-wrapper").css("margin-bottom",0)}),0<c(".path-faq .sub-tab-wrapper li").length&&(k=0,clearTimeout(c.data(this,"faq-tab")),c.data(this,"faq-tab",setTimeout(function(){c(".path-faq .sub-tab-wrapper li").each(function(){k+=c(this).width()}),c(".path-faq .sub-tab-wrapper").width(k)},500)),c(".path-faq .sub-tab-wrapper li a").each(function(){c(this).attr("href")==window.location.pathname&&c(this).parent().addClass("active")}));var x,z,j,M={field_symptom_running_nose:1,field_symptom_sneezing:2,field_symptom_nasal_congestion:3,field_symptom_fever:4,field_headache:5,field_symptom_sore_throat:6,field_symptom_menstrual_pain:7,field_symptom_toothache:8,field_watery_eyes:9,field_symptom_dry_cough:10,field_symptom_productive_cough:11,field_symptom_heartbum:12,field_symptomstomach_pain:13,field_symptomflatulence:14,field_symptom_acid_reflux:15,field_symptom_diarrhea:16,field_symptom_motion_sickness:17},S=(x=s.path.pathPrefix).replace("/","");0<c(".path-product-finder #product-take-wrapper .content-left > div").length&&(c.data(this,"product-take",setTimeout(function(){c(".path-product-finder #product-take-wrapper .content-right").each(function(){c(this).height(3*c(this).width()/2)}),i("content-left","content-left",12)},200)),c(window).resize(function(){clearTimeout(c.data(this,"product-take2")),c.data(this,"product-take2",setTimeout(function(){c(".path-product-finder #product-take-wrapper .content-right").each(function(){c(this).height(3*c(this).width()/2)}),i("content-left","content-left",12)},800))}),z=[],c(".path-product-finder #product-take-wrapper .content-left .index-wrapper .clear-select").click(function(){c(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){c(this).removeClass("active inactive")})}),j={1:"field_symptom_running_nose",2:"field_symptom_sneezing",3:"field_symptom_nasal_congestion",4:"field_symptom_fever",5:"field_headache",6:"field_symptom_sore_throat",7:"field_symptom_menstrual_pain",8:"field_symptom_toothache",9:"field_watery_eyes",10:"field_symptom_dry_cough",11:"field_symptom_productive_cough",12:"field_symptom_heartbum",13:"field_symptomstomach_pain",14:"field_symptomflatulence",15:"field_symptom_acid_reflux",16:"field_symptom_diarrhea",17:"field_symptom_motion_sickness"},c(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").click(function(){var t,h,p,l;c(this).hasClass("inactive")?(t=c(this),c(this).hasClass("inactive")?c(t).removeClass("inactive"):c(t).removeClass("active")):(c(this).hasClass("active")?c(this).removeClass("active"):(t=c(this),c(t).addClass("active")),h=[],p=[],c(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.active").each(function(){h.unshift(c(this).attr("rel"))}),l=[],0<h.length?c.get(S+"/product-finder-json?_format=json",function(t){for(var e in t){for(var i in h)"True"==t[e][j[h[i]]]&&p.push(t[e]);z=p}var a,n=0;if(1<h.length){for(var r=0;r<z.length;r++){for(var o=0;o<h.length;o++)"True"==z[r][j[h[o]]]&&n++;n>=h.length&&l.push(z[r]),n=0}a=l,z=Array.from(new Set(a))}var s=[];0==z.length?(c(window).width()<768&&c(".content-right").hide(),c(".level-wrapper").hide(),c(".matched-product-wrapper").html(""),c(".arrow").hide()):(c(".matched-product-wrapper").html(""),c(z).each(function(t,e){for(var i in M)"True"==z[t][i]&&s.push(M[i]);c(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){-1!=c.inArray(parseInt(c(this).attr("rel")),s)?c(this).removeClass("inactive"):c(this).addClass("inactive")});var a='<div class="matched-product"><a href="'+e.id+'"><img src='+e.field_product_image+"><h4>"+e.field_product_name+"</h4>";"Onset"==e.field_symptoms_level?"eng"==S?a+='<p class="level1 grey">Onset</p>':"cht"==S?a+='<p class="level1 grey">初發</p>':"chs"==S&&(a+='<p class="level1 grey">初发</p>'):"Slight"==e.field_symptoms_level?"eng"==S?a+='<p class="level2 grey">Slight</p>':"cht"==S?a+='<p class="level2 grey">輕微</p>':"chs"==S&&(a+='<p class="level2 grey">轻微</p>'):"Critical"==e.field_symptoms_level&&("eng"==S?a+='<p class="level3 grey">Crictical</p>':"cht"==S?a+='<p class="level3 grey">嚴重</p>':"chs"==S&&(a+='<p class="level3 grey">严重</p>')),a+="</a></div>",c(".level-wrapper").show(),c(".matched-product-wrapper").append(a)}),c(".matched-product-wrapper").height()>c(".matched-outer").height()&&c(".arrow-down").show(),c(window).width()<768&&c(".content-right").show())}):(z=[],c(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){c(this).removeClass("inactive"),c(this).removeClass("active")}),c(".matched-product-wrapper").html("")))}),c(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer").scroll(function(){0==c(this).scrollTop()?c(".path-product-finder #product-take-wrapper .content-right .arrow-up").hide():c(this).scrollTop()+c(this).innerHeight()>=c(this)[0].scrollHeight?c(".path-product-finder #product-take-wrapper .content-right .arrow-down").hide():c(".path-product-finder #product-take-wrapper .content-right .arrow").show()}),c(".path-product-finder #product-take-wrapper .content-right .arrow").on("click",function(){var t=c(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer"),e=c(this);c(t).is(":animated")||(scrolled=c(t).scrollTop(),c(e).hasClass("arrow-up")&&(scrolled-=200),c(e).hasClass("arrow-down")&&(scrolled+=200),c(t).animate({scrollTop:scrolled}))}))}};