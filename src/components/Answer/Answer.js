import { useAppContext } from "@/contexts/AppContext";

const Answer = ({ data }) => {
  const { handleSetAnswer, step, userAnswers } = useAppContext();

  // Verificación clásica y segura
  let isSelected = false;
  if (
    userAnswers &&
    userAnswers.length > step &&
    userAnswers[step] &&
    userAnswers[step].id
  ) {
    isSelected = userAnswers[step].id === data.id;
  }

  return (
    <div className="p-5">
      <button
        onClick={() => handleSetAnswer(data)}
        className={`text-white px-4 py-2 rounded border-[2px] border-white transition hover:bg-white hover:text-black ${isSelected ? "bg-slate-500" : "bg-black"
  }`}
      >
        {data.title}
      </button>
    </div>
  );
};

export default Answer;

