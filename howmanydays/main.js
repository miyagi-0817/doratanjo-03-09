
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


}, 1000);


const dateSearch = document.getElementById('dateSearch');
const diffTime = document.getElementById("diffTime");
const date = document.getElementById('dateSet');

console.log(date);


dateSearch.addEventListener('click', () => {
    const datev = document.getElementById('dateSet').value;
    console.log(datev);
   

    setInterval(() => {
       
        const diff = moment(datev).diff(moment());

        // ミリ秒からdurationオブジェクトを生成
        const duration = moment.duration(diff);

        // 日・時・分・秒を取得
        const days = Math.floor(duration.asDays()),
            hours = duration.hours(),
            minutes = duration.minutes(),
            seconds = duration.seconds();

        // 出力
        diffTime.textContent = `${datev}まで${days}日${hours}時間${minutes}分${seconds}秒`;

    }, 1000);

    // diffTime.textContent = `konnichiha`;

});
