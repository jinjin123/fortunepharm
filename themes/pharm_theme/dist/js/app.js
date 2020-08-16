"use strict";Drupal.behaviors.PharmaTheme={attach:function(t,s){var p=jQuery.noConflict();function e(t,e,i){0<p("#"+t).length&&(p("#"+t).width(e),p("#"+t).height(i))}function r(t,e){0<p("."+t).length&&p("."+t).each(function(){p(this).height(e)})}function i(t,e,i){var a;a=768<=p(window).width()?p("."+t).width():p("."+e).width(),r("row-xs-4",Math.round(a/12*4)),r("row-xs-9",Math.round(a/12*9)),r("row-xs-12",Math.round(a)),768<=p(window).width()&&(r("row-sm-"+i+"-9",a),r("row-sm-"+i+"-8",Math.round(a/i*8)),r("row-sm-"+i+"-7",Math.round(a/i*7)),r("row-sm-"+i+"-6",Math.round(a/i*6)),r("row-sm-"+i+"-5",Math.round(a/i*5)),r("row-sm-"+i+"-4",Math.round(a/i*4)),r("row-sm-"+i+"-3",Math.round(a/i*3)),r("row-sm-"+i+"-2",Math.round(a/i*2)),r("row-sm-"+i+"-1",Math.round(a/i))),992<=p(window).width()&&(r("row-md-"+i+"-9",a),r("row-md-"+i+"-8",Math.round(a/i*8)),r("row-md-"+i+"-7",Math.round(a/i*7)),r("row-md-"+i+"-6",Math.round(a/i*6)),r("row-md-"+i+"-5",Math.round(a/i*5)),r("row-md-"+i+"-4",Math.round(a/i*4)),r("row-md-"+i+"-3",Math.round(a/i*3)),r("row-md-"+i+"-2",Math.round(a/i*2)),r("row-md-"+i+"-1",Math.round(a/i))),1200<=p(window).width()&&(r("row-lg-"+i+"-9",a),r("row-lg-"+i+"-8",Math.round(a/i*8)),r("row-lg-"+i+"-7",Math.round(a/i*7)),r("row-lg-"+i+"-6",Math.round(a/i*6)),r("row-lg-"+i+"-5",Math.round(a/i*5)),r("row-lg-"+i+"-4",Math.round(a/i*4)),r("row-lg-"+i+"-3",Math.round(a/i*3)),r("row-lg-"+i+"-2",Math.round(a/i*2)),r("row-lg-"+i+"-1",Math.round(a/i)))}p("#sidebar-wrapper .sidebar-nav .nolink ul li a, #header .nolink ul li a").attr("target","_blank"),0<p("#company-timeline",t).length&&(u=(C=s.path.pathPrefix).replace("/",""),f=(f=s.path.currentPath).replace("node/",""),m="title_"+u,g="zoom_in_detail_"+u,l=[],b="/"+C+C+"timeline-json/"+f,p.getJSON(b,function(t){for(var e in t){for(var i,a=t[e].img,r=[],n=t[e][g],a=a.split(","),o=0;o<21;o++)a[o]&&r.push(a[o]);i=t[e][m]+n,l[e]={type:"blog_post",date:t[e].date.substring(0,4),title:t[e].date.substring(0,4),content:i,images:r}}timeline=new Timeline(p("#company-timeline"),l),timeline.setOptions({dateFormat:"YYYY",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"year",first_separator:!0,responsive_width:768}),timeline.display()})),p(".homepage-slider .field-content ul",t).slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),p(".homepage-mobile-slider .field-content ul",t).slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),0<p(".scroll-wrapper",t).length&&(clearTimeout(p.data(this,"scroll-wrapper")),p.data(this,"scroll-wrapper",setTimeout(function(){p(".scroll-wrapper").each(function(){var e;10<p(this).children().width()-p(this).width()&&(nice=p(this).niceScroll(),e=nice.getContentSize,nice.getContentSize=function(){p(".sub-tab-session .arrow-right").fadeIn();var t=e.call(nice);return t.h=nice.win.height(),t})})},800)),p(window).resize(function(){clearTimeout(p.data(this,"scroll-wrapper2")),p.data(this,"scroll-wrapper2",setTimeout(function(){p(".scroll-wrapper").each(function(){var e;p(this).getNiceScroll().remove(),10<p(this).children().width()-p(this).width()&&(nice=p(this).niceScroll(),e=nice.getContentSize,nice.getContentSize=function(){p(".sub-tab-session .arrow-right").fadeIn();var t=e.call(nice);return t.h=nice.win.height(),t})})},800))})),0<p(".sub-tab-session").length&&(clearTimeout(p.data(this,"sub-tab-session")),p.data(this,"sub-tab-session",setTimeout(function(){p(".sub-tab-outer-wrapper").width()+p(".sub-tab-outer-wrapper").scrollLeft()+20>=p(".sub-tab-outer-wrapper").children().width()?p(".sub-tab-session .arrow-right").fadeOut():p(".sub-tab-session .arrow-right").fadeIn()},500)),p(".sub-tab-outer-wrapper").scroll(function(){p(this).width()+p(this).scrollLeft()+20>=p(this).children().width()?p(".sub-tab-session .arrow-right").fadeOut():p(".sub-tab-session .arrow-right").fadeIn(),p(this).width()+p(this).scrollLeft()-20>=p(this).width()?p(".sub-tab-session .arrow-left").fadeIn():p(".sub-tab-session .arrow-left").fadeOut()}),p(".sub-tab-session .arrow",t).on("click",function(){var t=p(".sub-tab-session .sub-tab-outer-wrapper"),e=p(this);p(t).is(":animated")||(scrolled=p(t).scrollLeft(),p(e).hasClass("arrow-left")&&(scrolled-=100),p(e).hasClass("arrow-right")&&(scrolled+=100),p(t).animate({scrollLeft:scrolled}))})),0<p(".path-product").length&&p(window).resize(function(){p(window).width()<=1410&&p(".sub-tab-session .arrow-right").fadeIn()}),0<p(".homepage .body .main-wrapper").length&&(i("desktop-main","mobile-main",9),p(window).resize(function(){clearTimeout(p.data(this,"resizeTimer")),p.data(this,"resizeTimer",setTimeout(function(){i("desktop-main","mobile-main",9)},800))})),0<p("#banner-wrapper-mobile").length&&p("#banner-wrapper-mobile").carousel({interval:!1}),e("wrapper",p(window).width(),p(window).height()),p("body").show(),p(window).resize(function(){clearTimeout(p.data(this,"resizeTimer2")),p.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",p(window).width(),p(window).height())},200)),768<=p(window).width()&&(p("#wrapper").hasClass("toggled")&&p("#wrapper").removeClass("toggled"),p(".hamburger").hasClass("is-open")&&(p(".hamburger").removeClass("is-open"),p(".hamburger").addClass("is-closed")))}),p(".year-wrapper-div",t).parent("h3").addClass("year-wrapper"),0<p(".path-news .content-row",t).length&&(p(".path-news .content-row")[0].className="content-row active",p.data(this,"news",setTimeout(function(){p(".path-news .content-row .colume2").each(function(){p(this).siblings(".colume1").height(p(this).height())}),p(".path-news .content-row").show()},200)),p(window).resize(function(){clearTimeout(p.data(this,"news2")),p.data(this,"news2",setTimeout(function(){p(".path-news .content-row .colume2").each(function(){p(this).siblings(".colume1").height(p(this).height())}),p(".path-news  .content-row").show()},800))})),p(".path-news .content-row .colume2 .title-wrapper a",t).click(function(){p(this).parent().parent().parent().hasClass("active")?p(this).parent().siblings(".content-wrapper").slideUp(400,function(){p(this).parent().siblings(".colume1").height(p(this).parent().height()),p(this).parent().parent().removeClass("active")}):p(this).parent().siblings(".content-wrapper").slideDown(400,function(){p(this).parent().siblings(".colume1").height(p(this).parent().height()),p(this).parent().parent().addClass("active")})});var a,n,o,h,c,l,d,w,u,f,m,g,b,v=s.path.currentQuery.page;p(".path-news .pagination-btn .pagination-change option[rel="+v+"]").attr("selected","selected"),p(".path-news .pagination-btn .pagination-change",t).change(function(){var t=p(this).val();window.location.assign(t)}),0<p(".path-advertisements",t).length&&(s.path.currentQuery.y?"2020"==s.path.currentQuery.y?(p("#block-pagerforadverisement").hide(),p("#block-pagerforadverisement-2").hide(),p("#block-pagerforadverisement").show()):(p("#block-pagerforadverisement").hide(),p("#block-pagerforadverisement-2").hide()):(p("#block-pagerforadverisement").show(),p("#block-pagerforadverisement-2").hide()),p(".path-advertisements .rightmove",t).click(function(){var t=p("#next_page").attr("rel");s.path.pathPrefix;window.location.assign("?y="+t)}),p(".path-advertisements .leftmove",t).click(function(){var t=p("#prev_page").attr("rel");s.path.pathPrefix;window.location.assign("?y="+t)}),a=p("#vid-content .vid-title").html(),n=p("#vid-content .vid-date").html(),o=p("#vid-content .vid-body").html(),h=p("#vid-content .vid-url").html(),p(".path-advertisements .video").html('<iframe width="400" height="300" src="'+h+'" frameborder="0" allowfullscreen></iframe>'),p(".advertisements-top .content1 h3").html(a),p(".advertisements-top .content1 p").html(n),p(".advertisements-top .content2").html(o),p(".view-video",t).click(function(){var t=p(this).parent().parent().find("#vid-content .vid-title").html(),e=p(this).parent().parent().find("#vid-content .vid-date").html(),i=p(this).parent().parent().find("#vid-content .vid-body").html(),a=p(this).parent().parent().find("#vid-content .vid-url").html();p(".path-advertisements .video").html('<iframe width="400" height="300" src="'+a+'" frameborder="0" allowfullscreen></iframe>'),p(".advertisements-top .content1 h3").html(t),p(".advertisements-top .content1 p").html(e),p(".advertisements-top .content2").html(i),scrolled=p(".advertisements-top").scrollTop(),p("html, body").animate({scrollTop:p(".advertisements-top").offset().top-5})}),p(".path-advertisements .pagination-change",t).on("focus",function(){}).change(function(){var t=p(this).val(),e=s.path.pathPrefix;window.location.assign("/"+e+"advertisements/?y="+t)}),p(".path-advertisements .pagination-btn.withmovebutt",t).click(function(){var t=s.path.pathPrefix,e=p(this).attr("rel");window.location.assign("/"+t+"advertisements/?y="+e)})),0<p("#fund-timeline",t).length&&(c=function(t){var i=t||p("#year-drop-down").val(),a=[];_.forEach(l,function(t){var e=_.split(t.date,"-")[0];_.toString(e)===_.toString(i)&&a.push(t)});var e=i;_.toString(e)===_.toString(d)?p("#first-year").addClass("active"):p("#first-year").removeClass("active"),_.toString(e)===_.toString(w)?p("#second-year").addClass("active"):p("#second-year").removeClass("active"),p("#year-drop-down").val(i),p("#fund-timeline").empty(),timeline=new Timeline(p("#fund-timeline"),a),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<p(".fancybox").length&&p(".fancybox").fancybox()},l=[],w=d="",p("#first-year",t).click(function(){c("2016")}),p("#second-year",t).click(function(){c("2015")}),p("#year-drop-down",t).change(function(){c(p(this).val())}),d=2016,w=2015,u=(C=s.path.pathPrefix).replace("/",""),f=(f=s.path.currentPath).replace("node/",""),m="title_"+u,g="zoom_in_detail_"+u,b="/"+C+C+"timeline-json/"+f,p.getJSON(b,function(t){var e="";for(var i in t){for(var a=[],r="",n=(n=t[i].img).split(","),o=0;o<21;o++)n[o]&&(e+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src="+n[o]+"></div>",a.push(n[o]));r=_.size(t[i][g])&&!_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][m]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[i][g]+"</span></div>":_.size(t[i][g])&&_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][m]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+e+"</div><span id='charity-fund-detail'>"+t[i][g]+"</span></div>":t[i][m],l[i]={type:"blog_post",date:t[i].date.substring(0,7),title:t[i].date.substring(0,7),content:r,images:a}}c(d),0<p(".fancybox").length&&p(".fancybox").fancybox()})),0<p(".fancybox").length&&p(".fancybox").fancybox();document.URL.substr(document.URL.indexOf("#")+1);e("wrapper",p(window).width(),p(window).height()),p("body").show(),p(window).resize(function(){clearTimeout(p.data(this,"resizeTimer2")),p.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",p(window).width(),p(window).height())},200)),768<=p(window).width()&&(p("#wrapper").hasClass("toggled")&&p("#wrapper").removeClass("toggled"),p(".hamburger").hasClass("is-open")&&(p(".hamburger").removeClass("is-open"),p(".hamburger").addClass("is-closed")))}),0<p("#block-contactus #offers-wrapper",t).length&&(p.data(this,"blcok-contactus",setTimeout(function(){p("#block-contactus #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-contactus #offers-wrapper .content-wrapper").show()},200)),p(window).resize(function(){clearTimeout(p.data(this,"blcok-contactus2")),p.data(this,"blcok-contactus2",setTimeout(function(){p("#block-contactus #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-contactus #offers-wrapper .content-wrapper").show()},800))})),p("#block-contactus #offers-wrapper .more-btn",t).click(function(){p("#block-contactus #offers-wrapper > div.hide").each(function(t){t<3&&p(this).removeClass("hide"),0==p("#block-contactus #offers-wrapper > div.hide").length&&p("#block-contactus #offers-wrapper .more-btn").remove()}),p("#block-contactus #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())})}),0<p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper",t).length&&(p.data(this,"blcok-contactus",setTimeout(function(){p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},200)),p(window).resize(function(){clearTimeout(p.data(this,"blcok-contactus2")),p.data(this,"blcok-contactus2",setTimeout(function(){p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},800))})),p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn",t).click(function(){p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").each(function(t){t<3&&p(this).removeClass("hide"),0==p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").length&&p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").remove()}),p("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())})}),0<p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper",t).length&&(p.data(this,"block-lianxiwomenjizhaopindibuneirongfanti",setTimeout(function(){p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},200)),p(window).resize(function(){clearTimeout(p.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2")),p.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2",setTimeout(function(){p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},800))})),p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn",t).click(function(){p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").each(function(t){t<3&&p(this).removeClass("hide"),0==p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").length&&p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").remove()}),p("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())})}),0<p(".path-latest-offers",t).length&&(p.data(this,"lastest-offers",setTimeout(function(){p(".path-latest-offers .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p(".path-latest-offers .content-wrapper").show()},200)),p(window).resize(function(){clearTimeout(p.data(this,"lastest-offers2")),p.data(this,"lastest-offers2",setTimeout(function(){p(".path-latest-offers .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())}),p(".path-latest-offers .content-wrapper").show()},800))})),p(".path-latest-offers .more-btn",t).click(function(){p(".path-latest-offers > div.hide").each(function(t){t<3&&p(this).removeClass("hide"),0==p(".path-latest-offers > div.hide").length&&p(".path-latest-offers .more-btn").remove()}),p(".path-latest-offers .img-wrapper").each(function(){p(this).siblings(".content-wrapper").height(p(this).height())})}),0<p(".page-node-type-healthtips .sub-tab-wrapper li",t).length&&(e("wrapper",p(window).width(),p(window).height()),q=0,clearTimeout(p.data(this,"health-tips-tab")),p.data(this,"health-tips-tab",setTimeout(function(){p(".page-node-type-healthtips .sub-tab-wrapper li").each(function(){q+=p(this).width()}),p(".page-node-type-healthtips .sub-tab-wrapper").width(q)},500)));var y=p(".hamburger"),k=(p(".overlay"),!1);function x(t){for(var e=[],i=0,a=t.length;i<a;i++)e.includes(t[i])||e.push(t[i]);return e}function T(t){for(var e=[],i=0;i<t.length;i++)e.push(t[i].trim());return e}y.click(function(){k=1==k?(y.removeClass("is-open"),y.addClass("is-closed"),!1):(y.removeClass("is-closed"),y.addClass("is-open"),!0)}),p('[data-toggle="offcanvas"]',t).click(function(){p("#wrapper").toggleClass("toggled")}),p(".sidebar-nav > li",t).click(function(){p(this).hasClass("parent")||(p(".sidebar-nav > li").each(function(){p(this).removeClass("active")}),p(this).addClass("active"))}),p(".sidebar-nav > li.parent",t).click(function(){p(this).hasClass("show-sub")?p(this).removeClass("show-sub"):p(this).addClass("show-sub"),p(this).find(".sub-sidebar-nav").slideToggle()}),p(".sidebar-nav > li.parent",t).each(function(){p(this).find("li").first().remove()}),p(".path-faq .content-wrapper .detail").click(function(){!function(t){p(t).attr("rel");var e=p(t).parent().parent().position(),i=p(".path-faq .detail-wrapper").width(),a=(p(t).parent().parent().width(),s.path.pathPrefix.replace("/",""),p(t).parent().parent().parent().find(".img-wrapper img").attr("src")),r=p(t).parent().find(".grey").html(),n=p(t).parent().find(".faq_content").html();p(".path-faq div.share-wrapper a.fb-share").attr("href","https://www.facebook.com/dialog/feed?app_id=105148586494382&display=popup&caption="+p.trim(r)+"&description="+n+"&picture=http://www.fortunepharm.com"+a+"&link=http://www.fortunepharm.com/&redirect_uri=http://www.fortunepharm.com/"),p(".path-faq .detail-wrapper h4").html(r),p(".path-faq .detail-wrapper .description").html(n),p(".path-faq .detail-wrapper img").attr("src",a),e.left+i>p(".content-outer-wrapper").width()?p(".path-faq .detail-wrapper").css("top",e.top).css("left","auto").css("right",0).show():p(".path-faq .detail-wrapper").css("top",e.top).css("left",e.left).show();var o=p(".path-faq .detail-wrapper").position().top+p(".path-faq .detail-wrapper").height()+10-p(".path-faq .content-outer-wrapper").height();0<o?p(".path-faq .content-outer-wrapper").css("margin-bottom",10+o):p(".path-faq .content-outer-wrapper").css("margin-bottom",0),p("html, body").animate({scrollTop:p(".path-faq .detail-wrapper").offset().top-5},500)}(p(this))}),p(".path-faq .detail-wrapper .detail").click(function(){p(this).parent().parent().hide(),p(".path-faq .content-outer-wrapper").css("margin-bottom",0)}),0<p(".path-faq .sub-tab-wrapper li",t).length&&(q=0,clearTimeout(p.data(this,"faq-tab")),p.data(this,"faq-tab",setTimeout(function(){p(".path-faq .sub-tab-wrapper li").each(function(){q+=p(this).width()}),p(".path-faq .sub-tab-wrapper").width(q)},500)),p(".path-faq .sub-tab-wrapper li a",t).each(function(){p(this).attr("href")==window.location.pathname&&p(this).parent().addClass("active")}));var C,z,j,S,M,q,O,P=(C=s.path.pathPrefix).replace("/","");function Y(){var t;p(window).width()<768?(r("product-big-image",t=p(".product-big-image").width()),r("product-small-image",t)):(p(".product-big-image").attr("style",""),p(".product-small-image").attr("style",""))}0<p(".path-product-finder #product-take-wrapper .content-left > div").length&&(p.data(this,"product-take",setTimeout(function(){p(".path-product-finder #product-take-wrapper .content-right").each(function(){p(this).height(3*p(this).width()/2)}),i("content-left","content-left",12)},200)),p(window).resize(function(){clearTimeout(p.data(this,"product-take2")),p.data(this,"product-take2",setTimeout(function(){p(".path-product-finder #product-take-wrapper .content-right").each(function(){p(this).height(3*p(this).width()/2)}),i("content-left","content-left",12)},800))}),z=[],j={1:"流鼻水",2:"喷嚏",3:"鼻塞",4:"发烧",5:"头痛",6:"喉咙痛",7:"经痛",8:"牙痛",9:"泪眼",10:"喉咙痒",11:"痰咳",12:"胃灼热",13:"胃痛",14:"胃气胀",15:"胃酸倒流",16:"肚泻",17:"舟车晕浪"},S={1:"流鼻水",2:"噴嚏",3:"鼻塞",4:"發燒",5:"頭痛",6:"喉嚨痛",7:"經痛",8:"牙痛",9:"淚眼",10:"乾咳",11:"痰咳",12:"胃灼熱",13:"胃痛",14:"胃氣脹",15:"胃酸倒流",16:"肚瀉",17:"舟車暈浪"},M={1:"Runny nose",2:"Sneezing",3:"Nasal congestion",4:"Fever",5:"Headache",6:"Sore throat",7:"Menstrual pain",8:"Toothache",9:"Watery eyes",10:"Dry cough",11:"Productive cough",12:"Heartburn",13:"Stomach pain",14:"Flatulence",15:"Acid reflux",16:"Diarrhea",17:"Motion sickness"},p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").click(function(){var t,s,h;p(this).hasClass("inactive")?(t=p(this),p(this).hasClass("inactive")?p(t).removeClass("inactive"):p(t).removeClass("active")):(p(this).hasClass("active")?(p(this).removeClass("active"),p(this).removeClass("inactive")):(t=p(this),p(t).addClass("active")),s=[],p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.active").each(function(){s.unshift(p(this).attr("rel"))}),h=[],0<s.length?p.get(P+"/test",function(t){for(var e=0;e<t.length;e++)if(""!==t[e].field_indications_symptoms)if(tt=T(t[e].field_indications_symptoms.split(",")),"eng"==P)for(var i=0;i<s.length;i++)-1!==tt.indexOf(M[s[i]])&&h.push(t[e]);else if("cht"==P)for(i=0;i<s.length;i++)-1!==tt.indexOf(S[s[i]])&&h.push(t[e]);else if("chs"==P)for(i=0;i<s.length;i++)-1!==tt.indexOf(j[s[i]])&&h.push(t[e]);z=x(h);var a=[];if(0==z.length)p(window).width()<768&&p(".content-right").hide(),p(".level-wrapper").hide(),p(".matched-product-wrapper").html(""),p(".arrow").hide();else{p(".matched-product-wrapper").html("");for(var r=0;r<z.length;r++)for(var n=T(z[r].field_indications_symptoms.split(",")),o=0;o<n.length;o++)a.push(n[o]);a=x(a),"eng"==P?p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){-1!=p.inArray(M[p(this).attr("rel")],a)?p(this).removeClass("inactive"):(p(this).addClass("inactive"),p(this).removeClass("active"))}):"cht"==P?p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){-1!=p.inArray(S[p(this).attr("rel")],a)?p(this).removeClass("inactive"):(p(this).addClass("inactive"),p(this).removeClass("active"))}):"chs"==P&&p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){-1!=p.inArray(j[p(this).attr("rel")],a)?p(this).removeClass("inactive"):(p(this).addClass("inactive"),p(this).removeClass("active"))}),p(z).each(function(t,e){var i='<div class="matched-product"><a href="'+e.field_product_url.split('"')[1]+'"><img src='+e.field_product_image+"><h4>"+e.field_product_name+"</h4>";"Onset"==e.field_symptom_level?"eng"==P?i+='<p class="level1 grey">Onset</p>':"cht"==P?i+='<p class="level1 grey">初發</p>':"chs"==P&&(i+='<p class="level1 grey">初发</p>'):"Slight"==e.field_symptom_level?"eng"==P?i+='<p class="level2 grey">Slight</p>':"cht"==P?i+='<p class="level2 grey">輕微</p>':"chs"==P&&(i+='<p class="level2 grey">轻微</p>'):"Critical"==e.field_symptom_level&&("eng"==P?i+='<p class="level3 grey">Crictical</p>':"cht"==P?i+='<p class="level3 grey">嚴重</p>':"chs"==P&&(i+='<p class="level3 grey">严重</p>')),i+="</a></div>",p(".level-wrapper").show(),p(".matched-product-wrapper").append(i)}),p(".matched-product-wrapper").height()>p(".matched-outer").height()&&p(".arrow-down").show(),p(window).width()<768&&p(".content-right").show()}}):(z=[],p(".path-product-finder #product-take-wrapper .content-left .index-wrapper a.wrapper").each(function(){p(this).removeClass("inactive"),p(this).removeClass("active")}),p(".matched-product-wrapper").html("")))}),p(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer").scroll(function(){0==p(this).scrollTop()?p(".path-product-finder #product-take-wrapper .content-right .arrow-up").hide():p(this).scrollTop()+p(this).innerHeight()>=p(this)[0].scrollHeight?p(".path-product-finder #product-take-wrapper .content-right .arrow-down").hide():p(".path-product-finder #product-take-wrapper .content-right .arrow").show()}),p(".path-product-finder #product-take-wrapper .content-right .arrow").on("click",function(){var t=p(".path-product-finder #product-take-wrapper .content-right .index-wrapper .matched-outer"),e=p(this);p(t).is(":animated")||(scrolled=p(t).scrollTop(),p(e).hasClass("arrow-up")&&(scrolled-=200),p(e).hasClass("arrow-down")&&(scrolled+=200),p(t).animate({scrollTop:scrolled}))})),0<p(".path-product .product-big-image",t).length&&(p.data(this,"product-image",setTimeout(function(){Y()},200)),p(window).resize(function(){clearTimeout(p.data(this,"product-image2")),p.data(this,"product-image2",setTimeout(function(){Y()},800))})),p(".path-product #product-wrapper .product-small-image a",t).click(function(){var t=p(this).attr("rel"),e=p(this).attr("fancyboxdata");p(".path-product #product-wrapper .product-big-image img").attr("src",t),p(".node--type-product #product-wrapper .product-big-image .zoom-btn").attr("href",e)}),0<p(".path-product .tab-icon-outer-wrapper .tab-icon-wrapper li",t).length&&(O=q=0,clearTimeout(p.data(this,"product-tab")),p.data(this,"product-tab",setTimeout(function(){p(".path-product .sub-tab-wrapper li",t).each(function(){console.log(p(this).width()),q+=p(this).width()}),p(".path-product .tab-icon-wrapper li",t).each(function(){O+=p(this).width()}),p(".path-product .sub-tab-wrapper").width(q),p(".path-product .tab-icon-wrapper").width(O)},500))),p(".path-product .product-content-tab-wrapper ul li",t).click(function(){p(this).siblings().each(function(){p(this).hasClass("active")&&(p(".product-content-wrapper.product-content"+p(this).attr("rel")).hide(),p(this).removeClass("active"))}),p(this).addClass("active"),p(".product-content-wrapper.product-content"+p(this).attr("rel")).show()}),0<p("#privacy_terms #terms-wrapper .terms-left").length&&(p("#block-pharm-theme-content").css("max-width","1200px"),p("#banner-wrapper").css("margin-bottom","1px"))}};