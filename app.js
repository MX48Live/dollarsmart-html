$(document).ready(function () {
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

  $(window).scroll(function () {
    var window_top = $(window).scrollTop() - 0;
    var objectLocation = $(".toggle-sticky").offset().top;
    var stickyPoint = $(".start-sticky").offset().top;
    var expectEndSticky = $(".end-sticky").offset().top;
    var objectHeigh = $("img.demo.business").height();
    var endOfSticky = expectEndSticky - $("img.demo.business").height();

    var setMarginTopOnEndSticky = expectEndSticky - stickyPoint - objectHeigh;

    if (window_top > stickyPoint - 100) {
      if (!$(".toggle-sticky").is(".sticky")) {
        $(".toggle-sticky").addClass("sticky");
      }
    } else {
      $(".toggle-sticky").removeClass("sticky");
    }

    if (window_top > endOfSticky) {
      if (!$(".toggle-sticky").is(".lock")) {
        $(".toggle-sticky").addClass("lock");
        $(".toggle-sticky").css("margin-top", setMarginTopOnEndSticky + 100);
      }
    } else {
      $(".toggle-sticky").removeClass("lock");
      $(".toggle-sticky").css("margin-top", 0);
    }
  });
});
