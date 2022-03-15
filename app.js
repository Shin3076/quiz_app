const quiz = [
  {
  question: '『STEINS;GATE』未来ガジェット6号機の剣の名前は？',
  answers: [
    "エリュシデータ",
    "サイリウムセイバー",
    "エクスカリバー・オルガン",
    "妖刀・五月雨"
  ],
  correct: 'サイリウムセイバー'
},{
  question: '『SAO』アインクラッドでキリトとアスナが同棲していたのは第何層？',
  answers: [
    "19層",
    "47層",
    "34層",
    "22層"
  ],
  correct: '22層'
},{
  question: '『ギルクラ』篠宮、ダリルが操縦していたロボットは？',
  answers: [
    "エンドレイブ",
    "ナイトメアフレーム",
    "グレンラガン",
    "フランクス"
  ],
  correct: 'エンドレイブ'
},{
  question: '『リゼロ』”剣鬼”の異名を持つキャラクターは？',
  answers: [
    "ラインハルト・ヴァン・アストレア",
    "ユリウス・ユークリウス",
    "ヴィルヘルム・ヴァン・アストレア",
    "ペテルギウス・ロマネコンティ"
  ],
  correct: 'ヴィルヘルム・ヴァン・アストレア'
}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}　
