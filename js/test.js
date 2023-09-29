// 単語リスト
let wordList = [];

// 単語リストを復元する関数
function restoreWordListFromCookie() {
    const cookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('wordList='));
    let restoredWordList = [];
    if (cookie) {
      const json = cookie.split('=')[1];
      restoredWordList = JSON.parse(json);
    }
    // 例を追加
    else{
      restoredWordList = [
          { id: 1, word: 'apple', meaning: 'りんご' },
          { id: 2, word: 'banana', meaning: 'バナナ' },
          { id: 3, word: 'cherry', meaning: 'さくらんぼ' }
      ]
    }
    wordList = restoredWordList;
  }

// 配列をシャッフルする関数
function arrayShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // テストを開始する
  function startTest(){
    restoreWordListFromCookie();
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
  }
