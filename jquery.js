$("#tabs-nav li:first-child").addClass("active");
$(".tab-content").hide();
$(".tab-content:first").show();

// Click function
$("#tabs-nav li").click(function () {
  $("#tabs-nav li").removeClass("active");
  $(this).addClass("active");
  $(".tab-content").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});

$(".video")
  .parent()
  .click(function () {
    if ($(this).children(".video").get(0).paused) {
      $(this).children(".video").get(0).play();
      $(this).children(".playpause").fadeOut();
    } else {
      $(this).children(".video").get(0).pause();
      $(this).children(".playpause").fadeIn();
    }
  });

$("#tabs-nav li").click(function (e) {
  $("video").trigger("pause");
});
