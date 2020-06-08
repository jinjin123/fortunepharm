jQuery(document).ready(() => {
  const $ = jQuery
  const $window     = $(window)
  console.log('hey!!');

  var hisList = [{"id":1,"serie_id":0,"title_eng":"Incorporated in Hong Kong","title_cht":"\u5728\u9999\u6e2f\u8a3b\u518a\u6210\u7acb","title_chs":"\u5728\u9999\u6e2f\u6ce8\u518c\u6210\u7acb","date":"1954-11-30","img1":"","img2":"","img3":"","img4":"","img5":"","img6":"","img7":"","img8":"","img9":"","img10":"","img11":"","img12":"","img13":"","img14":"","img15":"","img16":"","img17":"","img18":"","img19":"","img20":"","youtube":"","youkou":"","created_at":"2015-04-23 02:07:53","updated_at":"2016-10-21 16:04:44","deleted_at":"0000-00-00 00:00:00","publish":0},{"id":4,"serie_id":0,"title_eng":"Received 2003 Hong Kong Top Ten Brandnames Awards","title_cht":"\u69ae\u73722003\u5e74\u9999\u6e2f\u5341\u5927\u540d\u724c","title_chs":"\u8363\u83b72003\u5e74\u9999\u6e2f\u5341\u5927\u540d\u724c","date":"2003-04-01","img1":"LlpcDGBHV9kLpD0eTOoFyVLe7kU840jX.jpg","img2":"","img3":"","img4":"","img5":"","img6":"","img7":"","img8":"","img9":"","img10":"","img11":"","img12":"","img13":"","img14":"","img15":"","img16":"","img17":"","img18":"","img19":"","img20":"","youtube":"","youkou":"","created_at":"2015-04-23 09:54:43","updated_at":"2015-09-29 15:46:39","deleted_at":"0000-00-00 00:00:00","publish":0}];
        var json_lang = "eng";
        var title_lang="title_"+json_lang;
          var timeline_data=[];

             for (var i in hisList) {
           var imgs=[];
           var content="";
             for (var x = 1; x < 21; x++) {
         if(hisList[i]["img"+x]){
         imgs.push('http://www.fortunepharm.com/app/storage/uploads/thumbs/'+hisList[i]["img"+x] );
           }
             }

             if(json_lang=="eng" && hisList[i]["youtube"]||json_lang=="cht" && hisList[i]["youtube"]){
         content=hisList[i][title_lang]+'<a href="https://www.youtube.com/watch?v='+hisList[i]["youtube"]+'" target="_blank" class="youtube-btn"></a>';
         }else if(json_lang=="chs" && hisList[i]["youkou"]){
         content=hisList[i][title_lang]+'<a href="http://v.youku.com/v_show/id_'+hisList[i]["youkou"]+'" target="_blank" class="youtube-btn"></a>';
         }else{
         content=hisList[i][title_lang];
         }

      timeline_data[i]=
      {
      type:'blog_post',
      date:hisList[i]["date"].substring(0, 4),
      title:hisList[i]["date"].substring(0, 4),
      content:content,
      images:imgs
         };
        }



        timeline = new Timeline($('#company-timeline'), timeline_data);
            timeline.setOptions({
              dateFormat:      'YYYY',
                animation:           true,
                lightbox:            true,
                columnMode:          'dual',
                order:               'desc',
                separator:           'year',
                first_separator:     true,
                responsive_width:    768
            });
            timeline.display();


  











});
