var Reviews = 1;
Testimonials (Reviews);

function Slide(n) {
	Testimonials(Reviews += n);

}
// n is going to continue to the next pic

function Testimonials(n) {
	var i;
	var x = document.getElementsByClassName("words");

	if(n>x.length) {  
		Reviews = 1;
	}

// length is 15 cuz there are 15 photos
// if n is greater than the length of album then go back to the first
	if(n < 1) { 
		Reviews = x.length;
	}
// if n is less than 15 then go to the last pics
	for( i = 0; i < x.length; i++){
	x[i].style.display = "none";
	}
	x[Reviews-1].style.display = "block";
}

// carousel for videos on gallery page starts here----


