$(".icons").mouseenter(function () {
    $(this).removeClass("fa-4x").addClass("fa-5x");
}).mouseleave(function () {
    $(this).removeClass("fa-5x").addClass("fa-4x");
})

$(".title-icons").mouseenter(function () {
    $(this).addClass("fa-2x");
}).mouseleave(function () {
    $(this).removeClass("fa-2x");
})
