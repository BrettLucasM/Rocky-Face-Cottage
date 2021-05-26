$( function() {
    $( "#accordion" ).accordion({ //calls accordion from the pluggedin JUI and creates an accordion where the html accordion id is specified
        collapsible: true, heightStyle: "content"
    });
} );

$( function() {
    $( "#datepicker" ).datepicker(); //sets up a datepicker from the JUI plugin at the datepicker id in HousingLocation
} );

$( function() {
    $( "#datepicker1" ).datepicker(); //sets up a datepicker from the JUI plugin at the datepicker1 id in HousingLocation
} );

$( function() {
    $( "#resizable" ).resizable();//sets up a resizable from the JUI plugin at the resizable id in HousingLocation.HTML
} );

function goBack() {
    window.history.back();
}

$(document).ready(function() { //function that reads the content of a.json file and parse it to a HTML div with the id review
    $.ajax({
        type: "get",
        url: "review.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#review").html("");

            $.each(data, function () {
                $.each(this, function (key, value) {

                    $("#review").append
                    ("<h3>" + value.thought + "</h3>" + "<p>" + value.review + "</p>" + "<small>" + value.name + "</small>" + "<hr>");
                })
            })
        }
    });
});

$(document).ready(function() {//function that reads the content of a.xml file and parse it to a HTML div with the id xmlreview
    $.get("review.xml", function(data) {
        $(data).find("body").children().each(
            function() {
                var xmlDoc = $(this);
                $("#xmlreview").append("<h3>" +
                xmlDoc.find("rate").text() + "</h3>" +
                 "<p>" + xmlDoc.find("review").text() + "</p>"+
                "<small>" + xmlDoc.find("name").text() + "</small>" + "<hr>");
            });
    });
});