/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/

var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});

$(".owl-next").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".owl-next").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});
$(".owl-prev").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".owl-prev").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});
$(".owl-dot").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".owl-dot").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});
