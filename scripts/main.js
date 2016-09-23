$(document).ready(function() {
    setTimeout(function() {
        logoOn();
        setTimeout(function() {
            logoOff();
            setTimeout(function() {
                logoOn();
                setTimeout(function() {
                    logoOff();
                    setTimeout(function() {
                        logoOn();
                        setTimeout(function() {
                            logoOff();
                            setTimeout(function() {
                                logoOn();
                                setTimeout(function() {
                                    logoOff();
                                    setTimeout(function() {
                                        logoOn();
                                        setTimeout(function() {
                                            $("#symposium").animate({
                                                opacity: 1
                                            }, 1000, function() {
                                                $("#date").animate({
                                                    opacity: 1
                                                }, 1000);
                                            });
                                        },1000);
                                    },500);
                                },200);
                            },1000);
                        },500);
                    },1000);
                },200);
            },1000);
        },100);
    }, 2000);

    $("#arrow-down").click(function() {
        console.log('niks');
        $('html, body').animate({
            scrollTop: $("#info").offset().top
        }, 1000);
    });
});

function logoOn() {
    $("#logo").attr("src","img/logorood.svg");
}

function logoOff() {
    $("#logo").attr("src","img/logoroodgeenlamp.svg");
}
