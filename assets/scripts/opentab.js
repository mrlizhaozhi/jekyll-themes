function openTab(event, TabName){
	var i, tablink, tabcontent;
	tablink = document.getElementsByClassName('tablink');
	for(i = 0; i < tablink.length; i++){
		tablink[i].className = tablink[i].className.replace(" active", "");
	}
	tabcontent = document.getElementsByClassName('tabcontent');
	for(i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
		tabcontent[i].style.setProperty("display", "none", "important");
	}
	document.getElementById(TabName).style.display = "block";
	event.currentTarget.className += " active";
}
document.getElementById('default').click();
