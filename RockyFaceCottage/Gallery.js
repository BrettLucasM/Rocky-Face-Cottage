$(document).ready(function() { //When the document is ready and everything is loaded, then it will run the functions.
    $("#slider").bxSlider({ //BoxSlider for Gallery page, uses HTML id "slider" to signify where the slide images begin.
        auto: true, //Scrolls automatically
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 20,
        randomStart: true,//Specifies random start image
        pause: 3000,
        speed: 1500, //I just didnt like how fast the images were transitioning so I slowed it down a bit
        captions: true, //Shows captions from the images in Gallery.html
        pager: true, //Shows the pager for slides
        pagerType: 'short', //specifies the appearance of the pager
        pagerSelector: "#id_pager" //Shows pager in the specified div called id_pager in Gallery.html
    });

    $("#fader").bxSlider({ //bxSlider for the 'fader' id div on the index page
        mode: 'vertical', //Displays the image similar to the carousel style above, but this time the images scroll vertically
        adaptiveHeight: false,
        moveSlides: 1,
        randomStart: true,
        easing: 'swing',
        auto: true,
        pager: false,
        speed: 1500
    });

    $("#fader2").bxSlider({ //bxSlider for the 'fader2' id div on the index page
        mode: 'vertical',
        adaptiveHeight: false,
        moveSlides: 1,
        randomStart: true,
        easing: 'swing',
        auto: true,
        pager: false,
        speed: 1500
    });

});

function bxSliderToGrid() { //custom built function that allows for the bxSlider to change to a gridded table on the gallery page
    var x = document.getElementById("sliderContainer");
        x.style.display = "none"; //This makes sure that the elements in the id, sliderContainer, are empty
    document.getElementById("viewbutton").innerHTML = ""; //This similarly makes sure the HTML for the id, viewbutton, are empty

    var gv = document.getElementById("gridView");
    gv.style.display = "block"; //This line makes sure that the elements in the id gridview are being displayed and not hidden


    document.getElementById("gridView").innerHTML = "<button onclick=\"carouselView()\" class=\"buttons\">Carousel View</button>" + //Enters HTML into the gridview id DIV
        "<table class='gridviewtble'>" +
        "<caption class=\"CVcaption\">Grid View</caption>" +
        "<tr>" +
        "<td><img class='gridViewjs' src=\"GalleryImg1.jpg\" alt=\"Living Room\" title=\"Living Room\"></td>" +
        "<td><img class='gridViewjs' src=\"GalleryImg2.jpg\" alt=\"Backyard\" title=\"Backyard\"></td>\n" +
        "<td><img class='gridViewjs' src=\"GalleryImg3.jpg\" alt=\"Bedroom\" title=\"Bedroom\"></td>\n" +
        "</tr>" +
        "<tr>" +
        "<td><img class='gridViewjs' src=\"Cottge.jpeg\" alt=\"Cottage\" title=\"Cottage\"></td>\n" +
        "<td><img class='gridViewjs' src=\"GalleryImg4.jpg\" alt=\"Restroom\" title=\"Restroom\"></td>\n" +
        "<td><img class='gridViewjs' src=\"Shed.jpg\" alt=\"\" title=\"Shed\"></td>" +
        "</tr>" +
        "<tr>" +
        "<td><img class='gridViewjs' src=\"Kitchen.jpg\" alt=\"Kitchen\" title=\"Kitchen\"></td>" +
        "<td><img class='gridViewjs' src=\"guestRoom.jpg\" alt=\"Guest Room\" title=\"Guest Room\"></td>" +
        "<td><img class='gridViewjs' src=\"frontYard.jpg\" alt=\"Front Yard\" title=\"Front Yard\"></td>" +
        "</tr>" +
        "</table>";
} //end

function carouselView() { //This function changes the gridview div to the sliderContainer
    var g = document.getElementById("gridView");
    g.style.display = "none"; //hides the elements in the id, gridview

    var y = document.getElementById("sliderContainer");
    y.style.display = "block"; //This displays the element in the id sliderContainer

    document.getElementById("viewbutton").innerHTML = "<button onclick=\"bxSliderToGrid()\" class=\"buttons\">Grid View</button>"; //changes the html in the viewbutton id
    //to a button calling the function bxSliderGrid() on click
}

