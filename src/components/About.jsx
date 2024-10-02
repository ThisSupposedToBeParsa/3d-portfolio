import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("right", "spring", 0.1, 1)}>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae
          possimus. Sunt, rem vitae. Odio obcaecati et quae debitis doloribus
          dolorem cum, expedita a officiis asperiores vitae voluptatum sint
          error. Reprehenderit id hic odit ex esse necessitatibus eum officiis
          deleniti, debitis quas saepe voluptatem qui quod exercitationem,
          minima iste sapiente mollitia. Earum dicta quis totam accusamus quas
          iste id dolorum!
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
