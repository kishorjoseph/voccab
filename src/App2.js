import React, { useState } from 'react';
import './App.css';

// Vocabulary dataset derived directly from the source list
const questionsData = [
  {
    word: "Benevolent",
    definition: "Well meaning and kindly.",
    example: "A benevolent old man left soup for the stray cats every single morning."
  },
  {
    word: "Belligerent",
    definition: "Hostile and aggressive.",
    example: "The belligerent customer started shouting at the staff over a minor delay."
  },
  {
    word: "Diligent",
    definition: "Having or showing care and conscientiousness in one's work or duties.",
    example: "She was a diligent student who always reviewed her notes before exams."
  },
  {
    word: "Feasible",
    definition: "Possible to do easily or conveniently.",
    example: "With our current budget, completing the project by Friday is completely feasible."
  },
  {
    word: "Gullible",
    definition: "Easily persuaded to believe something.",
    example: "He was so gullible that he actually believed penguins could fly."
  },
  {
    word: "Pragmatic",
    definition: "Dealing with things sensibly and realistically.",
    example: "Instead of panicking, she took a pragmatic approach to solve the computer error."
  },
  {
    word: "Scrutinise",
    definition: "Examine or inspect closely and thoroughly.",
    example: "The detective began to scrutinise every single detail of the crime scene."
  },
  {
    word: "Vulnerable",
    definition: "Susceptible to physical or emotional attack or harm.",
    example: "Young birds leave their nests when they are still vulnerable to predators."
  }
];

// Helper function to shuffle array and get distractors from the vocabulary list
const getRandomOptions = (currentIndex, data) => {
  const currentItem = data[currentIndex];
  const incorrectOptions = data
    .filter((_, idx) => idx !== currentIndex)
    .map(item => item.word);
  
  // Shuffle incorrect options and pick 3
  const shuffledIncorrect = incorrectOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
  
  // Combine with correct answer and shuffle options
  const allOptions = [...shuffledIncorrect, currentItem.word].sort(() => 0.5 - Math.random());
  return allOptions;
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  
  // Track state per question index so history/back button retains answered states
  const [userAnswers, setUserAnswers] = useState({}); // { 0: { selected: 'Word', isCorrect: true } }
  const [currentOptions, setCurrentOptions] = useState(() => getRandomOptions(0, questionsData));
  
  const currentQuestion = questionsData[currentIndex];
  const currentAnswerState = userAnswers[currentIndex]; // { selected, isCorrect }

  const handleSelectOption = (selectedWord) => {
    // If already answered correctly, lock changes
    if (currentAnswerState && currentAnswerState.isCorrect) return;

    const isCorrect = selectedWord === currentQuestion.word;

    // Update score only on the first attempt for this question if it was wrong/unanswered
    if (!currentAnswerState) {
      if (isCorrect) {
        setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      } else {
        setScore(prev => ({ ...prev, wrong: prev.wrong + 1 }));
      }
    } else if (!currentAnswerState.isCorrect && isCorrect) {
      // If they got it wrong previously and now got it right
      setScore(prev => ({ ...prev, correct: prev.correct + 1, wrong: prev.wrong - 1 }));
    }

    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: { selected: selectedWord, isCorrect }
    }));
  };

  const handleNext = () => {
    if (currentIndex < questionsData.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      // Generate options for next question if not already visited
      if (!userAnswers[nextIdx]) {
        setCurrentOptions(getRandomOptions(nextIdx, questionsData));
      }
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
    }
  };

  const isCompleted = currentIndex === questionsData.length - 1 && currentAnswerState?.isCorrect;

  return (
    <div className="app-container">
      {/* Top Score Bar */}
      <header className="score-header">
        <div className="score-badge correct">✅ Correct: {score.correct}</div>
        <div className="score-badge wrong">❌ Wrong: {score.wrong}</div>
      </header>

      <main className="card">
        <div className="progress-indicator">
          Question {currentIndex + 1} of {questionsData.length}
        </div>

        {/* Meaning sentence prompt */}
        <h2 className="definition-title">What word matches this definition?</h2>
        <p className="definition-text">"{currentQuestion.definition}"</p>

        {/* Options Buttons */}
        <div className="options-grid">
          {currentOptions.map((optionWord, idx) => {
            let btnClass = "option-btn";
            if (currentAnswerState) {
              if (optionWord === currentQuestion.word) {
                btnClass += " correct-highlight";
              } else if (optionWord === currentAnswerState.selected) {
                btnClass += " wrong-highlight";
              }
            }
            return (
              <button
                key={idx}
                className={btnClass}
                onClick={() => handleSelectOption(optionWord)}
              >
                {optionWord}
              </button>
            );
          })}
        </div>

        {/* Error Feedback & Example Sentence */}
        {currentAnswerState && !currentAnswerState.isCorrect && (
          <div className="error-box">
            <p className="oops-text">⚠️ Oops! That's incorrect.</p>
            <p className="hint-label">Read this example sentence to guess the right word:</p>
            <p className="example-text">"{currentQuestion.example}"</p>
          </div>
        )}

        {currentAnswerState && currentAnswerState.isCorrect && (
          <div className="success-box">
            <p>🎉 Spot on! Great job.</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button 
            className="nav-btn" 
            onClick={handleBack} 
            disabled={currentIndex === 0}
          >
            ⬅️ Back
          </button>

          <button 
            className="nav-btn primary" 
            onClick={handleNext} 
            disabled={!currentAnswerState || !currentAnswerState.isCorrect || currentIndex === questionsData.length - 1}
          >
            Next ➡️
          </button>
        </div>

        {isCompleted && (
          <div className="completion-banner">
            <h2>🏆 Amazing! You completed all vocabulary challenges!</h2>
          </div>
        )}
      </main>
    </div>
  );
}