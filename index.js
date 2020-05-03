// Create viewer
viewer = pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "Equirectangular.jpg",
  "hotSpots": [
    { // 1
      "pitch": -12,
      "yaw": 125,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenModal("mindfulness") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Mindfulness Techniques"
    },
    { // 2
      "pitch": 6,
      "yaw": 61,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenModal("artGallery") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Art Gallery"
    },
    {//3
      "pitch": 5,
      "yaw": 123,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenModal("historicalAssets") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Historical Photographs"
    },
    { // 4
      "pitch": 5,
      "yaw": 179,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenModal("window") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Window"
    },
	{ // 7
      "pitch": 0,
      "yaw": 92,
      "cssClass": "custom-hotspotghost",
      "clickHandlerFunc": function () { handleOpenModal("ghost") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": ""
    },
	
    { // 5
      "pitch": 14,
      "yaw": -73,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenRightPanel("scholastica") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "St. Scholastica"
    },
    { // 5 (2)
      "pitch": 14,
      "yaw": -105,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenLeftPanel("benedict") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "St. Benedict"
    },
    { // 6
      "pitch": -5,
      "yaw": 159,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenRightPanel("speaker") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Pleasant Audio"
    },
    { // 8
      "pitch": -25,
      "yaw": -40,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenModal("newspaper") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "The Script News"
    },
    {//9
      "pitch": -14,
      "yaw": 70,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenModal("earthClub") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Earth Action Club"
    },
    // 11
    {
      "pitch": -4,
      "yaw": 31,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenModal("coffeePot") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Coffee Pot"
    },
    //13
    {
      "pitch": -16,
      "yaw": -89,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenModal("fireplace") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Fireplace"
    },
    //14
    {
      "pitch": 5,
      "yaw": -22,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenModal("bulletin") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Additional Resources"
    },
    // Addition... The Quarry made more sense here.
    {
      "pitch": -3,
      "yaw": -119,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenLeftPanel("libraryResources") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Library"
    }
  ],
  // Panellum Config
  "autoLoad": true,
  "preview": "images/Other/EntranceSign.jpg",
  "hotSpotDebug": false,
  "maxPitch": 65,
  "minPitch": -95,
  "yaw": -90,
  "pitch": 0,
  "showZoomCtrl": false,
  "mouseZoom": false,
});

viewer.on('load', function () { handleOpenModal("welcomeMessage") });

/*begin global constants*/
var RIGHT_SIDEPANEL_ID = 'rightSidepanel';
var LEFT_SIDEPANEL_ID = 'leftSidepanel';
var MODAL_ID = 'modal';
var LEFT_SIDEPANEL_CLOSE_ID = 'leftSidepanelClose';
var RIGHT_SIDEPANEL_CLOSE_ID = 'rightSidepanelClose';
var MODAL_CLOSE_ID = 'modalClose';
var CONTENT_CONTAINER_SHOW_CLASS = 'show-contentContainer';
var CONTENT_SHOW_CLASS = 'show-content';
var BIRD_IMAGES_CLASS = 'birdImages';
var BIRD_AUDIO_CLASS = 'birdAudio';
/*end global constants*/

function handleOpenLeftPanel(hotspotContentId) {
  handleOpenContentContainer(hotspotContentId, LEFT_SIDEPANEL_ID);
}

function handleOpenRightPanel(hotspotContentId) {
  handleOpenContentContainer(hotspotContentId, RIGHT_SIDEPANEL_ID);
}

function handleOpenModal(hotspotContentId) {
  handleOpenContentContainer(hotspotContentId, MODAL_ID);
}

function closeAllOpenContentHolders(classThatDeterminesHideShow) {
  elementsToHide = document.getElementsByClassName(classThatDeterminesHideShow);

  Array.prototype.forEach.call(elementsToHide, function (hotspot) {
    hotspot.classList.remove(classThatDeterminesHideShow)
  });
}

function handleOpenContentContainer(hotspotContentId, contentContainerId) {
  closeAllOpenContentHolders(CONTENT_SHOW_CLASS);
  closeAllOpenContentHolders(CONTENT_CONTAINER_SHOW_CLASS);

  var contentContainer = document.getElementById(contentContainerId);
  var hotspotContentDiv = document.getElementById(hotspotContentId);

  setTimeout(function () {
    contentContainer.classList.add(CONTENT_CONTAINER_SHOW_CLASS);
    hotspotContentDiv.classList.add(CONTENT_SHOW_CLASS);
  }, 500);
}

function addCloseClickHandlers(contentContainerId, contentContainerCloseId) {
  var contentContainer = document.getElementById(contentContainerId);
  var contentContainerClose = document.getElementById(contentContainerCloseId);

  contentContainerClose.addEventListener('click', function () {
    pauseAudioPlayOnAllBirdSounds();
    contentContainer.classList.remove(CONTENT_CONTAINER_SHOW_CLASS);
  }, false)
}

function addContentContainerActions() {
  addCloseClickHandlers(RIGHT_SIDEPANEL_ID, RIGHT_SIDEPANEL_CLOSE_ID)
  addCloseClickHandlers(LEFT_SIDEPANEL_ID, LEFT_SIDEPANEL_CLOSE_ID)
  addCloseClickHandlers(MODAL_ID, MODAL_CLOSE_ID)
}

function pauseAudioPlayOnAllBirdSounds(clickedAudio) {
  var birdAudio = document.getElementsByClassName(BIRD_AUDIO_CLASS);


  Array.prototype.forEach.call(birdAudio, function (audio) {
    if (!clickedAudio || (clickedAudio && audio !== clickedAudio)) {
      audio.pause();
    }
  });
}

function addAudioClickHandlers() {
  birdImages = document.getElementsByClassName(BIRD_IMAGES_CLASS);

  Array.prototype.forEach.call(birdImages, function (image) {
    var imageIdentifier = image.getAttribute('data-imageIdentifier');
    var correspondingAudioElement = document.querySelector('[data-audioIdentifier="' + imageIdentifier + '"]');

    image.addEventListener('click', function () {
      pauseAudioPlayOnAllBirdSounds(correspondingAudioElement);
      if (correspondingAudioElement.paused) {
        correspondingAudioElement.play();
      } else {
        correspondingAudioElement.pause();
      }
    }, false)
  });
}

var track = document.querySelector('.carousel_track');
var slides = Array.from(track.children);
var nextButton = document.querySelector('#buttonRight');
var prevButton = document.querySelector('#buttonLeft');
var dotsNav = document.querySelector('.carousel_nav');
var dots = Array.from(dotsNav.children);

function addScreenResizeHandlers() {
  window.addEventListener('resize', setCarouselSize);
}

function setCarouselSize() {
  //this is a bit brittle and depends on current CSS calculations
  var windowWidth = window.innerWidth;
  var modalWidth = windowWidth * .8;
  var slideWidth = modalWidth * .8;

  //give the slide set the appropriate  height
  track.style.height = slideWidth * .65 + 'px';

  //Arrange the slides next to one another
  var setSlidePosition = function (slide, index) {
    slide.style.left = slideWidth * index + 'px';
  }
  slides.forEach(setSlidePosition);
}

function setUpCarousel() {
  setCarouselSize();

  var moveToSlide = function (track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  }

  var updateDots = function (currentDot, targetDot) {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  }

  var hideShowArrows = function (slides, prevButton, nextButton, targetIndex) {
    if (targetIndex === 0) {
      prevButton.classList.add('is-hidden');
      nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove('is-hidden');
      nextButton.classList.add('is-hidden');
    } else {
      prevButton.classList.remove('is-hidden');
      nextButton.classList.remove('is-hidden');
    }
  }

  //When I click right, move slides to the right
  nextButton.addEventListener('click', e => {
    var currentSlide = track.querySelector('.current-slide');
    var nextSlide = currentSlide.nextElementSibling;
    var currentDot = dotsNav.querySelector('.current-slide');
    var nextDot = currentDot.nextElementSibling;
    var nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);

  })

  //When I click left, move slides to the left
  prevButton.addEventListener('click', e => {
    var currentSlide = track.querySelector('.current-slide');
    var prevSlide = currentSlide.previousElementSibling;
    var currentDot = dotsNav.querySelector('.current-slide');
    var prevDot = currentDot.previousElementSibling;
    var prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
  })

  //Whn I click nav indicators, move to that slides
  dotsNav.addEventListener('click', e => {
    // what indicator was clicked on?
    var targetDot = e.target.closest('button');

    if (!targetDot) return;

    var currentSlide = track.querySelector('.current-slide');
    var currentDot = dotsNav.querySelector('.current-slide');
    var targetIndex = dots.findIndex(dot => dot === targetDot);
    var targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);

  })
}

/*start pannellum setup code*/
function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-tooltip');
  var span = document.createElement('span');
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
}
/*end pannellum setup code*/


/*start custom function calls*/
addContentContainerActions();
addAudioClickHandlers();
addScreenResizeHandlers();
setUpCarousel();
/*end custom function calls*/

