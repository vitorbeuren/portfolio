$(document).ready(function () {
  SetDefaults();
  SetEventListeners();
  SetAutoChangeInputs();
});

const guest = [
  {
    inviteCode: "909651",
    guestName: "Guilherme Maier e Família",
    inviteNmb: 3,
    kids: 1,
  },
  {
    inviteCode: "707944",
    guestName: "Alexandre Dalla Pozza",
    inviteNmb: 2,
    kids: 0,
  },
  {
    inviteCode: "365144",
    guestName: "Gabriel Lago e Família",
    inviteNmb: 2,
    kids: 0,
  },
  {
    inviteCode: "543890",
    guestName: "Rev. Alexandre e Família",
    inviteNmb: 5,
    kids: 2,
  },
];

let codeArray = [...document.querySelectorAll(".code_input")];
const nameField = document.getElementById("guestName");
const warningMessage = document.querySelector(".wrong_number");
const select = document.getElementById("slct");
const select2 = document.getElementById("slct2");
const noKids = document.getElementById("noKids");
const selectDiv = document.getElementsByClassName("disabled");
const optPessoas = ["Uma Pessoa", "Duas Pessoas", "Três Pessoas", "Quatro Pessoas", "Cinco Pessoas", "Seis Pessoas"];
const optKids = ["Uma", "Duas", "Três", "Quatro", "Cinco", "Seis"];

function SetDefaults() {
  nameField.disabled = true;
  select.disabled = true;
  select2.disabled = true;
  noKids.disabled = true;
  $("#slct").find("option").not("#escolha").remove();
  $(".select").addClass("disabled");
  $(".select2").addClass("disabled");
  $(".optionKids").addClass("disabledKids");
}

function SetEventListeners() {
  $("#code_verify").click(DoEverything);
}

function SetAutoChangeInputs() {
  const inputElements = [...document.querySelectorAll("input.code_input")];

  inputElements.forEach((ele, index) => {
    ele.addEventListener("keydown", (e) => {
      if (e.keyCode === 8 && e.target.value === "") inputElements[Math.max(0, index - 1)].focus();
    });
    ele.addEventListener("input", (e) => {
      const [first, ...rest] = e.target.value;
      e.target.value = first ?? "";
      if (index !== inputElements.length - 1 && first !== undefined) {
        inputElements[index + 1].focus();
        inputElements[index + 1].value = rest.join("");
        inputElements[index + 1].dispatchEvent(new Event("input"));
      }
    });
  });
}

function DoEverything() {
  var newArray = [];

  for (let codeNmb of codeArray) {
    newArray.push(codeNmb.value);
  }

  let codeJoin = newArray.join("");

  if (guest.some((individual) => individual.inviteCode === codeJoin)) {
    if (warningMessage.classList.contains("wrong_number_warning")) {
      warningMessage.classList.remove("wrong_number_warning");
    }
    nameField.disabled = false;

    var codeInvite = guest.filter((current) => current.inviteCode === codeJoin)[0].guestName;

    nameField.value = codeInvite;

    select.disabled = false;

    $("#slct").find("option").not("#escolha").remove();
    $("#slct2").find("option").not("#escolha").remove();
    $(".select").removeClass("disabled");

    let inviteNmbrs = guest.filter((current) => current.inviteCode === codeJoin)[0].inviteNmb;

    for (let i = 0; i < inviteNmbrs; i++) {
      $("#slct").append(
        $("<option>")
          .val(i + 1)
          .text(optPessoas[i])
      );
    }

    if (guest.filter((current) => current.inviteCode === codeJoin)[0].kids > 0) {
      $(".select2").removeClass("disabled");

      $(".optionKids").removeClass("disabledKids");

      select2.disabled = false;

      noKids.disabled = false;

      let kidsNmbrs = guest.filter((current) => current.inviteCode === codeJoin)[0].kids;

      for (let i = 0; i < kidsNmbrs; i++) {
        $("#slct2").append(
          $("<option>")
            .val(i + 1)
            .text(optKids[i])
        );
      }

      const box = document.getElementById("noKids");

      box.addEventListener("change", function () {
        if (this.checked) {
          if ($("#slct2").prop("disabled", false)) $(select2).attr("disabled", true);
          $(".select2").addClass("disabled");
        } else {
          if ($("#slct2").prop("disabled", true)) $(select2).attr("disabled", false);
          $(".select2").removeClass("disabled");
        }
      });
    } else {
      if ($("#slct2").prop("disabled", false)) {
        $("#slct2").find("option").not("#escolha").remove();
        $(select2).attr("disabled", true);
        $(noKids).attr("disabled", true);
        $(".select2").addClass("disabled");
        $(".optionKids").addClass("disabledKids");
        if ($("#noKids").prop("checked", true)) {
          $("#noKids").prop("checked", false);
        }
      }
    }
  } else {
    warningMessage.classList.add("wrong_number_warning");
    if ($("#slct").prop("disabled", false)) {
      $("#slct").find("option").not("#escolha").remove();
      $(select).attr("disabled", true);
      $(select2).attr("disabled", true);
      $(noKids).attr("disabled", true);
      $(nameField).attr("disabled", true);
      $(".select").addClass("disabled");
      $(".select2").addClass("disabled");
      $(".optionKids").addClass("disabledKids");
      nameField.value = "Digite seu nome aqui...";
    }
  }
}
