var position = 0;
function Left() {
    if (position < 2) {
        var slider = document.getElementById('slider');
        position += 1;
        var offset = position * 140;
        slider.style.transform = "translateX(-" + offset + "px)"
    }
}
function Right() {
    if (position > 0) {
        var silider = document.getElementById('slider');
        position -= 1;
        var offset = position * 140;
        slider.style.transform = "translateX(-" + offset + "px)"
    }
}
function post() {
    var Input = document.getElementById('InputMessage').value;
    var post = document.createElement("li");
    post.innerText = Input;
    var UserName = document.createElement('li');
    UserName.innerText = "Chantal B.";
    var FirstPost = document.getElementById('ul');
    var NamePost = document.getElementById('ul');
    NamePost.append(UserName);
    FirstPost.append(post);
    document.getElementById('InputMessage').value = "";
}

