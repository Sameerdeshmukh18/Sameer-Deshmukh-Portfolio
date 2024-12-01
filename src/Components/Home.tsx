import Typical from "react-typical";
import Twitter from "../assets/Twitter.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/Github.svg";


function Home() {
  return (
    <section
      className="flex pt-20 md:justify-evenly max-md:flex-col h-screen w-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip"
      id="/"
    >
      <div className="basis-1/2 p-20 max-sm:p-5">
        <h1 className="text-5xl font-extrabold text-blue-950 max-sm:text-3xl">
          Hi, I am Sameer
        </h1>
        <span className="text-5xl font-bold text-cyan-600 max-sm:text-3xl ">
          <Typical
            steps={[
              "Front End Developer",
              1000,
              "Web Developer",
              1000,
              "Software Engineer",
              1000,
            ]}
            loop={Infinity}
          />
        </span>
        <p className="mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          maiores dignissimos voluptatibus veniam reiciendis saepe, minima
          exercitationem modi! Doloremque praesentium minima odit at explicabo
          blanditiis repudiandae laudantium officiis ipsa. Unde!
        </p>
        <div className="mt-5 flex">
          <a
            href="https://x.com/Sameerd18"
            className="w-12 h-12 hover:(cursor-pointer)"
          >
            <img src={Twitter} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/sameer-deshmukh-79505817a/"
            className="ml-5 w-12 h-12 hover:(cursor-pointer)"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a
            href="http://github.com/sameerdeshmukh18"
            className="ml-5 w-12 h-12 hover:(cursor-pointer)"
          >
            <img src={Github} alt="" />
          </a>
        </div>
        <button className="mt-5 btn btn-blue bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-10 rounded">
          Resume
        </button>
      </div>
      <div className="basis-1/2 max-h-0 max-md:hidden ">
        something
      </div>
    </section>
  );
}

export default Home;
