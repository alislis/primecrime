


$(document).ready(function () {

    //hide all views
    $("#last").hide();
    $("#view1").hide();
    $("#nameForm").hide();
    $("#view2").hide();
    $("#view3").hide();
    $("#view4").hide();
    $("#view5").hide();







    // set default values of global variable

    let userData = {
      username: undefined,
      aim: undefined,
      need: undefined,
      contact: undefined,
    };

    let flague = false;

    // clear all fields

    $("form").trigger('reset');
    $("input[type=text]").val("");





    // show name view
    $("#view1").fadeIn();
    $('.type-it').typeIt({
    });
    setTimeout(function () {
        $("#nameForm").fadeIn();
    }, 2500);


    $("#btn_1").click(function () {

        //toggle name view to aim view

        if ($("#name_input").val() != "") {
            userData.username = $("#name_input").val();
        } else {
            userData.username = "NoName";
        }


        $(".username").text(userData.username);

        $("#view1").slideToggle();
        $("#aimForm").hide();
        $("#view2").fadeIn();

        $("#btn_2").hide();

        $('.type-it2').typeIt({
        });
        setTimeout(function () {
            $("#aimForm").fadeIn();
        }, 3200);


    });


    // $("#aimForm").click(function () {
    //     userData.aim =
    //     console.log(userData);
    // });




    $("input[name=aimList]").click(function() {

        $("#btn_2").fadeIn();

        if ($(this).val() === $("input#aim_custom").val()) {
            $(this).next().hide();
            $("#custom_input").show();
            flague = true;
        }
        // $(this).next().css("border", "1px solid #ffeed9");
        //     $(this).next().css("box-shadow", "0 0 10px rgba(14, 104, 255, 0.39)");


        // userData.aim = $("input[name=aimList]:checked").val();
        //     $("#aim").text(userData.aim);
        //     console.log(userData);
        //
        //     $("#view2").slideToggle();
        //     $("#needForm").hide();
        //     $("#view3").fadeIn();
        //
        //
        //     $('.type-it3').typeIt({
        //     });
        //
        //     setTimeout(function () {
        //         $("#needForm").fadeIn();
        //     }, 4000);
        //
        //     $("#btn_3").hide();

        }
    );


    $("#btn_2").click(function () {

        // toggle aim view to needs view


        if (flague){
            userData.aim = $("#custom_input").val();
        } else {
            userData.aim = $("input[name=aimList]:checked").val();
        }

       $("#aim").text(userData.aim);
        console.log(userData);

        $("#view2").slideToggle();
        $("#needForm").hide();
        $("#view3").fadeIn();

        $("#btn_3").hide();

        $('.type-it3').typeIt({
        });

        setTimeout(function () {
            $("#needForm").fadeIn();
        }, 4000);


    });


    $("#needForm").click(function () {
        $("#btn_3").fadeIn();
    });




    $("#btn_3").click(function () {


        let needs = [];
        $("[name=needList]:checked").each(function () {
                needs.push($(this).val());

        });





        userData.need = needs;
        console.log(userData);





        //toggle needs view to contact view

        $("#view3").slideToggle();
        $("#contactForm").hide();
        $("#view4").fadeIn();


        $('.type-it4').typeIt({
        });

        setTimeout(function () {
            $("#contactForm").fadeIn();
        }, 3000);


    });



    $("#btn_4").click(function () {

            userData.contact = $("#contact_input").val();


        //toggle needs view to contact view

        $("#view4").slideToggle();
        $("#view5").fadeIn();

        $('.type-it5').typeIt({
        });


        console.log(userData);
        console.log("try to send it");

        setTimeout(function () {
            $("#view5").slideToggle();
            $(".mainForm").fadeOut("slow");
            $("#back").fadeOut("slow");
            $("#last").fadeIn("slow");

            sendData();

        }, 5000);




    });






    $("input[type=text]").on({
        focus: function(){
            $(this).css("background-color", "#0e54c1");
        },
        blur: function () {
            $(this).css("background-color", "rgba(255, 255, 255, 0.17)");
        }


    });






    function sendData() {
        //   event.preventDefault();
        var service_id = "default_service";
        var template_id = "primecrimemail";

        var templateParams = {
            "name": userData.username,
            "aim": userData.aim,
            "needs": userData.need,
            "contact": userData.contact,

        };

        emailjs.send(service_id,template_id,templateParams)
            .then(function(){
                console.log("Sent!");
            }, function(err) {
                console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            });
        return false;
    }






});
