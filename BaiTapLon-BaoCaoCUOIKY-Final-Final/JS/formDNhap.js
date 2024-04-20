
//Kiểm tra email
function KiemtraEmaill() {
    var loginEmail = $("#loginEmail").val();
    var tbEmail = $("#tbEmail");

    var emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;

    if (loginEmail === "") {
        tbEmail.html("* Email không được để rỗng!");
        return false;
    }
    if (!emailRegex.test(loginEmail)) {
        tbEmail.html("* Email không hợp lệ!");
        return false;
    }
    tbEmail.html("*");
    return true;
}
$("#loginEmail").blur(function () {
    KiemtraEmaill();
});

//Kiểm tra mật khẩu
function KiemtraMatKhau() {
    var passw = $("#passw").val();
    var tbMK = $("#tbMK");

    //Bắt buộc 1 chữ cái thường, 1 thường cái hoa 1 kí tự số và 1 kí tự đặc biệt
    var matkhauRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:;<>,.?/~`])[A-Za-z\d!@#$%^&*()_+{}|:;<>,.?/~`]{8,20}$/;

    if (passw === "") {
        tbMK.html("* Mật khẩu không được để trống!");
        return false;
    }
    if (!matkhauRegex.test(passw)) {
        tbMK.html("* Mật khẩu không hợp lệ!");
        return false;
    }
    tbMK.html("*");
    return true;
}
$("#passw").blur(function () {
    KiemtraMatKhau();
});


function saveRegistration() {
    var email = document.getElementById('txtEmail').value;
    var password = document.getElementById('passw').value;

    // Save to Local Storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Đăng ký thành công. Bây giờ bạn có thể đăng nhập.');
}

function attemptLogin() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Retrieve from Local Storage
    var savedEmail = localStorage.getItem('userEmail');
    var savedPassword = localStorage.getItem('userPassword');

    // Check if the entered credentials match the saved credentials
    if (email === savedEmail && password === savedPassword) {
        alert('Đăng nhập thành công! Quay trở lại trang chủ.');
        // Redirect to home page or perform other actions
        window.location.href = 'home.html';
    } else {
        alert('Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu của bạn.');
    }
}
