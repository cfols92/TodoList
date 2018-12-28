//check off specific to-dos by clicking

$("ul").on("click", "li", function()
{
    $(this).toggleClass("completed")
});

//delete to-dos by clicking on X's

$("ul").on("click", "span", function(event)
{
    event.stopPropagation();
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    })
});

//add new to-dos through the text input

$("input[type='text']").keypress(function(event)
{
    if(event.which === 13)
    {
        //get text from input
        todoText = $(this).val();
        //create a new li and add to ul
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> " + todoText + "</li>");
        //clear text input
        $(this).val("");
    }
});

//toggle the input using the plus icon
$("#toggler").click(function()
{
    $("input[type='text']").fadeToggle();
    $(this).toggleClass("fa-plus");
    $(this).toggleClass("fa-minus");
});