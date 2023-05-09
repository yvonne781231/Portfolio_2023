$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  console.log(pageBottom)
  var tags = $(".js-fadein-down")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).offset().top < pageBottom) {
      $(tag).addClass("js-fadein-down--active")
    } else {
      $(tag).removeClass("js-fadein-down--active")
    }
  }
  var tags = $(".js-fadein-up")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).offset().top < pageBottom) {
      $(tag).addClass("js-fadein-up--active")
    } else {
      $(tag).removeClass("js-fadein-up--active")
    }
  }
  var tags = $(".js-fadein-left")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).offset().top < pageBottom) {
      $(tag).addClass("js-fadein-left--active")
    } else {
      $(tag).removeClass("js-fadein-left--active")
    }
  }
  var tags = $(".js-fadein-right")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).offset().top < pageBottom) {
      $(tag).addClass("js-fadein-right--active")
    } else {
      $(tag).removeClass("js-fadein-right--active")
    }
  }
})