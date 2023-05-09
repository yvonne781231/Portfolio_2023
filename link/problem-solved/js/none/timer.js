var aI = document.getElementsByTagName("i");
var aT = document.getElementsByTagName("t");
// 設置結束時間 : 11/1 00:00:00
var endTime = new Date(2022, 2, 29, 0, 0, 0); // 獲取當前毫秒數

if (endTime > new Date()) {
    setInterval(function () {  // 設置倒數計時: 結束時間 - 當前時間
        // 倒數計時: 差值
        let offsetTime = (endTime.getTime() - new Date().getTime()) / 1000; // ** 以秒為單位

        if(offsetTime < 0){
            location.reload();
        }
        let sec = parseInt(offsetTime % 60); // 秒
        let min = parseInt((offsetTime / 60) % 60); // 分 ex: 90秒
        let hr = parseInt((offsetTime / 60 / 60) % 24); // 時
        let days = parseInt(offsetTime / 60 / 60 / 24);

        aI[0].textContent = days;
        aI[1].textContent = hr;
        aI[2].textContent = min;
        aI[3].textContent = sec;
    }, 1000);
} else {
    $('#timer > span').remove();
}


if (endTime > new Date()) {
    setInterval(function () {  // 設置倒數計時: 結束時間 - 當前時間
        // 倒數計時: 差值
        let offsetTime = (endTime.getTime() - new Date().getTime()) / 1000; // ** 以秒為單位

        if(offsetTime < 0){
            location.reload();
        }
        let sec = parseInt(offsetTime % 60); // 秒
        let min = parseInt((offsetTime / 60) % 60); // 分 ex: 90秒
        let hr = parseInt((offsetTime / 60 / 60) % 24); // 時
        let days = parseInt(offsetTime / 60 / 60 / 24);

        aT[0].textContent = days;
        aT[1].textContent = hr;
        aT[2].textContent = min;
        aT[3].textContent = sec;
    }, 1000);
} else {
    $('.buy__heading > div').remove();
}