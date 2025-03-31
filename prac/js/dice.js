// 주사위 게임

let rnd1 = Math.floor(Math.random()*6)+1
let rnd2 = Math.floor(Math.random()*6)+1

let src1 = './images/dice_' + rnd1 + '.png'   // src1 = dice_(랜덤숫자).png 경로
let src2 = './images/dice_' + rnd2 + '.png'   // src2 = dice_(랜덤숫자).png 경로

document.querySelector('.dice .img1').setAttribute('src', src1);  
document.querySelector('.dice .img2').setAttribute('src', src2);
// document.querySelector('.dice .img1') => .dice라는 클래스 안에 있는 .img1 클래스를 가진 요소를 선택
// .setAttribute('src', src1) => src 속성을 src1 값으로 설정
// JavaScript가 실행되면 src1과 src2 값(랜덤 주사위 이미지 경로)이 .img1, .img2의 src 속성에 적용되어
// 화면에 주사위 이미지가 바뀌게 됨

if (rnd1 > rnd2) {
  document.querySelector('header div').innerHTML='Player #1 Wins!!' // header 태그안의 div에 Player #1 Wins!! 문장을 넣음음
} else if (rnd1 < rnd2) {
  document.querySelector('header div').innerHTML='Player #2 Wins!!'
}else {
  document.querySelector('header div').innerHTML='It is a Draw !'
}