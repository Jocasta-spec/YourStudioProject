//Kiểm tra họ tên
function KiemtraHoten() {
    var txtName = $("#txtName");
    var tbName = $("#tbName");
   
    //Ghi hoa kí tự đầu của từ, ít nhất 2 từ sau khoảng trắng phải ghi hoa kí tự đầu
    var re = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/; //Sai chỗ 1: vẫn phải để cái này để kiểm tra 
    if (txtName.val() == "") {
        tbName.html("* Họ tên không được để trống!");
        return false;
    }

    if (!re.test(convertToLatinh(txtName.val()))) {
        tbName.html("* Họ và tên phải bắt đầu bằng chữ in hoa! Vui lòng nhập theo mẫu!");
        return false;
    }

    if (txtName.val().split(' ').length < 2) {
        tbName.html("* Họ và tên phải có ít nhất 2 từ!");
        return false;
    }

    tbName.html("*");
    return true;
}
$("#txtName").blur(function() {
    KiemtraHoten();
});
function convertToLatinh(str) {
    // Sử dụng bảng chuyển đổi để loại bỏ dấu và ký tự đặc biệt
    const conversionTable = {
        'á': 'a', 'à': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
        'ă': 'a', 'ắ': 'a', 'ằ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
        'â': 'a', 'ấ': 'a', 'ầ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',
        'é': 'e', 'è': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
        'ê': 'e', 'ế': 'e', 'ề': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e',
        'í': 'i', 'ì': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
        'ó': 'o', 'ò': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
        'ô': 'o', 'ố': 'o', 'ồ': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o',
        'ơ': 'o', 'ớ': 'o', 'ờ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o',
        'ú': 'u', 'ù': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
        'ư': 'u', 'ứ': 'u', 'ừ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u',
        'ý': 'y', 'ỳ': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
        'đ': 'd',
        'Á': 'A', 'À': 'A', 'Ả': 'A', 'Ã': 'A', 'Ạ': 'A',
        'Ă': 'A', 'Ắ': 'A', 'Ằ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ặ': 'A',
        'Â': 'A', 'Ấ': 'A', 'Ầ': 'A', 'Ẩ': 'A', 'Ẫ': 'A', 'Ậ': 'A',
        'É': 'E', 'È': 'E', 'Ẻ': 'E', 'Ẽ': 'E', 'Ẹ': 'E',
        'Ê': 'E', 'Ế': 'E', 'Ề': 'E', 'Ể': 'E', 'Ễ': 'E', 'Ệ': 'E',
        'Í': 'I', 'Ì': 'I', 'Ỉ': 'I', 'Ĩ': 'I', 'Ị': 'I',
        'Ó': 'O', 'Ò': 'O', 'Ỏ': 'O', 'Õ': 'O', 'Ọ': 'O',
        'Ô': 'O', 'Ố': 'O', 'Ồ': 'O', 'Ổ': 'O', 'Ỗ': 'O', 'Ộ': 'O',
        'Ơ': 'O', 'Ớ': 'O', 'Ờ': 'O', 'Ở': 'O', 'Ỡ': 'O', 'Ợ': 'O',
        'Ú': 'U', 'Ù': 'U', 'Ủ': 'U', 'Ũ': 'U', 'Ụ': 'U',
        'Ư': 'U', 'Ứ': 'U', 'Ừ': 'U', 'Ử': 'U', 'Ữ': 'U', 'Ự': 'U',
        'Ý': 'Y', 'Ỳ': 'Y', 'Ỷ': 'Y', 'Ỹ': 'Y', 'Ỵ': 'Y',
        'Đ': 'D',
    };

    // Sử dụng hàm replace để thực hiện chuyển đổi
    return str.replace(/[áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g, function (match) {
        return conversionTable[match] || match;
    });
};

//Kiểm tra ngày sinh
function KiemtraNgaysinh() {
    var txtNgaySinh = $("#txtNgaySinh").val();
    var tbNgaySinh = $("#tbNgaySinh");

    if (txtNgaySinh === "") {
        tbNgaySinh.html("* Ngày sinh không được để trống!");
        return false;
    }
    tbNgaySinh.html("*");
    return true;
}
$("#txtNgaySinh").blur(function() {
    KiemtraNgaysinh();
});

//Kiểm tra email
function KiemtraEmail() {
    var txtEmail = $("#txtEmail").val();
    var tbEmail = $("#tbEmail");
    
    var emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;

    if (txtEmail === "") {
        tbEmail.html("* Email không được để rỗng!");
        return false;
    }
    if (!emailRegex.test(txtEmail)) {
        tbEmail.html("* Email không hợp lệ!");
        return false;
    }
    tbEmail.html("*");
    return true;    
}
$("#txtEmail").blur(function() {
    KiemtraEmail();
});

//Kiểm tra mật khẩu
function KiemtraMatKhau() {
    var passw = $("#passw").val();
    var tbMK = $("#tbMK");

    //Một chữ thường, một chữ hoa, một số, độ dài ít nhất 8 và dài nhất là 20 (Khoảng từ 8 đến 20)

    var matkhauRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:;<>,.?/~`])[A-Za-z\d!@#$%^&*()_+{}|:;<>,.?/~`]{8,20}$/;
    //Rằng buộc trống
    if (passw === "") {
        tbMK.html("* Mật khẩu không được để trống!");
        return false;
    }
    //Rằng buộc mật khẩu không hợp lệ
    if (!matkhauRegex.test(passw)) {
        tbMK.html("* Mật khẩu không hợp lệ!");
        return false;
    }
    tbMK.html("*");
    return true;
}
$("#passw").blur(function() {
    KiemtraMatKhau();
});

//Xác nhận mật khẩu
function XacnhanMatKhau() {
    var password = $("#passw").val();
    var confirmPassword = $("#txtXNMatKhau").val();
    var message = $("#tbXNMatKhau");

    if (password === '' || confirmPassword === '') {
        message.innerHTML = ''; // Nếu một trong hai trường trống, không hiển thị thông báo
    }
    //Rằng buộc mật khẩu không trùng khớp
    if (password != confirmPassword) {
        message.html("* Mật khẩu không trùng khớp!");
        return false;
    } 
    else {
        message.html("*");
        return true;
    }
}
$("#txtXNMatKhau").blur(function() {
    XacnhanMatKhau();
});

//Kiểm tra số điện thoại
function KiemtraSDT() {
    var txtSDT = $("#txtSDT").val();
    var tbSDT = $("#tbSDT");
    //Mã sdt VN gồm đầu 09/08/07/03 và 8 số tiếp theo số bất kỳ từ 0 đến 9
    var sdtRegex = /^(09|08|07|03)\d{8}$/;

    if (!sdtRegex.test(txtSDT)) {
        tbSDT.html("* Số điện thoại không hợp lệ!");
        return false;
    }
    tbSDT.html("*");
    return true;
}
$("#txtSDT").blur(function() {
    KiemtraSDT();
});

$("#btnDangKy").click(function (e) {
    if (KiemtraHoten() && KiemtraNgaysinh() && KiemtraEmail() && KiemtraMatKhau() && XacnhanMatKhau() && KiemtraSDT()) {
        let hoten = $("#txtName").val();
        let email = $("#txtEmail").val();
        let sdt = $("#txtSDT").val();
        let matkhau = $("#txtXNMatKhau").val();         

        // Tạo đối tượng chứa thông tin
        let userObject = {
            "hoten": hoten,
            "email": email,
            "sdt": sdt,
            "matkhau": matkhau
        };

        // Lưu vào sessionStorage (hoặc localStorage)
        localStorage.setItem("userInfo", JSON.stringify(userObject));

        // Chuyển hướng đến trang thongtin.html
        window.location.href = 'thongtinTaiKhoan.html';
    } else {
        alert("Thông tin không hợp lệ");
    }
});

   
