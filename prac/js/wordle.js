let myWord, len

window.onload=function() {
  myWord = 'mentos'  // 추측할 단어 설정
  myWord = myWord.toLowerCase() // 모든문자를 소문자로 변환
  len = myWord.length // 단어의 길이 저장
  insertNewRow()  // 새로운 행 삽입 함수 호출
  document.getElementById('submit') // 'submit' 버튼에 이벤트 리스너 추가
  .addEventListener('click', handleSubmit)  // 클릭 시 handlesubmit 함수실행
}

function handleSubmit() {
  let ipts = document.querySelectorAll('.ipt')
  let correct = 0
  ipts.forEach( (x)=>{x.disabled=true;} ) // 입력 비활성화 처리

  for(let i=0; i < len; i++) {
    let aLetter = ipts[i].value.toLowerCase()
    let pos = aLetter ? myWord.indexOf(aLetter) : -1; // 이 글에 정답 단어가 존재하는지 확인(없으면 -1, 있으면 그 위치 반환)
    if(pos == -1) {
      ipts[i].classList.replace('ipt', 'ipt_no_match') // 정답에 없는 글자자
    }else if (myWord[i] == aLetter) { 
      ipts[i].classList.replace('ipt', 'ipt_match') // 글자 및 위치 정확히맞음
      correct++
    }else {
      ipts[i].classList.replace('ipt', 'ipt_in')  // 글자는 맞지만 자리는 틀림
    }
  }

  if (correct < len) {
    insertNewRow()
  }else {
    youWin()
  }
}

function insertNewRow() {
  let newDiv = document.createElement('div')
  newDiv.classList.add('row')
  for(let i=0; i < len; i++){
    newDiv.innerHTML += '<input class="ipt" type="text" maxlength="1">'
  }
  document.getElementById('game').appendChild(newDiv)
}

function youWin() {
  document.querySelector('header div').innerHTML='Correct!!'
}