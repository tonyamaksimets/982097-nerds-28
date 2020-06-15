var sliderControlsList = document.querySelectorAll('.slider-control');
var featuresSlidesList = document.querySelectorAll('.feature-slide');

var feedbackLink = document.querySelector('.feedback-link');
var feedback = document.querySelector('.feedback');
var feedbackClose = feedback.querySelector('.close-button');
var feedbackName = feedback.querySelector('.feedback-field-name');
var feedbackEmail = feedback.querySelector('.feedback-field-email');
var feedbackMessage = feedback.querySelector('.feedback-field-message');
var feedbackForm = feedback.querySelector('.feedback-form');

var isStorageSupport = true;
var storageName = '';
var storageEmail ='';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

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


feedbackLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedback.classList.add('open-modal');

  if (storageName && storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackMessage.focus();
  } else if (!storageName && !storageEmail) {
    feedbackName.focus();
  } else if (storageName && !storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
  } else {
    feedbackEmail = storageEmail;
    feedbackName.focus();
  }
});

feedbackClose.addEventListener('click', function() {
  feedback.classList.remove('open-modal');
  feedback.classList.remove('error-modal');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains('open-modal')) {
      evt.preventDefault();
      feedback.classList.remove('open-modal');
      feedback.classList.remove('error-modal');
    }
  }
});

feedbackForm.addEventListener('submit', function(evt) {
  if (feedbackName.value && feedbackEmail.value && feedbackMessage.value) {
    if (isStorageSupport) {
      localStorage.setItem('name', feedbackName.value);
      localStorage.setItem('email', feedbackEmail.value);
    }
  } else {
    evt.preventDefault();
    feedback.classList.remove('error-modal');
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add('error-modal');
  }
});
