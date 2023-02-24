"use strict"; {
    // モーダル部分の設定
    const open = document.getElementById('open');
    const open2 = document.getElementById('open2');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
        finish__open.classList.remove("open")


    });

    open2.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
        finish__open.classList.remove("open")
    });

    // モーダルを開く
    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
        hide.classList.remove("hide")
        loading.classList.remove("loader")
        body.classList.remove('overflow-hidden');
        modal.classList.remove("one-screen");
        modal.classList.remove("one-screen2");
        finish__open.classList.remove("open")
    });

    // モーダルをとじる

    mask.addEventListener('click', () => {
        close.click(); //closeをクリックした時のやつを呼び出している
        finish__open.classList.remove("open")

        // バツ印以外押しても消えるよ！
    });
    const hide = document.getElementById("modal-otherthan-close")
    const load = document.getElementById('opened-log-and-submit');
    const loading = document.getElementById('loading');
    const finish__open = document.getElementById("finish-finish");
    const body = document.getElementById("bodybody");

    load.addEventListener("click", () => {
        if (Tweet.checked) {
            openTwitter() //openTwitterを呼び出す 87行目
        }
        hide.classList.add("hide");
        // バツ印以外をけす
        modal.classList.add("one-screen");
        body.classList.add('overflow-hidden')
            // 提出押したら画面が動かないようにする
            //バツ印以外を消す
        loading.classList.add("loader");
        // ぐるぐる君を表示
        let timerId
        timerId = setTimeout(() => {
            loading.classList.remove("loader")
            clearTimeout(timerId);
        }, 3000);
        // 三秒で消える
        setTimeout(function() {
            finish__open.classList.add("open")
        }, 3000);
        // 三秒たったら出す

    }, );


    // スクロール禁止
    document.getElementById('opened-log-and-submit').onclick = function() {
        // イベントと関数を紐付け
        document.addEventListener('touchmove', disableScroll, { passive: false });
        document.body.classList.add('overflow-hidden');
    };






    // twitter----------------------------------------------

    const Tweet = document.querySelector(".js-twitter");

    function openTwitter() {
        const twitterText = document.getElementById("twitterarea").value;
        // テキストを取得
        const turl = `http://twitter.com/intent/tweet?&text=` + twitterText
        window.open(turl, '_blank');
        //blank  新規ウィンドウにドキュメントを読み込む
    }


}