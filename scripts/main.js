var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/300px-Humpback_whales_in_singing_position.jpg') {
      myImage.setAttribute ('src','images/humpack_whale_2.jpg');
    } else {
      myImage.setAttribute ('src','images/300px-Humpback_whales_in_singing_position.jpg');
    }
}
function surprise() {
  var sourceOfPicture = "images/Hello there... - Imgur.gif";
  var img = document.getElementById('surprise')
  img.src = sourceOfPicture.replace('90x90', '225x225');
  img.style.display = "block";
}
