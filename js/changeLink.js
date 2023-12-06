// Callback function example
$('body').hide().fadeIn(4000, function(){alert("done");});
// How jquery event is working
$('h1').click(function(){
    $(this).text("Hide The Image");
    $('img').hide();
    $('body').children('p').slideToggle();
});

// Play with JQuery .each function

// Update the image link

$('img').each(function(){
    var path = $(this).attr('src');
    if (!path.includes("img/")){
        $(this).attr('src',("img/" + path));
    }
    console.log($(this).attr('src'));
});

// update the anchor link ---- all links go to google.com

$('a').each(function(){
    $(this).attr("href", "https://google.com");
    $(this).css("text-decoration", "line-through");
});

