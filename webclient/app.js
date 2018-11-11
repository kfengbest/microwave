$(document).ready(function(){

    $("ul.cookingButtons").click(function(e){
        
        if(e.target.className.indexOf("cookingMenu") >= 0){
            $( "li.cookingMenu" ).each(function(i,e){
                $(e).removeClass("hide").addClass("hide");
             });
    
             $( event.target ).removeClass("selected").addClass("selected").removeClass("hide").addClass("show");
    
             $( "li.cookingTime" ).each(function(i,e){
                $(e).removeClass("hide").removeClass("show").addClass("show");
             });
        } else if(e.target.className.indexOf("cookingTime") >= 0){
            $( "li.cookingTime" ).each(function(i,e){
                $(e).removeClass("show").removeClass("hide").addClass("hide");
            });
            $( event.target ).removeClass("selected").addClass("selected").addClass("show");
        }
     })


    $('.start').click(function () { 
        if (Clock.interval == null){
            var timeObj = $("li.cookingTime.selected");
            if(timeObj && timeObj[0]){
                var secStr = timeObj[0].innerHTML.replace("s","");
                var sec = parseInt(secStr);
                if(Clock.totalSeconds == 0)
                    Clock.totalSeconds = sec;
                Clock.start();
                
                // call backend API.
                $.ajax({
                    url: "http://localhost:3000/microwaves/1/start?t=" + Clock.totalSeconds,
                    aysnc: true,
                    crossDomain: true
                  }).done(function() {
                    console.log("done");
                  }).fail( function(xhr, textStatus, errorThrown) {
                    console.log(xhr.responseText);
                    console.log(textStatus);
                });
            }
            
        }
    });

    $('.pause').click(function () { 
        Clock.pause(); 
        // or resume
    });

    $('.reset').click(function () { 
        
        $( "li.cookingMenu" ).each(function(i,e){
            $(e).removeClass("hide").removeClass("selected").removeClass("show");
        });
        $( "li.cookingTime" ).each(function(i,e){
            $(e).removeClass("show").removeClass("selected").removeClass("hide").addClass("hide");
        })
        
        Clock.reset(); 
    });
    
});
