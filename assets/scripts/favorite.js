//! **********************************************:
//!           猪瀬雄大担当
//! ***********************************************

const form_game = document.getElementById("form_game");
const input_game = document.getElementById("input_game");
const ul_game = document.getElementById("ul");
const todos_game = JSON.parse(localStorage.getItem("golf_game"));
if (todos) {
  todos.forEach((todo) => {
    add(todo);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
});

function add(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const li = document.createElement("li");

    li.innerText = todoText;
    li.classList.add('list-group-item')

    const replyBtn = document.getElementById('r-button');
    replyBtn.style.display = 'block';
    ul.appendChild(li);
    input.value = "";
    saveData();
  }
}

function saveData() {
  const lists = document.querySelectorAll("li");
  const todos = [];

  lists.forEach((li) => {
    todos.push({
      text: li.innerText,
      completed: li.classList.contains("text-decoration-line-through"),
    });
  });

  localStorage.setItem("golf", JSON.stringify(todos));
}

//リロード時の挙動
window.addEventListener("DOMContentLoaded", () => {
  const replyContent = document.getElementById('reply-content');
  const replyItem = localStorage.getItem('disney-post');

  if (replyItem) {
    replyContent.style.display = 'block';
  } else {
    replyContent.style.display = 'none';
  }

  const inputText = document.getElementById('reply');

  inputText.value = replyItem;
})

const replyContent = document.getElementById('reply-content');
const replyBtn = document.getElementById('r-button');
replyBtn.addEventListener('click', () => {
  replyContent.style.display = 'block';
})
const picture1Array = [
  '../assets/imgs/game_2peaple.jpg',
  '../assets/imgs/game_miu.jpg',
  '../assets/imgs/game_2peaple.jpg'
];
let num = 0;
const slideImg1 = document.getElementById("slideImg1");

function slideShow1() {
  num++;
  if (num >= picture1Array.length) {
    num = 0;
  }
  slideImg1.src = picture1Array[num];
}
setInterval(slideShow1, 1500);

function test() {
  let reply = document.getElementById('reply').value;

  let replyText = localStorage.setItem("golf-post", reply);

  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    alert('メッセージを保存しました！');
  })
}

/* favoriteフォーム */
function inputChange(event){
  msg2.innerText = '私は「' + addContent.value + '」が好きだから追加して欲しい！';
}

let addContent = document.getElementById('addContent');
addContent.addEventListener('change', inputChange);
let msg2 = document.getElementById('msg2');
