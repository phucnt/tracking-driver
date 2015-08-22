/*****************************************************************************/
/* ScanBarcode: Event Handlers */
/*****************************************************************************/
Template.ScanBarcode.events({
  'click #takePicture':function(){
    var video = document.querySelector("#vid");
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    var localMediaStream = null;

    var onCameraFail = function (e) {
      console.log('Camera did not work.', e);
    };

    function snapshot() {
      if (localMediaStream) {
        ctx.drawImage(video, 0, 0,260,240);
      }
    }
    document.getElementById('Capture_Screen').addEventListener('click', snapshot, false);
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia({video:true}, function (stream) {
      video.src = window.URL.createObjectURL(stream);
      localMediaStream = stream;
    }, onCameraFail);
  },
  'click #Capture_Screen':function(){
    $('#canvas').removeClass('hide');
  }
});

/*****************************************************************************/
/* ScanBarcode: Helpers */
/*****************************************************************************/
Template.ScanBarcode.helpers({
});

/*****************************************************************************/
/* ScanBarcode: Lifecycle Hooks */
/*****************************************************************************/
Template.ScanBarcode.onCreated(function () {

});

Template.ScanBarcode.onRendered(function () {
  var canvas = document.getElementById("canvas");
  var parent = document.getElementById("camera");
  canvas.width = parent.offsetWidth;
  canvas.height = 240;
});

Template.ScanBarcode.onDestroyed(function () {
});
function snapshot (){

}