var imageShow = document.querySelector('.imageShow');
var images = [];
var i = 0;

images[0] = '/img/amu.png';
images[1] = '/img/language.png';
images[2] = '/img/library.png';
images[3] = '/img/study.png';

function prev(){
	if(i <= 0){i = images.length;}
	i--;
	return showImage();
}

function next(){
	if(i >= images.length - 1){i = -1;}
	i++;
	return showImage();
}

function showImage(){
	return imageShow.setAttribute('src', images[i]);
}
