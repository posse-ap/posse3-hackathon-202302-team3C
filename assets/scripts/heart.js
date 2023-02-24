const button = document.getElementById('comment_btn');
const replyBox = document.getElementById('comment_reply');
const commentBox = document.getElementById('comment_box')

button.addEventListener('click', () => {
    replyBox.classList.add('is-clicked');
    commentBox.classList.add('is-clicked');
})


// ここから送信ボタンを押したら、下に出てくるものを作っていきたい

const ageInput=document.querySelector('.age_input');
const monthsInput=document.querySelector('.months_input');
const daysInput=document.querySelector('.days_input');
const subnameInput=document.querySelector('.heart_subname_input');
const nameInput=document.querySelector('.heart_name_input');
const commentInput = document.querySelector('.heart_comment_input');
const submitButton=document.querySelector('.heart_submit_button');

var heartContents = [];
const st = localStorage;
submitButton.addEventListener('click', function(){
    var myheart = [{
        age: ageInput.value,
        month: monthsInput.value,
        day: daysInput.value,
        subname: subnameInput.value,
        name: nameInput.value,
        comment: commentInput.value,
        }]
    
    heartContents.push(myheart);
    st.store=JSON.stringify(heartContents);
    
    const heartbox= document.querySelector('.container_content_date');
    const heartboxAge = document.querySelector('.container_content_date_age');
    const heartboxMonth = document.querySelector('.container_content_date_month');
    const heartboxDay = document.querySelector('.container_content_date_day');
    const heartboxName = document.querySelector('.container_content_date_name');
    const heartboxDetail = document.querySelector('.container_content_detail');
    const heartboxContent = document.createElement('p');
    const contentContainer=document.querySelector('.container_content');

    const ageContent = ageInput.value;
    const monthsContent = monthsInput.value;
    const daysContent =  daysInput.value;
    const subnameContent = subnameInput.value;
    const nameContent = nameInput.value;
    const commentContent = commentInput.value;
    
    ageInput.value='';
    monthsInput.value='';
    daysInput.value='';
    subnameInput.value='';
    nameInput.value='';
    commentInput.value='';

    heartboxAge.innerHTML = ageContent +'<span></span>';
    heartboxMonth.innerHTML = monthsContent + '<span></span>';
    heartboxDay.innerHTML = daysContent  + '<span></span>';
    heartboxName.innerHTML = '名前：' + nameContent ;
    heartboxContent.innerHTML = commentContent;
    heartboxContent.setAttribute('class', 'container_content_detail_ptag');
    heartboxDetail.appendChild(heartboxContent);
    console.log(heartContents)
})