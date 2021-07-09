var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}
function iniciarMap(){
		var coord = {lat:-1.6623888888888887 ,lng: -78.66169444444445};
	    var map = new google.maps.Map(document.getElementById('map'),{
	      zoom: 10,
	      center: coord
	    });
	    var marker = new google.maps.Marker({
	      position: coord,
	      map: map
	    });
	}

	