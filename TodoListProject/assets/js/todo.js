$("#todolist").on("click","li",function(){
    
    $(this).toggleClass("checked");
});
$("#todolist").on("click","span",function(event){

    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();

});
$("input[type='text']").keypress(function(event){
        if(event.which===13){
            let input = $(this).val();
            
            $(this).val("");
            $("#todolist").append("<li><span><i class='fa fa-trash'></i></span> " + input + "</li>");
        }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});