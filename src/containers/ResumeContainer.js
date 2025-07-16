import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useAppContext } from "@/contexts/AppContext";
import Link from "next/link";

const ResumeContainer = () => {
  const { handleResume } = useAppContext();
  const resumeData = handleResume();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className="questions_list">
        {resumeData.map((item, index) => (
          <div key={index} className="mb-4 p-4 border rounded bg-black">
            <h2 className="font-bold">Question: {item.question.title}</h2>
            <p>your answer: {item.answer.title}</p>
            <p>
              {item.answer.correct ? "😁 Correct!" : "😭 Incorrect"} 
            </p>
          </div>
        ))}
      </div>
      <Link className="px-4 py-2 rounded border-[2px] border-white transition hover:bg-white hover:text-black" href={'/.'}>Volver al inicio</Link>
    </main>
  );
};

export default ResumeContainer;
