//Simple Declaration of JQuery. and it is replacement for Query Selector.
// $("h1").css("color","red");
// $("button");

//$("h1").addClass("big-title"); //FOr Adding the class

//$("h1").removeClass("big-title"); //For Removing the class

//$("h1").addClass("big-title margin-50");  // Addding Multiple classes.

//$("h1").hasClass("margin-50");  // To check the class is present or not.

//$("h1").text("Good Morning"); // For changing the text

//$("img").attr("src"); //used for printing the attributes such as src etc.

//$("a").attr("href", "https://www.yahoo.com"); // for printing and replacing ,redirecting.

// $("button").click(function() {
//     $("h1").css("color","red");
// });                                  // it is for adding an event listener after clicking an button color of H1 is changes to red. "click" event listner is used. 

// $("input").keypress(function(event) {
//    $("h1").text(event.key);   //changing h1 with typed key.
//     });

// $("h1").on("mouseover",function() {
//    $("h1").css("color", "red");   //we can also write as in this format.
//     });

// $("h1").before("<button>New</button>"); //adding new elements before h1.

// $("h1").after("<button>New2</button>");//adding new elements after h1.

// $("h1").prepend("<button>New3</button>");//adding new elements prefix h1.

// $("h1").append("<button>New4</button>");//adding new elements suffix h1.

// $("button").on("click", function() {
//     $("h1").hide(); 
//     });                                  //hide animation

// $("button").on("click", function() {
//     $("h1").toggle(); 
//     });                                   // toggling between hide and show.


// $("button").on("click", function() {
//  $("h1").fadeToggle();                     //same as aabove
//  });    

// $("button").on("click", function() {
//     $("h1").slideToggle(); 
//     });                                 //sliding up and down. also we can used seperate.


//  $("button").on("click", function() {
//  $("h1").animate({margin: "20%"});
//  });                                       // we can also this type animation changes but it only valid for numeric values.

 $("button").on("click", function() {
    $("h1").slideUp().slideDown ().animate({opacity: 2.5}); // chaining of animation.
    });