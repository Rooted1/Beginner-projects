// $(document).ready(function(){
//     $("#tweet_bird").hover("Tweet this quote"); 
// alert("I'm working fine!");
// // });

var quotes = [
    '"Being on top of the world doesn\'t mean anything unless you know what it\'s like to be at the bottom."',
    '"There are no perfect man in the world, only perfect intentions."',
    '"Here\'s to the moments when we didn\t think about right or wrong; where we just lived crossed our fingers and hoped for the best."',
    '"The truth is hard to swallow when you\'re choked with pride."',
    '"People say that before you die, your life flashes before your eyes."',
    '"I\'m not changing who I am, I\'m just finally figuring it out."',
    '"Dreaming of the person you want to be is the person you already are."',
    '"Sometimes we expect more from others, cause we would be willing to do that much for them."'
    '"Sometimes you just want to yell it out to the world..but then you\'re scared they might hear you."',
    '"You have to know how to accept rejection and reject acceptance."',
    '"Most people run deep down, they want to be chased."', 
    '"One must care about a world one will not see." <br> --Bertrand Russell'
];


function randomQuotes(){
    var newQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("divId").innerHTML=newQuotes;
}

// quotes.push("\"One must care about a world one will not see.\" <br> --Bertrand Russell");




  //linkElement = document.getElementById("tweet_quote");
// var linkElement = $("#tweet_quote");
// $(linkElement).click(function(event){
//   event.preventDefault();

//   var tweetedLink;

//   if(!window.location.origin) {
//      tweetedLink = window.location.protocol + "//" + window.location.hostname + window.location.pathname;
//   } else {
//      tweetedLink = window.location.origin + window.location.pathname;
//   }

//   window.open("http://twitter.com/intent/tweet?url=" + tweetedLink + "&text=" + "&via=ruchiegirl&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");

// });





