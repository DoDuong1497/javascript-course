
const question_board = document.getElementById('question_board');

async function fetchQuestions() {
  const res = await fetch('./dataQuestion.json');
  const data = await res.json();
  return data;
}

function getQuestionsByCategory(questions) {
  const result = questions.reduce((acc, currItem) => {
    if(!acc[currItem.category]) {
      acc[currItem.category] = [];
    }
    acc[currItem.category].push(currItem);
    return acc;
  }, {})
  return result;
}


async function renderQuestions(){
  const questions = await fetchQuestions();
  const questionsByCategory = getQuestionsByCategory(questions);

  Object.keys(questionsByCategory).forEach((key) => {
    const boxValues = questionsByCategory[key];

    // create virtual column
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');

    // create virtual h2
    const titleDiv = document.createElement('h2');
    titleDiv.innerHTML = key;

    columnDiv.appendChild(titleDiv);
 
    boxValues.forEach(value => {
      // create virtual boards
      const boardDiv = document.createElement('div');
      boardDiv.classList.add('boards');

      // create virtual question
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');

      // create virtual question status
      const statusDiv = document.createElement('div');
      statusDiv.classList.add('question__status');
      statusDiv.classList.add('question__status--none');

      // create virtual question title
      const questionTitleDiv = document.createElement('h2');
      questionTitleDiv.classList.add('question__title');
      questionTitleDiv.innerHTML = value.name

      questionDiv.appendChild(statusDiv);
      questionDiv.appendChild(questionTitleDiv);

      boardDiv.appendChild(questionDiv);

      columnDiv.appendChild(boardDiv);
    })

    question_board.appendChild(columnDiv); 

  });
}


renderQuestions();