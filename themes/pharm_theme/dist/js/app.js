"use strict";Drupal.behaviors.yourmodulename={attach:function(t,i){var s=jQuery.noConflict();function e(t,e,i){0<s("#"+t).length&&(s("#"+t).width(e),s("#"+t).height(i))}function a(t,e){0<s("."+t).length&&s("."+t).each(function(){s(this).height(e)})}function n(t,e,i){var n;n=768<=s(window).width()?s("."+t).width():s("."+e).width(),a("row-xs-4",Math.round(n/12*4)),a("row-xs-9",Math.round(n/12*9)),a("row-xs-12",Math.round(n)),768<=s(window).width()&&(a("row-sm-"+i+"-9",n),a("row-sm-"+i+"-8",Math.round(n/i*8)),a("row-sm-"+i+"-7",Math.round(n/i*7)),a("row-sm-"+i+"-6",Math.round(n/i*6)),a("row-sm-"+i+"-5",Math.round(n/i*5)),a("row-sm-"+i+"-4",Math.round(n/i*4)),a("row-sm-"+i+"-3",Math.round(n/i*3)),a("row-sm-"+i+"-2",Math.round(n/i*2)),a("row-sm-"+i+"-1",Math.round(n/i))),992<=s(window).width()&&(a("row-md-"+i+"-9",n),a("row-md-"+i+"-8",Math.round(n/i*8)),a("row-md-"+i+"-7",Math.round(n/i*7)),a("row-md-"+i+"-6",Math.round(n/i*6)),a("row-md-"+i+"-5",Math.round(n/i*5)),a("row-md-"+i+"-4",Math.round(n/i*4)),a("row-md-"+i+"-3",Math.round(n/i*3)),a("row-md-"+i+"-2",Math.round(n/i*2)),a("row-md-"+i+"-1",Math.round(n/i))),1200<=s(window).width()&&(a("row-lg-"+i+"-9",n),a("row-lg-"+i+"-8",Math.round(n/i*8)),a("row-lg-"+i+"-7",Math.round(n/i*7)),a("row-lg-"+i+"-6",Math.round(n/i*6)),a("row-lg-"+i+"-5",Math.round(n/i*5)),a("row-lg-"+i+"-4",Math.round(n/i*4)),a("row-lg-"+i+"-3",Math.round(n/i*3)),a("row-lg-"+i+"-2",Math.round(n/i*2)),a("row-lg-"+i+"-1",Math.round(n/i)))}0<s("#company-timeline").length&&(g=(f=i.path.pathPrefix).replace("/",""),b=(b=i.path.currentPath).replace("node/",""),v="title_"+g,w=[],x="/"+f+f+"timeline-json/"+b,s.getJSON(x,function(t){for(var e in console.log(t),t){for(var i,n=[],a=(a=t[e].img).split(","),o=0;o<21;o++)a[o]&&n.push(a[o]);i=t[e][v],w[e]={type:"blog_post",date:t[e].date.substring(0,4),title:t[e].date.substring(0,4),content:i,images:n}}timeline=new Timeline(s("#company-timeline"),w),timeline.setOptions({dateFormat:"YYYY",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"year",first_separator:!0,responsive_width:768}),timeline.display()})),s(".homepage-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),s(".homepage-mobile-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),0<s(".homepage .body .main-wrapper").length&&(n("desktop-main","mobile-main",9),s(window).resize(function(){clearTimeout(s.data(this,"resizeTimer")),s.data(this,"resizeTimer",setTimeout(function(){n("desktop-main","mobile-main",9)},800))})),0<s("#banner-wrapper-mobile").length&&s("#banner-wrapper-mobile").carousel({interval:!1}),e("wrapper",s(window).width(),s(window).height()),s("body").show(),s(window).resize(function(){clearTimeout(s.data(this,"resizeTimer2")),s.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",s(window).width(),s(window).height())},200)),768<=s(window).width()&&(s("#wrapper").hasClass("toggled")&&s("#wrapper").removeClass("toggled"),s(".hamburger").hasClass("is-open")&&(s(".hamburger").removeClass("is-open"),s(".hamburger").addClass("is-closed")))}),s(".year-wrapper-div").parent("h3").addClass("year-wrapper"),0<s(".path-news .content-row").length&&(s(".path-news .content-row")[0].className="content-row active",s.data(this,"news",setTimeout(function(){s(".path-news .content-row .colume2").each(function(){s(this).siblings(".colume1").height(s(this).height())}),s(".path-news .content-row").show()},200)),s(window).resize(function(){clearTimeout(s.data(this,"news2")),s.data(this,"news2",setTimeout(function(){s(".path-news .content-row .colume2").each(function(){s(this).siblings(".colume1").height(s(this).height())}),s(".path-news  .content-row").show()},800))})),s(".path-news .content-row .colume2 .title-wrapper a").click(function(){s(this).parent().parent().parent().hasClass("active")?s(this).parent().siblings(".content-wrapper").slideUp(400,function(){s(this).parent().siblings(".colume1").height(s(this).parent().height()),s(this).parent().parent().removeClass("active")}):s(this).parent().siblings(".content-wrapper").slideDown(400,function(){s(this).parent().siblings(".colume1").height(s(this).parent().height()),s(this).parent().parent().addClass("active")})});var h,o=i.path.currentQuery.page;s(".path-news .pagination-btn .pagination-change option[rel="+o+"]").attr("selected","selected"),s(".path-news .pagination-btn .pagination-change").change(function(){var t=s(this).val();window.location.assign(t)}),0<s(".path-advertisements").length&&(s(".path-advertisements .rightmove").click(function(){var t=s("#next_page").attr("rel");i.path.pathPrefix;window.location.assign(t)}),s(".path-advertisements .leftmove").click(function(){var t=s("#prev_page").attr("rel");i.path.pathPrefix;window.location.assign(t)}),s(".path-advertisements .view-video").click(function(){var t=s(this).parent().find("#vid-content .vid-title").html(),e=s(this).parent().find("#vid-content .vid-date").html(),i=s(this).parent().find("#vid-content .vid-body").html(),n=s(this).parent().find("#vid-content .vid-url").html();s(".path-advertisements .video").html('<iframe width="400" height="300" src="'+n+'" frameborder="0" allowfullscreen></iframe>'),s(".advertisements-top .content1 h3").html(t),s(".advertisements-top .content1 p").html(e),s(".advertisements-top .content2").html(i),scrolled=s(".advertisements-top").scrollTop(),s("html, body").animate({scrollTop:s(".advertisements-top").offset().top-5})}),s(".path-advertisements .pagination-change").on("focus",function(){}).change(function(){var t=s(this).val(),e=i.path.pathPrefix;window.location.assign("/"+e+"advertisements/"+t)}),s(".path-advertisements .pagination-btn.withmovebutt").click(function(){var t=i.path.pathPrefix,e=s(this).attr("rel");window.location.assign("/"+t+"advertisements/"+e)})),0<s("#fund-timeline").length&&(h=function(t){var i=t||s("#year-drop-down").val(),n=[];_.forEach(w,function(t){var e=_.split(t.date,"-")[0];_.toString(e)===_.toString(i)&&n.push(t)});var e=i;_.toString(e)===_.toString(u)?s("#first-year").addClass("active"):s("#first-year").removeClass("active"),_.toString(e)===_.toString(m)?s("#second-year").addClass("active"):s("#second-year").removeClass("active"),s("#year-drop-down").val(i),s("#fund-timeline").empty(),timeline=new Timeline(s("#fund-timeline"),n),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<s(".fancybox").length&&s(".fancybox").fancybox()},w=[],m=u="",s("#first-year").click(function(){h("2016")}),s("#second-year").click(function(){h("2015")}),s("#year-drop-down").change(function(){h(s(this).val())}),u=2016,m=2015,g=(f=i.path.pathPrefix).replace("/",""),b=(b=i.path.currentPath).replace("node/",""),v="title_"+g,y="zoom_in_detail_"+g,x="/"+f+"timeline-json/"+b,s.getJSON(x,function(t){var e="";for(var i in t){for(var n=[],a="",o=(o=t[i].img).split(","),r=0;r<21;r++)o[r]&&(e+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src=https://www.fortunepharm.com/app/storage/uploads/thumbs/"+t[i]["img"+r]+"/></div>",n.push(o[r]));a=_.size(t[i][y])&&!_.size(n)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[i][y]+"</span></div>":_.size(t[i][y])&&_.size(n)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+e+"</div><span id='charity-fund-detail'>"+t[i][y]+"</span></div>":t[i][v],w[i]={type:"blog_post",date:t[i].date.substring(0,7),title:t[i].date.substring(0,7),content:a,images:n}}h(u),0<s(".fancybox").length&&s(".fancybox").fancybox()})),0<s(".fancybox").length&&s(".fancybox").fancybox(),s(document).ready(function(){s(".fancybox_popup").fancybox().trigger("click"),s(".fancybox_popup").fancybox({openEffect:"elastic",closeEffect:"elastic",helpers:{title:{type:"inside"}}})}),s(document).ready(function(){document.URL.substr(document.URL.indexOf("#")+1);e("wrapper",s(window).width(),s(window).height()),s("body").show(),s(window).resize(function(){clearTimeout(s.data(this,"resizeTimer2")),s.data(this,"resizeTimer2",setTimeout(function(){e("wrapper",s(window).width(),s(window).height())},200)),768<=s(window).width()&&(s("#wrapper").hasClass("toggled")&&s("#wrapper").removeClass("toggled"),s(".hamburger").hasClass("is-open")&&(s(".hamburger").removeClass("is-open"),s(".hamburger").addClass("is-closed")))})}),s(".year-wrapper-div").parent("h3").addClass("year-wrapper"),0<s(".path-news .content-row").length&&(s(".fancybox_popup").fancybox().trigger("click"),s(".fancybox-overlay").css("display","block"),s(".fancybox-overlay").css("height",s(document).height()),s(".path-news .content-row").show(),s.data(this,"news",setTimeout(function(){s(".path-news .content-row .colume2").each(function(){s(this).siblings(".colume1").height(s(this).height())}),s(".path-news .views-row .content-row").show()},200)),s(window).resize(function(){clearTimeout(s.data(this,"news2")),s.data(this,"news2",setTimeout(function(){s(".path-news .content-row .colume2").each(function(){s(this).siblings(".colume1").height(s(this).height())}),s(".path-news .views-row .content-row").show()},800))})),s(".path-news .content-row .colume2 .title-wrapper a").click(function(){s(this).parent().parent().parent().hasClass("active")?s(this).parent().siblings(".content-wrapper").slideUp(400,function(){s(this).parent().siblings(".colume1").height(s(this).parent().height()),s(this).parent().parent().removeClass("active")}):s(this).parent().siblings(".content-wrapper").slideDown(400,function(){s(this).parent().siblings(".colume1").height(s(this).parent().height()),s(this).parent().parent().addClass("active")})});var r,c,p,l,d,w,u,m,f,g,b,v,y,x,o=i.path.currentQuery.page;s(".path-news .pagination-btn .pagination-change option[rel="+o+"]").attr("selected","selected"),s(".path-news .pagination-btn .pagination-change").change(function(){var t=s(this).val();i.path.pathPrefix;window.location.assign(t)}),0<s(".path-advertisements").length&&(r=s("#vid-content .vid-title").html(),c=s("#vid-content .vid-date").html(),p=s("#vid-content .vid-body").html(),l=s("#vid-content .vid-url").html(),s(".path-advertisements .video").html('<iframe width="400" height="300" src="'+l+'" frameborder="0" allowfullscreen></iframe>'),s(".advertisements-top .content1 h3").html(r),s(".advertisements-top .content1 p").html(c),s(".advertisements-top .content2").html(p),s(".path-advertisements .view-video").click(function(){var t=s(this).parent().find("#vid-content .vid-title").html(),e=s(this).parent().find("#vid-content .vid-date").html(),i=s(this).parent().find("#vid-content .vid-body").html(),n=s(this).parent().find("#vid-content .vid-url").html();s(".path-advertisements .video").html('<iframe width="400" height="300" src="'+n+'" frameborder="0" allowfullscreen></iframe>'),s(".advertisements-top .content1 h3").html(t),s(".advertisements-top .content1 p").html(e),s(".advertisements-top .content2").html(i),scrolled=s(".advertisements-top").scrollTop(),s("html, body").animate({scrollTop:s(".advertisements-top").offset().top-5})}),s(".path-advertisements .pagination-change").on("focus",function(){}).change(function(){var t=s(this).val(),e=i.path.pathPrefix;window.location.assign("/"+e+"advertisements/"+t)}),s(".path-advertisements .pagination-btn.withmovebutt").click(function(){var t=i.path.pathPrefix,e=s(this).attr("rel");window.location.assign("/"+t+"advertisements/"+e)})),0<s("#fund-timeline").length&&(d=function(t){var i=t||s("#year-drop-down").val(),n=[];_.forEach(w,function(t){var e=_.split(t.date,"-")[0];_.toString(e)===_.toString(i)&&n.push(t)});var e=i;_.toString(e)===_.toString(u)?s("#first-year").addClass("active"):s("#first-year").removeClass("active"),_.toString(e)===_.toString(m)?s("#second-year").addClass("active"):s("#second-year").removeClass("active"),s("#year-drop-down").val(i),s("#fund-timeline").empty(),timeline=new Timeline(s("#fund-timeline"),n),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<s(".fancybox").length&&s(".fancybox").fancybox()},w=[],m=u="",s("#first-year").click(function(){d("2016")}),s("#second-year").click(function(){d("2015")}),s("#year-drop-down").change(function(){d(s(this).val())}),u=2016,m=2015,g=(f=i.path.pathPrefix).replace("/",""),b=(b=i.path.currentPath).replace("node/",""),v="title_"+g,y="zoom_in_detail_"+g,x="/"+f+"timeline-json/"+b,s.getJSON(x,function(t){var e="";for(var i in t){for(var n=[],a="",o=(o=t[i].img).split(","),r=0;r<21;r++)o[r]&&(e+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src=https://www.fortunepharm.com/app/storage/uploads/thumbs/"+t[i]["img"+r]+"/></div>",n.push(o[r]));a=_.size(t[i][y])&&!_.size(n)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[i][y]+"</span></div>":_.size(t[i][y])&&_.size(n)?"<a href='#charity-light-box"+i+"' class='fancybox'><span id='charity-fund-title'>"+t[i][v]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+i+"' style='display: none'><span class='charity_popup_date'>"+t[i].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+e+"</div><span id='charity-fund-detail'>"+t[i][y]+"</span></div>":t[i][v],w[i]={type:"blog_post",date:t[i].date.substring(0,7),title:t[i].date.substring(0,7),content:a,images:n}}d(u),0<s(".fancybox").length&&s(".fancybox").fancybox()})),0<s(".fancybox").length&&s(".fancybox").fancybox(),0<s("#block-contactus #offers-wrapper").length&&(s.data(this,"blcok-contactus",setTimeout(function(){s("#block-contactus #offers-wrapper .img-wrapper").each(function(){s(this).siblings(".content-wrapper").height(s(this).height())}),s("#block-contactus #offers-wrapper .content-wrapper").show()},200)),s(window).resize(function(){clearTimeout(s.data(this,"blcok-contactus2")),s.data(this,"blcok-contactus2",setTimeout(function(){s("#block-contactus #offers-wrapper .img-wrapper").each(function(){s(this).siblings(".content-wrapper").height(s(this).height())}),s("#block-contactus #offers-wrapper .content-wrapper").show()},800))})),s("#block-contactus #offers-wrapper .more-btn").click(function(){s("#block-contactus #offers-wrapper > div.hide").each(function(t){t<3&&s(this).removeClass("hide"),0==s("#block-contactus #offers-wrapper > div.hide").length&&s("#block-contactus #offers-wrapper .more-btn").remove()}),s("#block-contactus #offers-wrapper .img-wrapper").each(function(){s(this).siblings(".content-wrapper").height(s(this).height())})}),0<s("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper").length&&(s.data(this,"blcok-contactus",setTimeout(function(){s("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){s(this).siblings(".content-wrapper").height(s(this).height())}),s("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},200)),s(window).resize(function(){clearTimeout(s.data(this,"blcok-contactus2")),s.data(this,"blcok-contactus2",setTimeout(function(){s("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){s(this).siblings(".content-wrapper").height(s(this).height())}),s("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},800))})),s("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").click(function(){s("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").each(function(t){t<3&&s(this).removeClass("hide"),0==s("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").length&&s("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").remove()}),s("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){s(this).siblings(".content-wrapper").height(s(this).height())})}),0<s("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper").length&&(s.data(this,"block-lianxiwomenjizhaopindibuneirongfanti",setTimeout(function(){s("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){s(this).siblings(".content-wrapper").height(s(this).height())}),s("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},200)),s(window).resize(function(){clearTimeout(s.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2")),s.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2",setTimeout(function(){s("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){s(this).siblings(".content-wrapper").height(s(this).height())}),s("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},800))})),s("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").click(function(){s("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").each(function(t){t<3&&s(this).removeClass("hide"),0==s("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").length&&s("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").remove()}),s("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){s(this).siblings(".content-wrapper").height(s(this).height())})})}};