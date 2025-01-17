import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants/index";
import { SectionWrapper } from "../hoc/index";
import { textVariant } from "../utils/motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I've done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experiences</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experiences");
