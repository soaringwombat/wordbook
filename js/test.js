// 単語リスト
const wordList = [];

// 配列をシャッフルする関数
function arrayShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
// テストを開始するボタンを作成する
const button = document.createElement("button");
button.textContent = "テストを開始する";
document.body.appendChild(button);
  
  // テストを開始するボタンがクリックされたときの処理
  startButton.addEventListener("click", () => {
    let numbers = [];
    for (let i = 0; i < wordList.length; i++) {
      numbers.push(i);
    }
    for (let i = 0; i < wordList.length * 2; i++) {
      arrayShuffle(numbers);
    }
    // ランダムに単語を選択する
    for (let i = 0; i < wordList.length; i++) {
      const question = `「${wordList[numbers[i]].meaning}」の英語は？`;
      const answer = wordList[numbers[i]].word;
      const userAnswer = prompt(question);
  
      if (userAnswer === answer) {
        alert("正解！");
      } else {
        alert(`不正解！正解は「${answer}」です。`);
      }
    }
  });