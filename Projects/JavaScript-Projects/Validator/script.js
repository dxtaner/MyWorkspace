$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();

    var username = $("#username").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var password = $("#password").val();
    var repassword = $("#repassword").val();

    $("form .form-group div").text("");

    if (username === "") {
      $("#username").next("div").text("Kullanıcı adı boş olamaz.");
    }

    if (email === "") {
      $("#email").next("div").text("Email boş olamaz.");
    } else if (!isValidEmail(email)) {
      $("#email").next("div").text("Geçerli bir email adresi giriniz.");
    }

    if (phone === "") {
      $("#phone").next("div").text("Telefon numarası boş olamaz.");
    } else if (!isValidPhone(phone)) {
      $("#phone").next("div").text("Geçerli bir telefon numarası giriniz.");
    }

    if (password === "") {
      $("#password").next("div").text("Şifre boş olamaz.");
    } else if (password.length < 6) {
      $("#password").next("div").text("Şifre en az 6 karakter olmalıdır.");
    }

    if (repassword === "") {
      $("#repassword").next("div").text("Şifre tekrarı boş olamaz.");
    } else if (repassword !== password) {
      $("#repassword").next("div").text("Şifreler eşleşmiyor.");
    }
  });

  function isValidEmail(email) {
    var emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  function isValidPhone(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
});
