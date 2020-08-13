$("#professional").slideUp();
$("#student").slideUp(); 
$(".section").css({"right" : "1000px"});

var i = 1;

document.getElementById(i).style.right = "0px";
document.getElementById(i).style.height = "100%";
document.getElementById(i).style.width = "85%";

var bar = document.getElementById("status");
var finish = document.getElementById("progress");
var width_ = 0, height = 0;

    if(window.screen.height < window.screen.width)
    {    
        width_ = (window.screen.width * 0.8);
        height_ = (window.screen.height * 1.5 / 25);
    }
    else
    {
        width_ = (window.screen.width * 0.6);
        height_ = (window.screen.width * 1.5 / 25);
    }

    bar.style.width =  width_ + "px";
    bar.style.height = height_ + "px";

    finish.style.height = height_ + "px";
    finish.style.width = (width_ * 0.25) + "px";


function show_div() {
    var selected_option = document.getElementById("dropdown");
    
    if(selected_option.value == "student"){
        $("#student").slideDown();
        $("#professional").slideUp();
    }
    else {
        $("#student").slideUp();
        $("#professional").slideDown();
    }
}

function next_section()
{
    if( i == 4 )
        return;
    
    document.getElementById(i).style.right = "1000px";
    document.getElementById(i).style.height = "0px";
    document.getElementById(i).style.width = "0px";
    
    i++;
    
    document.getElementById(i).style.right = "0px";
    document.getElementById(i).style.height = "100%";
    document.getElementById(i).style.width = "85%";
    
    finish.style.width = (width_ * 0.25 * i) + "px";
}

function prev_section()
{
    if( i == 1 )
        return;
    
    document.getElementById(i).style.right = "1000px";
    document.getElementById(i).style.height = "0px";
    document.getElementById(i).style.width = "0px";
    
    i--;
    
    document.getElementById(i).style.right = "0px";
    document.getElementById(i).style.height = "100%";
    document.getElementById(i).style.width = "85%";
    
    finish.style.width = (width_ * 0.25 * i) + "px";
}
  