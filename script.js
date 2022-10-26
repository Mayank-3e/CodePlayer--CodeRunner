var windowheight=$(window).height();
var menubarheight=$("#menubar").height();
var codecontainerheight=windowheight-menubarheight;
$(".codeContainer").height(codecontainerheight+"px");
$(".toggle").click(function()
{
    $(this).toggleClass("selected");
    var activediv=$(this).html();
    $("#"+activediv+"Container").toggle();
    var showingdivs=$(".codeContainer").filter(function()
    {
        return $(this).css("display")!="none";
    }).length;
    var widthvar=100/showingdivs;
    $(".codeContainer").css("width",widthvar+"%");
});
$("#runButton").click(function()
{
    var hmtlcodeval=$("#HTMLCode").val();
    var csscodeval="<style>"+$("#CSSCode").val()+"</style>";
    $("iframe").contents().find("html").html(csscodeval+hmtlcodeval);
    document.getElementById("resultFrame").contentWindow.eval($("#JSCode").val());
})