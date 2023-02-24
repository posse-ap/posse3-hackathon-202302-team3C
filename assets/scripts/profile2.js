// 生川美羽が作成

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
  "その他",
];

const select = document.querySelector("select.favorite_input");

options.forEach((option) => {
  const optionElement = document.createElement("option");
  optionElement.text = option;
  select.add(optionElement);
});

const listContent = [];

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
  '指揮官型', '幹部型', '起業型', '管理者型',
  '建築家型', '主人公型', '領事官型', '巨匠型',
  '論理者型', 'エンターテイナー型', '討論者型', '広報運動家型',
  '冒険者型', '提唱者型', '擁護者型', '仲介者型',
];

submitButton.addEventListener('click', function () {
  console.log("aa")
  var myProfile = {
    university: universityInput.value,
    grades: gradesInput.value,
    name: nameInput.value,
    subname: subnameInput.value,

    faculty: facultyInput.value,
    favorite: favoriteInput.value,
    sixteen: sixteenInput.value,
  };
  console.log(myProfile);
  console.log(listContent);
  listContent.push(myProfile);
  local.stor = JSON.stringify(listContent);
  console.log(local.stor);

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

  ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '<br>' + '診断結果:' + '<span></span>' + sixteenContent + '<br>';

  ptag.setAttribute('class', 'myinf_item');
  litag.setAttribute('class', 'myinf_list');

  console.log("bb")

  litag.appendChild(ptag);
  profileBox.appendChild(litag);

  const favoriteLink = document.createElement('a');
  if (favoriteContent === options[0]) {
    favoriteLink.href = '../favorite/programming.html';
  } else if (favoriteContent === options[2]) {
    favoriteLink.href = 'index.html';
  } else {
    favoriteLink.href = '#';
  }
  favoriteLink.innerHTML = favoriteContent;
  ptag.appendChild(favoriteLink);
});

//! *******************************************
//! 猪瀬雄大が作成
//! ******************************************


