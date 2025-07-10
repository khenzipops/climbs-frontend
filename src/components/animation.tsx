import Lottie from "react-lottie-player";
import animationData from "../../public/animation/business-team.json"; // adjust the path as needed
import { useEffect, useState } from "react";

export default function MyAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animation/business-team.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);
  return animationData ? (
    <Lottie loop animationData={animationData} play className="w-fit" />
  ) : null;
}
