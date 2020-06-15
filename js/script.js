var sliderControlsList = document.querySelectorAll('.slider-control');
var featuresSlidesList = document.querySelectorAll('.feature-slide');

var addSliderControlClickHandler = function(sliderControl, featuresSlide) {
  sliderControl.addEventListener('click', function() {
    for (var j = 0; j < sliderControlsList.length; j++) {
      sliderControlsList[j].classList.remove('current');
      featuresSlidesList[j].classList.remove('current-slide');
    };

    sliderControl.classList.add('current');
    featuresSlide.classList.add('current-slide');
  });
};

for (var i = 0; i < sliderControlsList.length; i++) {
  addSliderControlClickHandler(sliderControlsList[i], featuresSlidesList[i]);
}