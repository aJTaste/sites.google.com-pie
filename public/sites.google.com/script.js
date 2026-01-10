let PI_STR = ""; // 後でファイルから読み込む

fetch("pi.txt")
  .then(response => response.text())
  .then(text => {
    PI_STR = text.trim(); // 改行を除去
    initGame();
  });

function initGame() {
  let index = 0;
  let input_pi = String(PI_STR).slice(0, index);
  const status = document.getElementById("status");

  document.addEventListener("keydown", function (event) {
    // 長押しによる連打は無視
    if (event.repeat) {
      return;
    }

    const key = event.key;

    // 数字キー以外は無視
    if (key < "0" || key > "9") {
      return;
    }

    // 正解判定
    if (key === PI_STR[index]) {
      index++;
      status.textContent = `正解！ 現在 ${index} 桁目まで正解: ${input_pi}`;
    } else {
      status.textContent = `不正解。${index} 桁目まで正解でした。最初からやり直し: ${input_pi}`;
      index = 0;
    }
  });
}
