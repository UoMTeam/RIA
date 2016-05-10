/**
 * Created by jiangyiming on 5/9/16.
 */
$(function(){
    $('#datetimepicker input').datepicker({
        format:'yyyy-mm-dd',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: true,
        showMeridian: 1
    });
});