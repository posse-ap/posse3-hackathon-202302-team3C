//生川美羽作成
function inputChange(event) {
    msg.innerText = cultureText.value + 'をやりたい!';
}

let nameText = document.getElementById('cultureText');
nameText.addEventListener('change', inputChange);
let msg = document.getElementById('msg');