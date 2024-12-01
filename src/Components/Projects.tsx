import { motion } from "framer-motion";
import projectImage from "../assets/Project.jpg";
import arrow from "../assets/arrow.svg"
function Projects() {
  return (
    <div
      className="h-screen w-screen bg-blue-200 pt-24 flex flex-col items-center"
      id="projects"
    >
        <div className="h-20">Projects</div>
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
        className="h-90 w-80 bg-gray-800 p-4 overflow-hidden flex flex-col rounded"
      >
        <div className="text-white font-bold">Tkiosk</div>
        <div className="text-gray-400 max-h-30 line-clamp-3 py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto aliquam, molestiae alias rerum eveniet pariatur reiciendis nobis quos officiis voluptatum quas dolorem perferendis. Optio quam possimus eligendi fugit quo!
        </div>
        <div className="h-40 w-70 py-1">
          <img className="object-fill max-h-full" src={projectImage} alt="" />
        </div>
        <div>
          <button className="btn btn-blue bg-gray-950 hover:bg-gray-700 text-white py-1 px-2 mt-1 rounded-lg flex justify-center items-center">
            Read More
            <img className="h-5 w-5 pt-1" src={arrow} alt="" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
