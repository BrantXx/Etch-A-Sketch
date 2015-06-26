$(document).ready(function () {
    $('#toolbar').append('<div id="rst_btn" class="btn_style" onclick="reset()">Reset</div>');
    $('#toolbar').append('<div id="grid_btn" class="btn_style" onclick="newGrid()">Grid Size</div>');
    $('#toolbar').append('<div class="btn_style" id="style_btn" onclick="newColor()">Style');
    $('#content').append('<div id="container"></div>');
    for (var i = 0; i < 256; i++) {
        $('#container').append("<div id='grid_data'></div>");
    }
    // Reset Button Style
    $('#rst_btn').mouseenter(function () {
        $('#rst_btn').fadeTo('fast', 1);
    });
    $('#rst_btn').mouseleave(function () {
        $('#rst_btn').fadeTo('fast', 0.5);
    });
    // Grid Size Button Style
    $('#grid_btn').mouseenter(function () {
        $('#grid_btn').fadeTo('fast', 1);
    });
    $('#grid_btn').mouseleave(function () {
        $('#grid_btn').fadeTo('fast', 0.5);
    });
    // Style Button Style
    $('#style_btn').mouseenter(function () {
        var r = Math.floor((Math.random() * 254) + 1);
        var g = Math.floor((Math.random() * 254) + 1);
        var b = Math.floor((Math.random() * 254) + 1);
        $('#style_btn').fadeTo('fast', 1);
            $('#style_btn').css('color', 'rgb(' + r + ',' + g + ',' + b + ')');
        })
        $('#style_btn').mouseleave(function () {
            $('#style_btn').fadeTo('fast', 0.5);
                $('#style_btn').css('color', '#FFFFFF');
        })
});

function newGrid() {
    var gridSize = prompt("Enter a new grid size (Recommended to not go over 100!):");
    $('#container').empty();

    for (var i = 0; i < gridSize * gridSize; i++) {
        $('#container').append('<div id="grid_data"></div>');
    }
    var newWH = (600 / gridSize);
    $('div div div').css('width', newWH);
    $('div div div').css('height', newWH);
}

function reset() {
    $('div div div').removeClass('black');
    $('div div div').css('background-color', 'white');
}

function black() {
    $('div div div').addClass('black');
    $('div div div').hover(function () {
        $(this).css("opacity", '+=.1');
        $(this).css('background-color', '#000000');
    });

}

function newColor() {
    var gridStyle = prompt("style: rgb / black".toLowerCase());
    switch (gridStyle) {

        case 'rgb':
            reset();
            $('div div div').hover(function () {
                r = Math.floor((Math.random() * 254) + 1);
                g = Math.floor((Math.random() * 254) + 1);
                b = Math.floor((Math.random() * 254) + 1);
                $(this).css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
            });
            break;

        case 'black':
            reset();
            black();
            break;
    }
}