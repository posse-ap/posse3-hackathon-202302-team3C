// 生川美羽が作成

$(function () {
    $("#acMenu dt").on("click", function () {
        $(this).next().slideToggle();

    })
});

/**input内容 */
// 要素を取得
const universityInput = document.querySelector('.university_input')
const nameInput = document.querySelector('.name_input');
const submitButton = document.querySelector('.submit_button');
const facultyInput = document.querySelector('.faculty_input');
const subnameInput = document.querySelector('.subname_input');
const gradesInput = document.querySelector('.grades_input');
// const commentInput = document.querySelector('.comment_input')
const favoriteInput = document.querySelector('.favorite_input');
const sixteenInput = document.querySelector('.sixteen_input');

const local = localStorage;

let listContent = [];
submitButton.addEventListener('click', function () {
  console.log("aa")
  var myProfile = {
    university: universityInput.value,
    grades: gradesInput.value,
    name: nameInput.value,
    subname: subnameInput.value,
    faculty: facultyInput.value,
    // comment: commentInput.value,
    favorite:favoriteInput.value,
    sixteen: sixteenInput.value,
  }
    console.log(myProfile)
    console.log(listContent)
    listContent.push(myProfile);
    local.stor = JSON.stringify(listContent);
    console.log(local.stor)

    if (sixteenInput.value[0] === '指') {
        const profileBox1 = document.querySelector('.introduce_page1')
        const litag = document.createElement('div');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favoriteInput.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favoriteInput.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '<br>' + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox1.appendChild(litag)

    }
    else if (sixteenInput.value === '幹部型') {
        const profileBox2 = document.querySelector('.introduce_page2')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox2.appendChild(litag)
    }
    else if (sixteenInput.value === '起業型') {
        const profileBox3 = document.querySelector('.introduce_page3')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox3.appendChild(litag)
    }
    else if (sixteenInput.value === '管理者型') {
        const profileBox4 = document.querySelector('.introduce_page4')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox4.appendChild(litag)
    }
    else if (sixteenInput.value === '建築家型') {
        const profileBox5 = document.querySelector('.introduce_page5')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox5.appendChild(litag)
    }
    else if (sixteenInput.value === '主人公型') {
        const profileBox6 = document.querySelector('.introduce_page6')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox6.appendChild(litag)
    }
    else if (sixteenInput.value === '領事官型') {
        const profileBox7 = document.querySelector('.introduce_page7')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox7.appendChild(litag)
    }
    else if (sixteenInput.value === '巨匠型') {
        const profileBox8 = document.querySelector('.introduce_page8')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox8.appendChild(litag)
    }
    else if (sixteenInput.value === '論理者型') {
        const profileBox9 = document.querySelector('.introduce_page9')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox9.appendChild(litag)
    }
    else if (sixteenInput.value === 'エンターテイナー型') {
        const profileBox10 = document.querySelector('.introduce_page10')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox10.appendChild(litag)
    }
    else if (sixteenInput.value === '討論者型') {
        const profileBox11 = document.querySelector('.introduce_page11')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox11.appendChild(litag)
    }
    else if (sixteenInput.value === '広報運動家型') {
        const profileBox12 = document.querySelector('.introduce_page12')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox12.appendChild(litag)
    }
    else if (sixteenInput.value === '冒険者型') {
        const profileBox13 = document.querySelector('.introduce_page13')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox13.appendChild(litag)
    }
    else if (sixteenInput.value === '提唱型') {
        const profileBox14 = document.querySelector('.introduce_page14')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favoriteInput.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox14.appendChild(litag)
    }
    else if (sixteenInput.value === '擁護者') {
        const profileBox15 = document.querySelector('.introduce_page15')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox15.appendChild(litag)
    }
    else if (sixteenInput.value === '仲介者') {
        const profileBox16 = document.querySelector('.introduce_page16')
        const litag = document.createElement('li');
        const ptag = document.createElement('p');

        const nameContent = nameInput.value;
        const subnameContent = subnameInput.value;
        const facultyContent = facultyInput.value;
        const universityContent = universityInput.value;
        // const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;
        const favoriteContent = favorite.value;
        const sixteenContent = sixteenInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        facultyInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        // commentInput.value = '';
        favorite.value = '';
        sixteenInput.value = '';

        ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox16.appendChild(litag)
    }

})



document.addEventListener("DOMContentLoaded", () => {

    const data = local.stor;

    console.log(data)
    listContent = JSON.parse(data);
    console.log(listContent)
    for (const item of listContent) {
        const subnameContent = item.subname;

        if (sixteenInput.value === '指揮官型') {
            const profileBox1 = document.querySelector('.introduce_page1')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteenInput;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox1.appendChild(litag)
        }
        else if (sixteenInput.value === '幹部型') {
            const profileBox2 = document.querySelector('.introduce_page2')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteenInput;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox2.appendChild(litag)
        }
        else if (sixteenInput.value === '起業型') {
            const profileBox3 = document.querySelector('.introduce_page3')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteenInput;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox3.appendChild(litag)
        }
        else if (sixteenInput.value === '管理者型') {
            const profileBox4 = document.querySelector('.introduce_page4')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteenInput;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox4.appendChild(litag)
        }
        else if (sixteenInput.value === '建築家') {
            const profileBox5 = document.querySelector('.introduce_page5')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteenInput;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox5.appendChild(litag)
        }
        else if (sixteenInput.value === '主人公型') {
            const profileBox6 = document.querySelector('.introduce_page6')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteenInput;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;
            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox6.appendChild(litag)
        }
        else if (sixteenInput.value === '領事官型') {
            const profileBox7 = document.querySelector('.introduce_page7')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteenInput;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox7.appendChild(litag)
        }
        else if (sixteenInput.value === '巨匠型') {
            const profileBox8 = document.querySelector('.introduce_page8')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteen;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox8.appendChild(litag)
        }
        else if (sixteenInput.value === '論理者型') {
            const profileBox9 = document.querySelector('.introduce_page9')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteen;


            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox9.appendChild(litag)
        }
        else if (sixteenInput.value === 'エンターテイナー型') {
            const profileBox10 = document.querySelector('.introduce_page10')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteen;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox10.appendChild(litag)
        }
        else if (sixteenInput.value === '討論者型') {
            const profileBox11 = document.querySelector('.introduce_page11')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteen;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox11.appendChild(litag)
        }
        else if (sixteenInput.value === '仲介者型') {
            const profileBox10 = document.querySelector('.introduce_page10')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const facultyContent = item.faculty;
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            // const commentContent = item.comment;
            const favoriteContent = item.favorite;
            const sixteenContent = item.sixteen;

            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            // commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent + '<br>' + '趣味:' + '<span></span>' + favoriteContent + '診断結果:' + '<span></span>' + sixteenContent ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox10.appendChild(litag)
        }
    }
})