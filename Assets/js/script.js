//var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
$(document).ready(function () {
var quote,
    author;
                  
    quote = document.getElementById("quote");
    author = document.getElementById("author");
    

function getNewQuote() {
    $.ajax({
       url: 'http://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
            method: 'getQuote',
            format: 'jsonp',
            lang: 'en'
        },
        success: function(res) {
            console.log(res);
            quote = res.quoteText;
            author = res.quoteAuthor;
            
            $('#quote').text(quote);
            
            if(author) {
                $('#author').text('Author: ' + author);
            } else {
                $('#Author').text('Author: Unknow');
            }
/*
            // fix the colors code   - this is the only problem; 
            var color = Math.floor(Math.random() * colors.length);
            $("html body").animate({
                backgroundColor: colors[color],
                color: colors[color]
            }, 1000);
            $(".button").animate({
                backgroundColor: colors[color]
            }, 1000);
*/
        }
    });
}

getNewQuote();

    
    $('.new-quote').on("click", function() {
        event.preventDefault();
        getNewQuote();
    });
    
    $('.tweet').on("click", function(event) {
        event.preventDefault();
        
        
        
        if(quote.length > (250 - author)) {
        quote = "\"" + quote.substr(0,(250 - author)).match(/(.+)\s/)[1] + "..." + "\"";
    } else {
        quote = "\"" + quote + "\""; 
    }
       
        
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote +  " by " + author) + " &hashtags=inspirational");
    });
        

        
    
               });
