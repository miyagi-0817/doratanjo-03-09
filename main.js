// diffメソッドを使って、現時刻と2017年7月1日の日時の差を、ミリ秒で取得

// // 1秒おきにカウントダウン

// const wri = document.createElement("p");
// document.body.appendChild(wri);
// let cnt = sec;
// wri.textContent = `ドラえもんが生まれるまであと${cnt}日`;
// let id = setInterval(function () {

// const wri = document.createElement("p");
// document.body.appendChild(wri);
// let cnt = sec;
// wri.textContent = `ドラえもんが生まれるまであと${cnt}日`;
// const body = document.getElementById('body');
const rew = document.createElement('p');
document.body.appendChild(rew);
setInterval(() => {
    const diff = moment('2112-03-09').diff(moment());

    // ミリ秒からdurationオブジェクトを生成
    const duration = moment.duration(diff);

    // 日・時・分・秒を取得
    const days = Math.floor(duration.asDays()),
        hours = duration.hours(),
        minutes = duration.minutes(),
        seconds = duration.seconds();

    // 出力
    console.log(`ドラえもんが生まれるまで${days}日と${hours}時間${minutes}分${seconds}秒`);
    rew.textContent = `ドラえもんが生まれるまであと${days}日と${hours}時間${minutes}分${seconds}秒`;

}, 1000);


// let v = moment('2018-12-25', 'YYYY-MM-DD').diff(moment('2017-12-25', 'YYYY-MM-DD'), 'days'); // => 365
// wri.textContent = v;

// カウントダウンする秒数
// let sec = 180;

// // 開始日時を設定
// // let dt = new Date();
// let dt = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log("Start: ", dt);
// // 終了時刻を開始日時+カウントダウンする秒数に設定
// let endDt = new Date(dt.getTime() + sec * 1000);
// console.log("End : ", endDt);

// // カウントダウンする秒数
// let sec = 180;

// // 開始日時を設定
// let dt = new Date();
// // let dt = new Date(年, 月, 日, 時, 分, 秒);
// // console.log("Start: ", dt);
// // 終了時刻を開始日時+カウントダウンする秒数に設定
// let endDt = new Date(dt.getTime() + sec * 1000);
// console.log("End : ", endDt);

// const wri = document.createElement("p");
// document.body.appendChild(wri);
// // 1秒おきにカウントダウン
// let cnt = sec;
// let id = setInterval(function () {

//     wri.textContent = `ドラえもんが生まれるまであと${cnt}日`;

//     // console.log(cnt);
//     cnt--;
//     // 現在日時と終了日時を比較
//     dt = new Date();
//     if (dt.getTime() >= endDt.getTime()) {
//         clearInterval(id);
//         console.log("Finish!");
//     }
// }, 1000);

// //カウントダウンの終了日時を指定
// const EndTime = new Date("2112/9/3 23:59:59");
// //タイマーを表示する要素
// // const wri = document.getElementById("count_down_timer");


// const wri = document.createElement("p");
// document.body.appendChild(wri);

// function displayTime(diff) {
//     if (diff > 0) {
//         wri.textContent = `ドラえもんが生まれるまであと  ${d}  日  ${h}  時間  ${m} 分${s} 秒`;
//     }
//     else {
//         wri.textContent = '締め切りました。';
//     }
// }
// function calcRemainingTime() {
//     //現在日時を取得
//     const NowTime = new Date();
//     //差分
//     const diff = EndTime - NowTime;
//     //計算
//     d = Math.floor(diff / (24 * 60 * 60 * 1000));
//     h = Math.floor(diff / (60 * 60 * 1000)) % 24;
//     m = Math.floor(diff / (60 * 1000)) % 24 % 60;
//     s = Math.floor(diff / 1000) % 24 % 60 % 60;
//     //表示
//     displayTime(diff);
// };

// // const tfunc = function (function name(params) {

// // }() {
// //     //現在日時を取得
// //     const NowTime = new Date();
// //     //差分
// //     const diff = EndTime - NowTime;
// //     //計算
// //     d = Math.floor(diff / (24 * 60 * 60 * 1000));
// //     h = Math.floor(diff / (60 * 60 * 1000)) % 24;
// //     m = Math.floor(diff / (60 * 1000)) % 24 % 60;
// //     s = Math.floor(diff / 1000) % 24 % 60 % 60;
// //     //表示
// //     displayTime(diff);
// // }, 1000);
// calcRemainingTime();
// setInterval(calcRemainingTime, 1000);

// let require;
// kopipe
// const moment = require('moment');
// const mo = moment().format('MMMM Do YYYY, h:mm:ss a'); // 6月 13日 2021, 8:25:19 午前

// console.log(mo);
