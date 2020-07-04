"use strict";Drupal.behaviors.yourmodulename={attach:function(t,s){var h=jQuery.noConflict();function e(t,e,i){0<h("#"+t).length&&(h("#"+t).width(e),h("#"+t).height(i))}function n(t,e){0<h("."+t).length&&h("."+t).each(function(){h(this).height(e)})}function i(t,e,i){var a;a=768<=h(window).width()?h("."+t).width():h("."+e).width(),n("row-xs-4",Math.round(a/12*4)),n("row-xs-9",Math.round(a/12*9)),n("row-xs-12",Math.round(a)),768<=h(window).width()&&(n("row-sm-"+i+"-9",a),n("row-sm-"+i+"-8",Math.round(a/i*8)),n("row-sm-"+i+"-7",Math.round(a/i*7)),n("row-sm-"+i+"-6",Math.round(a/i*6)),n("row-sm-"+i+"-5",Math.round(a/i*5)),n("row-sm-"+i+"-4",Math.round(a/i*4)),n("row-sm-"+i+"-3",Math.round(a/i*3)),n("row-sm-"+i+"-2",Math.round(a/i*2)),n("row-sm-"+i+"-1",Math.round(a/i))),992<=h(window).width()&&(n("row-md-"+i+"-9",a),n("row-md-"+i+"-8",Math.round(a/i*8)),n("row-md-"+i+"-7",Math.round(a/i*7)),n("row-md-"+i+"-6",Math.round(a/i*6)),n("row-md-"+i+"-5",Math.round(a/i*5)),n("row-md-"+i+"-4",Math.round(a/i*4)),n("row-md-"+i+"-3",Math.round(a/i*3)),n("row-md-"+i+"-2",Math.round(a/i*2)),n("row-md-"+i+"-1",Math.round(a/i))),1200<=h(window).width()&&(n("row-lg-"+i+"-9",a),n("row-lg-"+i+"-8",Math.round(a/i*8)),n("row-lg-"+i+"-7",Math.round(a/i*7)),n("row-lg-"+i+"-6",Math.round(a/i*6)),n("row-lg-"+i+"-5",Math.round(a/i*5)),n("row-lg-"+i+"-4",Math.round(a/i*4)),n("row-lg-"+i+"-3",Math.round(a/i*3)),n("row-lg-"+i+"-2",Math.round(a/i*2)),n("row-lg-"+i+"-1",Math.round(a/i)))}0<h("#company-timeline").length&&(g=(m=s.path.pathPrefix).replace("/",""),b=(b=s.path.currentPath).replace("node/",""),v="title_"+g,y="zoom_in_detail_"+g,w=[],x="/"+m+m+"timeline-json/"+b,h.getJSON(x,function(t){for(var e in t){for(var i,a=t[e].img,n=[],o=t[e][y],a=a.split(","),r=0;r<21;r++)a[r]&&n.push(a[r]);i=t[e][v]+o,w[e]={type:"blog_post",date:t[e].date.substring(0,4),title:t[e].date.substring(0,4),content:i,images:n}}timeline=new Timeline(h("#company-timeline"),w),timeline.setOptions({dateFormat:"YYYY",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"year",first_separator:!0,responsive_width:768}),timeline.display()})),h(".homepage-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),h(".homepage-mobile-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),0<h(".homepage .body .main-wrapper").length&&(i("desktop-main","mobile-main",9),h(window).resize(function(){clearTimeout(h.data(this,"resizeTimer")),h.data(this,"resizeTimer",setTimeout(function(){i("desktop-main","mobile-main",9)},800))})),0<h("#banner-wrapper-mobile").length&&h("#banner-wrapper-mobile").carousel({interval:!1}),e("wrapper",h(window).width(),h(window).height()),h("body").show(),h(window).resize(function(){clearTimeout(h.data(this,"resizeTimer2")),h.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",h(window).width(),h(window).height())},200)),768<=h(window).width()&&(h("#wrapper").hasClass("toggled")&&h("#wrapper").removeClass("toggled"),h(".hamburger").hasClass("is-open")&&(h(".hamburger").removeClass("is-open"),h(".hamburger").addClass("is-closed")))}),h(".year-wrapper-div").parent("h3").addClass("year-wrapper"),0<h(".path-news .content-row").length&&(h(".path-news .content-row")[0].className="content-row active",h.data(this,"news",setTimeout(function(){h(".path-news .content-row .colume2").each(function(){h(this).siblings(".colume1").height(h(this).height())}),h(".path-news .content-row").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"news2")),h.data(this,"news2",setTimeout(function(){h(".path-news .content-row .colume2").each(function(){h(this).siblings(".colume1").height(h(this).height())}),h(".path-news  .content-row").show()},800))})),h(".path-news .content-row .colume2 .title-wrapper a").click(function(){h(this).parent().parent().parent().hasClass("active")?h(this).parent().siblings(".content-wrapper").slideUp(400,function(){h(this).parent().siblings(".colume1").height(h(this).parent().height()),h(this).parent().parent().removeClass("active")}):h(this).parent().siblings(".content-wrapper").slideDown(400,function(){h(this).parent().siblings(".colume1").height(h(this).parent().height()),h(this).parent().parent().addClass("active")})});var p,a=s.path.currentQuery.page;h(".path-news .pagination-btn .pagination-change option[rel="+a+"]").attr("selected","selected"),h(".path-news .pagination-btn .pagination-change").change(function(){var t=h(this).val();window.location.assign(t)}),0<h(".path-advertisements").length&&(h(".path-advertisements .rightmove").click(function(){var t=h("#next_page").attr("rel");s.path.pathPrefix;window.location.assign(t)}),h(".path-advertisements .leftmove").click(function(){var t=h("#prev_page").attr("rel");s.path.pathPrefix;window.location.assign(t)}),h(".path-advertisements .view-video").click(function(){var t=h(this).parent().find("#vid-content .vid-title").html(),e=h(this).parent().find("#vid-content .vid-date").html(),i=h(this).parent().find("#vid-content .vid-body").html(),a=h(this).parent().find("#vid-content .vid-url").html();h(".path-advertisements .video").html('<iframe width="400" height="300" src="'+a+'" frameborder="0" allowfullscreen></iframe>'),h(".advertisements-top .content1 h3").html(t),h(".advertisements-top .content1 p").html(e),h(".advertisements-top .content2").html(i),scrolled=h(".advertisements-top").scrollTop(),h("html, body").animate({scrollTop:h(".advertisements-top").offset().top-5})}),h(".path-advertisements .pagination-change").on("focus",function(){}).change(function(){var t=h(this).val(),e=s.path.pathPrefix;window.location.assign("/"+e+"advertisements/"+t)}),h(".path-advertisements .pagination-btn.withmovebutt").click(function(){var t=s.path.pathPrefix,e=h(this).attr("rel");window.location.assign("/"+t+"advertisements/"+e)})),0<h("#fund-timeline").length&&(p=function(t){var i=t||h("#year-drop-down").val(),a=[];_.forEach(w,function(t){var e=_.split(t.date,"-")[0];_.toString(e)===_.toString(i)&&a.push(t)});var e=i;_.toString(e)===_.toString(f)?h("#first-year").addClass("active"):h("#first-year").removeClass("active"),_.toString(e)===_.toString(u)?h("#second-year").addClass("active"):h("#second-year").removeClass("active"),h("#year-drop-down").val(i),h("#fund-timeline").empty(),timeline=new Timeline(h("#fund-timeline"),a),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<h(".fancybox").length&&h(".fancybox").fancybox()},w=[],u=f="",h("#first-year").click(function(){p("2016")}),h("#second-year").click(function(){p("2015")}),h("#year-drop-down").change(function(){p(h(this).val())}),f=2016,u=2015,g=(m=s.path.pathPrefix).replace("/",""),b=(b=s.path.currentPath).replace("node/",""),v="title_"+g,y="zoom_in_detail_"+g,x="/"+m+m+"timeline-json/"+b,h.getJSON(x,function(t){var e="";for(var i in t){for(var a=[],n="",o=(o=t[i].img).split(","),r=0;r<21;r++)o[r]&&(e+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src=https://www.fortunepharm.com/app/storage/uploads/thumbs/"+t[i]["img"+r]+"/></div>",a.push(o[r]));n=_.size(t[i][y])&&!_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[i][y]+"</span></div>":_.size(t[i][y])&&_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+e+"</div><span id='charity-fund-detail'>"+t[i][y]+"</span></div>":t[i][v],w[i]={type:"blog_post",date:t[i].date.substring(0,7),title:t[i].date.substring(0,7),content:n,images:a}}p(f),0<h(".fancybox").length&&h(".fancybox").fancybox()})),0<h(".fancybox").length&&h(".fancybox").fancybox(),h(document).ready(function(){h(".fancybox_popup").fancybox().trigger("click"),h(".fancybox_popup").fancybox({openEffect:"elastic",closeEffect:"elastic",helpers:{title:{type:"inside"}}})}),h(document).ready(function(){document.URL.substr(document.URL.indexOf("#")+1);e("wrapper",h(window).width(),h(window).height()),h("body").show(),h(window).resize(function(){clearTimeout(h.data(this,"resizeTimer2")),h.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",h(window).width(),h(window).height())},200)),768<=h(window).width()&&(h("#wrapper").hasClass("toggled")&&h("#wrapper").removeClass("toggled"),h(".hamburger").hasClass("is-open")&&(h(".hamburger").removeClass("is-open"),h(".hamburger").addClass("is-closed")))})}),h(".year-wrapper-div").parent("h3").addClass("year-wrapper"),0<h(".path-news .content-row").length&&(h(".fancybox_popup").fancybox().trigger("click"),h(".fancybox-overlay").css("display","block"),h(".fancybox-overlay").css("height",h(document).height()),h(".path-news .content-row").show(),h.data(this,"news",setTimeout(function(){h(".path-news .content-row .colume2").each(function(){h(this).siblings(".colume1").height(h(this).height())}),h(".path-news .views-row .content-row").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"news2")),h.data(this,"news2",setTimeout(function(){h(".path-news .content-row .colume2").each(function(){h(this).siblings(".colume1").height(h(this).height())}),h(".path-news .views-row .content-row").show()},800))})),h(".path-news .content-row .colume2 .title-wrapper a").click(function(){h(this).parent().parent().parent().hasClass("active")?h(this).parent().siblings(".content-wrapper").slideUp(400,function(){h(this).parent().siblings(".colume1").height(h(this).parent().height()),h(this).parent().parent().removeClass("active")}):h(this).parent().siblings(".content-wrapper").slideDown(400,function(){h(this).parent().siblings(".colume1").height(h(this).parent().height()),h(this).parent().parent().addClass("active")})});var o,r,l,c,d,w,f,u,m,g,b,v,y,x,a=s.path.currentQuery.page;h(".path-news .pagination-btn .pagination-change option[rel="+a+"]").attr("selected","selected"),h(".path-news .pagination-btn .pagination-change").change(function(){var t=h(this).val();s.path.pathPrefix;window.location.assign(t)}),0<h(".path-advertisements").length&&(o=h("#vid-content .vid-title").html(),r=h("#vid-content .vid-date").html(),l=h("#vid-content .vid-body").html(),c=h("#vid-content .vid-url").html(),h(".path-advertisements .video").html('<iframe width="400" height="300" src="'+c+'" frameborder="0" allowfullscreen></iframe>'),h(".advertisements-top .content1 h3").html(o),h(".advertisements-top .content1 p").html(r),h(".advertisements-top .content2").html(l),h(".path-advertisements .view-video").click(function(){var t=h(this).parent().find("#vid-content .vid-title").html(),e=h(this).parent().find("#vid-content .vid-date").html(),i=h(this).parent().find("#vid-content .vid-body").html(),a=h(this).parent().find("#vid-content .vid-url").html();h(".path-advertisements .video").html('<iframe width="400" height="300" src="'+a+'" frameborder="0" allowfullscreen></iframe>'),h(".advertisements-top .content1 h3").html(t),h(".advertisements-top .content1 p").html(e),h(".advertisements-top .content2").html(i),scrolled=h(".advertisements-top").scrollTop(),h("html, body").animate({scrollTop:h(".advertisements-top").offset().top-5})}),h(".path-advertisements .pagination-change").on("focus",function(){}).change(function(){var t=h(this).val(),e=s.path.pathPrefix;window.location.assign("/"+e+"advertisements/"+t)}),h(".path-advertisements .pagination-btn.withmovebutt").click(function(){var t=s.path.pathPrefix,e=h(this).attr("rel");window.location.assign("/"+t+"advertisements/"+e)})),0<h("#fund-timeline").length&&(d=function(t){var i=t||h("#year-drop-down").val(),a=[];_.forEach(w,function(t){var e=_.split(t.date,"-")[0];_.toString(e)===_.toString(i)&&a.push(t)});var e=i;_.toString(e)===_.toString(f)?h("#first-year").addClass("active"):h("#first-year").removeClass("active"),_.toString(e)===_.toString(u)?h("#second-year").addClass("active"):h("#second-year").removeClass("active"),h("#year-drop-down").val(i),h("#fund-timeline").empty(),timeline=new Timeline(h("#fund-timeline"),a),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<h(".fancybox").length&&h(".fancybox").fancybox()},w=[],u=f="",h("#first-year").click(function(){d("2016")}),h("#second-year").click(function(){d("2015")}),h("#year-drop-down").change(function(){d(h(this).val())}),f=2016,u=2015,g=(m=s.path.pathPrefix).replace("/",""),b=(b=s.path.currentPath).replace("node/",""),v="title_"+g,y="zoom_in_detail_"+g,x="/"+m+m+"timeline-json/"+b,h.getJSON(x,function(t){var e="";for(var i in t){for(var a=[],n="",o=(o=t[i].img).split(","),r=0;r<21;r++)o[r]&&(e+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src=https://www.fortunepharm.com/app/storage/uploads/thumbs/"+t[i]["img"+r]+"/></div>",a.push(o[r]));n=_.size(t[i][y])&&!_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[i][y]+"</span></div>":_.size(t[i][y])&&_.size(a)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+e+"</div><span id='charity-fund-detail'>"+t[i][y]+"</span></div>":t[i][v],w[i]={type:"blog_post",date:t[i].date.substring(0,7),title:t[i].date.substring(0,7),content:n,images:a}}d(f),0<h(".fancybox").length&&h(".fancybox").fancybox()})),0<h(".fancybox").length&&h(".fancybox").fancybox(),0<h("#block-contactus #offers-wrapper").length&&(h.data(this,"blcok-contactus",setTimeout(function(){h("#block-contactus #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-contactus #offers-wrapper .content-wrapper").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"blcok-contactus2")),h.data(this,"blcok-contactus2",setTimeout(function(){h("#block-contactus #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-contactus #offers-wrapper .content-wrapper").show()},800))})),h("#block-contactus #offers-wrapper .more-btn").click(function(){h("#block-contactus #offers-wrapper > div.hide").each(function(t){t<3&&h(this).removeClass("hide"),0==h("#block-contactus #offers-wrapper > div.hide").length&&h("#block-contactus #offers-wrapper .more-btn").remove()}),h("#block-contactus #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())})}),0<h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper").length&&(h.data(this,"blcok-contactus",setTimeout(function(){h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"blcok-contactus2")),h.data(this,"blcok-contactus2",setTimeout(function(){h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},800))})),h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").click(function(){h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").each(function(t){t<3&&h(this).removeClass("hide"),0==h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").length&&h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").remove()}),h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())})}),0<h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper").length&&(h.data(this,"block-lianxiwomenjizhaopindibuneirongfanti",setTimeout(function(){h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2")),h.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2",setTimeout(function(){h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},800))})),h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").click(function(){h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").each(function(t){t<3&&h(this).removeClass("hide"),0==h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").length&&h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").remove()}),h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())})}),h(document).ready(function(){var t;function a(){e("wrapper",h(window).width(),h(window).height()),768<=h(window).width()?(h("#health-tips .function-wrapper .function-btn").each(function(){h("#health-tips").hasClass("cold_and_flu")?h(this).height(h(this).width()/280*195):h("#health-tips").hasClass("children")?h(this).height(h(this).width()/100*50):(h("#health-tips").hasClass("pain")||h("#health-tips").hasClass("allergy")||h("#health-tips").hasClass("gerd"))&&h(this).height(h(this).width()/280*196)}),h(".function-middle-wrapper").height(h(".function-left-wrapper:visible").height())):h("#health-tips .function-wrapper .function-btn").each(function(){(h("#health-tips").hasClass("cold_and_flu")||h("#health-tips").hasClass("pain")||h("#health-tips").hasClass("allergy")||h("#health-tips").hasClass("gerd"))&&h(this).height(Math.floor(h(this).width()/385*293)),h("#health-tips").hasClass("children")&&h(this).height(Math.floor(h(this).width()/516*293))})}h("body").show(),0<h("#health-tips .sub-tab-wrapper li").length&&(e("wrapper",h(window).width(),h(window).height()),t=0,clearTimeout(h.data(this,"health-tips-tab")),h.data(this,"health-tips-tab",setTimeout(function(){h("#health-tips .sub-tab-wrapper li").each(function(){t+=h(this).width()}),h("#health-tips .sub-tab-wrapper").width(t)},500))),0<h("#health-tips .function-wrapper .function-btn").length&&(h.data(this,"function",setTimeout(function(){a()},200)),h(window).resize(function(){clearTimeout(h.data(this,"health-btn")),h.data(this,"health-btn",setTimeout(function(){a()},800))}),h("#health-tips .function-wrapper .function-btn").click(function(){var t;void 0!==h(this).attr("rel")&&(t=h(this).attr("rel"),h("#health-tips .function-wrapper .function-btn").each(function(){h(this).removeClass("active")}),h('#health-tips .function-wrapper .function-btn[rel="'+t+'"]').addClass("active"),h("#health-tips .function-wrapper .function-middle-wrapper img").each(function(){h(this).removeClass("active")}),h('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+t+'"]').addClass("active"),0<h("#health-tips .function-wrapper .function-middle-wrapper p").length&&(h("#health-tips .function-wrapper .function-middle-wrapper p").each(function(){h(this).removeClass("active")}),h('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+t+'"]').addClass("active")),0<h("#health-tips .function-detail-wrapper .detail-right-wrapper").length&&(h("#health-tips .function-detail-wrapper .detail-right-wrapper").each(function(){h(this).removeClass("active")}),h('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+t+'"]').addClass("active")))}),h("#health-tips .function-tab-wrapper .function-tab-btn").click(function(){var t,e,i;void 0!==h(this).attr("rel")&&(t=h(this).attr("rel"),h("#health-tips .function-tab-wrapper .function-tab-btn").each(function(){h(this).removeClass("active")}),h('#health-tips .function-tab-wrapper .function-tab-btn[rel="'+t+'"]').addClass("active"),e=768<=h(window).width()?"left":"right",h("#health-tips .function-"+e+"-wrapper").each(function(){h(this).removeClass("active")}),h("#health-tips .function-"+e+'-wrapper[rel="'+t+'"]').addClass("active"),a(),h(".function-"+e+"-wrapper:visible .function-btn").each(function(){h(this).removeClass("active")}),h(".function-"+e+"-wrapper:visible .function-btn:first-child").addClass("active"),i=h(".function-"+e+"-wrapper:visible .function-btn:first-child").attr("rel"),h("#health-tips .function-wrapper .function-middle-wrapper img").each(function(){h(this).removeClass("active")}),h('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+i+'"]').addClass("active"),h("#health-tips .function-wrapper .function-middle-wrapper p").each(function(){h(this).removeClass("active")}),h('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+i+'"]').addClass("active"),h("#health-tips .function-detail-wrapper .detail-right-wrapper").each(function(){h(this).removeClass("active")}),h('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+i+'"]').addClass("active"))}))});var k=h(".hamburger"),C=(h(".overlay"),!1);k.click(function(){C=1==C?(k.removeClass("is-open"),k.addClass("is-closed"),!1):(k.removeClass("is-closed"),k.addClass("is-open"),!0)}),h('[data-toggle="offcanvas"]').click(function(){h("#wrapper").toggleClass("toggled")}),h(".sidebar-nav > li").click(function(){h(this).hasClass("parent")||(h(".sidebar-nav > li").each(function(){h(this).removeClass("active")}),h(this).addClass("active"))}),h(".sidebar-nav > li.parent").click(function(){h(this).hasClass("show-sub")?h(this).removeClass("show-sub"):h(this).addClass("show-sub"),h(this).find(".sub-sidebar-nav").slideToggle()}),h(".path-faq .content-wrapper .detail").click(function(){!function(t){h(t).attr("rel");var e=h(t).parent().parent().position(),i=h(".path-faq .detail-wrapper").width(),a=(h(t).parent().parent().width(),s.path.pathPrefix.replace("/",""),h(t).parent().parent().parent().find(".img-wrapper img").attr("src")),n=h(t).parent().find(".grey").html(),o=h(t).parent().find(".faq_content").html();h(".path-faq div.share-wrapper > a").attr("href","https://www.facebook.com/dialog/feed?app_id=105148586494382&display=popup&caption="+n+"&description="+o+"&picture="+a+"&link=http://www.fortunepharm.com/&redirect_uri=http://www.fortunepharm.com/"),h(".path-faq .detail-wrapper h4").html(n),h(".path-faq .detail-wrapper .description").html(o),h(".path-faq .detail-wrapper img").attr("src",a),e.left+i>h(".content-outer-wrapper").width()?h(".path-faq .detail-wrapper").css("top",e.top).css("left","auto").css("right",0).show():h(".path-faq .detail-wrapper").css("top",e.top).css("left",e.left).show();var r=h(".path-faq .detail-wrapper").position().top+h(".path-faq .detail-wrapper").height()+10-h(".path-faq .content-outer-wrapper").height();0<r?h(".path-faq .content-outer-wrapper").css("margin-bottom",10+r):h(".path-faq .content-outer-wrapper").css("margin-bottom",0),h("html, body").animate({scrollTop:h(".path-faq .detail-wrapper").offset().top-5},500)}(h(this))}),h(".path-faq .detail-wrapper .detail").click(function(){h(this).parent().parent().hide(),h(".path-faq .content-outer-wrapper").css("margin-bottom",0)})}};