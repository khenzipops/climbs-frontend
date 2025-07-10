import Lottie from "react-lottie-player";
import animationData from "../../public/animation/business-team.json"; // adjust the path as needed

export default function MyAnimation() {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: 200, height: 200 }}
    />
  );
}
