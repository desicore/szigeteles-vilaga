// Wood wool product benefits
$(".ww-overview_component").each(function (index) {
  let childTriggers = $(this).find(".ww-overview_content-item");
  let childTargets = $(this).find(".ww-overview_image-item");
  // switch active class
  function makeItemActive(index) {
    childTriggers.removeClass("is-active");
    childTargets.removeClass("is-active");
    childTriggers.eq(index).addClass("is-active");
    childTargets.eq(index).addClass("is-active");
  }
  makeItemActive(0);
  // scroll trigger
  childTriggers.each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top center",
      end: "bottom center",
      markers: false,
      onToggle: (isActive) => {
        if (isActive) {
          makeItemActive(index);
        }
      }
    });
  });
});
