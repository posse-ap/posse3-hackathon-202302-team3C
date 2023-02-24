// 生川美羽が作成
// localStorage.clear()
// これがあればローカルストレージ
$(function () {
  $("#acMenu dt").on("click", function () {
      $(this).next().slideToggle();

  })
});
/**input内容 */
// 要素を取得
// 要素を取得
const universityInput = document.querySelector('.university_input');
const nameInput = document.querySelector('.name_input');
const submitButton = document.querySelector('.submit_button');
const facultyInput = document.querySelector('.faculty_input');
const subnameInput = document.querySelector('.subname_input');
const gradesInput = document.querySelector('.grades_input');
const favoriteInput = document.querySelector('.favorite_input');
const sixteenInput = document.querySelector('.sixteen_input');
const local = localStorage;
const options = [
  "プログラミング",
  "料理",
  "ゲーム",
  "旅行",
  "YouTube",
  "カフェ巡り",
  "その他",
];
const select_hobby = document.querySelector("select.favorite_input");
const select_type = document.querySelector("select.sixteen_input");
options.forEach((option) => {
  const optionElement = document.createElement("option");
  optionElement.text = option;
  select_hobby.add(optionElement);
});

// submitButtonのクリックイベント
let listContent = [];
if (local.stor) {
  listContent = JSON.parse(local.stor);
}
const profileBoxes = [
  document.querySelector('.introduce_page1'),
  document.querySelector('.introduce_page2'),
  document.querySelector('.introduce_page3'),
  document.querySelector('.introduce_page4'),
  document.querySelector('.introduce_page5'),
  document.querySelector('.introduce_page6'),
  document.querySelector('.introduce_page7'),
  document.querySelector('.introduce_page8'),
  document.querySelector('.introduce_page9'),
  document.querySelector('.introduce_page10'),
  document.querySelector('.introduce_page11'),
  document.querySelector('.introduce_page12'),
  document.querySelector('.introduce_page13'),
  document.querySelector('.introduce_page14'),
  document.querySelector('.introduce_page15'),
  document.querySelector('.introduce_page16'),
];
const sixteenTypes = [
  '指揮官型', '幹部型', '起業家型', '管理者型',
  '建築家型', '主人公型', '領事官型', '巨匠型',
  '論理者型', 'エンターテイナー型', '討論者型', '広報運動家型',
  '冒険者型', '提唱者型', '擁護者型', '仲介者型',
];

sixteenTypes.forEach((type) => {
  const typeElement = document.createElement("option");
  typeElement.text = type;
  select_type.add(typeElement);
});

if (local.stor) {
  const profiles = JSON.parse(local.stor);
  profiles.forEach((profile) => {
    const { university, grades, name, subname, faculty, favorite, sixteen } = profile;
    const index = sixteenTypes.indexOf(sixteen);
    const profileBox = profileBoxes[index];
    const litag = document.createElement('div');
    const ptag = document.createElement('p');
    ptag.innerHTML = `大学名:<span>${university}</span><br>学年:<span>${grades}</span><br>学部・学科:<span>${faculty}</span><br>ふりがな:<span>${subname}</span><br>名前:<span>${name}</span><br>趣味:<span>${favorite}</span><br>診断結果:<span>${sixteen}</span><br>`;
    ptag.setAttribute('class', 'myinf_item');
    litag.setAttribute('class', 'myinf_list');
    litag.appendChild(ptag);
    profileBox.appendChild(litag);


  });
}

submitButton.addEventListener('click', function () {
  var myProfile = {
    university: universityInput.value,
    grades: gradesInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
    favorite: favoriteInput.value,
    sixteen: sixteenInput.value,
  };
  // プロフィールを配列に追加
  listContent.push(myProfile);
  // 配列をローカルストレージに保存
  localStorage.setItem('stor', JSON.stringify(listContent));
  // プロフィールを表示するためのコード
  const index = sixteenTypes.indexOf(sixteenInput.value);
  const profileBox = profileBoxes[index];
  const litag = document.createElement('div');
  const ptag = document.createElement('p');
  const nameContent = nameInput.value;
  const subnameContent = subnameInput.value;
  const facultyContent = facultyInput.value;
  const universityContent = universityInput.value;
  const gradesContent = gradesInput.value;
  const favoriteContent = favoriteInput.value;
  const sixteenContent = sixteenInput.value;

  nameInput.value = '';
  subnameInput.value = '';
  facultyInput.value = '';
  universityInput.value = '';
  gradesInput.value = '';
  favoriteInput.value = '';
  sixteenInput.value = '';
  ptag.setAttribute('class', 'myinf_item');
  litag.setAttribute('class', 'myinf_list');
  litag.appendChild(ptag);
  profileBox.appendChild(litag);
  const favoriteLink = document.createElement('a');
  ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '<br>' + '診断結果:' + '<span></span>' + sixteenContent + '<br>'+`<br>`+`<strong>【相性が良い人を見てみよう!】</strong>`+`<br>`;
  if (sixteenContent === sixteenTypes[0]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t14`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[14]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t14');
    const testkunElement_self = document.getElementById('t0');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[1]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t13`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[13]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t13');
    const testkunElement_self = document.getElementById('t1');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[2]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t15`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[15]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t15');
    const testkunElement_self = document.getElementById('t2');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[3]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t5`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[5]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t5');
    const testkunElement_self = document.getElementById('t3');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[4]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t6`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[6]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t6');
    const testkunElement_self = document.getElementById('t4');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[5]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t3`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[3]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t3');
    const testkunElement_self = document.getElementById('t5');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[6]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t4`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[4]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t4');
    const testkunElement_self = document.getElementById('t6');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[7]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t11`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[11]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t11');
    const testkunElement_self = document.getElementById('t7');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }

  else  if (sixteenContent === sixteenTypes[8]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t9`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[9]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t9');
    const testkunElement_self = document.getElementById('t8');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[9]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t8`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[8]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t8');
    const testkunElement_self = document.getElementById('t9');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[10]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t12`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[12]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t12');
    const testkunElement_self = document.getElementById('t10');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[11]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t7`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[7]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t7');
    const testkunElement_self = document.getElementById('t11');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[12]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t10`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[10]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t10');
    const testkunElement_self = document.getElementById('t12');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[13]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t1`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[1]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t1');
    const testkunElement_self = document.getElementById('t13');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else  if (sixteenContent === sixteenTypes[14]) {
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t0`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[0]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t0');
    const testkunElement_self = document.getElementById('t14');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);
  }
  else{
    const compatibleTypeLink = document.createElement('a');
    compatibleTypeLink.href = `#t2`;
    compatibleTypeLink.style.color = '#CB98E4';
    compatibleTypeLink.innerHTML = `<br>`+`「${sixteenContent}」と相性が良いのは「${sixteenTypes[2]}」です。` + `<br>`+`誰がいるか見てみよう！` + `<br>`+`<br>`+`↑これをクリックしてね`+`<br>`;
    const testkunElement = document.getElementById('t2');
    const testkunElement_self = document.getElementById('t15');
    testkunElement.style.color = 'red';
    testkunElement_self.style.color = 'red';
    testkunElement_self.classList.add('my-link2');
    ptag.appendChild(compatibleTypeLink);

  }









  ptag.innerHTML += `<br><br><strong>【同じ趣味の人と繋がろう！】</strong><br>`;
  favoriteLink.innerHTML = favoriteContent;


  // const options = [
  //   "プログラミング",
  //   "料理",
  //   "ゲーム",
  //   "旅行",
  //   "YouTube",
  //   "カフェ巡り",
  //   "その他",
  // ];

  if (favoriteContent === options[0]) {
    favoriteLink.href = '../favorite/programming.html';
  } else if (favoriteContent === options[1]) {
    favoriteLink.href = '../favorite/cooking.html';
  } else if (favoriteContent === options[2]) {
    favoriteLink.href = '../favorite/game.html';
  } else if (favoriteContent === options[3]) {
    favoriteLink.href = '../favorite/travel.html';
  } else if (favoriteContent === options[4]) {
    favoriteLink.href = '../favorite/youtube.html';
  }else if (favoriteContent === options[5]) {
    favoriteLink.href = '../favorite/cafe.html';
  }

  ptag.appendChild(favoriteLink);

favoriteLink.classList.add('my-link');
  ptag.innerHTML += `<br>↑このリンクをクリック！`;


});

