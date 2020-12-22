const tabtn=document.querySelectorAll(".side-nav ul li");
const tab = document.querySelectorAll(".tabs");

function show(panelIndex) {
    tab.forEach(function(node) {
        node.style.display= "none"
    });
    tab[panelIndex].style.display ="block";

}
show(0);

$(".side-nav ul li").click(function() {
    $(this).addClass("active").siblings().removeClass("active")
})

$(document).ready(function(){
    $("button").click(function(){
        $(window).attr('location','views/users/accountSettings.ejs');
    });
});
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

