function formatState(state) {
  if (!state.id) {
    return state.text;
  }

  var baseUrl = "./img/flags";
  var $state = $('<span><img class="img-flag" /> <span></span></span>');

  // Use .text() instead of HTML string concatenation to avoid script injection issues
  $state.find("span").text(state.text);
  $state
    .find("img")
    .attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");

  return $state;
}

$(".js-language-switcher").select2({
  templateSelection: formatState,
});

$(".js-country-select").select2({
  templateSelection: formatState,
});

$(".js-country-select").change(function () {
  switch (this.value) {
    case "flag-aus":
      selectedURL = "https://audsmart.com";
      break;
    case "flag-th":
      selectedURL = "https://bahtsmart.com";
      break;
    case "flag-hk":
      selectedURL = "https://hkdsmart.com";
      break;
    default:
      selectedURL = "";
  }
});

var div_top = $("img.demo").offset().top;

$(window).scroll(function () {
  var window_top = $(window).scrollTop() - 0;
  if (window_top > div_top) {
    if (!$("img.demo").is(".sticky")) {
      $("img.demo").addClass("sticky");
    }
  } else {
    $("img.demo").removeClass("sticky");
  }
});
