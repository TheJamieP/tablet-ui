$(document).ready(function () {
  for (var i = 0; i < 10; i++) {
    $(`#slider-${i}`).on("input change", (e) => {
      console.log(e.target.id);
      i = e.target.id.split("-")[1];
      console.log(i);
      const sliderPos = e.target.value;
      // Update the width of the foreground image
      $(`.foreground-img-${i}`).css("width", `${sliderPos}%`);
      // Update the position of the slider button
      $(`#slider-button-${i}`).css("left", `calc(${sliderPos}% - 18px)`);
    });
  }
});
