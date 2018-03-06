$('.hamburger-menu-wrapper a').on('click', function(){
    $('aside').toggleClass('opened');
    $('main').toggleClass('opened-content');
});

$('i.fa-search').on('click', function(){
    $('.search-group input').toggleClass('opened-search-input');
});