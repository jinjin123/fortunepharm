"use strict";Drupal.behaviors.PharmaTheme={attach:function(t,s){var c=jQuery.noConflict();function e(t,e,i){0<c("#"+t).length&&(c("#"+t).width(e),c("#"+t).height(i))}function r(t,e){0<c("."+t).length&&c("."+t).each(function(){c(this).height(e)})}function i(t,e,i){var a;a=768<=c(window).width()?c("."+t).width():c("."+e).width(),r("row-xs-4",Math.round(a/12*4)),r("row-xs-9",Math.round(a/12*9)),r("row-xs-12",Math.round(a)),768<=c(window).width()&&(r("row-sm-"+i+"-9",a),r("row-sm-"+i+"-8",Math.round(a/i*8)),r("row-sm-"+i+"-7",Math.round(a/i*7)),r("row-sm-"+i+"-6",Math.round(a/i*6)),r("row-sm-"+i+"-5",Math.round(a/i*5)),r("row-sm-"+i+"-4",Math.round(a/i*4)),r("row-sm-"+i+"-3",Math.round(a/i*3)),r("row-sm-"+i+"-2",Math.round(a/i*2)),r("row-sm-"+i+"-1",Math.round(a/i))),992<=c(window).width()&&(r("row-md-"+i+"-9",a),r("row-md-"+i+"-8",Math.round(a/i*8)),r("row-md-"+i+"-7",Math.round(a/i*7)),r("row-md-"+i+"-6",Math.round(a/i*6)),r("row-md-"+i+"-5",Math.round(a/i*5)),r("row-md-"+i+"-4",Math.round(a/i*4)),r("row-md-"+i+"-3",Math.round(a/i*3)),r("row-md-"+i+"-2",Math.round(a/i*2)),r("row-md-"+i+"-1",Math.round(a/i))),1200<=c(window).width()&&(r("row-lg-"+i+"-9",a),r("row-lg-"+i+"-8",Math.round(a/i*8)),r("row-lg-"+i+"-7",Math.round(a/i*7)),r("row-lg-"+i+"-6",Math.round(a/i*6)),r("row-lg-"+i+"-5",Math.round(a/i*5)),r("row-lg-"+i+"-4",Math.round(a/i*4)),r("row-lg-"+i+"-3",Math.round(a/i*3)),r("row-lg-"+i+"-2",Math.round(a/i*2)),r("row-lg-"+i+"-1",Math.round(a/i)))}c("#sidebar-wrapper .sidebar-nav .nolink ul li a, #header .nolink ul li a").attr("target","_blank"),0<c("#company-timeline").length&&(f=(T=s.path.pathPrefix).replace("/",""),u=(u=s.path.currentPath).replace("node/",""),m="title_"+f,g="zoom_in_detail_"+f,l=[],b="/"+T+T+"timeline-json/"+u,c.getJSON(b,function(t){for(var e in t){for(var i,a=t[e].img,r=[],n=t[e][g],a=a.split(","),o=0;o<21;o++)a[o]&&r.push(a[o]);i=t[e][m]+n,l[e]={type:"blog_post",date:t[e].date.substring(0,4),title:t[e].date.substring(0,4),content:i,images:r}}timeline=new Timeline(c("#company-timeline"),l),timeline.setOptions({dateFormat:"YYYY",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"year",first_separator:!0,responsive_width:768}),timeline.display()})),c(".homepage-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),c(".homepage-mobile-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),0<c(".scroll-wrapper").length&&(clearTimeout(c.data(this,"scroll-wrapper")),c.data(this,"scroll-wrapper",setTimeout(function(){c(".scroll-wrapper").each(function(){var e;10<c(this).children().width()-c(this).width()&&(nice=c(this).niceScroll(),e=nice.getContentSize,nice.getContentSize=function(){var t=e.call(nice);return t.h=nice.win.height(),t})})},800)),c(window).resize(function(){clearTimeout(c.data(this,"scroll-wrapper2")),c.data(this,"scroll-wrapper2",setTimeout(function(){c(".scroll-wrapper").each(function(){var e;c(this).getNiceScroll().remove(),10<c(this).children().width()-c(this).width()&&(nice=c(this).niceScroll(),e=nice.getContentSize,nice.getContentSize=function(){var t=e.call(nice);return t.h=nice.win.height(),t})})},800))})),0<c(".sub-tab-session").length&&(clearTimeout(c.data(this,"sub-tab-session")),c.data(this,"sub-tab-session",setTimeout(function(){c(".sub-tab-outer-wrapper").width()+c(".sub-tab-outer-wrapper").scrollLeft()+20>=c(".sub-tab-outer-wrapper").children().width()?c(".sub-tab-session .arrow-right").fadeOut():c(".sub-tab-session .arrow-right").fadeIn()},500)),c(".sub-tab-outer-wrapper").scroll(function(){c(this).width()+c(this).scrollLeft()+20>=c(this).children().width()?c(".sub-tab-session .arrow-right").fadeOut():c(".sub-tab-session .arrow-right").fadeIn(),c(this).width()+c(this).scrollLeft()-20>=c(this).width()?c(".sub-tab-session .arrow-left").fadeIn():c(".sub-tab-session .arrow-left").fadeOut()}),c(".sub-tab-session .arrow").on("click",function(){var t=c(".sub-tab-session .sub-tab-outer-wrapper"),e=c(this);c(t).is(":animated")||(scrolled=c(t).scrollLeft(),c(e).hasClass("arrow-left")&&(scrolled-=100),c(e).hasClass("arrow-right")&&(scrolled+=100),c(t).animate({scrollLeft:scrolled}))})),0<c(".homepage .body .main-wrapper").length&&(i("desktop-main","mobile-main",9),c(window).resize(function(){clearTimeout(c.data(this,"resizeTimer")),c.data(this,"resizeTimer",setTimeout(function(){i("desktop-main","mobile-main",9)},800))})),0<c("#banner-wrapper-mobile").length&&c("#banner-wrapper-mobile").carousel({interval:!1}),e("wrapper",c(window).width(),c(window).height()),c("body").show(),c(window).resize(function(){clearTimeout(c.data(this,"resizeTimer2")),c.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",c(window).width(),c(window).height())},200)),768<=c(window).width()&&(c("#wrapper").hasClass("toggled")&&c("#wrapper").removeClass("toggled"),c(".hamburger").hasClass("is-open")&&(c(".hamburger").removeClass("is-open"),c(".hamburger").addClass("is-closed")))}),c(".year-wrapper-div").parent("h3").addClass("year-wrapper"),0<c(".path-news .content-row").length&&(c(".path-news .content-row")[0].className="content-row active",c.data(this,"news",setTimeout(function(){c(".path-news .content-row .colume2").each(function(){c(this).siblings(".colume1").height(c(this).height())}),c(".path-news .content-row").show()},200)),c(window).resize(function(){clearTimeout(c.data(this,"news2")),c.data(this,"news2",setTimeout(function(){c(".path-news .content-row .colume2").each(function(){c(this).siblings(".colume1").height(c(this).height())}),c(".path-news  .content-row").show()},800))})),c(".path-news .content-row .colume2 .title-wrapper a").click(function(){c(this).parent().parent().parent().hasClass("active")?c(this).parent().siblings(".content-wrapper").slideUp(400,function(){c(this).parent().siblings(".colume1").height(c(this).parent().height()),c(this).parent().parent().removeClass("active")}):c(this).parent().siblings(".content-wrapper").slideDown(400,function(){c(this).parent().siblings(".colume1").height(c(this).parent().height()),c(this).parent().parent().addClass("active")})});var a,n,o,p,h,l,d,w,f,u,m,g,b,v=s.path.currentQuery.page;c(".path-news .pagination-btn .pagination-change option[rel="+v+"]").attr("selected","selected"),c(".path-news .pagination-btn .pagination-change").change(function(){var t=c(this).val();window.location.assign(t)}),0<c(".path-advertisements").length&&(s.path.currentQuery.y?"2020"==s.path.currentQuery.y?(c("#block-pagerforadverisement").hide(),c("#block-pagerforadverisement-2").hide(),c("#block-pagerforadverisement").show()):(c("#block-pagerforadverisement").hide(),c("#block-pagerforadverisement-2").hide()):(c("#block-pagerforadverisement").show(),c("#block-pagerforadverisement-2").hide()),c(".path-advertisements .rightmove").click(function(){var t=c("#next_page").attr("rel");s.path.pathPrefix;window.location.assign("?y="+t)}),c(".path-advertisements .leftmove").click(function(){var t=c("#prev_page").attr("rel");s.path.pathPrefix;window.location.assign("?y="+t)}),a=c("#vid-content .vid-title").html(),n=c("#vid-content .vid-date").html(),o=c("#vid-content .vid-body").html(),p=c("#vid-content .vid-url").html(),c(".path-advertisements .video").html('<iframe width="400" height="300" src="'+p+'" frameborder="0" allowfullscreen></iframe>'),c(".advertisements-top .content1 h3").html(a),c(".advertisements-top .content1 p").html(n),c(".advertisements-top .content2").html(o),c(".view-video").click(function(){var t=c(this).parent().parent().find("#vid-content .vid-title").html(),e=c(this).parent().parent().find("#vid-content .vid-date").html(),i=c(this).parent().parent().find("#vid-content .vid-body").html(),a=c(this).parent().parent().find("#vid-content .vid-url").html();c(".path-advertisements .video").html('<iframe width="400" height="300" src="'+a+'" frameborder="0" allowfullscreen></iframe>'),c(".advertisements-top .content1 h3").html(t),c(".advertisements-top .content1 p").html(e),c(".advertisements-top .content2").html(i),scrolled=c(".advertisements-top").scrollTop(),c("html, body").animate({scrollTop:c(".advertisements-top").offset().top-5})}),c(".path-advertisements .pagination-change").on("focus",function(){}).change(function(){var t=c(this).val(),e=s.path.pathPrefix;window.location.assign("/"+e+"advertisements/?y="+t)}),c(".path-advertisements .pagination-btn.withmovebutt").click(function(){var t=s.path.pathPrefix,e=c(this).attr("rel");window.location.assign("/"+t+"advertisements/?y="+e)})),0<c("#fund-timeline").length&&(h=function(t){var i=t||c("#year-drop-down").val(),a=[];_.forEach(l,function(t){var e=_.split(t.date,"-")[0];_.toString(e)===_.toString(i)&&a.push(t)});var e=i;_.toString(e)===_.toString(d)?c("#first-year").addClass("active"):c("#first-year").removeClass("active"),_.toString(e)===_.toString(w)?c("#second-year").addClass("active"):c("#second-year").removeClass("active"),c("#year-drop-down").val(i),c("#fund-timeline").empty(),timeline=new Timeline(c("#fund-timeline"),a),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<c(".fancybox").length&&c(".fancybox").fancybox()},l=[],w=d="",c("#first-year").click(function(){h("2016")}),c("#second-year").click(function(){h("2015")}),c("#year-drop-down").change(function(){h(c(this).val())}),d=2016,w=2015,f=(T=s.path.pathPrefix).replace("/",""),u=(u=s.path.currentPath).replace("node/",""),m="title_"+f,g="zoom_in_detail_"+f,b="/"+T+T+"timeline-json/"+u,c.getJSON(b,function(t){var e="";for(var i in t){for(var a=[],r="",n=(n=t[i].img).split(","),o=0;o<21;o++)n[o]&&(e+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src="+n[o]+"></div>",a.push(n[o]));r=_.size(t[i][g])&&!_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][m]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[i][g]+"</span></div>":_.size(t[i][g])&&_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][m]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+e+"</div><span id='charity-fund-detail'>"+t[i][g]+"</span></div>":t[i][m],l[i]={type:"blog_post",date:t[i].date.substring(0,7),title:t[i].date.substring(0,7),content:r,images:a}}h(d),0<c(".fancybox").length&&c(".fancybox").fancybox()})),0<c(".fancybox").length&&c(".fancybox").fancybox();document.URL.substr(document.URL.indexOf("#")+1);e("wrapper",c(window).width(),c(window).height()),c("body").show(),c(window).resize(function(){clearTimeout(c.data(this,"resizeTimer2")),c.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",c(window).width(),c(window).height())},200)),768<=c(window).width()&&(c("#wrapper").hasClass("toggled")&&c("#wrapper").removeClass("toggled"),c(".hamburger").hasClass("is-open")&&(c(".hamburger").removeClass("is-open"),c(".hamburger").addClass("is-closed")))}),0<c("#block-contactus #offers-wrapper").length&&(c.data(this,"blcok-contactus",setTimeout(function(){c("#block-contactus #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-contactus #offers-wrapper .content-wrapper").show()},200)),c(window).resize(function(){clearTimeout(c.data(this,"blcok-contactus2")),c.data(this,"blcok-contactus2",setTimeout(function(){c("#block-contactus #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-contactus #offers-wrapper .content-wrapper").show()},800))})),c("#block-contactus #offers-wrapper .more-btn").click(function(){c("#block-contactus #offers-wrapper > div.hide").each(function(t){t<3&&c(this).removeClass("hide"),0==c("#block-contactus #offers-wrapper > div.hide").length&&c("#block-contactus #offers-wrapper .more-btn").remove()}),c("#block-contactus #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())})}),0<c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper").length&&(c.data(this,"blcok-contactus",setTimeout(function(){c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},200)),c(window).resize(function(){clearTimeout(c.data(this,"blcok-contactus2")),c.data(this,"blcok-contactus2",setTimeout(function(){c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},800))})),c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").click(function(){c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").each(function(t){t<3&&c(this).removeClass("hide"),0==c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").length&&c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").remove()}),c("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())})}),0<c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper").length&&(c.data(this,"block-lianxiwomenjizhaopindibuneirongfanti",setTimeout(function(){c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},200)),c(window).resize(function(){clearTimeout(c.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2")),c.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2",setTimeout(function(){c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},800))})),c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").click(function(){c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").each(function(t){t<3&&c(this).removeClass("hide"),0==c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").length&&c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").remove()}),c("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())})}),0<c(".path-latest-offers").length&&(c.data(this,"lastest-offers",setTimeout(function(){c(".path-latest-offers .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c(".path-latest-offers .content-wrapper").show()},200)),c(window).resize(function(){clearTimeout(c.data(this,"lastest-offers2")),c.data(this,"lastest-offers2",setTimeout(function(){c(".path-latest-offers .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())}),c(".path-latest-offers .content-wrapper").show()},800))})),c(".path-latest-offers .more-btn").click(function(){c(".path-latest-offers > div.hide").each(function(t){t<3&&c(this).removeClass("hide"),0==c(".path-latest-offers > div.hide").length&&c(".path-latest-offers .more-btn").remove()}),c(".path-latest-offers .img-wrapper").each(function(){c(this).siblings(".content-wrapper").height(c(this).height())})}),0<c(".page-node-type-healthtips .sub-tab-wrapper li").length&&(e("wrapper",c(window).width(),c(window).height()),y=0,clearTimeout(c.data(this,"health-tips-tab")),c.data(this,"health-tips-tab",setTimeout(function(){c(".page-node-type-healthtips .sub-tab-wrapper li").each(function(){y+=c(this).width()}),c(".page-node-type-healthtips .sub-tab-wrapper").width(y)},500)));var y,k=c(".hamburger"),x=(c(".overlay"),!1);k.click(function(){x=1==x?(k.removeClass("is-open"),k.addClass("is-closed"),!1):(k.removeClass("is-closed"),k.addClass("is-open"),!0)}),c('[data-toggle="offcanvas"]').click(function(){c("#wrapper").toggleClass("toggled")}),c(".sidebar-nav > li").click(function(){c(this).hasClass("parent")||(c(".sidebar-nav > li").each(function(){c(this).removeClass("active")}),c(this).addClass("active"))}),c(".sidebar-nav > li.parent").click(function(){c(this).hasClass("show-sub")?c(this).removeClass("show-sub"):c(this).addClass("show-sub"),c(this).find(".sub-sidebar-nav").slideToggle()}),c(".sidebar-nav > li.parent").each(function(){c(this).find("li").first().remove()}),c(".path-faq .content-wrapper .detail").click(function(){!function(t){c(t).attr("rel");var e=c(t).parent().parent().position(),i=c(".path-faq .detail-wrapper").width(),a=(c(t).parent().parent().width(),s.path.pathPrefix.replace("/",""),c(t).parent().parent().parent().find(".img-wrapper img").attr("src")),r=c(t).parent().find(".grey").html(),n=c(t).parent().find(".faq_content").html();c(".path-faq div.share-wrapper > a").attr("href","https://www.facebook.com/dialog/feed?app_id=105148586494382&display=popup&caption="+r+"&description="+n+"&picture="+a+"&link=http://www.fortunepharm.com/&redirect_uri=http://www.fortunepharm.com/"),c(".path-faq .detail-wrapper h4").html(r),c(".path-faq .detail-wrapper .description").html(n),c(".path-faq .detail-wrapper img").attr("src",a),e.left+i>c(".content-outer-wrapper").width()?c(".path-faq .detail-wrapper").css("top",e.top).css("left","auto").css("right",0).show():c(".path-faq .detail-wrapper").css("top",e.top).css("left",e.left).show();var o=c(".path-faq .detail-wrapper").position().top+c(".path-faq .detail-wrapper").height()+10-c(".path-faq .content-outer-wrapper").height();0<o?c(".path-faq .content-outer-wrapper").css("margin-bottom",10+o):c(".path-faq .content-outer-wrapper").css("margin-bottom",0),c("html, body").animate({scrollTop:c(".path-faq .detail-wrapper").offset().top-5},500)}(c(this))}),c(".path-faq .detail-wrapper .detail").click(function(){c(this).parent().parent().hide(),c(".path-faq .content-outer-wrapper").css("margin-bottom",0)}),0<c(".path-faq .sub-tab-wrapper li").length&&(y=0,clearTimeout(c.data(this,"faq-tab")),c.data(this,"faq-tab",setTimeout(function(){c(".path-faq .sub-tab-wrapper li").each(function(){y+=c(this).width()}),c(".path-faq .sub-tab-wrapper").width(y)},500)),c(".path-faq .sub-tab-wrapper li a").each(function(){c(this).attr("href")==window.location.pathname&&c(this).parent().addClass("active")}));var T,C,z,j={field_symptom_running_nose:1,field_symptom_sneezing:2,field_symptom_nasal_congestion:3,field_symptom_fever:4,field_headache:5,field_symptom_sore_throat:6,field_symptom_menstrual_pain:7,field_symptom_toothache:8,field_watery_eyes:9,field_symptom_dry_cough:10,field_symptom_productive_cough:11,field_symptom_heartbum:12,field_symptomstomach_pain:13,field_symptomflatulence:14,field_symptom_acid_reflux:15,field_symptom_diarrhea:16,field_symptom_motion_sickness:17},S=(T=s.path.pathPrefix).replace("/","");0<c(".path-product-finder #product-take-wrapper .content-left > div").length&&(c.data(this,"product-take",setTimeout(function(){c(".path-product-finder #product-take-wrapper .content-right").each(function(){c(this).height(3*c(this).width()/2)}),i("content-left","content-left",12)},200)),c(window).resize(function(){clearTimeout(c.data(this,"product-take2")),c.data(this,"product-take2",setTimeout(function(){c(".path-product-finder #product-take-wrapper .content-right").each(function(){c(this).height(3*c(this).width()/2)}),i("content-left","content-left",12)},800))}),C=[],c(".path-product-finder #product-take-wrapper .content-left .index-wrapper .clear-select").click(function(){c(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){c(this).removeClass("active inactive")})}),z={1:"field_symptom_running_nose",2:"field_symptom_sneezing",3:"field_symptom_nasal_congestion",4:"field_symptom_fever",5:"field_headache",6:"field_symptom_sore_throat",7:"field_symptom_menstrual_pain",8:"field_symptom_toothache",9:"field_watery_eyes",10:"field_symptom_dry_cough",11:"field_symptom_productive_cough",12:"field_symptom_heartbum",13:"field_symptomstomach_pain",14:"field_symptomflatulence",15:"field_symptom_acid_reflux",16:"field_symptom_diarrhea",17:"field_symptom_motion_sickness"},c(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").click(function(){var t,p,h,l;c(this).hasClass("inactive")?(t=c(this),c(this).hasClass("inactive")?c(t).removeClass("inactive"):c(t).removeClass("active")):(c(this).hasClass("active")?c(this).removeClass("active"):(t=c(this),c(t).addClass("active")),p=[],h=[],c(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.active").each(function(){p.unshift(c(this).attr("rel"))}),l=[],0<p.length?c.get(S+"/productfinderjson",function(t){for(var e in t){for(var i in p)"True"==t[e][z[p[i]]]&&h.push(t[e]);C=h}var a,r=0;if(1<p.length){for(var n=0;n<C.length;n++){for(var o=0;o<p.length;o++)"True"==C[n][z[p[o]]]&&r++;r>=p.length&&l.push(C[n]),r=0}a=l,C=Array.from(new Set(a))}var s=[];0==C.length?(c(window).width()<768&&c(".content-right").hide(),c(".level-wrapper").hide(),c(".matched-product-wrapper").html(""),c(".arrow").hide()):(c(".matched-product-wrapper").html(""),c(C).each(function(t,e){for(var i in j)"True"==C[t][i]&&s.push(j[i]);c(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){-1!=c.inArray(parseInt(c(this).attr("rel")),s)?c(this).removeClass("inactive"):c(this).addClass("inactive")});var a='<div class="matched-product"><a href="'+e.id+'"><img src='+e.field_product_image+"><h4>"+e.field_product_name+"</h4>";"Onset"==e.field_symptoms_level?"eng"==S?a+='<p class="level1 grey">Onset</p>':"cht"==S?a+='<p class="level1 grey">初發</p>':"chs"==S&&(a+='<p class="level1 grey">初发</p>'):"Slight"==e.field_symptoms_level?"eng"==S?a+='<p class="level2 grey">Slight</p>':"cht"==S?a+='<p class="level2 grey">輕微</p>':"chs"==S&&(a+='<p class="level2 grey">轻微</p>'):"Critical"==e.field_symptoms_level&&("eng"==S?a+='<p class="level3 grey">Crictical</p>':"cht"==S?a+='<p class="level3 grey">嚴重</p>':"chs"==S&&(a+='<p class="level3 grey">严重</p>')),a+="</a></div>",c(".level-wrapper").show(),c(".matched-product-wrapper").append(a)}),c(".matched-product-wrapper").height()>c(".matched-outer").height()&&c(".arrow-down").show(),c(window).width()<768&&c(".content-right").show())}):(C=[],c(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){c(this).removeClass("inactive"),c(this).removeClass("active")}),c(".matched-product-wrapper").html("")))}),c(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer").scroll(function(){0==c(this).scrollTop()?c(".path-product-finder #product-take-wrapper .content-right .arrow-up").hide():c(this).scrollTop()+c(this).innerHeight()>=c(this)[0].scrollHeight?c(".path-product-finder #product-take-wrapper .content-right .arrow-down").hide():c(".path-product-finder #product-take-wrapper .content-right .arrow").show()}),c(".path-product-finder #product-take-wrapper .content-right .arrow").on("click",function(){var t=c(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer"),e=c(this);c(t).is(":animated")||(scrolled=c(t).scrollTop(),c(e).hasClass("arrow-up")&&(scrolled-=200),c(e).hasClass("arrow-down")&&(scrolled+=200),c(t).animate({scrollTop:scrolled}))}))}};