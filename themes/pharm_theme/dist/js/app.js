"use strict";Drupal.behaviors.yourmodulename={attach:function(t,i){var r=jQuery.noConflict(),e=i.path.pathPrefix,a=e.replace("/",""),n=i.path.currentPath;n=n.replace("node/","");var h="title_"+a,l=[],s="/"+e+"timeline-json/"+n;function o(t,e,i){0<r("#"+t).length&&(r("#"+t).width(e),r("#"+t).height(i))}function d(t,e){0<r("."+t).length&&r("."+t).each(function(){r(this).height(e)})}function c(t,e,i){var a;a=768<=r(window).width()?r("."+t).width():r("."+e).width(),d("row-xs-4",Math.round(a/12*4)),d("row-xs-9",Math.round(a/12*9)),d("row-xs-12",Math.round(a)),768<=r(window).width()&&(d("row-sm-"+i+"-9",a),d("row-sm-"+i+"-8",Math.round(a/i*8)),d("row-sm-"+i+"-7",Math.round(a/i*7)),d("row-sm-"+i+"-6",Math.round(a/i*6)),d("row-sm-"+i+"-5",Math.round(a/i*5)),d("row-sm-"+i+"-4",Math.round(a/i*4)),d("row-sm-"+i+"-3",Math.round(a/i*3)),d("row-sm-"+i+"-2",Math.round(a/i*2)),d("row-sm-"+i+"-1",Math.round(a/i))),992<=r(window).width()&&(d("row-md-"+i+"-9",a),d("row-md-"+i+"-8",Math.round(a/i*8)),d("row-md-"+i+"-7",Math.round(a/i*7)),d("row-md-"+i+"-6",Math.round(a/i*6)),d("row-md-"+i+"-5",Math.round(a/i*5)),d("row-md-"+i+"-4",Math.round(a/i*4)),d("row-md-"+i+"-3",Math.round(a/i*3)),d("row-md-"+i+"-2",Math.round(a/i*2)),d("row-md-"+i+"-1",Math.round(a/i))),1200<=r(window).width()&&(d("row-lg-"+i+"-9",a),d("row-lg-"+i+"-8",Math.round(a/i*8)),d("row-lg-"+i+"-7",Math.round(a/i*7)),d("row-lg-"+i+"-6",Math.round(a/i*6)),d("row-lg-"+i+"-5",Math.round(a/i*5)),d("row-lg-"+i+"-4",Math.round(a/i*4)),d("row-lg-"+i+"-3",Math.round(a/i*3)),d("row-lg-"+i+"-2",Math.round(a/i*2)),d("row-lg-"+i+"-1",Math.round(a/i)))}r.getJSON(s,function(t){for(var e in t){var i,a=t[e].img,n=[];a=a.split(",");for(var s=0;s<21;s++)a[s]&&n.push(a[s]);i=t[e][h],l[e]={type:"blog_post",date:t[e].date.substring(0,4),title:t[e].date.substring(0,4),content:i,images:n}}timeline=new Timeline(r("#company-timeline"),l),timeline.setOptions({dateFormat:"YYYY",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"year",first_separator:!0,responsive_width:768}),timeline.display()}),r(".homepage-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),r(".homepage-mobile-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),0<r(".homepage .body .main-wrapper").length&&(c("desktop-main","mobile-main",9),r(window).resize(function(){clearTimeout(r.data(this,"resizeTimer")),r.data(this,"resizeTimer",setTimeout(function(){c("desktop-main","mobile-main",9)},800))})),0<r("#banner-wrapper-mobile").length&&r("#banner-wrapper-mobile").carousel({interval:!1}),o("wrapper",r(window).width(),r(window).height()),r("body").show(),r(window).resize(function(){clearTimeout(r.data(this,"resizeTimer2")),r.data(this,"resizeTimer2",setTimeout(function(){o("wrapper",r(window).width(),r(window).height())},200)),768<=r(window).width()&&(r("#wrapper").hasClass("toggled")&&r("#wrapper").removeClass("toggled"),r(".hamburger").hasClass("is-open")&&(r(".hamburger").removeClass("is-open"),r(".hamburger").addClass("is-closed")))}),r(".year-wrapper-div").parent("h3").addClass("year-wrapper"),0<r(".path-news .content-row").length&&(r(".fancybox_popup").fancybox().trigger("click"),r(".fancybox-overlay").css("display","block"),r(".fancybox-overlay").css("height",r(document).height()),r(".path-news .content-row").show(),r.data(this,"news",setTimeout(function(){r(".path-news .content-row .colume2").each(function(){r(this).siblings(".colume1").height(r(this).height())}),r(".path-news .views-row .content-row").show()},200)),r(window).resize(function(){clearTimeout(r.data(this,"news2")),r.data(this,"news2",setTimeout(function(){r(".path-news .content-row .colume2").each(function(){r(this).siblings(".colume1").height(r(this).height())}),r(".path-news .views-row .content-row").show()},800))})),r(".path-news .content-row .colume2 .title-wrapper a").click(function(){r(this).parent().parent().parent().hasClass("active")?r(this).parent().siblings(".content-wrapper").slideUp(400,function(){r(this).parent().siblings(".colume1").height(r(this).parent().height()),r(this).parent().parent().removeClass("active")}):r(this).parent().siblings(".content-wrapper").slideDown(400,function(){r(this).parent().siblings(".colume1").height(r(this).parent().height()),r(this).parent().parent().addClass("active")})});var p,u,w,f,m,g,v,b,y=i.path.currentQuery.page;function o(t){0<r("#"+t).length&&(r("#"+t).width("auto"),r("#"+t).height("auto"))}function d(t,e){0<r("."+t).length&&r("."+t).each(function(){r(this).height(e)})}r(".path-news .pagination-btn .pagination-change option[rel="+y+"]").attr("selected","selected"),r(".path-news .pagination-btn .pagination-change").change(function(){var t=r(this).val();i.path.pathPrefix;window.location.assign(t)}),0<r(".path-advertisements").length&&(p=r("#vid-content .vid-title").html(),u=r("#vid-content .vid-date").html(),w=r("#vid-content .vid-body").html(),f=r("#vid-content .vid-url").html(),r(".path-advertisements .video").html('<iframe width="400" height="300" src="'+f+'" frameborder="0" allowfullscreen></iframe>'),r(".advertisements-top .content1 h3").html(p),r(".advertisements-top .content1 p").html(u),r(".advertisements-top .content2").html(w),r(".path-advertisements .view-video").click(function(){var t=r(this).parent().find("#vid-content .vid-title").html(),e=r(this).parent().find("#vid-content .vid-date").html(),i=r(this).parent().find("#vid-content .vid-body").html(),a=r(this).parent().find("#vid-content .vid-url").html();r(".path-advertisements .video").html('<iframe width="400" height="300" src="'+a+'" frameborder="0" allowfullscreen></iframe>'),r(".advertisements-top .content1 h3").html(t),r(".advertisements-top .content1 p").html(e),r(".advertisements-top .content2").html(i),scrolled=r(".advertisements-top").scrollTop(),r("html, body").animate({scrollTop:r(".advertisements-top").offset().top-5})}),r(".path-advertisements .pagination-change").on("focus",function(){}).change(function(){var t=r(this).val(),e=i.path.pathPrefix;window.location.assign("/"+e+"advertisements/"+t)}),r(".path-advertisements .pagination-btn.withmovebutt").click(function(){var t=i.path.pathPrefix,e=r(this).attr("rel");window.location.assign("/"+t+"advertisements/"+e)})),0<r("#fund-timeline").length&&(m=function(t){var i=t||r("#year-drop-down").val(),a=[];_.forEach(l,function(t){var e=_.split(t.date,"-")[0];_.toString(e)===_.toString(i)&&a.push(t)});var e=i;_.toString(e)===_.toString(g)?r("#first-year").addClass("active"):r("#first-year").removeClass("active"),_.toString(e)===_.toString(v)?r("#second-year").addClass("active"):r("#second-year").removeClass("active"),r("#year-drop-down").val(i),r("#fund-timeline").empty(),timeline=new Timeline(r("#fund-timeline"),a),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<r(".fancybox").length&&r(".fancybox").fancybox()},l=[],v=g="",r("#first-year").click(function(){m("2016")}),r("#second-year").click(function(){m("2015")}),r("#year-drop-down").change(function(){m(r(this).val())}),g=2016,v=2015,a=(e=i.path.pathPrefix).replace("/",""),n=(n=i.path.currentPath).replace("node/",""),h="title_"+a,b="zoom_in_detail_"+a,s="/"+e+"timeline-json/"+n,r.getJSON(s,function(t){var e="";for(var i in t){for(var a=[],n="",s=(s=t[i].img).split(","),o=0;o<21;o++)s[o]&&(e+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src=https://www.fortunepharm.com/app/storage/uploads/thumbs/"+t[i]["img"+o]+"/></div>",a.push(s[o]));n=_.size(t[i][b])&&!_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][h]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[i][b]+"</span></div>":_.size(t[i][b])&&_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][h]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+e+"</div><span id='charity-fund-detail'>"+t[i][b]+"</span></div>":t[i][h],l[i]={type:"blog_post",date:t[i].date.substring(0,7),title:t[i].date.substring(0,7),content:n,images:a}}m(g),0<r(".fancybox").length&&r(".fancybox").fancybox()})),0<r(".fancybox").length&&r(".fancybox").fancybox(),r(document).click(function(t){"fancybox-item fancybox-close"==r(t.target).attr("class")&&r(".fancybox-overlay").css("display","none")}),r(document).ready(function(){document.URL.substr(document.URL.indexOf("#")+1);o("wrapper",r(window).width(),r(window).height()),r("body").show(),r(window).resize(function(){clearTimeout(r.data(this,"resizeTimer2")),r.data(this,"resizeTimer2",setTimeout(function(){o("wrapper",r(window).width(),r(window).height())},200)),768<=r(window).width()&&(r("#wrapper").hasClass("toggled")&&r("#wrapper").removeClass("toggled"),r(".hamburger").hasClass("is-open")&&(r(".hamburger").removeClass("is-open"),r(".hamburger").addClass("is-closed")))});var t,e=r(".hamburger"),i=(r(".overlay"),!1);function a(){768<=r(window).width()?(r("#health-tips .function-wrapper .function-btn").each(function(){r("#health-tips").hasClass("cold_and_flu")?r(this).height(r(this).width()/280*195):r("#health-tips").hasClass("children")?r(this).height(r(this).width()/100*50):(r("#health-tips").hasClass("pain")||r("#health-tips").hasClass("allergy")||r("#health-tips").hasClass("gerd"))&&r(this).height(r(this).width()/280*196)}),r(".function-middle-wrapper").height(r(".function-left-wrapper:visible").height())):r("#health-tips .function-wrapper .function-btn").each(function(){(r("#health-tips").hasClass("cold_and_flu")||r("#health-tips").hasClass("pain")||r("#health-tips").hasClass("allergy")||r("#health-tips").hasClass("gerd"))&&r(this).height(Math.floor(r(this).width()/385*293)),r("#health-tips").hasClass("children")&&r(this).height(Math.floor(r(this).width()/516*293))})}e.click(function(){i=1==i?(e.removeClass("is-open"),e.addClass("is-closed"),!1):(e.removeClass("is-closed"),e.addClass("is-open"),!0)}),r('[data-toggle="offcanvas"]').click(function(){r("#wrapper").toggleClass("toggled")}),r(".sidebar-nav > li").click(function(){r(this).hasClass("parent")||(r(".sidebar-nav > li").each(function(){r(this).removeClass("active")}),r(this).addClass("active"))}),r(".sidebar-nav > li.parent").click(function(){r(this).hasClass("show-sub")?r(this).removeClass("show-sub"):r(this).addClass("show-sub"),r(this).find(".sub-sidebar-nav").slideToggle()}),0<r("#health-tips .sub-tab-wrapper li").length&&(t=0,clearTimeout(r.data(this,"health-tips-tab")),r.data(this,"health-tips-tab",setTimeout(function(){r("#health-tips .sub-tab-wrapper li").each(function(){t+=r(this).width()}),r("#health-tips .sub-tab-wrapper").width(t)},500))),0<r("#health-tips .function-wrapper .function-btn").length&&(r.data(this,"function",setTimeout(function(){a()},200)),r(window).resize(function(){clearTimeout(r.data(this,"health-btn")),r.data(this,"health-btn",setTimeout(function(){a()},800))}),r("#health-tips .function-wrapper .function-btn").click(function(){var t;void 0!==r(this).attr("rel")&&(t=r(this).attr("rel"),r("#health-tips .function-wrapper .function-btn").each(function(){r(this).removeClass("active")}),r('#health-tips .function-wrapper .function-btn[rel="'+t+'"]').addClass("active"),r("#health-tips .function-wrapper .function-middle-wrapper img").each(function(){r(this).removeClass("active")}),r('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+t+'"]').addClass("active"),0<r("#health-tips .function-wrapper .function-middle-wrapper p").length&&(r("#health-tips .function-wrapper .function-middle-wrapper p").each(function(){r(this).removeClass("active")}),r('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+t+'"]').addClass("active")),0<r("#health-tips .function-detail-wrapper .detail-right-wrapper").length&&(r("#health-tips .function-detail-wrapper .detail-right-wrapper").each(function(){r(this).removeClass("active")}),r('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+t+'"]').addClass("active")))}),r("#health-tips .function-tab-wrapper .function-tab-btn").click(function(){var t,e,i;void 0!==r(this).attr("rel")&&(t=r(this).attr("rel"),r("#health-tips .function-tab-wrapper .function-tab-btn").each(function(){r(this).removeClass("active")}),r('#health-tips .function-tab-wrapper .function-tab-btn[rel="'+t+'"]').addClass("active"),e=768<=r(window).width()?"left":"right",r("#health-tips .function-"+e+"-wrapper").each(function(){r(this).removeClass("active")}),r("#health-tips .function-"+e+'-wrapper[rel="'+t+'"]').addClass("active"),a(),r(".function-"+e+"-wrapper:visible .function-btn").each(function(){r(this).removeClass("active")}),r(".function-"+e+"-wrapper:visible .function-btn:first-child").addClass("active"),i=r(".function-"+e+"-wrapper:visible .function-btn:first-child").attr("rel"),r("#health-tips .function-wrapper .function-middle-wrapper img").each(function(){r(this).removeClass("active")}),r('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+i+'"]').addClass("active"),r("#health-tips .function-wrapper .function-middle-wrapper p").each(function(){r(this).removeClass("active")}),r('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+i+'"]').addClass("active"),r("#health-tips .function-detail-wrapper .detail-right-wrapper").each(function(){r(this).removeClass("active")}),r('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+i+'"]').addClass("active"))}))})}};