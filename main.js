// Global Variables

// Global variable to hold what section the user is currently on
var section_index = 1;

var progress_done = $("#progress-bar-complete");
var progress_width = parseInt( $("#progress-bar-main").css("width") );

var progress_text = $("#progress-text");

// set some html styles to be loaded when form opens first
$("#field-2").css("visibility", "hidden");
$("#field-2").slideUp(length = 0);

$("#field-3").css("visibility", "hidden");
$("#field-3").slideUp(length = 0);


$("#professional-section").slideUp(length = 100);

$(".text-input").blur( function()
{
    if( $(this).val() == "" )
    {
        $(this).css("border-bottom-color", "#E85A4F");
        $(this).css("border-width", "3px");
    }
    else
    {
        $(this).css("border-bottom-color", "#000000");
        $(this).css("border-width", "1px");
    }
});
// Functions

function change_visible_div()
{
    dropdown_div  = $("#dropdown");

    if ( dropdown_div.val() == "professional" )
    {
        $("#student-section").slideUp(length = 400);
        $("#professional-section").slideDown(length = 400);
    }
    else
    {
        $("#student-section").slideDown(length = 400);
        $("#professional-section").slideUp(length = 400);
    }
}

// Function: checkSectionOne
// Description: Checks if all the inputs in first section have been filled
// Parameters: None
// Return Value: true is all inputs have been filled, else false
function checkSectionOne()
{
    var input_element = ["#name", "#email", "#number"];
    var not_submitted = [];

    for ( var i = 0; i < input_element.length; ++i )
        if ( $(input_element[i]).val() == "" )
        {
            $(input_element[i]).css("border-bottom-color", "#E85A4F");
            $(input_element[i]).css("border-width", "3px");

            not_submitted.push(input_element[i]);
        }

    if ( not_submitted.length == 0 )
        return true;
    return false;

}

// Function: checkSectionTwo
// Description: Checks if all the inputs in second section have been filled
// Parameters: None
// Return Value: true is all inputs have been filled, else false
function checkSectionTwo()
{
    var input_filled = true;

    if ( $("#college").val() == "" && $("#dropdown").val() == "student" )
    {
        $("#college").css("border-bottom-color", "#E85A4F");
        $("#college").css("border-width", "3px");

        input_filled = false;
    }

    if ( $("#company").val() == "" && $("#dropdown").val() == "professional" )
    {
        $("#company").css("border-bottom-color", "#E85A4F");
        $("#company").css("border-width", "3px");

        input_filled = false;
    }

    if ( $("#experience").val() == "" && $("#dropdown").val() == "professional" )
    {
        $("#experience").css("border-bottom-color", "#E85A4F");
        $("#experience").css("border-width", "3px");

        input_filled = false;
    }

    return input_filled;
}

// Function: checkSectionThree
// Description: Checks if all the inputs in first section have been filled
// Parameters: None
// Return Value: true is all inputs have been filled, else false
function checkSectionThree()
{
    var input_element = ["#name", "#email", "#number"];
    var not_submitted = [];

    for ( var i = 0; i < input_element.length; ++i )
    {
        if ( $(input_element[i]).val() == "" )
            not_submitted.push(input_element[i]);
        else
            $(input_element[i]).css("border-bottom-color", "black");
            $(input_element[i]).css("border-width", "1px");
    }

    if ( not_submitted.length == 0 )
        return true;
    return false;

}

// Function: checkSectionFour
// Description: Checks if all the inputs in first section have been filled
// Parameters: None
// Return Value: true is all inputs have been filled, else false
function checkSectionFour()
{
    var input_element = ["#name", "#email", "#number"];
    var not_submitted = [];

    for ( var i = 0; i < input_element.length; ++i )
    {
        if ( $(input_element[i]).val() == "" )
        {
            $(input_element[i]).css("border-bottom-color", "#E85A4F");
            $(input_element[i]).css("border-width", "3px");

            not_submitted.push(input_element[i]);
        }
        else
        {
            $(input_element[i]).css("border-bottom-color", "black");
            $(input_element[i]).css("border-width", "1px");
        }
    }

    if ( not_submitted.length == 0 )
        return true;
    return false;

}

// Function: checkFormOk
// Description: Checks if all the inputs in the form have been filled
// Parameters: None
// Return Value: true is all inputs have been filled, else false
function checkFormOk( section_index )
{
    switch ( section_index )
    {
        // for section 1
        case 1: return checkSectionOne();
        // for section 2
        case 2: return checkSectionTwo();
        // for section 3
        case 3: return checkSectionThree();
        // for section 4
        case 4: return checkSectionFour();
        // for all sections
        case -1: if ( checkSectionOne() && checkSectionTwo() )
                    if ( checkSectionThree() && checkSectionFour() )
                        return true;
                return false;
    }
}

// Function: previousSection
// Description: Changes the current section to previous section
// Parameters: None
// Return Value: None
function previousSection()
{
    if ( section_index == 1 )
        return;

    var current_section = "#field-" + String( section_index );
    var prev_section = "#field-" + String( section_index - 1 );

    --section_index;

    $(current_section).css("visibility", "hidden");
    $(prev_section).css("visibility", "hidden");

    $(current_section).slideUp(length = 10);
    $(prev_section).slideDown(length = 10);

    $(prev_section).css("visibility", "visible");

    var new_width = String(0.25 * progress_width * section_index) + "px";
    progress_done.css("width", new_width);

    var progress_percent = String( 25 * section_index ) + "%";
    progress_text.text( progress_percent );

}

// Function: submitForm
// Description: Verifies that all fields have been filled before submitting the form
// Parameters: None
// Return Value: true is all inputs have been filled
function submitForm()
{
    if ( checkFormOk() )
    {
        console.log("Everything OK!");
    }
    else
    {
        window.alert("All Questions Must Be Answered!")
    }
}

// Function: nextSection
// Description: Changes the current section to next section
// Parameters: None
// Return Value: None
function nextSection()
{
    var section_ok = false;

    var current_section = "#field-" + String( section_index );
    var next_section = "#field-" + String( section_index + 1 );

    section_ok = true;//checkFormOk( section_index );

    if ( section_ok )
    {
        ++section_index;

        $(current_section).css("visibility", "hidden");
        $(next_section).css("visibility", "hidden");

        $(next_section).slideDown(length = 0);
        $(current_section).slideUp(length = 0);

        $(next_section).css("visibility", "visible");

        var new_width = String(0.25 * progress_width * section_index) + "px";
        progress_done.css("width", new_width);

        var progress_percent = String( 25 * section_index ) + "%";
        progress_text.text( progress_percent );
    }

}
