function liked0() {
    document.getElementById("0").innerHTML = "1 Like";
}

function liked1() {
    document.getElementById("1").innerHTML = "1 Like";
}

function liked2() {
    document.getElementById("2").innerHTML = "1 Like";
}

function liked3() {
    document.getElementById("3").innerHTML = "1 Like";
}

function liked4() {
    document.getElementById("4").innerHTML = "1 Like";
}

function post_now() {
    var button = document.getElementById('post_button');
    var txt = document.getElementById('post_txt');

    button.addEventListener('click', function () {
        var post_text = txt.value;
        targetField_post = post_text;
        document.getElementById('input_post').innerHTML =
            "<div class='row well' id='post_well'>" +
            "<div class='col-sm-3'>" +
            "<img src='pics/persona_pic.png'> <p><b>Tom</b> <br>1 sec ago</p> </div>" +
            "<div class='col-sm-9'>"
            + post_text +
            "<br><br><br><hr class='line_post'><p id='0' class='text-left'></p>" +
            "<div class='block-buttons'> <div class='btn-group'>" +
            "<button type='button' class='btn btn-default btn-sm' onclick='liked0()'>" +
            "<span class='glyphicon glyphicon-thumbs-up'></span> Like </button>" +
            "<button type='button' class='btn btn-default btn-sm'>" +
            "<span class='glyphicon glyphicon-comment'></span> Comment </button>" +
            "</div></div></div>";

    });
}

/*function comments() {
    var comment_button = document.getElementById('comment_button');
    var comment_txt = document.getElementById('write_comments');

    button.addEventListener('click', function () {
        var write_comments = comment_txt;
        targetField_comment = write_comments;
        document.getElementById('comment_posted').innerHTML = targetField_comment;

    }*/