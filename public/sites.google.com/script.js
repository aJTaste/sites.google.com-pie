let PI_STR = ""; // 後でファイルから読み込む

fetch("pi_digits.txt")
  .then(response => response.text())
  .then(text => {
    PI_STR = text.trim(); // 改行を除去
    initGame();
  });
function initGame() {
  let index = 0;

  const input = document.getElementById("piInput");
  const status = document.getElementById("status");

  input.addEventListener("input", function () {
    const value = input.value;
    if (value.length === 0) return;

    const char = value[value.length - 1];

    if (char === PI_STR[index]) {
      index++;
      status.textContent = `正解！ 現在 ${index} 桁目まで正解`;
    } else {
      status.textContent = `不正解。${index} 桁目まで正解でした。最初からやり直し。`;
      index = 0;
      input.value = "";
    }
  });
}
