// // // １から７５までの数値を獲得
// // // BINGOそれぞれの範囲で適用させる
// // // 毎回更新されるたびにランダムに順番を変える

// ランダムな配列を作成（条件指定）
// 作った配列を入れていく
// 二次元配列を作成
// できた配列を回転 https://www.bugbugnow.net/2019/04/array-rotate.html
// 出力

// var array = [1, 2, 3, 4, 5];
// // 3が含まれているかどうか
// const a = array.includes(3);
// console.log(a)

const view = document.getElementById('view');
const hitNum = document.getElementById('hitNum');


// 入れ込む配列
let mhairetu = [];

// const return = function () {

// const 

/** 重複チェック用配列 */
var randoms = [];
/** 最小値と最大値 */
var min = 1, max = 15;
// var min = 16, max = 30;

// 場所はどこでも変わらない
function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** 重複チェックしながら乱数作成 */
// for (i = min; i <= 5; i++) {
for (i = min; i <= max - min - 9; i++) {
    while (true) {
        var tmp = intRandom(min, max);
        if (!randoms.includes(tmp)) {
            randoms.push(tmp);
            break;
        }
    }
}



console.log(intRandom(16, 30))
console.log(randoms);

mhairetu.push(randoms);
console.log(mhairetu);

// 2回目

var randoms2 = [];
/** 最小値と最大値 */
var min = 16, max = 30;

console.log(min, max)

/** 重複チェックしながら乱数作成 */
for (i = 1; i <= max - min - 9; i++) {
    while (true) {
        var tmp = intRandom(min, max);
        if (!randoms2.includes(tmp)) {
            randoms2.push(tmp);

            // console.log(randoms2);

            break;
        }
    }
}

console.log(randoms2);
mhairetu.push(randoms2);


var randoms3 = [];
/** 最小値と最大値 */
var min = 31, max = 45;

console.log(min, max)

/** 重複チェックしながら乱数作成 */
for (i = 1; i <= max - min - 9; i++) {
    while (true) {
        var tmp = intRandom(min, max);
        if (!randoms3.includes(tmp)) {
            randoms3.push(tmp);

            // console.log(randoms3);

            break;
        }
    }
}

console.log(randoms3);
mhairetu.push(randoms3);


var randoms4 = [];
/** 最小値と最大値 */
var min = 46, max = 60;

console.log(min, max)

/** 重複チェックしながら乱数作成 */
for (i = 1; i <= max - min - 9; i++) {
    while (true) {
        var tmp = intRandom(min, max);
        if (!randoms4.includes(tmp)) {
            randoms4.push(tmp);

            // console.log(randoms4);

            break;
        }
    }
}

console.log(randoms4);
mhairetu.push(randoms4);


console.log(mhairetu);

var randoms5 = [];
/** 最小値と最大値 */
var min = 61, max = 75;

console.log(min, max)

/** 重複チェックしながら乱数作成 */
for (i = 1; i <= max - min - 9; i++) {
    while (true) {
        var tmp = intRandom(min, max);
        if (!randoms5.includes(tmp)) {
            randoms5.push(tmp);

            // console.log(randoms5);

            break;
        }
    }
}

console.log(randoms5);
mhairetu.push(randoms5);

mhairetu[2][2] = "Free";
// };
// hitNum.addEventListener('click', () => {
// return;

// console.log(mhairetu);


// view.textContent = (mhairetu);
// console.log(mhairetu)


// 2次元配列の左90度回転
function rotate(array) {
    const ROW = array.length;
    const COL = array[0].length;
    const col = COL - 1;
    const a = [];//new Array(COL);
    // const a = mhairetu;
    console.log(a)
    for (let c = 0; c < COL; c++) {
        a[c] = [];//new Array(ROW);
        for (let r = 0; r < ROW; r++) {
            a[c][r] = array[r][col - c];
        }
    }
    console.log(a)
    return a;//返り値を理解
};

// const ahairetu = a;
// rotate(mhairetu);
// a=kekka;


// console.log(rotate())
// rotate();

/// 表の動的作成
function makeTable(data) {
    // const kakikae = function makeTable(data) {
    // 表の作成開始
    var rows = [];
    var table = document.createElement("table");

    // 表に2次元配列の要素を格納
    for (i = 0; i < data.length; i++) {
        rows.push(table.insertRow(-1));  // 行の追加
        for (j = 0; j < data[0].length; j++) {
            cell = rows[i].insertCell(-1);
            cell.appendChild(document.createTextNode(data[i][j]));
            // // 背景色の設定
            // if (i == 0) {
            //     cell.style.backgroundColor = "#bbb"; // ヘッダ行
            // } else {
            //     cell.style.backgroundColor = "#ddd"; // ヘッダ行以外
            // }
        }
    }
    // 指定したdiv要素に表を加える
    // document.getElementById(tableId).appendChild(table);
    view.appendChild(table);
}

var data = rotate(mhairetu);;
const maket = makeTable(data, "table");

// hitNum.addEventListener('click', function () {
// window.onload = function () {
//     // 表のデータ
//     // var data = rotate(mhairetu);;
//     // var data = ahairetu;
//     //  [[11, 12, 13],
//     // [21, 22, 23],
//     // [31, 32, 33],
//     // [41, 42, 43]];

//     // 表の動的作成
//     // makeTable(data, "table");
//     // makeTable(data, "table");




console.log(mhairetu[2][2])
// document.getElementById()

mhairetu[2][2] = "Free";

console.log(mhairetu[2][2])

// console.log(randoms3)
// console.log(mhairetu[2, 2])

hitNum.addEventListener('click', function () {
    // let min = 1, max = 75;
    // var tmp = intRandom(min, max);
    // console.log(tmp);
    // if (tmp === 9) {
    //     cell.style.backgroundColor = "#A52A2A";

    // }
    // console.log(mhairetu[''][''])

    rannum = intRandom(1, 75);

    console.log(rannum)


    let td = document.getElementsByTagName('td');

    console.log(td)
    // td[0].style.backgroundColor = 'red';

    // console.log(td[2, 3], [3], [4])
    // console.log(td[2, 3, 4])

    alert(`${rannum}です！`)

    var l = td.length;
    // var l = td.vaule;

    console.log(td[2].innerText)

    for (var i = 0; i < l; i++) {


        //なんで
        // if (td[i].innerText === rannum) {
        if (td[i].innerText == rannum) {
            // td[i].innerText===runnum
            td[i].style.backgroundColor = 'red';
            console.log('やったね！');
        }
        // console.log(td[i]);
        // console.log("<td>" + rannum + "<td>");
    }
    // for (i = 0; i < 25; i++) {
    //     console.log(rannum)

    //     console.log(td[i].value)

    //     if (rannum = td[i].value) {
    //         console.log('どやさ！')
    //         td[i].style.backgroundColor = 'red';
    //     }
    // }

    // 1~24までの配列になっている

    // 単体に対してのスタイル
    // 複数に対して適応するには繰り返しなどが必要


    // const rsame = rannum === randoms;
    // const rsame2 = rannum === randoms2;
    // const rsame3 = rannum === randoms3;
    // const rsame4 = rannum === randoms4;
    // const rsame5 = rannum === randoms5;
    // const rsame = rannum === td;
    // const rsame2 = rannum === td;
    // const rsame3 = rannum === td;
    // const rsame4 = rannum === td;
    // const rsame5 = rannum === td;
    // console.log(randoms[1])

    //     if (rsame || rsame2 || rsame3 || rsame4 || rsame5) {
    //         console.log('aa')
    //         randoms2.style.backgroundColor = "red";
    //         randoms3.style.backgroundColor = "red";
    //         randoms4.style.backgroundColor = "red";
    //         randoms5.style.backgroundColor = "red";
    //         // mhairetu[''][''].style.backgroundColor = "red";
    //     }

    //     // for (i = 0; i < tagList.length; i++) {
    //     //     tagList[i].style.backgroundColor = "yellow";
    //     // }

});
//         // makeTable(data, "table");
//         maket;
//     });
//     // });
// }
    // makeTable(data, "table");
