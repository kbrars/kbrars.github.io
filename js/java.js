function aramaCagir() {
    var arama = document.getElementById("aramagirisi");
    arama.style.display = "block";
}



window.onload = function () 
{

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

//

var uruniki = document.getElementById("pyhtonmetin");

uruniki.onmouseover = function () {
  uruniki.innerHTML = "Python kullanarak program geliştirmeye yeni bir adım atmış olan herkes hızlı ve basit şekilde ilerleme kaydedebilir.";
}

uruniki.onmouseout = function () {
  uruniki.innerHTML = "Pyhton Programlama Dili";

}
//
var urunuc = document.getElementById("boots");

urunuc.onmouseover = function () {
  urunuc.innerHTML = "Bootstrap, tasarlayacağımız web sitesinikolay bir şekilde “responsive” yani tabletyani her türlü ekran çözünürlüğüne duyarlı olarak ayarlamamıza yarayan ücretsiz ve açık kaynak kodlu frameworktür.";
}

urunuc.onmouseout = function () {
  urunuc.innerHTML = "Bootstap";

}
//
var urundort = document.getElementById("cyber");

urundort.onmouseover = function () {
  urundort.innerHTML = "Bilgisayarları, sunucuları,elektronik sistemleri, ağları ve verileri kötü amaçlı saldırılardan koruma uygulamasıdır.";
}

urundort.onmouseout = function () {
  urundort.innerHTML = "Siber Güvenlik";

}
//
var urunbes = document.getElementById("webt");

urunbes.onmouseover = function () {
  urunbes.innerHTML = "aliteli bir web tasarımı, web sitesinin hedef müşteri kitlesini yakalamasında son derece önemli olup özellikle kullanıcı dostu olması gerekir.";
}

urunbes.onmouseout = function () {
  urunbes.innerHTML = "Web Tasarım";

}

//
var urunalti = document.getElementById("unityy");

urunalti.onmouseover = function () {
  urunalti.innerHTML = "Unity, öncelikli olarak bilgisayarlar, konsollar ve mobil cihazlar için video oyunları ve simülasyonları geliştirmek için kullanılan çapraz platform bir oyun motorudur.";
}

urunalti.onmouseout = function () {
  urunalti.innerHTML = "Unity ile oyun yapmayı öğren";

}
var alertim = document.getElementById("alertim");
var alertimyanlis=document.getElementById("alertimyanlis");
function formControl() {
  let x = document.forms["mesajformu"]["emailim"].value;
  let y = document.forms["mesajformu"]["textim"].value;
  if (x == "" || y == "") {
    alertimyanlis.style.display = "block";
    return false;
  }
 
 
}

var a = 0;
var renkler = ["blue", "red", "green","default" ,"black" ];
var kutu = document.getElementById("kutu");
var bslik=document.getElementById("stjbasvurubaslik");

var zamanx = 500;

function yazırenkdegistir() {
  kutu.style.color = renkler[a];
  bslik.style.color=renkler[a]
  if (a < renkler.length - 1) {
    a++;
  }
  else {
    a = 0;
  }
  setTimeout("yazırenkdegistir()", zamanx);
}

var alertim = document.getElementById("alertimiki");
var alertuc=document.getElementById("alertuc");
function formControliki() {
  let f = document.forms["stajformu"]["stajisim"].value;
  let g = document.forms["stajformu"]["stajsoyad"].value;
  let h = document.forms["stajformu"]["stajemail"].value;
  let k = document.forms["stajformu"]["stajcv"].value;
  let l = document.forms["stajformu"]["sturu"].value;
  let n = document.forms["stajformu"]["stajadres"].value;
  if (f == "" || g == "" || h == ""  || k == "" || l== "" || m == ""  || n == "" ) {
    alertim.style.display = "block";
    return false;
  }

}


$(document).ready(function(){
$("#alanici").click(function(){
$("#alan").slideToggle("slow");
});
});

