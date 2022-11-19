//responsive top navbar
		function nav() {
			var mobinav = document.getElementById("mobinav");
			if(mobinav.className === "collapse"){
				mobinav.className += " show";
			}
			else{
				mobinav.className = "collapse";
			}
		}
