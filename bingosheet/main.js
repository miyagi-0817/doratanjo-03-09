// // // １から７５までの数値を獲得
// // // BINGOそれぞれの範囲で適用させる
// // // 毎回更新されるたびにランダムに順番を変える

// ランダムな配列を作成（条件指定）
// 作った配列を入れていく
// 二次元配列を作成
// できた配列を回転 
// 出力

const view = document.getElementById('view');
const hitNum = document.getElementById('hitNum');


// 入れ込む配列
let mhairetu = [];
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

            break;
        }
    }
}

console.log(randoms5);
mhairetu.push(randoms5);

mhairetu[2][2] = "Free";
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
           
        }
    }
    // 指定したdiv要素に表を加える
   
    view.appendChild(table);
}

var data = rotate(mhairetu);;
const maket = makeTable(data, "table");





console.log(mhairetu[2][2])

mhairetu[2][2] = "Free";

console.log(mhairetu[2][2])
hitNum.addEventListener('click', function () {

    rannum = intRandom(1, 75);

    console.log(rannum)


    let td = document.getElementsByTagName('td');

    console.log(td)

    alert(`${rannum}です！`)

    var l = td.length;
    
    console.log(td[2].innerText)

    for (var i = 0; i < l; i++) {


        if (td[i].innerText == rannum) {
            
            td[i].style.backgroundColor = 'red';
            console.log('やったね！');
        }
    }



