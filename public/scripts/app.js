
//Nav Bar//

/* needs message board
$(document).ready(function(){
    $("#message").click(function(){
        $(window).attr('location','');
    });
});
*/
// $(document).ready(function(){
//     $("#post").click(function(){
//         $(window).attr('location','views/users/new.ejs');
//     });
// });

// $(document).ready(function(){
//     $("#home").click(function(){
//         $(window).attr('location','views/home.ejs');
//     });
// });

// $(document).ready(function(){
//     $("#profile").click(function(){
//         $(window).attr('location','views/users/usersProfile.ejs');
//     });
// });

// /* Account Setting tabs*/
// const tab8tn=document.querySelectorAll(".tab");
// const tab = document.querySelectorAll(".tabShow");

// function tabs(panelIndex) {
//     tab.forEach(function(node) {
//         node.style.display= "none"
//     });
//     tab[panelIndex].style.display ="block";

// }
// tabs(0);

// $(".tab").onclick(function() {
//     $(this).addClass("active").siblings().removeClass("active");
// })



/* Edit profile swap view*/
$("#personal").click(function(){
    $(".personal").show();
    $(".account").hide();
});

$("#account").click(function(){
    $(".account").show();
    $(".personal").hide();
})

$("#system").change(function(){
    if(this.value === 'PC'){
        $(".pc--specs").prop('disabled', false);
    } else {
        $(".pc--specs").prop('disabled', true);
    }
})