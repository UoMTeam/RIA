/**
 * Created by jiangyiming on 5/9/16.
 */
$(function(){
    $('#datetimepicker').datepicker({
        format:'yyyy-mm-dd',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: true,
        showMeridian: 1
        //pickerPosition:
    });


    $("#addQ").click(function(){
        $("#addItems").slideToggle("slow");
    });
    $("#addradio").click(function(){
            $("#questions").prepend('<div><h4>Q1 单选题</h4><p><input id="1" type="radio" name="question1" /><input type="text" class="option" value="选项一" /><p><input id="2" type="radio" name="question1"><input type="text" class="option" value="选项二" /><div><a>上移</a><a>下移</a><a>复用</a><a>删除</a></div></div>');
    });
});