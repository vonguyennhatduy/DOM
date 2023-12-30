

// BÀI 1

document.getElementById('btnTinhLuong').onclick = function () {
    console.log('Tính lương nhân viên');

    var tienLuong = document.getElementById('txtTienLuong').value * 1;
    var soNgayLam = document.getElementById('txtSoNgayLam').value * 1;
    
    var ans = tienLuong * soNgayLam;

    console.log(ans);

    document.getElementById('txtAnswer').innerHTML = "Lương nhân viên : " + ans;
}

// BÀI 2 

document.getElementById('btnTrungBinh').onclick = function () {
    var so1 = document.getElementById('txtSoThuNhat').value * 1;
    var so2 = document.getElementById('txtSoThuHai').value * 1;
    var so3 = document.getElementById('txtSoThuBa').value * 1;
    var so4 = document.getElementById('txtSoThuTu').value * 1;
    var so5 = document.getElementById('txtSoThuNam').value * 1;

    var res = (so1 + so2 + so3 + so4 + so5) / 5;

    document.getElementById('ketQuaTinhTrungBinh').innerHTML = "Trung bình cộng 5 số : " + res;
}

// BÀI 3

document.getElementById('btnTien').onclick = function () {
    var usd = document.getElementById('txtTienUSD').value * 1;

    usd = usd * 23.500;

    document.getElementById('ketQuaQuyDoi').innerHTML = usd.toFixed(3);
}

// BÀI 4

document.getElementById('btncalc').onclick = function () {
    var chieuDai = document.getElementById('txtChieuDai').value * 1;
    var chieuRong = document.getElementById('txtChieuRong').value * 1;

    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;

    document.getElementById('txtResult').innerHTML = "Diện tích : " + dienTich + "; Chu vi : " + chuVi;
}

// BÀI 5

document.getElementById('btnTinhTong').onclick = function () {
    var number = document.getElementById('txtSoCoHaiChuSo').value * 1;

    var donVi = number % 10;
    var chuc = parseInt(number / 10);

    var ans = donVi + chuc;

    document.getElementById('ketQuaTong').innerHTML = ans;
}





