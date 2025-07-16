
import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { insertInArray } from "@/utils";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [step, setStep] = useState(0);

  const [actualQuestionAnswers, setActualQuestionAnswers] = useState([]);
  const [anwersLoading, setAnswersLoading] = useState(true);

  const [userAnswers, setUserAnswers] = useState([]);

  const router = useRouter();

  const BASE_URL = `https://maimo-prog-2023-exam-dic-backend.vercel.app`;

  const getQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/questions`);
      setQuestions(response.data.questions)
      setUserAnswers(
        response.data.questions.map((item) => {
          return { title: 'No answer' };
        })
      );
       setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  const getAnsewers = useCallback(async (questionId) => {
    setActualQuestionAnswers([]);
    setAnswersLoading(true);
    try {
      console.log("Question ID:", questionId);
      const response = await axios.get(`${BASE_URL}/questions/${questionId}`);
      setActualQuestionAnswers(response.data.answers);
      setAnswersLoading(false);
      
    } catch (error) {
      console.log("ERROR NO EXISTE SHOW");
    }
  }, []);

  const questionDataById = (id) =>
    questions.find((question) => question.id === parseInt(id) && question);

  const handleStep = (action) => {
    switch (action) {
      case `prev`:
        if (step > 0) {
          setStep(step - 1);
          router.push(`/question/${questions[step - 1]?.id}`);
        }
        break;
      case `next`:
        if (step < questions.length - 1) {
          setStep(step + 1);
          router.push(`/question/${questions[step + 1]?.id}`);
        }
        break;
      case `resume`:
        router.push(`/resume`);
        break;
      default:
        break;
    }
  };

  const handleSetAnswer = (answer) => {
    const updatedAnswers = insertInArray(userAnswers, step, answer);
    setUserAnswers(updatedAnswers)
  };

  const handleResume = () => {
    const resumeItems = questions.map((question, index)=> {
      return {
        question: question,
        answer: userAnswers[index]
      }
    })
     return resumeItems;
  };

  return (
    <AppContext.Provider
      value={{
        questions,
        loading,
        getQuestions,
        getAnsewers,
        anwersLoading,
        userAnswers,//agregado por mi, para el feedback de la respuesta clickeada
        actualQuestionAnswers,
        questionDataById,
        handleStep,
        step,
        handleSetAnswer,
        handleResume,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContexts must be used within a AppContextProvider");
  }
  return context;
};

export default AppContext;
