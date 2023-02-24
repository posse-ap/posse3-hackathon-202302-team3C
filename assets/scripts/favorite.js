//! **********************************************:
//!           猪瀬雄大担当
//! ***********************************************

const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("golf"));
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

//! **********************************************:
//!           生川美羽担当
//! ***********************************************
// ゲームフォーム
