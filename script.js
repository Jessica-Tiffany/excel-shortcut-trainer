
const questionEl = document.getElementById("question");
const popup = document.getElementById("popup");
const table = document.getElementById("excel-table").getElementsByTagName("tbody")[0];

const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

const question = {
  text: "マウスで選択されている行を削除したい時は？",
  answer: "Ctrl+-"
};

function showQuestion() {
  questionEl.textContent = question.text;
}

function checkAnswer(userAnswer) {
  if (userAnswer === question.answer) {
    correctSound.play();
    popup.style.display = "none";
    deleteSelectedRows();
  } else {
    wrongSound.play();
    popup.textContent = "不正解！Ctrl + - で行を削除できます。";
    popup.style.display = "block";
  }
}

function deleteSelectedRows() {
  for (let i = 0; i < 4; i++) {
    if (table.rows.length > 0) table.deleteRow(0);
  }
}

showQuestion();
