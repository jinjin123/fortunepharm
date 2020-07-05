"use strict";Drupal.behaviors.yourmodulename={attach:function(t,s){var h=jQuery.noConflict();function i(t,i,e){0<h("#"+t).length&&(h("#"+t).width(i),h("#"+t).height(e))}function n(t,i){0<h("."+t).length&&h("."+t).each(function(){h(this).height(i)})}function e(t,i,e){var a;a=768<=h(window).width()?h("."+t).width():h("."+i).width(),n("row-xs-4",Math.round(a/12*4)),n("row-xs-9",Math.round(a/12*9)),n("row-xs-12",Math.round(a)),768<=h(window).width()&&(n("row-sm-"+e+"-9",a),n("row-sm-"+e+"-8",Math.round(a/e*8)),n("row-sm-"+e+"-7",Math.round(a/e*7)),n("row-sm-"+e+"-6",Math.round(a/e*6)),n("row-sm-"+e+"-5",Math.round(a/e*5)),n("row-sm-"+e+"-4",Math.round(a/e*4)),n("row-sm-"+e+"-3",Math.round(a/e*3)),n("row-sm-"+e+"-2",Math.round(a/e*2)),n("row-sm-"+e+"-1",Math.round(a/e))),992<=h(window).width()&&(n("row-md-"+e+"-9",a),n("row-md-"+e+"-8",Math.round(a/e*8)),n("row-md-"+e+"-7",Math.round(a/e*7)),n("row-md-"+e+"-6",Math.round(a/e*6)),n("row-md-"+e+"-5",Math.round(a/e*5)),n("row-md-"+e+"-4",Math.round(a/e*4)),n("row-md-"+e+"-3",Math.round(a/e*3)),n("row-md-"+e+"-2",Math.round(a/e*2)),n("row-md-"+e+"-1",Math.round(a/e))),1200<=h(window).width()&&(n("row-lg-"+e+"-9",a),n("row-lg-"+e+"-8",Math.round(a/e*8)),n("row-lg-"+e+"-7",Math.round(a/e*7)),n("row-lg-"+e+"-6",Math.round(a/e*6)),n("row-lg-"+e+"-5",Math.round(a/e*5)),n("row-lg-"+e+"-4",Math.round(a/e*4)),n("row-lg-"+e+"-3",Math.round(a/e*3)),n("row-lg-"+e+"-2",Math.round(a/e*2)),n("row-lg-"+e+"-1",Math.round(a/e)))}0<h("#company-timeline").length&&(u=(w=s.path.pathPrefix).replace("/",""),m=(m=s.path.currentPath).replace("node/",""),g="title_"+u,b="zoom_in_detail_"+u,c=[],v="/"+w+w+"timeline-json/"+m,h.getJSON(v,function(t){for(var i in t){for(var e,a=t[i].img,n=[],o=t[i][b],a=a.split(","),r=0;r<21;r++)a[r]&&n.push(a[r]);e=t[i][g]+o,c[i]={type:"blog_post",date:t[i].date.substring(0,4),title:t[i].date.substring(0,4),content:e,images:n}}timeline=new Timeline(h("#company-timeline"),c),timeline.setOptions({dateFormat:"YYYY",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"year",first_separator:!0,responsive_width:768}),timeline.display()})),h(".homepage-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),h(".homepage-mobile-slider .field-content ul").slick({dots:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!1,cssEase:"ease",arrows:!1,rows:1,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),0<h(".homepage .body .main-wrapper").length&&(e("desktop-main","mobile-main",9),h(window).resize(function(){clearTimeout(h.data(this,"resizeTimer")),h.data(this,"resizeTimer",setTimeout(function(){e("desktop-main","mobile-main",9)},800))})),0<h("#banner-wrapper-mobile").length&&h("#banner-wrapper-mobile").carousel({interval:!1}),i("wrapper",h(window).width(),h(window).height()),h("body").show(),h(window).resize(function(){clearTimeout(h.data(this,"resizeTimer2")),h.data(this,"resizeTimer2",setTimeout(function(){i("wrapper",h(window).width(),h(window).height())},200)),768<=h(window).width()&&(h("#wrapper").hasClass("toggled")&&h("#wrapper").removeClass("toggled"),h(".hamburger").hasClass("is-open")&&(h(".hamburger").removeClass("is-open"),h(".hamburger").addClass("is-closed")))}),h(".year-wrapper-div").parent("h3").addClass("year-wrapper"),0<h(".path-news .content-row").length&&(h(".path-news .content-row")[0].className="content-row active",h.data(this,"news",setTimeout(function(){h(".path-news .content-row .colume2").each(function(){h(this).siblings(".colume1").height(h(this).height())}),h(".path-news .content-row").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"news2")),h.data(this,"news2",setTimeout(function(){h(".path-news .content-row .colume2").each(function(){h(this).siblings(".colume1").height(h(this).height())}),h(".path-news  .content-row").show()},800))})),h(".path-news .content-row .colume2 .title-wrapper a").click(function(){h(this).parent().parent().parent().hasClass("active")?h(this).parent().siblings(".content-wrapper").slideUp(400,function(){h(this).parent().siblings(".colume1").height(h(this).parent().height()),h(this).parent().parent().removeClass("active")}):h(this).parent().siblings(".content-wrapper").slideDown(400,function(){h(this).parent().siblings(".colume1").height(h(this).parent().height()),h(this).parent().parent().addClass("active")})});var a,o,r,p,l,c,d,f,w,u,m,g,b,v,k=s.path.currentQuery.page;h(".path-news .pagination-btn .pagination-change option[rel="+k+"]").attr("selected","selected"),h(".path-news .pagination-btn .pagination-change").change(function(){var t=h(this).val();window.location.assign(t)}),0<h(".path-advertisements").length&&(h(".path-advertisements .rightmove").click(function(){var t=h("#next_page").attr("rel");s.path.pathPrefix;window.location.assign(t)}),h(".path-advertisements .leftmove").click(function(){var t=h("#prev_page").attr("rel");s.path.pathPrefix;window.location.assign(t)}),a=h("#vid-content .vid-title").html(),o=h("#vid-content .vid-date").html(),r=h("#vid-content .vid-body").html(),p=h("#vid-content .vid-url").html(),h(".path-advertisements .video").html('<iframe width="400" height="300" src="'+p+'" frameborder="0" allowfullscreen></iframe>'),h(".advertisements-top .content1 h3").html(a),h(".advertisements-top .content1 p").html(o),h(".advertisements-top .content2").html(r),h(".path-advertisements .view-video").click(function(){var t=h(this).parent().find("#vid-content .vid-title").html(),i=h(this).parent().find("#vid-content .vid-date").html(),e=h(this).parent().find("#vid-content .vid-body").html(),a=h(this).parent().find("#vid-content .vid-url").html();h(".path-advertisements .video").html('<iframe width="400" height="300" src="'+a+'" frameborder="0" allowfullscreen></iframe>'),h(".advertisements-top .content1 h3").html(t),h(".advertisements-top .content1 p").html(i),h(".advertisements-top .content2").html(e),scrolled=h(".advertisements-top").scrollTop(),h("html, body").animate({scrollTop:h(".advertisements-top").offset().top-5})}),h(".path-advertisements .pagination-change").on("focus",function(){}).change(function(){var t=h(this).val(),i=s.path.pathPrefix;window.location.assign("/"+i+"advertisements/"+t)}),h(".path-advertisements .pagination-btn.withmovebutt").click(function(){var t=s.path.pathPrefix,i=h(this).attr("rel");window.location.assign("/"+t+"advertisements/"+i)})),0<h("#fund-timeline").length&&(l=function(t){var e=t||h("#year-drop-down").val(),a=[];_.forEach(c,function(t){var i=_.split(t.date,"-")[0];_.toString(i)===_.toString(e)&&a.push(t)});var i=e;_.toString(i)===_.toString(d)?h("#first-year").addClass("active"):h("#first-year").removeClass("active"),_.toString(i)===_.toString(f)?h("#second-year").addClass("active"):h("#second-year").removeClass("active"),h("#year-drop-down").val(e),h("#fund-timeline").empty(),timeline=new Timeline(h("#fund-timeline"),a),timeline.setOptions({dateFormat:"YYYY-MM",animation:!0,lightbox:!0,columnMode:"dual",order:"desc",separator:"null",first_separator:!0,responsive_width:768}),timeline.display(),0<h(".fancybox").length&&h(".fancybox").fancybox()},c=[],f=d="",h("#first-year").click(function(){l("2016")}),h("#second-year").click(function(){l("2015")}),h("#year-drop-down").change(function(){l(h(this).val())}),d=2016,f=2015,u=(w=s.path.pathPrefix).replace("/",""),m=(m=s.path.currentPath).replace("node/",""),g="title_"+u,b="zoom_in_detail_"+u,v="/"+w+w+"timeline-json/"+m,h.getJSON(v,function(t){var i="";for(var e in t){for(var a=[],n="",o=(o=t[e].img).split(","),r=0;r<21;r++)o[r]&&(i+="<div style='margin: 2% 2% 8% 2%;'><img style='border-radius: 5px; max-height:100%; max-width:100%;' src="+o[r]+"></div>",a.push(o[r]));n=_.size(t[e][b])&&!_.size(a)?"<a href='#charity-light-box"+e+"' class='fancybox'><span id='charity-fund-title'>"+t[e][g]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+e+"' style='display: none'><span class='charity_popup_date'>"+t[e].date.substring(0,7)+"</span><br><br><span id='charity-fund-detail'>"+t[e][b]+"</span></div>":_.size(t[e][b])&&_.size(a)?"<a href='#charity-light-box"+e+"' class='fancybox'><span id='charity-fund-title'>"+t[e][g]+"</span></a><div class='charity_popup_dialog' id='charity-light-box"+e+"' style='display: none'><span class='charity_popup_date'>"+t[e].date.substring(0,7)+"</span><div style='margin-top:2%' class='row'>  "+i+"</div><span id='charity-fund-detail'>"+t[e][b]+"</span></div>":t[e][g],c[e]={type:"blog_post",date:t[e].date.substring(0,7),title:t[e].date.substring(0,7),content:n,images:a}}l(d),0<h(".fancybox").length&&h(".fancybox").fancybox()})),0<h(".fancybox").length&&h(".fancybox").fancybox(),h(".fancybox_popup").fancybox().trigger("click"),h(".fancybox_popup").fancybox({openEffect:"elastic",closeEffect:"elastic",helpers:{title:{type:"inside"}}});document.URL.substr(document.URL.indexOf("#")+1);i("wrapper",h(window).width(),h(window).height()),h("body").show(),h(window).resize(function(){clearTimeout(h.data(this,"resizeTimer2")),h.data(this,"resizeTimer2",setTimeout(function(){i("wrapper",h(window).width(),h(window).height())},200)),768<=h(window).width()&&(h("#wrapper").hasClass("toggled")&&h("#wrapper").removeClass("toggled"),h(".hamburger").hasClass("is-open")&&(h(".hamburger").removeClass("is-open"),h(".hamburger").addClass("is-closed")))}),0<h("#block-contactus #offers-wrapper").length&&(h.data(this,"blcok-contactus",setTimeout(function(){h("#block-contactus #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-contactus #offers-wrapper .content-wrapper").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"blcok-contactus2")),h.data(this,"blcok-contactus2",setTimeout(function(){h("#block-contactus #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-contactus #offers-wrapper .content-wrapper").show()},800))})),h("#block-contactus #offers-wrapper .more-btn").click(function(){h("#block-contactus #offers-wrapper > div.hide").each(function(t){t<3&&h(this).removeClass("hide"),0==h("#block-contactus #offers-wrapper > div.hide").length&&h("#block-contactus #offers-wrapper .more-btn").remove()}),h("#block-contactus #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())})}),0<h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper").length&&(h.data(this,"blcok-contactus",setTimeout(function(){h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"blcok-contactus2")),h.data(this,"blcok-contactus2",setTimeout(function(){h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .content-wrapper").show()},800))})),h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").click(function(){h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").each(function(t){t<3&&h(this).removeClass("hide"),0==h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper > div.hide").length&&h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .more-btn").remove()}),h("#block-lianxiwomenjizhaopindibuneirongjianti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())})}),0<h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper").length&&(h.data(this,"block-lianxiwomenjizhaopindibuneirongfanti",setTimeout(function(){h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2")),h.data(this,"block-lianxiwomenjizhaopindibuneirongfanti2",setTimeout(function(){h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .content-wrapper").show()},800))})),h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").click(function(){h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").each(function(t){t<3&&h(this).removeClass("hide"),0==h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper > div.hide").length&&h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .more-btn").remove()}),h("#block-lianxiwomenjizhaopindibuneirongfanti #offers-wrapper .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())})}),0<h("#main #block-latestoffers ").length&&(h.data(this,"lastest-offers",setTimeout(function(){h("#main #block-latestoffers  .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#main #block-latestoffers  .content-wrapper").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"lastest-offers2")),h.data(this,"lastest-offers2",setTimeout(function(){h("#main #block-latestoffers .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#main #block-latestoffers  .content-wrapper").show()},800))})),h("#main #block-latestoffers  .more-btn").click(function(){h("#main #block-latestoffers  > div.hide").each(function(t){t<3&&h(this).removeClass("hide"),0==h("#main #block-latestoffers  > div.hide").length&&h("#main #block-latestoffers  .more-btn").remove()}),h("#main #block-latestoffers  .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())})}),0<h("#main #block-latestofferschs ").length&&(h.data(this,"lastest-offers",setTimeout(function(){h("#main #block-latestofferschs  .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#main #block-latestofferschs  .content-wrapper").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"lastest-offers2")),h.data(this,"lastest-offers2",setTimeout(function(){h("#main #block-latestofferschs .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#main #block-latestofferschs  .content-wrapper").show()},800))})),h("#main #block-latestofferschs  .more-btn").click(function(){h("#main #block-latestofferschs  > div.hide").each(function(t){t<3&&h(this).removeClass("hide"),0==h("#main #block-latestofferschs  > div.hide").length&&h("#main #block-latestofferschs  .more-btn").remove()}),h("#main #block-latestofferschs  .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())})}),0<h("#main #block-zuixinyouhuifanti ").length&&(h.data(this,"lastest-offers",setTimeout(function(){h("#main #block-zuixinyouhuifanti  .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#main #block-zuixinyouhuifanti  .content-wrapper").show()},200)),h(window).resize(function(){clearTimeout(h.data(this,"lastest-offers2")),h.data(this,"lastest-offers2",setTimeout(function(){h("#main #block-zuixinyouhuifanti .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())}),h("#main #block-zuixinyouhuifanti  .content-wrapper").show()},800))})),h("#main #block-zuixinyouhuifanti  .more-btn").click(function(){h("#main #block-zuixinyouhuifanti  > div.hide").each(function(t){t<3&&h(this).removeClass("hide"),0==h("#main #block-zuixinyouhuifanti  > div.hide").length&&h("#main #block-zuixinyouhuifanti  .more-btn").remove()}),h("#main #block-zuixinyouhuifanti  .img-wrapper").each(function(){h(this).siblings(".content-wrapper").height(h(this).height())})}),h(document).ready(function(){var t;function a(){i("wrapper",h(window).width(),h(window).height()),768<=h(window).width()?(h("#health-tips .function-wrapper .function-btn").each(function(){h("#health-tips").hasClass("cold_and_flu")?h(this).height(h(this).width()/280*195):h("#health-tips").hasClass("children")?h(this).height(h(this).width()/100*50):(h("#health-tips").hasClass("pain")||h("#health-tips").hasClass("allergy")||h("#health-tips").hasClass("gerd"))&&h(this).height(h(this).width()/280*196)}),h(".function-middle-wrapper").height(h(".function-left-wrapper:visible").height())):h("#health-tips .function-wrapper .function-btn").each(function(){(h("#health-tips").hasClass("cold_and_flu")||h("#health-tips").hasClass("pain")||h("#health-tips").hasClass("allergy")||h("#health-tips").hasClass("gerd"))&&h(this).height(Math.floor(h(this).width()/385*293)),h("#health-tips").hasClass("children")&&h(this).height(Math.floor(h(this).width()/516*293))})}h("body").show(),0<h("#health-tips .sub-tab-wrapper li").length&&(i("wrapper",h(window).width(),h(window).height()),t=0,clearTimeout(h.data(this,"health-tips-tab")),h.data(this,"health-tips-tab",setTimeout(function(){h("#health-tips .sub-tab-wrapper li").each(function(){t+=h(this).width()}),h("#health-tips .sub-tab-wrapper").width(t)},500))),0<h("#health-tips .function-wrapper .function-btn").length&&(h.data(this,"function",setTimeout(function(){a()},200)),h(window).resize(function(){clearTimeout(h.data(this,"health-btn")),h.data(this,"health-btn",setTimeout(function(){a()},800))}),h("#health-tips .function-wrapper .function-btn").click(function(){var t;void 0!==h(this).attr("rel")&&(t=h(this).attr("rel"),h("#health-tips .function-wrapper .function-btn").each(function(){h(this).removeClass("active")}),h('#health-tips .function-wrapper .function-btn[rel="'+t+'"]').addClass("active"),h("#health-tips .function-wrapper .function-middle-wrapper img").each(function(){h(this).removeClass("active")}),h('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+t+'"]').addClass("active"),0<h("#health-tips .function-wrapper .function-middle-wrapper p").length&&(h("#health-tips .function-wrapper .function-middle-wrapper p").each(function(){h(this).removeClass("active")}),h('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+t+'"]').addClass("active")),0<h("#health-tips .function-detail-wrapper .detail-right-wrapper").length&&(h("#health-tips .function-detail-wrapper .detail-right-wrapper").each(function(){h(this).removeClass("active")}),h('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+t+'"]').addClass("active")))}),h("#health-tips .function-tab-wrapper .function-tab-btn").click(function(){var t,i,e;void 0!==h(this).attr("rel")&&(t=h(this).attr("rel"),h("#health-tips .function-tab-wrapper .function-tab-btn").each(function(){h(this).removeClass("active")}),h('#health-tips .function-tab-wrapper .function-tab-btn[rel="'+t+'"]').addClass("active"),i=768<=h(window).width()?"left":"right",h("#health-tips .function-"+i+"-wrapper").each(function(){h(this).removeClass("active")}),h("#health-tips .function-"+i+'-wrapper[rel="'+t+'"]').addClass("active"),a(),h(".function-"+i+"-wrapper:visible .function-btn").each(function(){h(this).removeClass("active")}),h(".function-"+i+"-wrapper:visible .function-btn:first-child").addClass("active"),e=h(".function-"+i+"-wrapper:visible .function-btn:first-child").attr("rel"),h("#health-tips .function-wrapper .function-middle-wrapper img").each(function(){h(this).removeClass("active")}),h('#health-tips .function-wrapper .function-middle-wrapper img[rel="'+e+'"]').addClass("active"),h("#health-tips .function-wrapper .function-middle-wrapper p").each(function(){h(this).removeClass("active")}),h('#health-tips .function-wrapper .function-middle-wrapper p[rel="'+e+'"]').addClass("active"),h("#health-tips .function-detail-wrapper .detail-right-wrapper").each(function(){h(this).removeClass("active")}),h('#health-tips .function-detail-wrapper .detail-right-wrapper[rel="'+e+'"]').addClass("active"))}))});var y=h(".hamburger"),x=(h(".overlay"),!1);y.click(function(){x=1==x?(y.removeClass("is-open"),y.addClass("is-closed"),!1):(y.removeClass("is-closed"),y.addClass("is-open"),!0)}),h('[data-toggle="offcanvas"]').click(function(){h("#wrapper").toggleClass("toggled")}),h(".sidebar-nav > li").click(function(){h(this).hasClass("parent")||(h(".sidebar-nav > li").each(function(){h(this).removeClass("active")}),h(this).addClass("active"))}),h(".sidebar-nav > li.parent").click(function(){h(this).hasClass("show-sub")?h(this).removeClass("show-sub"):h(this).addClass("show-sub"),h(this).find(".sub-sidebar-nav").slideToggle()}),h(".sidebar-nav > li.parent").each(function(){h(this).find("li").first().remove()}),h(".path-faq .content-wrapper .detail").click(function(){!function(t){h(t).attr("rel");var i=h(t).parent().parent().position(),e=h(".path-faq .detail-wrapper").width(),a=(h(t).parent().parent().width(),s.path.pathPrefix.replace("/",""),h(t).parent().parent().parent().find(".img-wrapper img").attr("src")),n=h(t).parent().find(".grey").html(),o=h(t).parent().find(".faq_content").html();h(".path-faq div.share-wrapper > a").attr("href","https://www.facebook.com/dialog/feed?app_id=105148586494382&display=popup&caption="+n+"&description="+o+"&picture="+a+"&link=http://www.fortunepharm.com/&redirect_uri=http://www.fortunepharm.com/"),h(".path-faq .detail-wrapper h4").html(n),h(".path-faq .detail-wrapper .description").html(o),h(".path-faq .detail-wrapper img").attr("src",a),i.left+e>h(".content-outer-wrapper").width()?h(".path-faq .detail-wrapper").css("top",i.top).css("left","auto").css("right",0).show():h(".path-faq .detail-wrapper").css("top",i.top).css("left",i.left).show();var r=h(".path-faq .detail-wrapper").position().top+h(".path-faq .detail-wrapper").height()+10-h(".path-faq .content-outer-wrapper").height();0<r?h(".path-faq .content-outer-wrapper").css("margin-bottom",10+r):h(".path-faq .content-outer-wrapper").css("margin-bottom",0),h("html, body").animate({scrollTop:h(".path-faq .detail-wrapper").offset().top-5},500)}(h(this))}),h(".path-faq .detail-wrapper .detail").click(function(){h(this).parent().parent().hide(),h(".path-faq .content-outer-wrapper").css("margin-bottom",0)})}};