/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function () {
  $(".navbar-toggle:visible").click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function () {
  $(this).blur();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, "load", init);

// Create the script tag, set the appropriate attributes
var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyAejkXGPr0Mcc_vplMLZPxrXccI1-48iWE&callback=initMap";
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 12,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(51.5172922, -0.1418366), // London

    // Disables the default Google Maps UI components
    disableDefaultUI: true,
    scrollwheel: true,
    draggable: true,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            lightness: 100,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#C6E2FF",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#C5E3BF",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#D1D1B8",
          },
        ],
      },
    ],
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("google-maps");

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
  var image = "img/map-marker.png";
  var myLatLng = new google.maps.LatLng(40.67, -73.94);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
  });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
