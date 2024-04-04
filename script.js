const testData = {
  testName: "Тест про українську літературу",
  questions: [
    {
      question: "Хто є автором поеми 'Кобзар'?",
      answers: [
        { answer: "Тарас Шевченко", isCorrect: true },
        { answer: "Іван Франко", isCorrect: false },
        { answer: "Леся Українка", isCorrect: false },
        { answer: "Олександр Олесь", isCorrect: false }
      ]
    },
    {
      question: "У якому році була опублікована 'Заповіт' Тараса Шевченка?",
      answers: [
        { answer: "1845", isCorrect: true },
        { answer: "1859", isCorrect: false },
        { answer: "1838", isCorrect: false },
        { answer: "1871", isCorrect: false }
      ]
    },
    {
      question: "Хто є автором роману 'Хіба ревуть воли, як ясла повні?'",
      answers: [
        { answer: "Іван Франко", isCorrect: true },
        { answer: "Тарас Шевченко", isCorrect: false },
        { answer: "Леся Українка", isCorrect: false },
        { answer: "Остап Вишня", isCorrect: false }
      ]
    },
    {
      question: "Яка з поданих книг є повістю Михайла Коцюбинського?",
      answers: [
        { answer: "Чорна рада", isCorrect: false },
        { answer: "Кайдашева сім'я", isCorrect: true },
        { answer: "Камінний хрест", isCorrect: false },
        { answer: "На лісовій галявині", isCorrect: false }
      ]
    },
    {
      question: "Хто є автором повісті 'Білий клептократ'?",
      answers: [
        { answer: "Леся Українка", isCorrect: false },
        { answer: "Остап Вишня", isCorrect: true },
        { answer: "Іван Нечуй-Левицький", isCorrect: false },
        { answer: "Іван Франко", isCorrect: false }
      ]
    }
  ]
};

const testContainer = document.getElementById('test-container');
const submitBtn = document.getElementById('submit-btn');
const resultDisplay = document.getElementById('result');

function displayQuestions() {
  testData.questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      <ul>
        ${q.answers.map(answer => `
          <li>
            <label>
              <input type="radio" name="question${index}" value="${answer.isCorrect}">
              ${answer.answer}
            </label>
          </li>
        `).join('')}
      </ul>
    `;
    testContainer.appendChild(questionDiv);
  });
}

function calculateResult() {
  let score = 0;
  testData.questions.forEach((q, index) => {
    const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === 'true') {
      score++;
    }
  });
  return score;
}

submitBtn.addEventListener('click', () => {
  const score = calculateResult();
  resultDisplay.textContent = `Ваш результат: ${score}/${testData.questions.length}`;
});

displayQuestions();
