// OFF CANVAS

jQuery(function($){
    var $mobile_search = $el.get("#lauant-mobile-search-container");
    var $mobile_search_icon = $el.get("#lauant-mobile-search-icon");
    
    $('ul.children').each(function () {
        $(this).before('<span class="toggle" href="#"></span>');
    });
    $('.off-canvas').find('.menu-item').removeClass("is-dropdown-submenu-parent");
    $(document).on('click','span.toggle', function () {
        $(this).toggleClass('open');
        $(this).siblings('ul').toggleClass('open');
    });

    $mobile_search_icon.on("click", function(){
        $mobile_search.toggleClass("show-mobile-search");
    });
});