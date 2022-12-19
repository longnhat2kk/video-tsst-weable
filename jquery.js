$(function () {
  $("#playlist li").on("click", function () {
    $("#videoarea").attr({
      src: $(this).attr("movieurl"),
      poster: "",
      autoplay: "autoplay",
    });
  });
  $("#videoarea").attr({
    src: $("#playlist li").eq(0).attr("movieurl"),
    poster: $("#playlist li").eq(0).attr("moviesposter"),
  });
});

$(".show-video")
  .parent()
  .click(function () {
    if ($(this).children(".show-video").get(0).paused) {
      $(this).children(".show-video").get(0).play();
      $(this).children(".play-video").fadeOut();
    } else {
      $(this).children(".show-video").get(0).pause();
      $(this).children(".play-video").fadeIn();
    }
  });
