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
        } else {
            $('.navigate').removeClass('active');
        }
    });

    $('.hot-spot-block .photos-block .box').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
});