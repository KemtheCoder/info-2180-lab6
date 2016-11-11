$(document).ready(function(){
    var search = $("#search");
    var searchAll = $("#searchAll");
    var result = $("#result");
    
    search.on("click", function(){
        console.log("searching...")
        
        var word = $("input").val();
        if (word != "") {
            $.ajax("request.php?q=" + word, {
                method: "GET"
            }).done(function(response) {
                console.info("done");
                alert(response);
                $(result).html(response);
            }).fail(function() {
                $(result).html("There was a problem with your request. ");
            });
        } 
        else { $(result).html("Please enter a word. ");
            
        }
            
    });
});
    
    