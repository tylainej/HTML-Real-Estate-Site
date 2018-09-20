var modal = document.getElementById('myModal');

var btn = document.getElementById("slideShow");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var slide = 1;

apartmentPics(slide);

function building(n){
	apartmentPics(slide += n);
}

function apartmentPics(n){
	var a;
	var b = document.getElementsByClassName("preview");

	if (n > b.length){
		slide = 1;
	};
	// if(n < b.length){
	// 	slide = b.length-1;
	// }
	for( a = 0; a < b.length; a++){
	b[a].style.display = "none";
	}
	b[slide-1].style.display = "block";


}



