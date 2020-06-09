Drupal.behaviors.yourmodulename = {
  attach: function (context, settings) {
    var $ = jQuery.noConflict();
    console.log(settings.path.currentPath);
    var lang = settings.path.pathPrefix;
    var json_lang = lang.replace('/', '');
    var crt_path = settings.path.currentPath;
    crt_path = crt_path.replace("node/", "");
    var title_lang = "title_" + json_lang;
    var timeline_data = [];
    var JsonAPI = "/timeline-json/" + crt_path;
    $.getJSON(JsonAPI, callbackFuncWithData);

    function callbackFuncWithData(data) {
        for (var i in data) {
            var images = data[i]['img'];
            var imgs = [];
            var content = "";
            images = images.split(",");
            for (var x = 0; x < 21; x++) {
                if (images[x]) {
                    imgs.push(images[x]);
                }
            }
            content = data[i][title_lang];
            timeline_data[i] = {
                type: 'blog_post',
                date: data[i]["date"].substring(0, 4),
                title: data[i]["date"].substring(0, 4),
                content: content,
                images: imgs
            };
        }
        timeline = new Timeline($('#company-timeline'), timeline_data);
        timeline.setOptions({
            dateFormat: 'YYYY',
            animation: true,
            lightbox: true,
            columnMode: 'dual',
            order: 'desc',
            separator: 'year',
            first_separator: true,
            responsive_width: 768
        });
        timeline.display();
    }
  }
};