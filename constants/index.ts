import projectOne from "@/images/projectOne/One.png"
import projectTwo from "@/images/projectTwo/One.png"
import projectThree from "@/images/projectThree/One.png"

export const navbarData = [
    { title: "Home", href:"/"},
    { title: "Resume", href:"/resume"},
    { title: "Projects", href:"/projects"},
]
const today = new Date();
const startDate = new Date(2022, 7 ,1);

export const statsData = [
    {num: Math.floor((today.getTime()-startDate.getTime())/(1000 * 60 * 60 * 24 * 365.25)), title: "Years of experience"},
    {num: 3, title: "Projects completed"},
    /*{num: 3, title: "Years of experience"},*/
]

export const projects = [
    {
      id: "01",
      title: "UWP Video Game",
      category: "Full Stack",
      description: "",
      stack: ["C#", "XAML", "UWP",],
      image: projectOne,
      detailURL: "",
      tip: "Visit Github Repository"
    },
    {
      id: "02",
      title: "Community Project | NCR Tracking",
      category: "Front End",
      description: "",
      stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "C#", "SQLite"],
      image: projectTwo,
      detailURL: "",
      tip: "Visit Github Repository"
    },
    {
      id: "03",
      title: "Contoso Sales Report",
      category: "Data Analyst",
      description: "A project designed using SQL for data querying and Power BI for visualizing analytics. The focus was to create a comprehensive and easy to read sales report for the Contoso Company.",
      stack: ["SQL", "Power BI", "Data Analysis",],
      image: projectThree,
      detailURL: "",
      tip: "Download Project"
    },
]