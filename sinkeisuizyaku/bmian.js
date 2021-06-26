

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




const peamake = function () {
    // 数字格納 一時配列
    var arr = [];

    for (var i = 0; i < 4; i++) {
        // ペアの数字を10組
        arr.push(i);
        arr.push(i);
    }
    let a = arr[1];



    console.log([a])
    // シャッフル
    shuffle(arr);

    var panel = document.getElementById('panel');


    // div要素作成
    for (i = 0; i < 8; i++) {
        var div = document.createElement('div');

        console.log(div.number)

        div.className = 'card back';
        div.index = i;
        div.number = arr[i];

        console.log(div.number)

        div.innerHTML = '';
        div.onclick = turn;
        panel.appendChild(div);
        cards.push(div);


    }


}

// シャッフル用関数
peamake();

function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
let c = 0;

// クリック時の処理
function turn(e) {

    var div = e.target;
    console.log(div)

    function bee() {

        setTimeout(function () {
            div.className = 'card back';
            div.innerHTML = '';
            firstcard.className = 'card back';
            firstcard.innerHTML = '';
            firstcard = null;
            backTimer = NaN;
        }, 500);
    }


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
            // 見えない状態にする
            backTimer = setTimeout(function () {
                div.className = 'card finish';
                firstcard.className = 'card finish';
                backTimer = NaN;
                console.log(div.className.length)
                if (div.classList.contains('finish') == true) {
                    //何か処理を書く
                    console.log('aha')
                    console.log(c)
                    // console.log(div.className.length)
                    c = c + 1;
                }
                console.log(c)

                if (c === 4) {
                    console.log(bee)
                    alert('終わりました!')

                    let children = panel.childNodes;

                    let len = children.length;
                    const rediv = document.getElementsByClassName('card');

                    for (let i = 0; i < len; i++) {
                        console.log(children.item(i).nodeName);
                        rediv[i].className = 'card back';
                        rediv[i].innerHTML = '';
                    }
                }


                if (countUnit == 10) {
                    clearInterval(timer);  // timer終了

                }
            }, 500)

            // 一致しない場合
        } else {
            // カードを裏側に戻す
            backTimer = setTimeout(function () {
                div.className = 'card back';
                div.innerHTML = '';
                firstcard.className = 'card back';
                firstcard.innerHTML = '';
                firstcard = null;
                backTimer = NaN;
            }, 500);
        }

        flgFirst = true;
    }
    let dchil = document.getElementsByClassName('finish');
    console.log(dchil)

}

