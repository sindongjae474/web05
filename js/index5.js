$(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown();
    })
    $(".main>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

    sliding();

    $(".tab>li").on("click", function(){
        $(".tab>li>a").removeClass("on-click");

        $(this).children("a").addClass("on-click");

        $(".contents>div").css('display', 'none');
        console.log($(this).children("a").attr('href'));

        $($(this).children("a").attr('href')).css('display', 'block');
    })

    $("#notice>ol>li:first").on("click", function(){
        $("#layer-wrap").addClass("active");
    })

    $(".close").on("click", function(){
        $("#layer-wrap").removeClass("active");
    })
})

var now = 0;
var tot = 2;

function sliding(){
    var imgs = $(".imgs").find("img");

    imgs.eq(2).css('display', 'none');
    imgs.eq(1).css('display', 'none');

    setInterval(function(){
        if (now == tot) now = 0;
        else now ++;

        imgs.eq(now-1).stop().fadeOut(100);
        imgs.eq(now).stop().fadeIn(100);
    }, 3000);
}

