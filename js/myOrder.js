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
    })

    var anchor = $(location).attr('hash');
    console.log(anchor);

    $('.process-list > a').each(function() {
      if ($(this).attr('href') == anchor)
        $(this).addClass('active').siblings().removeClass('active');

      $(this).click(function() {
        $(this).addClass('active').siblings().removeClass('active');
      })
    });


});