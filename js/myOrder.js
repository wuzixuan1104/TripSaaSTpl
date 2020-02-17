/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function() {
    $('.nav-tabs > a').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).data('title'));
        console.log($(this).closest('.order-list'));
        $(this).closest('.order-list').attr('data-type', $(this).data('title'));
    });

    $('.person-box > h3').click(function() {
        $(this).parent().toggleClass('active');
    });


    var preName = '';
    $('.reply').click(function() {
        
        var name = $(this).closest('section').find('.name').first().text();
        if (name != preName) {
            preName = name;
            $('.reply-to').find('.name').text(name);
            $('.reply-to').addClass('active');
        } else {
            $('.reply-to').removeClass('active');
            preName = '';
        }
    });

    var that = this;

    $('#loader_cover').fadeOut();

    var origin = document.location.hash;
    document.location.hash = '';

    $(window).on('hashchange', function() {
        if (!document.location.hash)
            document.location.hash = origin ? origin : that.currentHash;
        
        that.currentHash = document.location.hash;
        $('html,body').animate({scrollTop: '0px'}, 0);
    }).trigger('hashchange');
});