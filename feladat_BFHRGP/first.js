$(document).ready(function () {
    counter = 0;
   
    $("#utolsovacsora").click(function () {
        $(this).animate({ width: "1200px", height: "600px" });
    });
    $("#utolsovacsora").dblclick(function () {
        $(this).animate({ width: "600px", height: "300px" });
    });

    $("#leonardo").click(function () {
        $(this).animate({ width: "500px", height: "630px" });
    });
    $("#leonardo").dblclick(function () {
        $(this).animate({ width: "250px", height: "315px" });
    });

    $("#monalisa").click(function () {
        $(this).animate({ width: "500px", height: "700px" });
    });
    $("#monalisa").dblclick(function () {
        $(this).animate({ width: "369px", height: "550px" });
    });

    $("#keresztelo").click(function () {
        $(this).animate({ width: "500px", height: "700px" });
    });
    $("#keresztelo").dblclick(function () {
        $(this).animate({ width: "369px", height: "477px" });
    });

    $("#mouseEnter").mouseenter(function(){
        $(this).html("Elt: 1452-1519");
        
    });
    $("#mouseEnter").mouseleave(function(){
        $(this).html("Festmenyei");
    });

    $("#pictureHide1").click(function () {

        if (counter % 2 == 0) {
            $("#leonardo").hide();
        } else {
            $("#leonardo").show();
        }

        counter++;
    })

    $("#pictureHide2").click(function () {
        
        if(counter%2==0){
            $("#utolsovacsora").hide();
        }else{
            $("#utolsovacsora").show();
        }

        counter++;
    })

    $("#pictureHide3").click(function () {

        if (counter % 2 == 0) {
            $("#monalisa").hide();
        } else {
            $("#monalisa").show();
        }

        counter++;
    })

    $("#pictureHide4").click(function () {

        if (counter % 2 == 0) {
            $("#keresztelo").hide();
        } else {
            $("#keresztelo").show();
        }

        counter++;
    })

    $("#validate").click(function () {
        var keresztNev = $("#keresztNev").val();
        var vezetekNev = $("#vezetekNev").val();
        var email = $("#email").val();
        var kor = $("#kor").val();
        var szavazas = $("#szavazas").val();
        $("#keresztNev").css('border', '1px solid #ccc');
        $("#vezetekNev").css('border', '1px solid #ccc');
        $("#kor").css('border', '1px solid #ccc');
        if (keresztNev == "") {
            alert("Szemely keresztneve ures");
            $("#keresztNev").css('border', '2px solid #ff0000');
            return;
        }
        if (vezetekNev == "") {
            alert("Szemely vezetekneve ures");
            $("#vezetekNev").css('border', '2px solid #ff0000');
            return;
        }
        if (kor < 0 ) {
            alert("Szemely eletkora ervenytelen");
            $("#kor").css('border', '2px solid #ff0000');
            return;
        }

    });
   
});