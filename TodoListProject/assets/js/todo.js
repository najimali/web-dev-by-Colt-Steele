//  Logic to mark the note completed & revert back
// Check off specific todos by Clicking
// diff between click  &  on 
// click() only addes listener existing element  
// but on() will add listerners for all 
// potential future Element
$("ul").on("click", "li", function () {
    //$(this) is only selecting the current li but not all
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function (event) {
    //here $(this) represent current span & parent is li
    //we are fading oout but that doesnt mean it is removing so we used
    // remove
    $(this).parent().fadeOut(500, function () {
        //here $(this) is representing li becuause we have called dot parent method

        $(this).remove();
    });
    //when we click on span it bounces back to first li then ul then container then bodu then html
    //so to stop it we use stop Propogation
    event.stopPropagation();

});
//Creating List
$("input[type='text'").keypress(function (event) {
    // 13 is ascii code for enter 
    if (event.which == 13) {

        let textTodo = $(this).val();
        $(this).val("");
        //appending new li to ul
    	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + textTodo + "</li>");
	}	
});
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});