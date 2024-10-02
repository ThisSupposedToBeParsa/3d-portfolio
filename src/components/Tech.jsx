import { BallCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc/index";
import { technologies } from "../constants/index";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div className="w-28 h-28" key={`tech-${tech}-${index}`}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
