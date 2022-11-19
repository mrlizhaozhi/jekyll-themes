function openSide(){
	sideMenu = document.getElementById("blog-column-left");
	main = document.getElementById('blog-column-right');
	if(sideMenu.style.display === "block"){
		sideMenu.style.display = "none";
	}
	else{
		sideMenu.style.display = "block";
		main.style.display = "none";
	}
}
