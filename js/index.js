/**
 * Created by jiangyiming on 5/9/16.
 */
//$("document").ready(function () {
//    $('#chooseAll').bind("click", function () {
//        $("[name = title]:checkbox").attr("checked", true);
//    });
//    $('#NchooseAll').bind("click", function () {
//        $("[name = title]:checkbox").attr("checked", false);
//    });
//});

$("document").ready(function () {
    $("[name = chooseAll]:radio").bind("click", function (event) {
        if (event.target.id== "chooseAll") {
            $("[name = title]:checkbox").attr("checked","checked");
        } else {
            $("[name = title]:checkbox").removeAttr("checked")
        }
    });
});
