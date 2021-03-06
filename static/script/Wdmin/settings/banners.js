/**
 * Desc
 * @description Holp You Do Good But Not Evil
 * @copyright   Copyright 2014-2015 <ycchen@iwshop.cn>
 * @license     LGPL (http://www.gnu.org/licenses/lgpl.html)
 * @author      Chenyong Cai <ycchen@iwshop.cn>
 * @package     Wshop
 * @link        http://www.iwshop.cn
 */

requirejs(['jquery', 'util', 'fancyBox', 'datatables', 'Spinner'], function($, util, fancyBox, dataTables, Spinner) {

    var dT = $('.dTable').dataTable(util.dataTableConfig).api();

    $('.banner_del').click(function() {
        if (confirm('你确认要删除吗')) {
            var tR = $(this).parent().parent();
            var id = $(this).attr('data-id');
            if (id > 0) {
                $.post('?/WdminAjax/ajaxDeleteBanner/', {
                    id: (-1) * id
                }, function(res) {
                    if (res > 0) {
                        util.Alert('删除成功');
                        tR.fadeOut('normal', function() {
                            dT.row(tR).node().remove();
                        });
                    } else {
                        util.Alert('删除失败', true);
                    }
                });
            }
        }
    });

    /**
     * 注册resize函数
     */
    util.onresize(function() {

    });

});