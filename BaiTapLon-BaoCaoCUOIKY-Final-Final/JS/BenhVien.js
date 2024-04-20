// /*Kiểm tra Mã thẻ
// a. Mã thẻ: không được để trống. Nếu để trống thì chương trình hiển thị thông báo 
// yêu cầu nhập.
// b. Mã thẻ bảo hiểm có định dạng như sau: QN-XXXX hoặc CB-XXXX hoặc 
// CDXXXX, trong đó X là ký tự số.*/

function KiemtraMathe() {
    var txtMa = $("#txtMa").val();
    var tbMa = $("#tbMa");

    var maRegex = /^(QN|CB|CD)-[0-9]{4}$/;

    if (txtMa === "") {
        tbMa.html("* Mã thẻ bảo hiểm không được để trống!");
        return false;
    }

    if (!maRegex.test(txtMa)) {
        tbMa.html("* Nhập Mã thẻ bảo hiểm có định dạng như sau: QN-XXXX hoặc CB-XXXX hoặc CDXXXX, trong đó X là ký tự số.");
        return false;
    }

    tbMa.html("(*)");
    return true;
}

$("#txtMa").blur(function () {
    console.log("Blur event triggered for txtMa!");
    KiemtraMathe();
});

/**2. Kiểm tra họ tên:
a. Họ tên không được để trống
b. Ký tự đầu của mỗi từ là chữ hoa */
function KiemtraTen() {
    var txtTen = $("#txtTen").val();
    var tbTen = $("#tbTen");

    var tenRegex = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;

    if (txtTen === "") {
        tbTen.html("* Họ tên không được để trống!");
        return false;
    }

    if (!tenRegex.test(txtTen)) {
        tbTen.html("* Họ tên không hợp lệ! Vui lòng viết theo mẫu!");
        return false;
    }

    tbTen.html("(*)");
    return true;
}
$("#txtTen").blur(function () {
    KiemtraTen();
});

/**3. Kiểm tra tuổi:
a. Tuổi không được rỗng
b. Tuổi phải >16 */
function KiemtraTuoi() {
    var txtTuoi = $("#txtTuoi").val();
    var tbTuoi = $("#tbTuoi");

    if (txtTuoi === "") {
        tbTuoi.html("* Tuổi không được để trống!");
        return false;
    }
    if (txtTuoi <= 16) {
        tbTuoi.html("* Tuổi phải lớn hơn 16");
        return false;
    }
    tbTuoi.html("(*)");
    return true;
}
$("#txtTuoi").blur(function () {
    KiemtraTuoi();
});

/**4. Kiểm tra số điện thoại
a. Số điện thoại không được rỗng
b. Số điện thoại có định dạng là 10 con số trong đó luôn bắt đầu 09,03,08 hoặc 07 */
function KiemtraSDT() {
    var txtSDT = $("#txtSDT").val();
    var tbSDT = $("#tbSDT");

    var sdtRegex = /^(09|03|08|07)[0-9]{8}$/;

    if (txtSDT === "") {
        tbSDT.html("* Số điện thoại không được để trống!");
        return false;
    }
    if (!sdtRegex.test(txtSDT)) {
        tbSDT.html("* Số điện thoại không hợp lệ! Vui lòng nhập theo định dạng! Trong đó: X là số.");
        return false;
    }
    tbSDT.html("(*)");
    return true;
}
$("#txtSDT").blur(function () {
    KiemtraSDT();
});

/**5. Kiểm tra địa chỉ:
a. Địa chỉ không được để trống */
function KiemtraDiachi() {
    var txtDiaChi = $("#txtDiaChi").val();
    var tbDiaChi = $("#tbDiaChi");

    if (txtDiaChi === "") {
        tbDiaChi.html("* Địa chỉ không được để rỗng!");
        return false;
    }
    tbDiaChi.html("(*)");
    return true;
}
$("#txtDiaChi").blur(function () {
    KiemtraDiachi();
});

/**6. Kiểm tra đối tượng */
function KiemtraDoituong() {
    var selectedOption = $("#selectDoiTuong").val();
    // Lấy thẻ input tỉ lệ TT
    var tiLeTT = $("#tiLeTT");

    // Hiển thị giá trị Tỉ lệ TT tương ứng vào ô input
    if (selectedOption === "40%" || selectedOption === "50%" || selectedOption === "30%") {
        tiLeTT.val(selectedOption);
        return true; // Hợp lệ
    } else {
        tiLeTT.val("");
        return false; // Không hợp lệ
    }
}
$("#selectDoiTuong").change(KiemtraDoituong);


/**Nút Đăng ký truyền thông tin vào table giao diện */
// $("#btnDangKy").click(function () {
//     if (!KiemtraMathe() || !KiemtraTen() || !KiemtraTuoi() || !KiemtraSDT() || !KiemtraDiachi() || KiemtraDoituong) {
//         $("#thongbao").html("Mời bạn nhập đúng và đẩy đủ thông tin");
//         return false;
//     }
//     var mathe = txtMa.val();
//     var hoten = txtTen.val();
//     var tuoi = txtTuoi.val();
//     var sdt = txtSDT.val();
//     var diachi = txtDiaChi.val();
//     // var dichvu = $("input[name='dichVu']:checked").val();
//     var dv= [];
//     $.each($("input[name='dichVu']:checked"), function() { dv.push($(this).val());
//     });
//     var doituong = $("select[name='selectDoiTuong'] option:selected").text();
//     var tileTT = $("#tiLeTT").val();

//     var them = "<tr><td>" + (i++) + "</td><td>" + mathe + "</td><td>" + hoten + "</td><td>" + tuoi + "</td><td>" + sdt + "</td><td>" +
//         diachi + "</td><td>" + dichvu + "</td><td>" + doituong + "</td><td>" + tileTT + "</td></tr>";
//     $("table tbody").append(them);
//     $("#myModal").modal("hide");
//     return true;
// });
// $("#btnDangKy").click(function(e) {
//     if (KiemtraMathe() && KiemtraTen() && KiemtraTuoi() && KiemtraSDT() && KiemtraDiachi() && KiemtraDoituong()) {
//         let hinhthuc = $("input[name='hinhthuc']:checked").val();
//         let maThe = $("#txtMa").val();
//         let hoTen = $("#txtTen").val();
//         let tuoi = $("#txtTuoi").val();
//         let sdt = $("#txtSDT").val();
//         let diaChi = $("#txtDiaChi").val();
//         let dv = $("input[name='dichVu']:checked").val();
//         let thanhtoan = $("#tiLeTT").val();
//         let tdNew = "<tr><td>" + (i++) + "</td><td>" + hinhthuc + "</td><td>" + maThe + "</td><td>" + hoTen + "</td><td>" + tuoi + "</td><td>" + sdt + "</td><td>" + diaChi + "</td><td>" + dv + "</td><td>" + thanhtoan + "</td></tr>";
//         $("#tbody").append(tdNew);
//         $("#modalID").modal("hide");
//     } else {
//         alert("Thông tin không hợp lệ");
//     }
// });
$("#btnDangKy").click(function (e) {
    console.log("KiemtraMathe():", KiemtraMathe());
    console.log("KiemtraTen():", KiemtraTen());
    console.log("KiemtraTuoi():", KiemtraTuoi());
    console.log("KiemtraSDT():", KiemtraSDT());
    console.log("KiemtraDiachi():", KiemtraDiachi());
    console.log("KiemtraDoituong():", KiemtraDoituong());
    let i = 1; //phải tạo cái này nó mới lưu
    if (KiemtraMathe() && KiemtraTen() && KiemtraTuoi() && KiemtraSDT() && KiemtraDiachi() && KiemtraDoituong()) {
        let hinhthuc = $("input[name='hinhthuc']:checked").val();
        let maThe = $("#txtMa").val();
        let hoTen = $("#txtTen").val();
        let tuoi = $("#txtTuoi").val();
        let sdt = $("#txtSDT").val();
        let diaChi = $("#txtDiaChi").val();
        let dv = $("input[name='dichVu']:checked").val();
        let thanhtoan = $("#tiLeTT").val();
        let tdNew = "<tr><td>" + (i++) + "</td><td>" + hinhthuc + "</td><td>" + maThe + "</td><td>" + hoTen + "</td><td>" + tuoi + "</td><td>" + sdt + "</td><td>" + diaChi + "</td><td>" + dv + "</td><td>" + thanhtoan + "</td></tr>";
        $("#tbody").append(tdNew);
        $("#modalID").modal("hide");
    } else {
        alert("Thông tin không hợp lệ");
    }
});

