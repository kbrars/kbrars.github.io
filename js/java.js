function aramaCagir() {
    var arama = document.getElementById("aramagirisi");
    arama.style.display = "block";
}



window.onload = function () {

    yazırenkdegistir();
    let slideIndex = 0;
    slidelarıgoster();

    function slidelarıgoster() {
        let i;
        let slide2 = document.getElementsByClassName("slidelar");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slide2.length; i++) {
            slide2[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slide2.length) { slideIndex = 1 }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slide2[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(slidelarıgoster, 2000);
    }



}

var urunnbir = document.getElementById("csahrp");

urunnbir.onmouseover = function () {
    urunnbir.innerHTML = "Microsoft tarafından geliştirilen C# .NET ortamında kullanılmak üzere geliştirilmiştir. ";
}

urunnbir.onmouseout = function () {
    urunnbir.innerHTML = "C# Programlama Dili";

}
