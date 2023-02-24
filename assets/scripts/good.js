function likeButtonClicked(event) {
  const article = event.target.closest('article');

  // いいねの数を取得
  const likeCountElement = article.querySelector('.like-count');
  const likeCount = Number(likeCountElement.textContent);

  // いいねの数を更新
  likeCountElement.textContent = likeCount + 1;
}

// いいねボタンにクリックイベントを追加
const likeButtons = document.querySelectorAll('.like-button');
for (const button of likeButtons) {
  button.addEventListener('click', likeButtonClicked);
}




