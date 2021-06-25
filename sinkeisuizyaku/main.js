
const nextPlayer = document.getElementById('nextPlayer');
const player1Point = document.getElementById('player1Point');
const player2Point = document.getElementById('player2Point');
let k = 'anat';
const p1 = "player1"
const p2 = "player2"
let pnum = 0;
let p1sco = 0;
let p2sco = 0;


nextPlayer.textContent = `${p1}の番です`;
player1Point.textContent = `${p1}:${p1sco}`;
player2Point.textContent = `${p2}:${p2sco}`;
// player1Point.textContent = `player1:${}`;
// player2Point.textContent = `player2:${}`;

/// グローバル
// div要素を格納
var cards = [];
// 開始時間
var startTime;
// 経過秒数用 タイマーID
var timer;
// カードめくり用 タイマーID
var backTimer;
// 1枚目かどうかのフラグ   1枚目: true   2枚目: false
var flgFirst = true;
// 1枚目のカードを格納
var firstcard;
// そろえた枚数
var countUnit = 0;




// window.onload = function () {
//     peamake;
// }

// window.onload = function () {
const peamake = function () {
    // 数字格納 一時配列
    var arr = [];

    for (var i = 0; i < 4; i++) {
        // ペアの数字を10組
        arr.push(i);
        arr.push(i);
        // arr.push(i);
        // arr.push(i);
    }
    let a = arr[1];



    // console.log([a])
    // シャッフル
    shuffle(arr);

    var panel = document.getElementById('panel');


    // div要素作成
    for (i = 0; i < 8; i++) {
        var div = document.createElement('div');

        // console.log(div.number)

        div.className = 'card back';
        div.index = i;
        div.number = arr[i];

        // console.log(div.number)

        div.innerHTML = '';
        div.onclick = turn;
        panel.appendChild(div);
        cards.push(div);


    }

    // 開始時刻を取得
    // startTime = new Date();
    // タイマー開始
    // startTimer();

}
// alert('終わり！')

// シャッフル用関数
peamake();

// ２コピ目
function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        // alert('終わり！')
    }
    return arr;
}
// let div = document.getElementsByClassName('finish')
// let dchil = div.childNodes;
// 元コピペ
// function shuffle(arr) {
//     var n = arr.length;
//     var temp, i;
//     console.log(n)

//     while (n) {
//         i = Math.floor(Math.random() * n--);

//         console.log(i)

//         temp = arr[n];
//         arr[n] = arr[i];

//         console.log(arr[n])

//         arr[i] = temp;
//     }
//     return arr;
// }
let c = 0;

// クリック時の処理
function turn(e) {

    var div = e.target;
    console.log(div)

    // function bee() {

    //     setTimeout(function () {
    //         div.className = 'card back';
    //         div.innerHTML = '';
    //         firstcard.className = 'card back';
    //         firstcard.innerHTML = '';
    //         firstcard = null;
    //         backTimer = NaN;
    //     }, 500);
    // }


    // console.log(div.number)
    // カードのタイマー処理が動作中は return
    if (backTimer) return;

    // 裏向きのカードをクリックした場合は数字を表示する
    if (div.innerHTML == '') {
        div.className = 'card';
        div.innerHTML = div.number;
    } else {
        // 数字が表示されているカードは return
        return;
    }


    // 1枚目の処理
    if (flgFirst) {
        // firstcard は2枚目の処理のときに使う
        firstcard = div;
        // フラグ変更
        flgFirst = false;

        // 2枚目の処理
    } else {

        // 数字が1枚目と一致する場合
        if (firstcard.number == div.number) {
            countUnit++;
            // pnum=1;
            // 見えない状態にする
            backTimer = setTimeout(function () {
                div.className = 'card finish';
                firstcard.className = 'card finish';
                backTimer = NaN;
                // if () { }

                // c = c + 1;
                // console.log(div.className.value);
                // console.log(div.className.length);
                // console.log(c);
                // let a = 0;
                // if (div.className.length = 11) {
                //     c++;
                //     // c = c++;
                //     console.log(c);
                // }
                // console.log(c);

                //     // if (c === 2) {
                //     //     a++;
                //     // }

                //     return c;

                // }

                console.log(div.className.length)
                if (div.classList.contains('finish') == true) {
                    //何か処理を書く
                    console.log('aha')
                    // console.log(c)
                    // console.log(div.className.length)
                    c = c + 1;
                }
                // console.log(c)

                // alert('owari!')
                // if (a === 4) {
                // if (c === 4) {
                //     // if (div.className == 'card finish') {
                //     // if (HTMLCollection.length === 8) {
                //     // console.log(bee)
                //     alert('終わりました!')
                //     p1sco = 0;
                //     p2sco = 0;
                //     nextPlayer.textContent = `${p1}Aの番です`;
                //     player1Point.textContent = `${p1}:${p1sco}`;
                //     // nextPlayer.textContent = `${p2}Aの番です`;
                //     console.log(p2sco)
                //     player2Point.textContent = `${p2}:${p2sco}`;

                //     let children = panel.childNodes;

                //     let len = children.length;
                //     // console.log("ノード数:" + len);
                //     const rediv = document.getElementsByClassName('card');

                //     for (let i = 0; i < len; i++) {
                //         // console.log(children.item(i).nodeName);
                //         rediv[i].className = 'card back';
                //         rediv[i].innerHTML = '';
                //     }
                // }


                if (countUnit == 10) {
                    clearInterval(timer);  // timer終了

                }
                // console.log(pnum)
                if (pnum === 0) {
                    p1sco = p1sco + 1;
                    nextPlayer.textContent = `${p1}の番です`;
                    player1Point.textContent = `${p1}:${p1sco}`;

                    console.log(pnum)
                    // pnum=1;
                } else {
                    p2sco = p2sco + 1;
                    nextPlayer.textContent = `${p2}の番です`;
                    player2Point.textContent = `${p2}:${p2sco}`;
                    console.log(pnum)
                    // pnum++;
                }
                if (c === 4) {
                    // if (div.className == 'card finish') {
                    // if (HTMLCollection.length === 8) {
                    // console.log(bee)
                    if (pnum === 0) {
                        alert('1の勝ち!')
                    } else {
                        alert('2の勝ち!')

                    }
                    p1sco = 0;
                    p2sco = 0;
                    nextPlayer.textContent = `${p1}の番です`;
                    player1Point.textContent = `${p1}:${p1sco}`;
                    // nextPlayer.textContent = `${p2}Aの番です`;
                    console.log(p2sco)
                    player2Point.textContent = `${p2}:${p2sco}`;

                    let children = panel.childNodes;

                    let len = children.length;
                    // console.log("ノード数:" + len);
                    const rediv = document.getElementsByClassName('card');

                    for (let i = 0; i < len; i++) {
                        // console.log(children.item(i).nodeName);
                        rediv[i].className = 'card back';
                        rediv[i].innerHTML = '';
                    }
                }
            }, 500)

            // 一致しない場合
        } else {
            // pnum--;
            // カードを裏側に戻す
            backTimer = setTimeout(function () {
                div.className = 'card back';
                div.innerHTML = '';
                firstcard.className = 'card back';
                firstcard.innerHTML = '';
                firstcard = null;
                backTimer = NaN;
                if (pnum === 0) {
                    nextPlayer.textContent = `${p2}の番です`;
                    console.log(pnum)
                    pnum++;
                } else {
                    nextPlayer.textContent = `${p1}の番です`;
                    console.log(pnum)
                    pnum--;

                }
            }, 500);
        }



        flgFirst = true;
    }
    let dchil = document.getElementsByClassName('finish');
    console.log(dchil)

}

