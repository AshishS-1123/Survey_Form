// Global Variables

// Global variable to hold what section the user is currently on
var section_index = 1;

var progress_done = $("#progress-bar-complete");
var progress_width = parseInt( $("#progress-bar-main").css("width") );

var progress_text = $("#progress-text");

// Functions

// Function: checkSectionOne
// Description: Checks if all the inputs in first section have been filled
// Parameters: None
// Return Value: true is all inputs have been filled, else false
function checkSectionOne()
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

// Function: checkSectionTwo
// Description: Checks if all the inputs in second section have been filled
// Parameters: None
// Return Value: true is all inputs have been filled, else false
function checkSectionTwo()
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

    section_ok = checkFormOk( section_index );

    if ( section_ok )
    {
        ++section_index;

        $(current_section).css("visibility", "hidden");

        var new_width = String(0.25 * progress_width * section_index) + "px";
        progress_done.css("width", new_width);

        var progress_percent = String( 25 * section_index ) + "%";
        progress_text.text( progress_percent );
    }

}
