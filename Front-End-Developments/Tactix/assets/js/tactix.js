function zincirBaglimiKontrolu(satir, sutun) {

  satirResult = Math.abs(taslar[taslar.length - 2].satir - satir);
  sutunResult = Math.abs(taslar[taslar.length - 2].sutun - sutun);

  if (satirResult < 2 && sutunResult < 2) {
    return true
  } else {
    return false
  }
}

function zincirCaprazmiKontrol(satir, sutun) {
  if ((taslar[0].satir == satir || taslar[0].sutun == sutun)) {

    return false;
  }
  else {
    return true;
  }
}

function tasKaldir(tas, satir, sutun) {

  taslar.push({
    "satir": satir,
    'sutun': sutun
  });
  tas.addClass("bg-transparent");
  tas.parent().addClass("kaldirilacak-tas");

}

function tasYerineKoy(tas, satir, sutun) {

  var index = taslar.findIndex(taslar => taslar.satir === satir && taslar.sutun === sutun);
  taslar.splice(index, 1);
  tas.removeClass("bg-transparent");
  tas.parent().removeClass("kaldirilacak-tas");

}


function tasSatirSutunGetir(tas) {

  return [tas.attr("data-satir"), tas.attr("data-sutun")];

}

function tasOynat(tas) {

  satir = tasSatirSutunGetir(tas)[0];
  sutun = tasSatirSutunGetir(tas)[1];

  if (tas.hasClass("bg-transparent")) {
    tasYerineKoy(tas, satir, sutun);
  } else {
    tasKaldir(tas, satir, sutun);
  }

}

function taslariSifirla(satir, sutun) {

  $('[data-satir=' + satir + '][data-sutun=' + sutun + ']').removeClass("bg-transparent");
  $('[data-satir=' + satir + '][data-sutun=' + sutun + ']').parent().removeClass("kaldirilacak-tas");
}

function taslariGonder() {
  taslar.forEach(element => taslariSifirla(element.satir, element.sutun));
  taslar = [];
  zincirBaglimi = true;
  zincirCaprazmi = false;
}

function oyunTamamlandimi() {
  var tasSayisi = $(".kaldirilan-tas").length;
  if (tasSayisi == 16) {
    return true;
  } else {
    return false;
  }
}

function kimKazandi(aktifOyuncu) {

  if (aktifOyuncu == 1) {
    return 2
  } else {
    return 1
  }
}

function oyunSonucAnimasyonGoster(aktifOyuncu) {

  if (kimKazandi(aktifOyuncu) == 1) {
    $(".bg-sol").addClass("sol-infinite-animation");
  } else {
    $(".bg-sag").addClass("sag-infinite-animation");
  }
}

function oyunSonucAnimasyonGizle() {

  $(".bg-sol").removeClass("sol-infinite-animation");
  $(".bg-sag").removeClass("sag-infinite-animation");
}

function degiskenVerileriniSifirla() {

  taslar = [];
  zincirBaglimi = true;
  zincirCaprazmi = false;
  kuraSonuc = 0;
  aktifOyuncu = 0;
}

function oyunVerileriniSifirla() {


  $(".sutun").removeClass("kaldirilan-tas");
  $(".tas").removeClass("bg-transparent");
  $(".tas-kaldir").attr("disabled", false);
  $(".btn-btn-kura-cek button").attr("disabled", false);
  $(".modal-kura-cekimi .modal-footer").html('');

  $(".bg-sol .aktif-oyuncu").css('animation-name', 'oyuncu1-left-to-right');
  $(".bg-sol .aktif-oyuncu").addClass("d-none");
  $(".bg-sag .aktif-oyuncu").css('animation-name', 'oyuncu2-right-to-left');
  $(".bg-sag .aktif-oyuncu").addClass("d-none");

  oyunSonucAnimasyonGizle();
  degiskenVerileriniSifirla();


}

var taslar = [];
var zincirBaglimi = true;
var zincirCaprazmi = false;
function checksatirsutun(satir, sutun) {

  if (!((taslar[0].satir == satir || taslar[0].sutun == sutun) && (taslar[1].satir == satir || taslar[1].sutun == sutun))) {

    taslariGonder();

  }
  else {
  }
}

function isEmpty(input1, input2) {


  if ($.trim(input1) && $.trim(input2)) {
    return false;
  } else {
    return true;
  }
}

function kuraCek() {
  return Math.floor(Math.random() * 2) + 1;
}



$(document).ready(function () {


  $(".modal-oyuncu-girisi").slideDown();

  var kuraSonuc = 0;
  var aktifOyuncu = 0;
  $(document).on("click", ".btn-oyunu-baslat", function () {

    $(".modal-kura-cekimi").slideUp();

    if (kuraSonuc == 1) {
      $(".bg-sol .aktif-oyuncu").removeClass("d-none");
    } else {
      $(".bg-sag .aktif-oyuncu").removeClass("d-none");
    }
    $(".btn-kura-cek button").attr("disabled", false);
  });


  $(document).on("click", ".btn-kura-cek button", function () {

    $(this).attr('disabled', true);
    var adSoyad = "";
    kuraSonuc = kuraCek();

    if (kuraSonuc == 1) {
      adSoyad = $(".profil-1 > h3").text();

    } else {
      adSoyad = $(".profil-2 > h3").text();
    }
    $(".modal-kura-cekimi  .modal-footer").append("<div class='modal-alert alert-success'>Oyuna başlayacak oyuncu:" + adSoyad + "</div >");
    $(".modal-kura-cekimi  .modal-footer").append("<button type='button' class='btn btn-primary btn-oyunu-baslat'>Oyunu Başlat</button>");

  });


  $(".btn-oyun-baslat").click(function () {

    var oyuncu1 = $('input[name="oyuncu_1"]').val();
    var oyuncu2 = $('input[name="oyuncu_2"]').val();

    if (!isEmpty(oyuncu1, oyuncu2)) {

      $(".oyuncu-1-gosterge .oyuncu-ad").text(oyuncu1.toUpperCase());
      $(".oyuncu-2-gosterge .oyuncu-ad").text(oyuncu2.toUpperCase());
      $(".profil-1 > h3").text(oyuncu1.toUpperCase());
      $(".profil-2 > h3").text(oyuncu2.toUpperCase());
      $(".modal-oyuncu-girisi").slideUp();
      $(".modal-kura-cekimi").slideDown();


    } else {


      $(".modal-oyuncu-girisi  .modal-warning").html("<div class='modal-alert alert-danger'>Lütfen boş alanları doldurunuz</div >");
      setTimeout(function () {
        $(".alert-danger").slideUp();
      }, 3000);

    }

  });


  $(".tas-kaldir").click(function () {



    $(".kaldirilacak-tas").addClass("kaldirilan-tas");
    $(".kaldirilan-tas").removeClass("kaldirilacak-tas");

    if (oyunTamamlandimi()) {

      oyunSonucAnimasyonGoster(aktifOyuncu);
      $(this).attr('disabled', true);

    } else {


      if (aktifOyuncu == 1) {
        $(".oyuncu-1-gosterge").addClass("oyuncu-1-gosterge-hamle");
        setTimeout(function () { $(".oyuncu-1-gosterge").removeClass("oyuncu-1-gosterge-hamle"); }, 1000);
        $(".bg-sol .aktif-oyuncu").css('animation-name', 'oyuncu1-right-to-left');
        if ($(".bg-sag .aktif-oyuncu").hasClass("d-none")) {
          $(".bg-sag .aktif-oyuncu").removeClass("d-none");
        }
        $(".bg-sag .aktif-oyuncu").css('animation-name', 'oyuncu2-right-to-left');

        aktifOyuncu = 2;
      } else {
        $(".oyuncu-2-gosterge").addClass("oyuncu-2-gosterge-hamle");
        setTimeout(function () { $(".oyuncu-2-gosterge").removeClass("oyuncu-2-gosterge-hamle"); }, 1000);
        $(".bg-sag .aktif-oyuncu").css('animation-name', 'oyuncu2-left-to-right');
        if ($(".bg-sol .aktif-oyuncu").hasClass("d-none")) {
          $(".bg-sol .aktif-oyuncu").removeClass("d-none");
        }
        $(".bg-sol .aktif-oyuncu").css('animation-name', 'oyuncu1-left-to-right');
        aktifOyuncu = 1;
      }
      taslar = [];
    }
  });

  $(".yeni-oyun").click(function () {

    oyunVerileriniSifirla();
    $(".modal-kura-cekimi").slideDown();
  });

  $(".tas").click(function () {

    var tas = $(this);
    satir = tasSatirSutunGetir(tas)[0];
    sutun = tasSatirSutunGetir(tas)[1];
    tasOynat(tas)


    if (taslar.length > 1) {
      zincirBaglimi = zincirBaglimiKontrolu(satir, sutun);
    }

    if (taslar.length == 2) {
      zincirCaprazmi = zincirCaprazmiKontrol(satir, sutun);
    }

    if (zincirBaglimi && !zincirCaprazmi) {

      if (taslar.length > 2) {
        checksatirsutun(satir, sutun);
      }
    } else {
      taslariGonder();
    }
  });

});