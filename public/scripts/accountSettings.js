const tab8tn=document.querySelectorAll(".tab");
const tab = document.querySelectorAll(".tabShow");

function tabs(panelIndex) {
    tab.forEach(function(node) {
        node.style.display= "none"
    });
    tab[panelIndex].style.display ="block";

}
tabs(0);

$(".tab").onclick(function() {
    $(this).addClass("active").siblings().removeClass("active");
})
