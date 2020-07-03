"use strict";Drupal.behaviors.yourmodulename={attach:function(t,e){var r=jQuery.noConflict();function i(t,i,e){0<r("#"+t).length&&(r("#"+t).width(i),r("#"+t).height(e))}function a(t,i){0<r("."+t).length&&r("."+t).each(function(){r(this).height(i)})}function n(t,i,e){var n;n=768<=r(window).width()?r("."+t).width():r("."+i).width(),a("row-xs-4",Math.round(n/12*4)),a("row-xs-9",Math.round(n/12*9)),a("row-xs-12",Math.round(n)),768<=r(window).width()&&(a("row-sm-"+e+"-9",n),a("row-sm-"+e+"-8",Math.round(n/e*8)),a("row-sm-"+e+"-7",Math.round(n/e*7)),a("row-sm-"+e+"-6",Math.round(n/e*6)),a("row-sm-"+e+"-5",Math.round(n/e*5)),a("row-sm-"+e+"-4",Math.round(n/e*4)),a("row-sm-"+e+"-3",Math.round(n/e*3)),a("row-sm-"+e+"-2",Math.round(n/e*2)),a("row-sm-"+e+"-1",Math.round(n/e))),992<=r(window).width()&&(a("row-md-"+e+"-9",n),a("row-md-"+e+"-8",Math.round(n/e*8)),a("row-md-"+e+"-7",Math.round(n/e*7)),a("row-md-"+e+"-6",Math.round(n/e*6)),a("row-md-"+e+"-5",Math.round(n/e*5)),a("row-md-"+e+"-4",Math.round(n/e*4)),a("row-md-"+e+"-3",Math.round(n/e*3)),a("row-md-"+e+"-2",Math.round(n/e*2)),a("row-md-"+e+"-1",Math.round(n/e))),1200<=r(window).width()&&(a("row-lg-"+e+"-9",n),a("row-lg-"+e+"-8",Math.round(n/e*8)),a("row-lg-"+e+"-7",Math.round(n/e*7)),a("row-lg-"+e+"-6",Math.round(n/e*6)),a("row-lg-"+e+"-5",Math.round(n/e*5)),a("row-lg-"+e+"-4",Math.round(n/e*4)),a("row-lg-"+e+"-3",Math.round(n/e*3)),a("row-lg-"+e+"-2",Math.round(n/e*2)),a("row-lg-"+e+"-1",Math.round(n/e)))}0<r("#company-timeline").length&&(g=(m=e.path.pathPrefix).replace("/",""),b=(b=e.path.currentPath).replace("node/",""),v="title_"+g,w=[],x="/"+m+m+"timeline-json/"+b,r.getJSON(x,function(t){for(var i in t){for(var e,n=[],a=(a=t[i].img).split(","),o=0;o<21;o++)a[o]&&n.push(a[o]);e=t[i][v],w[i]={type:"blog_post",date:t[i].date.substring(0,4),title:t[i].date.substring(0,4),content:e,images:n}}timeline=new Timeline(r("#company-timeline"),w),timeline.setOptions({dateFormat:"YYYY",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"year",first_separator:!0,responsive_width:768}),timeline.display()})),r(".homepage-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),r(".homepage-mobile-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),0<r(".homepage .body .main-wrapper").length&&(n("desktop-main","mobile-main",9),r(window).resize(function(){clearTimeout(r.data(this,"resizeTimer")),r.data(this,"resizeTimer",setTimeout(function(){n("desktop-main","mobile-main",9)},800))})),0<r("#banner-wrapper-mobile").length&&r("#banner-wrapper-mobile").carousel({interval:!1}),i("wrapper",r(window).width(),r(window).height()),r("body").show(),r(window).resize(function(){clearTimeout(r.data(this,"resizeTimer2")),r.data(this,"resizeTimer2",setTimeout(function(){i("wrapper",r(window).width(),r(window).height())},200)),768<=r(window).width()&&(r("#wrapper").hasClass("toggled")&&r("#wrapper").removeClass("toggled"),r(".hamburger").hasClass("is-open")&&(r(".hamburger").removeClass("is-open"),r(".hamburger").addClass("is-closed")))}),r(".year-wrapper-div").parent("h3").addClass("year-wrapper"),0<r(".path-news .content-row").length&&(r(".path-news .content-row")[0].className="content-row active",r.data(this,"news",setTimeout(function(){r(".path-news .content-row .colume2").each(function(){r(this).siblings(".colume1").height(r(this).height())}),r(".path-news .content-row").show()},200)),r(window).resize(function(){clearTimeout(r.data(this,"news2")),r.data(this,"news2",setTimeout(function(){r(".path-news .content-row .colume2").each(function(){r(this).siblings(".colume1").height(r(this).height())}),r(".path-news  .content-row").show()},800))})),r(".path-news .content-row .colume2 .title-wrapper a").click(function(){r(this).parent().parent().parent().hasClass("active")?r(this).parent().siblings(".content-wrapper").slideUp(400,function(){r(this).parent().siblings(".colume1").height(r(this).parent().height()),r(this).parent().parent().removeClass("active")}):r(this).parent().siblings(".content-wrapper").slideDown(400,function(){r(this).parent().siblings(".colume1").height(r(this).parent().height()),r(this).parent().parent().addClass("active")})});var h,o=e.path.currentQuery.page;r(".path-news .pagination-btn .pagination-change option[rel="+o+"]").attr("selected","selected"),r(".path-news .pagination-btn .pagination-change").change(function(){var t=r(this).val();window.location.assign(t)}),0<r(".path-advertisements").length&&(r(".path-advertisements .rightmove").click(function(){var t=r("#next_page").attr("rel");e.path.pathPrefix;window.location.assign(t)}),r(".path-advertisements .leftmove").click(function(){var t=r("#prev_page").attr("rel");e.path.pathPrefix;window.location.assign(t)}),r(".path-advertisements .view-video").click(function(){var t=r(this).parent().find("#vid-content .vid-title").html(),i=r(this).parent().find("#vid-content .vid-date").html(),e=r(this).parent().find("#vid-content .vid-body").html(),n=r(this).parent().find("#vid-content .vid-url").html();r(".path-advertisements .video").html('<iframe width="400" height="300" src="'+n+'" frameborder="0" allowfullscreen></iframe>'),r(".advertisements-top .content1 h3").html(t),r(".advertisements-top .content1 p").html(i),r(".advertisements-top .content2").html(e),scrolled=r(".advertisements-top").scrollTop(),r("html, body").animate({scrollTop:r(".advertisements-top").offset().top-5})}),r(".path-advertisements .pagination-change").on("focus",function(){}).change(function(){var t=r(this).val(),i=e.path.pathPrefix;window.location.assign("/"+i+"advertisements/"+t)}),r(".path-advertisements .pagination-btn.withmovebutt").click(function(){var t=e.path.pathPrefix,i=r(this).attr("rel");window.location.assign("/"+t+"advertisements/"+i)})),0<r("#fund-timeline").length&&(h=function(t){var e=t||r("#year-drop-down").val(),n=[];_.forEach(w,function(t){var i=_.split(t.date,"-")[0];_.toString(i)===_.toString(e)&&n.push(t)});var i=e;_.toString(i)===_.toString(u)?r("#first-year").addClass("active"):r("#first-year").removeClass("active"),_.toString(i)===_.toString(f)?r("#second-year").addClass("active"):r("#second-year").removeClass("active"),r("#year-drop-down").val(e),r("#fund-timeline").empty(),timeline=new Timeline(r("#fund-timeline"),n),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<r(".fancybox").length&&r(".fancybox").fancybox()},w=[],f=u="",r("#first-year").click(function(){h("2016")}),r("#second-year").click(function(){h("2015")}),r("#year-drop-down").change(function(){h(r(this).val())}),u=2016,f=2015,g=(m=e.path.pathPrefix).replace("/",""),b=(b=e.path.currentPath).replace("node/",""),v="title_"+g,y="zoom_in_detail_"+g,x="/"+m+"timeline-json/"+b,r.getJSON(x,function(t){var i="";for(var e in t){for(var n=[],a="",o=(o=t[e].img).split(","),s=0;s<21;s++)o[s]&&(i+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src=https://www.fortunepharm.com/app/storage/uploads/thumbs/"+t[e]["img"+s]+"/></div>",n.push(o[s]));a=_.size(t[e][y])&&!_.size(n)?"<a href='#charity-light-box"+e+"' class='fancybox'><span id='charity-fund-title'>"+t[e][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+e+"' style='display: none'><span class='charity_popup_date'>"+t[e].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[e][y]+"</span></div>":_.size(t[e][y])&&_.size(n)?"<a href='#charity-light-box"+e+"' class='fancybox'><span id='charity-fund-title'>"+t[e][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+e+"' style='display: none'><span class='charity_popup_date'>"+t[e].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+i+"</div><span id='charity-fund-detail'>"+t[e][y]+"</span></div>":t[e][v],w[e]={type:"blog_post",date:t[e].date.substring(0,7),title:t[e].date.substring(0,7),content:a,images:n}}h(u),0<r(".fancybox").length&&r(".fancybox").fancybox()})),0<r(".fancybox").length&&r(".fancybox").fancybox(),r(document).ready(function(){r(".fancybox_popup").fancybox().trigger("click"),r(".fancybox_popup").fancybox({openEffect:"elastic",closeEffect:"elastic",helpers:{title:{type:"inside"}}})}),r(document).ready(function(){document.URL.substr(document.URL.indexOf("#")+1);i("wrapper",r(window).width(),r(window).height()),r("body").show(),r(window).resize(function(){clearTimeout(r.data(this,"resizeTimer2")),r.data(this,"resizeTimer2",setTimeout(function(){i("wrapper",r(window).width(),r(window).height())},200)),768<=r(window).width()&&(r("#wrapper").hasClass("toggled")&&r("#wrapper").removeClass("toggled"),r(".hamburger").hasClass("is-open")&&(r(".hamburger").removeClass("is-open"),r(".hamburger").addClass("is-closed")))})}),r(".year-wrapper-div").parent("h3").addClass("year-wrapper"),0<r(".path-news .content-row").length&&(r(".fancybox_popup").fancybox().trigger("click"),r(".fancybox-overlay").css("display","block"),r(".fancybox-overlay").css("height",r(document).height()),r(".path-news .content-row").show(),r.data(this,"news",setTimeout(function(){r(".path-news .content-row .colume2").each(function(){r(this).siblings(".colume1").height(r(this).height())}),r(".path-news .views-row .content-row").show()},200)),r(window).resize(function(){clearTimeout(r.data(this,"news2")),r.data(this,"news2",setTimeout(function(){r(".path-news .content-row .colume2").each(function(){r(this).siblings(".colume1").height(r(this).height())}),r(".path-news .views-row .content-row").show()},800))})),r(".path-news .content-row .colume2 .title-wrapper a").click(function(){r(this).parent().parent().parent().hasClass("active")?r(this).parent().siblings(".content-wrapper").slideUp(400,function(){r(this).parent().siblings(".colume1").height(r(this).parent().height()),r(this).parent().parent().removeClass("active")}):r(this).parent().siblings(".content-wrapper").slideDown(400,function(){r(this).parent().siblings(".colume1").height(r(this).parent().height()),r(this).parent().parent().addClass("active")})});var s,l,p,c,d,w,u,f,m,g,b,v,y,x,o=e.path.currentQuery.page;function i(t){0<r("#"+t).length&&(r("#"+t).width("auto"),r("#"+t).height("auto"))}r(".path-news .pagination-btn .pagination-change option[rel="+o+"]").attr("selected","selected"),r(".path-news .pagination-btn .pagination-change").change(function(){var t=r(this).val();e.path.pathPrefix;window.location.assign(t)}),0<r(".path-advertisements").length&&(s=r("#vid-content .vid-title").html(),l=r("#vid-content .vid-date").html(),p=r("#vid-content .vid-body").html(),c=r("#vid-content .vid-url").html(),r(".path-advertisements .video").html('<iframe width="400" height="300" src="'+c+'" frameborder="0" allowfullscreen></iframe>'),r(".advertisements-top .content1 h3").html(s),r(".advertisements-top .content1 p").html(l),r(".advertisements-top .content2").html(p),r(".path-advertisements .view-video").click(function(){var t=r(this).parent().find("#vid-content .vid-title").html(),i=r(this).parent().find("#vid-content .vid-date").html(),e=r(this).parent().find("#vid-content .vid-body").html(),n=r(this).parent().find("#vid-content .vid-url").html();r(".path-advertisements .video").html('<iframe width="400" height="300" src="'+n+'" frameborder="0" allowfullscreen></iframe>'),r(".advertisements-top .content1 h3").html(t),r(".advertisements-top .content1 p").html(i),r(".advertisements-top .content2").html(e),scrolled=r(".advertisements-top").scrollTop(),r("html, body").animate({scrollTop:r(".advertisements-top").offset().top-5})}),r(".path-advertisements .pagination-change").on("focus",function(){}).change(function(){var t=r(this).val(),i=e.path.pathPrefix;window.location.assign("/"+i+"advertisements/"+t)}),r(".path-advertisements .pagination-btn.withmovebutt").click(function(){var t=e.path.pathPrefix,i=r(this).attr("rel");window.location.assign("/"+t+"advertisements/"+i)})),0<r("#fund-timeline").length&&(d=function(t){var e=t||r("#year-drop-down").val(),n=[];_.forEach(w,function(t){var i=_.split(t.date,"-")[0];_.toString(i)===_.toString(e)&&n.push(t)});var i=e;_.toString(i)===_.toString(u)?r("#first-year").addClass("active"):r("#first-year").removeClass("active"),_.toString(i)===_.toString(f)?r("#second-year").addClass("active"):r("#second-year").removeClass("active"),r("#year-drop-down").val(e),r("#fund-timeline").empty(),timeline=new Timeline(r("#fund-timeline"),n),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<r(".fancybox").length&&r(".fancybox").fancybox()},w=[],f=u="",r("#first-year").click(function(){d("2016")}),r("#second-year").click(function(){d("2015")}),r("#year-drop-down").change(function(){d(r(this).val())}),u=2016,f=2015,g=(m=e.path.pathPrefix).replace("/",""),b=(b=e.path.currentPath).replace("node/",""),v="title_"+g,y="zoom_in_detail_"+g,x="/"+m+"timeline-json/"+b,r.getJSON(x,function(t){var i="";for(var e in t){for(var n=[],a="",o=(o=t[e].img).split(","),s=0;s<21;s++)o[s]&&(i+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src=https://www.fortunepharm.com/app/storage/uploads/thumbs/"+t[e]["img"+s]+"/></div>",n.push(o[s]));a=_.size(t[e][y])&&!_.size(n)?"<a href='#charity-light-box"+e+"' class='fancybox'><span id='charity-fund-title'>"+t[e][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+e+"' style='display: none'><span class='charity_popup_date'>"+t[e].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[e][y]+"</span></div>":_.size(t[e][y])&&_.size(n)?"<a href='#charity-light-box"+e+"' class='fancybox'><span id='charity-fund-title'>"+t[e][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+e+"' style='display: none'><span class='charity_popup_date'>"+t[e].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+i+"</div><span id='charity-fund-detail'>"+t[e][y]+"</span></div>":t[e][v],w[e]={type:"blog_post",date:t[e].date.substring(0,7),title:t[e].date.substring(0,7),content:a,images:n}}d(u),0<r(".fancybox").length&&r(".fancybox").fancybox()})),0<r(".fancybox").length&&r(".fancybox").fancybox(),0<r("#block-contactus #offers-wrapper").length&&(r.data(this,"blcok-contactus",setTimeout(function(){r("#block-contactus #offers-wrapper .img-wrapper").each(function(){r(this).siblings(".content-wrapper").height(r(this).height())}),r("#block-contactus #offers-wrapper .content-wrapper").show()},200)),r(window).resize(function(){clearTimeout(r.data(this,"blcok-contactus2")),r.data(this,"blcok-contactus2",setTimeout(function(){r("#block-contactus #offers-wrapper .img-wrapper").each(function(){r(this).siblings(".content-wrapper").height(r(this).height())}),r("#block-contactus #offers-wrapper .content-wrapper").show()},800))})),r("#block-contactus #offers-wrapper .more-btn").click(function(){r("#block-contactus #offers-wrapper > div.hide").each(function(t){t<3&&r(this).removeClass("hide"),0==r("#block-contactus #offers-wrapper > div.hide").length&&r("#block-contactus #offers-wrapper .more-btn").remove()}),r("#block-contactus #offers-wrapper .img-wrapper").each(function(){r(this).siblings(".content-wrapper").height(r(this).height())})}),0<r("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper").length&&(r.data(this,"blcok-contactus",setTimeout(function(){r("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){r(this).siblings(".content-wrapper").height(r(this).height())}),r("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},200)),r(window).resize(function(){clearTimeout(r.data(this,"blcok-contactus2")),r.data(this,"blcok-contactus2",setTimeout(function(){r("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){r(this).siblings(".content-wrapper").height(r(this).height())}),r("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},800))})),r("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").click(function(){r("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").each(function(t){t<3&&r(this).removeClass("hide"),0==r("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").length&&r("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").remove()}),r("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){r(this).siblings(".content-wrapper").height(r(this).height())})}),0<r("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper").length&&(r.data(this,"block-lianxiwomenjizhaopindibuneirongfanti",setTimeout(function(){r("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){r(this).siblings(".content-wrapper").height(r(this).height())}),r("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},200)),r(window).resize(function(){clearTimeout(r.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2")),r.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2",setTimeout(function(){r("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){r(this).siblings(".content-wrapper").height(r(this).height())}),r("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},800))})),r("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").click(function(){r("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").each(function(t){t<3&&r(this).removeClass("hide"),0==r("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").length&&r("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").remove()}),r("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){r(this).siblings(".content-wrapper").height(r(this).height())})}),r(document).ready(function(){var t;function n(){i("wrapper",r(window).width(),r(window).height()),768<=r(window).width()?(r("#health-tips .function-wrapper .function-btn").each(function(){r("#health-tips").hasClass("cold_and_flu")?r(this).height(r(this).width()/280*195):r("#health-tips").hasClass("children")?r(this).height(r(this).width()/100*50):(r("#health-tips").hasClass("pain")||r("#health-tips").hasClass("allergy")||r("#health-tips").hasClass("gerd"))&&r(this).height(r(this).width()/280*196)}),r(".function-middle-wrapper").height(r(".function-left-wrapper:visible").height())):r("#health-tips .function-wrapper .function-btn").each(function(){(r("#health-tips").hasClass("cold_and_flu")||r("#health-tips").hasClass("pain")||r("#health-tips").hasClass("allergy")||r("#health-tips").hasClass("gerd"))&&r(this).height(Math.floor(r(this).width()/385*293)),r("#health-tips").hasClass("children")&&r(this).height(Math.floor(r(this).width()/516*293))})}r("body").show(),0<r("#health-tips .sub-tab-wrapper li").length&&(i("wrapper",r(window).width(),r(window).height()),t=0,clearTimeout(r.data(this,"health-tips-tab")),r.data(this,"health-tips-tab",setTimeout(function(){r("#health-tips .sub-tab-wrapper li").each(function(){t+=r(this).width()}),r("#health-tips .sub-tab-wrapper").width(t)},500))),0<r("#health-tips .function-wrapper .function-btn").length&&(r.data(this,"function",setTimeout(function(){n()},200)),r(window).resize(function(){clearTimeout(r.data(this,"health-btn")),r.data(this,"health-btn",setTimeout(function(){n()},800))}),r("#health-tips .function-wrapper .function-btn").click(function(){var t;void 0!==r(this).attr("rel")&&(t=r(this).attr("rel"),r("#health-tips .function-wrapper .function-btn").each(function(){r(this).removeClass("active")}),r('#health-tips .function-wrapper .function-btn[rel="'+t+'"]').addClass("active"),r("#health-tips .function-wrapper .function-middle-wrapper img").each(function(){r(this).removeClass("active")}),r('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+t+'"]').addClass("active"),0<r("#health-tips .function-wrapper .function-middle-wrapper p").length&&(r("#health-tips .function-wrapper .function-middle-wrapper p").each(function(){r(this).removeClass("active")}),r('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+t+'"]').addClass("active")),0<r("#health-tips .function-detail-wrapper .detail-right-wrapper").length&&(r("#health-tips .function-detail-wrapper .detail-right-wrapper").each(function(){r(this).removeClass("active")}),r('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+t+'"]').addClass("active")))}),r("#health-tips .function-tab-wrapper .function-tab-btn").click(function(){var t,i,e;void 0!==r(this).attr("rel")&&(t=r(this).attr("rel"),r("#health-tips .function-tab-wrapper .function-tab-btn").each(function(){r(this).removeClass("active")}),r('#health-tips .function-tab-wrapper .function-tab-btn[rel="'+t+'"]').addClass("active"),i=768<=r(window).width()?"left":"right",r("#health-tips .function-"+i+"-wrapper").each(function(){r(this).removeClass("active")}),r("#health-tips .function-"+i+'-wrapper[rel="'+t+'"]').addClass("active"),n(),r(".function-"+i+"-wrapper:visible .function-btn").each(function(){r(this).removeClass("active")}),r(".function-"+i+"-wrapper:visible .function-btn:first-child").addClass("active"),e=r(".function-"+i+"-wrapper:visible .function-btn:first-child").attr("rel"),r("#health-tips .function-wrapper .function-middle-wrapper img").each(function(){r(this).removeClass("active")}),r('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+e+'"]').addClass("active"),r("#health-tips .function-wrapper .function-middle-wrapper p").each(function(){r(this).removeClass("active")}),r('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+e+'"]').addClass("active"),r("#health-tips .function-detail-wrapper .detail-right-wrapper").each(function(){r(this).removeClass("active")}),r('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+e+'"]').addClass("active"))}))});var k=r(".hamburger"),C=(r(".overlay"),!1);k.click(function(){C=1==C?(k.removeClass("is-open"),k.addClass("is-closed"),!1):(k.removeClass("is-closed"),k.addClass("is-open"),!0)}),r('[data-toggle="offcanvas"]').click(function(){r("#wrapper").toggleClass("toggled")}),r(".sidebar-nav > li").click(function(){r(this).hasClass("parent")||(r(".sidebar-nav > li").each(function(){r(this).removeClass("active")}),r(this).addClass("active"))}),r(".sidebar-nav > li.parent").click(function(){r(this).hasClass("show-sub")?r(this).removeClass("show-sub"):r(this).addClass("show-sub"),r(this).find(".sub-sidebar-nav").slideToggle()})}};