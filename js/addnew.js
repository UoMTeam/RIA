/**
 * Created by jiangyiming on 5/9/16.
 */
var n = 1;
var radioindex = 1;
var checkboxindex = 1;
$(function () {
    $('#datetimepicker').datepicker({
        format: 'yyyy-mm-dd',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: true,
        showMeridian: 1
        //pickerPosition:
        //have a bug here
    });


    $("#addQ").click(function () {
        $("#addItems").slideToggle("slow");
    });
    $("#addradio").click(function () {
        var title = buildHTML("input", {
            id: "rt" + n,
            type: "text",
            value: "Q" + n + " 单选题",
            class: "texttitle"
        });
        var radio = "";
        for (var m = 0; m < 2; m++) {
            radio += buildHTML("input", {
                id: "rr" + radioindex,
                type: "radio",
                name: "radio" + n
            });
            radio += buildHTML("input", {
                id: "rt" + radioindex,
                type: "text",
                class: "option",
                value: "选项"
            });
            radio += "<p>"
            radioindex++;
        }

        var basicoperate = basicOperate();
        $("#questions").append('<div>' + title + '<p>' + radio + basicoperate + '</div>');
        n++;
    });
    $("#addcheck").click(function () {
        var title = buildHTML("input", {
            id: "ct" + n,
            type: "text",
            value: "Q" + n + " 多选题",
            class: "texttitle"
        });
        var checkbox = "";
        for (var i = 0; i < 4; i++) {
            checkbox += buildHTML("input", {
                id: "cc" + checkboxindex,
                type: "checkbox",
                name: "checkbox" + n,
            });
            checkbox += buildHTML("input", {
                id: "ct" + checkboxindex,
                type: "text",
                class: "option",
                value: "选项"
            });
            checkbox += "<p>"
        }
        var basicoperate = basicOperate();
        $("#questions").append('<div>' + title + '<p>' + checkbox + basicoperate + '</div>');
        n++;
    });
    $("#addtext").click(function () {
        var title = buildHTML("input", {
            id: "tt" + n,
            type: "text",
            value: "Q" + n + " 文本题",
            class: "texttitle"
        });
        var textarea = buildHTML("textarea", {
            id: "ta" + n
        });
        var basicoperate = basicOperate();
        $("#questions").append('<div>' + title + '<p>' + textarea + basicoperate + '</div>');
        n++;
    });
    $("#push").click(function () {
        $("#duetime").html($("#datetimepicker").val());
    });
});

buildHTML = function (tag, html, attrs) {
    if (typeof (html) != 'string') {
        attrs = html;
        html = null;
    }
    var h = '<' + tag;
    for (attr in attrs) {
        if (attrs[attr] === false) continue;
        h += ' ' + attr + '="' + attrs[attr] + '"';
    }
    return h += html ? ">" + html + "</" + tag + ">" : "/>";
};
basicOperate = function () {
    return "<div><a>上移</a><a>下移</a><a>复用</a><a>删除</a></div>";
};