// 初期の単語リスト（テストデータとして使用）
let wordList = [];

// ページが読み込まれたときに単語リストを表示する関数
function displayWordList() {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    let thead = table.querySelector('thead');
    if (thead) {
      table.removeChild(thead);
    }
    thead = table.createTHead();
    const row = thead.insertRow();
    const headers = ['No.', '単語', '意味'];
  
    for (let i = 0; i < headers.length; i++) {
      const th = document.createElement('th');
      const text = document.createTextNode(headers[i]);
      th.appendChild(text);
      row.appendChild(th);
    }
  
    // すでに表示されている行をクリア
    tbody.innerHTML = '';
  
    // 単語リストをテーブルに追加
    wordList.forEach((wordData) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${wordData.id}</td>
        <td>${wordData.word}</td>
        <td>${wordData.meaning}</td>
        <td>
          <button type="button" onclick="edit(${wordData.id})">編集</button>
          <button type="button" onclick="remove(${wordData.id})">削除</button>
        </td>
      `;
      tbody.appendChild(row);
    });
}

// 単語リストをCookieに保存する関数
function saveWordListToCookie() {
    const json = JSON.stringify(wordList);
    const expires = new Date(Date.now() + 60 * 60 * 1000).toUTCString(); // 有効期限を1時間に設定
    document.cookie = `wordList=${json}; expires=${expires}; path=/`;
  }
  
// 単語リストを復元する関数
function restoreWordListFromCookie() {
  const cookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('wordList='));
  let restoredWordList = [];
  if (cookie) {
    const json = cookie.split('=')[1];
    restoredWordList = JSON.parse(json);
  }
  wordList = restoredWordList;
}
  
// 追加ボタンがクリックされたときに単語を追加
function addWord() {
    const newWord = prompt('新しい単語を入力してください:');
    const newMeaning = prompt('その単語の意味を入力してください:');

    if (newWord && newMeaning) {
        const newId = wordList.length + 1;
        wordList.push({ id: newId, word: newWord, meaning: newMeaning });
        displayWordList();
    }
    saveWordListToCookie();
}
  
// 編集ボタンがクリックされたときに単語を編集
function edit(number) {
    const word = prompt('新しい単語を入力してください');
    const meaning = prompt('新しい意味を入力してください');
    if (word && meaning) {
        wordList[number - 1].word = word;
        wordList[number - 1].meaning = meaning;
        displayWordList();
    }
    saveWordListToCookie();
}
  
// 削除ボタンがクリックされたときに単語を削除
function remove(id) {
    const index = wordList.findIndex((wordData) => wordData.id === id);
    if (index !== -1) {
        wordList.splice(index, 1);

        // idを再度振り直す
        for (let i = index; i < wordList.length; i++) {
            wordList[i].id = i + 1;
        }
        saveWordListToCookie();
        displayWordList(); // 単語リストを再表示
    }
}

displayWordList(); // ページが読み込まれたときに単語リストを表示