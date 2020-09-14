//filter
$(function() {
    let filter = $("[data-filter]");
    filter.on("click", function(event) {
        event.preventDefault();
        let cat = $(this).data('filter');
        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');
                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
//active_link
    var location = window.location.href;
    var cur_url = '/' + location.split('/').pop();
 
    $('.nav li').each(function () {
        var link = $(this).find('a').attr('href');
 
        if (cur_url == link) {
            $(this).addClass('pactive');
        }
    });
});
