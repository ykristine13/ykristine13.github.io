$(document).ready(function () {
    /* Select randomly from listed quotations */
    var quotations = [];
    quotations[0] = '"Success is stumbling from failure to failure with no loss of enthusiasm."   - Winston Churchill';
    quotations[1] = '"An unexamined life is a life not worth living." - Socrates';
    quotations[2] = '"Falling in love is by chance. To stay in love is by choice."';
    quotations[3] = '"True success is overcoming the fear of being unsuccessful." -Paul';
    quotations[4] = '"He who fears he will suffer, already suffers because he fears."   - Michel De Montaigne';
    quotations[5] = '"You must be the change you wish to see in the world"  - Gandhi';
    quotations[6] = '"Life is really simple, but we insist on making it complicated." - Confucius';

    var min = 0;
    var max = quotations.length;

    function generateRandom() {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /* Load a random quote from the list upon website */
    var randomNum = generateRandom();
    var link = "https://twitter.com/intent/tweet?text=" + quotations[randomNum] + " via @ykristine13";

    // randomly choose from the hard-coded quotes in the array
    var randomQuote = function () {
        var newRandomNum = generateRandom();
        
        while (newRandomNum == randomNum) {
            newRandomNum = generateRandom;
        }
        $("#quoteText").text(quotations[newRandomNum]);
    }
      // display initial quote
    randomQuote();
    
    // events
    $("#getQuoteBtn").click(function () {
        randomQuote();
    });
    $("#twitter-wjs").attr("href", link);
});