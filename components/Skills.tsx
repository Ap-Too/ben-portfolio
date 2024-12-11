import { FaJava, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  return (
    <div>
        <h3 className="flex items-center justify-center text-xl pb-8">Skills</h3>
        <div className="flex flex-row items-center justify-center gap-5 md:gap-7">
        <FaJava className="w-10 h-10"/>
        <IoLogoJavascript className="w-10 h-10"/>
        <TbBrandCSharp className="w-10 h-10"/>
        <TbSql className="w-10 h-10"/>
        <FaPython className="w-10 h-10"/>
        <FaReact className="w-10 h-10"/>
        <FaHtml5 className="w-10 h-10"/>
        <SiCss3 className="w-10 h-10"/>
        </div>
    </div>
  )
}

export default Skills
