var img0 = document.getElementById('img_0');
var img1 = document.getElementById('img_01');
var img2 = document.getElementById('img_02');
var img3 = document.getElementById('img_03');
var img4 = document.getElementById('img_04');
var img5 = document.getElementById('img_05');
var imgArr = Array.of(img5, img4, img3, img2, img1);


var imgIndex = 0;

var id = setInterval(function() {
	++imgIndex;
	img0.innerHTML = '<div id="img_'+ imgIndex +'" class="img-'+ imgIndex +'"></div>';
	if (imgIndex === imgArr.length) {
		clearInterval(id);
	}
}, 1000)