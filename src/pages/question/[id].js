import QuestionContainer from "@/containers/QuestionContainer";
import { useRouter } from "next/router";

const Question = () => {
  const router = useRouter();
  const { id } = router.query;
  return <QuestionContainer id={id} />;
};
export default Question;
