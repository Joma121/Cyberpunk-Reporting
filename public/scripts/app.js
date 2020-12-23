
/* Edit profile swap view*/
$("#personal").click(function(){
    $(".personal").show();
    $(".account").hide();
});

$("#account").click(function(){
    $(".account").show();
    $(".personal").hide();
})

/* Toggles PC specific fields */
$("#system").change(function(){
    if(this.value === 'PC'){
        $(".pc--specs").prop('disabled', false);
    } else {
        $(".pc--specs").prop('disabled', true);
    }
})