function switch_mode(){
    button_text = document.getElementById("switch_mode")
    text_background = document.getElementById("page_content");
    if(button_text.innerHTML == "Dark"){
        button_text.innerHTML = "Light";
        text_background.classList.add("dark_mode")
    }else{
        button_text.innerHTML = "Dark";
        text_background.classList.remove("dark_mode")
    }
}