// 下山美晴が作成

$(function () {
    $("#acMenu dt").on("click", function () {
        $(this).next().slideToggle();

    })
});

/**input内容 */
// 要素を取得
const universityInput = document.querySelector('.university_input')
const gradesInput = document.querySelector('.grades_input');

const local = localStorage;

let listContent = [];
submitButton.addEventListener('click', function () {
  console.log("aa")
  var myProfile = {
    university: universityInput.value,
    grades: gradesInput.value,
    comment: commentInput.value,
  }
    console.log(talking)
    console.log(listContent)
    listContent.push(talking);
    local.stor = JSON.stringify(listContent);
    console.log(local.stor)

    if (sixteenInput.value[0] === '3.0') {
        const profileBox1 = document.querySelector('.introduce_page1')
        const litag = document.createElement('div');
        const ptag = document.createElement('p');

        const subnameContent = subnameInput.value;
        const universityContent = universityInput.value;
        const commentContent = commentInput.value;
        const gradesContent = gradesInput.value;

        nameInput.value = '';
        subnameInput.value = '';
        universityInput.value = '';
        gradesInput.value = '';
        commentInput.value = '';

        ptag.innerHTML = '名前:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>'  + '<br>' + '用件:' + '<span></span>' + '<br>' + '<br>' + '診断結果:' + '<span></span>' + sixteenContent ;

        ptag.setAttribute('class', 'myinf_item')
        litag.setAttribute('class', 'myinf_list')

        litag.appendChild(ptag);
        profileBox1.appendChild(litag)

    }
    else if (sixteenInput.value === '3.5') {
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
    else if (sixteenInput.value === '4.0') {
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
    



document.addEventListener("DOMContentLoaded", () => {

    const data = local.stor;

    console.log(data)
    listContent = JSON.parse(data);
    console.log(listContent)
    for (const item of listContent) {
        const subnameContent = item.subname;

        if (sixteenInput.value === '3.0') {
            const profileBox1 = document.querySelector('.introduce_page1')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            const commentContent = item.comment;


            nameInput.value = '';
            subnameInput.value = '';
            facultyInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            commentInput.value = '';
            favorite.value = '';
            sixteenInput.value = '';

            ptag.innerHTML = '名前:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + gradesContent + '<br>'   + '<br>' + '名前:' + '<span></span>' + nameContent   ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox1.appendChild(litag)
        }
        else if (sixteenInput.value === '3.5') {
            const profileBox2 = document.querySelector('.introduce_page2')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');

            console.log(item.name);
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            const commentContent = item.comment;
            nameInput.value = '';
            subnameInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            commentInput.value = '';
            ptag.innerHTML = '名前:' + '<span></span>' + universityContent + '<br>' + '学年:' + '<span></span>' + + '<br>' + 'ふりがな:' + '<span></span>' + subnameContent + '<br>' + '名前:' + '<span></span>' + nameContent 
        
            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox2.appendChild(litag)
        }
        else if (sixteenInput.value === '4.0') {
            const profileBox3 = document.querySelector('.introduce_page3')
            const litag = document.createElement('li');
            const ptag = document.createElement('p');
            const universityContent = item.university;
            const nameContent = item.name;
            const gradesContent = item.grades;
            const commentContent = item.comment;

            nameInput.value = '';
            subnameInput.value = '';
            universityInput.value = '';
            gradesInput.value = '';
            commentInput.value = '';

            ptag.innerHTML = '大学名:' + '<span></span>' + gradesContent + '<br>' + '学部・学科:' + '<span></span>' + facultyContent + '<br>' + 'ふりがな:' + '<span></span>'  + nameContent + '<br>' + '趣味:' + '<span></span>'  ;

            ptag.setAttribute('class', 'myinf_item')
            litag.setAttribute('class', 'myinf_list')
            litag.appendChild(ptag)
            profileBox3.appendChild(litag)
            }