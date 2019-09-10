/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function() {
    var stageItems = $('.stage-slides .stage-item').length - 1;
    var currentStage = 0;
    setInterval(function() {
        if (currentStage > stageItems)
            currentStage = 0;

        $('.stage-slides .stage-item').eq(currentStage).addClass('active').siblings().removeClass('active');
        $('.circle-spot > li').eq(currentStage).addClass('active').siblings().removeClass('active');
        currentStage++;
    }, 5000);

    $(window).on('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
            $('.navigate').addClass('active');
            $('.totop').addClass('active');
        } else {
            $('.navigate').removeClass('active');
            $('.totop').removeClass('active');
        }
    });

    $('.hot-spot-block .photos-block .box').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.play').click(function() {
        $(this).parent().find('.video-popup').addClass('active');
    });

    $('.video-popup .close').click(function() {
        console.log('video');
        $(this).parent().removeClass('active');
    });

    $('.totop').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

});