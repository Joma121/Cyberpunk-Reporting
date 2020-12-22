//Nav Bar//

/* needs message board
$(document).ready(function(){
    $("#message").click(function(){
        $(window).attr('location','');
    });
});
*/
$(document).ready(function(){
    $("#post").click(function(){
        $(window).attr('location','views/users/new.ejs');
    });
});

$(document).ready(function(){
    $("#home").click(function(){
        $(window).attr('location','views/home.ejs');
    });
});

$(document).ready(function(){
    $("#profile").click(function(){
        $(window).attr('location','views/users/usersProfile.ejs');
    });
});


