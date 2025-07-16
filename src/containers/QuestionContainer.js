
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useEffect } from "react";
import { useAppContext } from "@/contexts/AppContext";
import { useState } from "react";
import Answer from "@/components/Answer/Answer";

const QuestionContainer = ({ id }) => {
  const {
    questions,
    getAnsewers,
    actualQuestionAnswers,
    anwersLoading,
    questionDataById,
    handleStep,
    step,
  } = useAppContext();
  const questionData = questionDataById(id);
  

  useEffect(() => {
    if (id) {
      getAnsewers(id);
    }
  }, [id]);

  const handleSetStep = (action) => {
    handleStep(action);
  };
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      
      {!anwersLoading && (
        <div>
          <div className='question_data text-3xl font-extrabold pb-5'>{questionData.title}</div>
          <p className='question_data text-lg'>Category: {questionData.category}</p>
          <div className='answers_list'>
             {actualQuestionAnswers.map((answer) => 
              <Answer key={answer.id} data={answer}/>
              )}
          </div>
        </div>
      )}
      {anwersLoading && "Loading..."}
      <div className='flex justify-between items-center w-full pl-40 pr-40'>
        <button className="px-4 py-2 rounded border-[2px] border-white transition hover:bg-white hover:text-black" onClick={() => handleSetStep(`prev`)}>Previus Question</button>
        <button className="px-4 py-2 rounded border-[2px] border-white transition hover:bg-white hover:text-black" onClick={() => handleSetStep(step === questions.length - 1 ? 'resume' : 'next')}>
          {step === questions.length - 1 ? 'Go to resume' : 'Next Question'}
        </button>
      </div>
    </main>
  );
};

export default QuestionContainer;
