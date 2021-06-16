// // // // // // フロー確認
// // // // // // 数字を入力
// // // // // // 入力された数字を取得
// // // // // // コンピュータが生成したランダムな数字と比較
// // // // // // 桁数が合っていればEATと出力
// // // // // // 使われている数字があっていればいいBITEと表示
// // // // // // ぴったりだったら正解の表示

const remainTurn = document.getElementById('remainTurn');
// remainTurn = 0;
let i = 10;
let z = 0;
remainTurn.textContent = `あと${i}回です`

const ansNum = new Array(3);
function initAnsNum() {
    ansNum[0] = Math.floor(Math.random() * 10);
    do {
        ansNum[1] = Math.floor(Math.random() * 10);
    } while (ansNum[0] === ansNum[1]);
    do {
        ansNum[2] = Math.floor(Math.random() * 10);
    } while (ansNum[0] === ansNum[2] || ansNum[1] === ansNum[2]);
}

initAnsNum();
// console.log(cpuans);

let isFinish = false;
// const pat = /^\d{3}$/

// while (!isFinish) {
//     // ゲームループ処理
//     console.log("予想数値を入力");
//     let input = require('fs').readFileSync('/dev/stdin', 'UTF-8');
let numCheck = document.getElementById('numCheck');

numCheck.addEventListener('click', () => {
    let answerNum = document.getElementById('answerNum');
    let input = answerNum.value;
    console.log(answerNum.value);

    if ((input.length <= 2 || input.length >= 4) && (input[0] === input[1] || input[0] === input[2] || input[1] === input[2])) {
        // console.log("3桁の数値を入力してください。");
        // alert("3桁の数値を入力してください。");
        alert('数字は3桁でそれぞれ別の数をオネシャス！');
        // input = "";
        answerNum.value = '';
        //         continue;
    } else if (input.length <= 2 || input.length >= 4) {
        // console.log("3桁の数値を入力してください。");
        // alert("3桁の数値を入力してください。");
        alert('数字は3桁でオネシャス！');
        // input = "";
        answerNum.value = '';
        //         continue;
    } else if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2]) {
        // console.log("異なる3桁の数値を入力してください。");
        alert("異なる3桁の数値を入力してください。");
        answerNum.value = '';
        //         continue;
    } else {

        let eat = 0;
        let bite = 0;
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < ansNum.length; j++) {
                if (input[i] == ansNum[j]) {
                    if (i === j) {
                        eat = eat + 1;
                    } else {
                        bite = bite + 1;
                    };
                };
            };
        };
        // console.log(`${eat} EAT, ${bite} BITE`);

        // alert(`${eat} EAT, ${bite} BITE`);
        answerNum.value = '';

        if (eat != 3) {
            // console.log("正解です。おめでとう！");
            alert(`${eat} EAT, ${bite} BITE`);
            answerNum.value = '';
            z += 1;
            i = i - z;

            remainTurn.textContent = `あと${i}回です`;
            z = 0;
            // i = i;
            // alert("正解です。おめでとう！");
            answerNum.value = '';
        };
        if (eat === 3) {
            // console.log("正解です。おめでとう！");
            alert("正解です。おめでとう！");
            answerNum.value = '';
        };
        console.log(ansNum);
        // remainTurn.textContent = ansNum;
    };
})
    //     input = input.slice(0, input.length - 1);
    //     if (!pat.test(input)) {
        //         console.log("3桁の数値を入力してください。");
        //         continue;
        //     }
        //     if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2]) {
            //         console.log("異なる3桁の数値を入力してください。");
            //         continue;
//     }

    // let eat = 0;
    // let bite = 0;
    // for (let i = 0; i < input.length; i++) {
    //     for (let j = 0; j < ansNum.length; j++) {
    //         if (input[i] == ansNum[j]) {
    //             if (i === j) {
    //                 eat = eat + 1;
    //             } else {
    //                 bite = bite + 1;
    //             }
    //         }
    //     }
    // }
    // console.log(`${eat} EAT, ${bite} BITE`);
    // if (eat === 3) {
    //     console.log("正解です。おめでとう！");
//         isFinish = true;
//     }
// }