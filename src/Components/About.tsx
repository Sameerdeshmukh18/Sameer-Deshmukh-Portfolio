import reactImage from "../assets/react.png";
import aws from "../assets/aws.svg"
import graphql from "../assets/graphql.svg"
import java from "../assets/java.svg"
import tailwind from "../assets/tailwind-css.svg"
import javascript from "../assets/javascript.svg"
import typescript from "../assets/typescript.svg"
import expresslogo from "../assets/express-js.svg"
import { motion } from "framer-motion";
import python from "../assets/python.svg"

function About() {
  const technologies = [
    {
      tech: "React",
      logo: reactImage,
    },
    {
      tech: "Express",
      logo: expresslogo,
    },
    {
      tech: "Aws",
      logo: aws,
    },
    {
      tech: "Java",
      logo: java,
    },
    {
      tech: "Typescript",
      logo: typescript,
    },
    {
      tech: "GraphQl",
      logo: graphql,
    },
    {
      tech: "Tailwind",
      logo: tailwind,
    },
    {
      tech: "Javascript",
      logo: javascript,
    },
    {
      tech: "Python",
      logo: python,
    },
  ];
  return (
    <div
      className="h-screen w-screen md:pt-24 pt-20 flex flex-col px-5 md:px-40 bg-gray-50"
      id="about"
    >
      <div className="flex flex-col items-center">
        <h3 className=" text-5xl font-bold text-cyan-600 max-sm:text-3xl py-5">
          About Me
        </h3>
        <div className="flex justify-center max-sm:text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In totam blanditiis facere consequatur similique. Exercitationem asperiores blanditiis deserunt facilis tempora necessitatibus dolores iste veritatis, facere repudiandae accusantium consequuntur cupiditate quae aperiam ipsum. 
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-cyan-600 max-sm:text-3xl py-5">
          Technologies & Tools
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 md:gap-3 ">
          {technologies.map((curTool) => (
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
              className="h-12 w-40 bg-gray-100 flex items-center shadow-sm my-2"
            >
              <div className="w-14 p-2">
                <img
                  className="h-full max-h-full"
                  src={curTool.logo}
                  alt="react"
                />
              </div>
              <div className="mx-4">{curTool.tech}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
