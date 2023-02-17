import './App.css';
import React, {useState} from 'react';
import ReactPlayer from 'react-player/youtube'

function App() {

  const questions = [
    {
      questionText: 'Як мене звати?',
      answerOptions: [
        {answerText: 'Володя', isCorrect: false},
        {answerText: 'Влад', isCorrect: true},
        {answerText: 'Коля', isCorrect: false},
        {answerText: 'хз', isCorrect: false},
      ]
    },
    {
      questionText: 'Хто я по гороскопу?',
      answerOptions: [
        {answerText: 'Телець', isCorrect: true},
        {answerText: 'Овен', isCorrect: false},
        {answerText: 'Лев', isCorrect: false},
        {answerText: 'Веса', isCorrect: false},
      ]
    },
    {
      questionText: 'Скільки мені років?',
      answerOptions: [
        {answerText: '15', isCorrect: false},
        {answerText: '20', isCorrect: true},
        {answerText: '21', isCorrect: false},
        {answerText: '19', isCorrect: false},
      ]
    },
    {
      questionText: 'Яку я хочу машину?',
      answerOptions: [
        {answerText: 'Вольво', isCorrect: false},
        {answerText: 'Мерс', isCorrect: false},
        {answerText: 'Ауді', isCorrect: false},
        {answerText: 'Фоооооорд', isCorrect: true},
      ]
    },
    {
      questionText: "Скільки в мене було хом'яків?(разом з Жорою)",
      answerOptions: [
        {answerText: '3', isCorrect: false},
        {answerText: '4', isCorrect: false},
        {answerText: '5', isCorrect: true},
        {answerText: '6', isCorrect: false},
      ]
    },
    {
      questionText: 'Мій любимий футболіст?',
      answerOptions: [
        {answerText: 'Роналдо', isCorrect: true},
        {answerText: 'Мессі', isCorrect: false},
        {answerText: 'Неймар', isCorrect: false},
        {answerText: 'Ді Марія', isCorrect: false},
      ]
    },
    {
      questionText: 'Хто моя любима жопка?',
      answerOptions: [
        {answerText: 'Жопка', isCorrect: true},
        {answerText: 'Пупс', isCorrect: true},
        {answerText: 'Сонце', isCorrect: true},
        {answerText: 'Точно не я', isCorrect: false},
      ]
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOptionClick = (isCorrect) => {
    if(isCorrect) {
      setScore(score + 1)
    }

    const nextQuastion = currentQuestion + 1

    if(nextQuastion < questions.length) {
      setCurrentQuestion(nextQuastion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="app">
      {
        showScore
          ? <div className="section_score">
              <div>
                Правильних відповідей {score} з {questions.length}. <br /> А тепер включи відео
              </div>
              <ReactPlayer url='https://www.youtube.com/watch?v=rnjbemXGNmw&ab_channel=%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%88%D0%B8%D1%81%D1%8C%D0%BD%D0%B0%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%91%D0%A0%D0%90%D0%A2%D0%92%D0%90%21' width='448px' height='283,5px' />
            </div>
          : <div className="quizz">
              <div className="question_section">
                <div className="question_count">
                  <span>Питання {currentQuestion + 1}</span> / {questions.length}
                </div>
                <div className="question_text">{questions[currentQuestion].questionText}</div>
              </div>
              <div className="answer_section">
                {questions[currentQuestion].answerOptions.map(item => (
                <button onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
                ))}
              </div>
            </div>
      }


    </div>
  );
}

export default App;
