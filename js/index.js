/**
 * Created by jiangyiming on 5/9/16.
 */

$("document").ready(function () {
    $("[name = chooseAll]:radio").bind("click", function (event) {
        if (event.target.id== "chooseAll") {
            $("[name = title]").prop("checked",true);
        } else {
            $("[name = title]").prop("checked",false);
        }
    });
});
