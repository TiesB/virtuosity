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
                                    },500);
                                },200);
                            },1000);
                        },500);
                    },1000);
                },200);
            },1000);
        },100);
    }, 3000);
});

function logoOn() {
    $("#logo").attr("src","img/logorood.svg");
}

function logoOff() {
    $("#logo").attr("src","img/logoroodgeenlamp.svg");
}
