$(document).ready(function () {
  SetDefaults();
  SetEventListeners();
});

function SetDefaults() {
  $(".finalBtn").prop("disabled", true);
}

function SetEventListeners() {}

function openBtn(thisBtn, btnsUp, txtUp, thisText, thisLi) {
  $(thisBtn).html("Adicionar Contribuição");
  $(btnsUp).removeClass("btnsOpHide");
  $(txtUp).removeClass("btnsOpHide");
  $(thisText).addClass("textBlur");
  $(thisLi).addClass("liContainerShadow");
  $(".darkenedBodyL").addClass("darken");
}

/*function log() {
  if ($("[name='slctP1']").is(":selected")) {
    console.log($(this).filter(":selected").val());
  }
}*/

/* function enableBtn(btn, slct, nmb) {
  if (!$(slct).find("option[value='1']").length > 0) {
    $(".finalBtn").prop("disabled", false);
    $(btn).addClass("colorBtn");
    $(slct).find("option[class='escolha']").remove();
    $(slct).prepend('<option value="1" id="c' + nmb + '">Remover Valor</option>');
  }

  if ($(slct).find("option[value='1']").is(":selected")) {
    $(".finalBtn").prop("disabled", true);
    $(btn).removeClass("colorBtn");
    $(slct).prepend('<option value="" class="escolha" selected disabled>Contribuir com...</option>');
    $(slct).find("option[value='1']").remove();
  }
} */

/* $(document).on("change", "select", function () {
  let valueP = undefined;
  $(".finalBtn").prop("disabled", false);
  valueP = $(this).val();
  $(".finalBtn").on("click", function () {
    console.log(valueP);
  });
}); */
