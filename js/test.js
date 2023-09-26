// 単語リスト
const wordList = [
    { id: 1, word: "apple", meaning: "りんご" },
    { id: 2, word: "banana", meaning: "バナナ" },
    { id: 3, word: "cherry", meaning: "さくらんぼ" },
    { id: 4, word: "orange", meaning: "オレンジ" },
    { id: 5, word: "grape", meaning: "ぶどう" },
  ];
  
  // テストを開始するボタン
  const startButton = document.querySelector("button");
  
  // テストを開始するボタンがクリックされたときの処理
  startButton.addEventListener("click", () => {
    // ランダムに単語を選択する
    const wordData = wordList[Math.floor(Math.random() * wordList.length)];
  
    // 問題を表示する
    const question = `「${wordData.meaning}」の英語は？`;
    const answer = wordData.word;
    const userAnswer = prompt(question);
  
    // 答えをチェックする
    if (userAnswer === answer) {
      alert("正解！");
    } else {
      alert(`不正解！正解は「${answer}」です。`);
    }
  });