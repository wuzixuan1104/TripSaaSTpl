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
});