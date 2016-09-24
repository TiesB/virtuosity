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
                                                }, 1000, function() {
                                                    setTimeout(function() {
                                                        $('html, body').animate({
                                                            scrollTop: $("#info").offset().top-100
                                                        }, 1000);
                                                        $("#arrow-down").hide();
                                                        $("#arrow-up").show();
                                                    },1000);
                                                });
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
    }, 1000);

    $("#arrow-down").click(function() {
        $('html, body').animate({
            scrollTop: $("#info").offset().top-100
        }, 1000);
        $(this).hide();
        $("#arrow-up").show();
    });

    $("#arrow-up").click(function() {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
        $(this).hide();
        $("#arrow-down").show();
    });
});

function logoOn() {
    $("#logo").attr("src","img/logorood.svg");
}

function logoOff() {
    $("#logo").attr("src","img/logoroodgeenlamp.svg");
}
