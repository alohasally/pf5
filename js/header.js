
$(function(){
    $("header .navbar-collapse ul:eq(0)").remove();
    $("header .navbar-header button").clone().prependTo("header .navbar-collapse ul:eq(0)");
    $("header .navbar-collapse ul:eq(0)").css({"dispaly":"block","float":"left"});
});