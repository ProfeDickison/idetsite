// Define Variables
var htmlbutton = "<button id='htmlbutton' type='button' class='btn btn-outline-light'>Learn About My E-learning Projects</button>";
var cssbutton = "<button id='cssbutton' type='button' class='btn btn-outline-light'>Learn About My Instructional Design Projects</button>";

// Define Functions
function addhtmlbutton(){
    $("#htmlnav").html(htmlbutton);
    $("#htmlnav").slideDown("slow");
}

function addcssbutton(){
    $("#cssnav").html(cssbutton);
    $("#cssnav").slideDown("slow");
}

function addjsbutton(){
    $("#jsnav").html(jsbutton);
    $("#jsnav").slideDown("slow");
}

function removehtmlbutton(){
    $("#htmlnav").slideUp("slow");
    $("#htmlnav").empty();
}

function removecssbutton(){
    $("#cssnav").slideUp("slow");
    $("#cssnav").empty();
}

function removejsbutton(){
    $("#jsnav").slideUp("slow");
     $("#jsnav").empty();
}

// Define Event Handlers
$(document).ready(function(){
    console.log("main.js ready...");
    
    $("#htmlcard").mouseenter(function(){
       addhtmlbutton();
    });
    
    $("#csscard").mouseenter(function(){
       addcssbutton();
    });
    
    $("#jscard").mouseenter(function(){
       addjsbutton();
    });
    
    $("#htmlcard").mouseleave(function(){
       removehtmlbutton();
    });
    
    $("#csscard").mouseleave(function(){
       removecssbutton();
    });
    
    $("#jscard").mouseleave(function(){
       removejsbutton();
    });
});