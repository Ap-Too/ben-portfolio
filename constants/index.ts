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
      description: 
        "The primary goal of this project was to implement a game where the player collects or interacts with objects on the playing field. Key tasks include extending object classes, managing collections using a List, handling collision detection, implementing game completion conditions, and introducing creative challenges to make the gameplay enjoyable.",
      challenges: [
        {
          title: "Object Management and Display",
          details: 
          [
            "Create and manage a collection of collectible objects with unique properties such as size, color, and point values.",
            "Dynamically generate and display these objects in the user interface while maintaining visual clarity.",
          ]
        },
        {
          title: "Collision Detection",
          details:
          [
            "Implement efficient collision detection between the player and multiple collectibles in the List collection.",
            "Ensure reliable detection even with moving collectibles or varied shapes.",
          ]
        },
        {
          title: "Game Logic and Progression",
          details:
          [
            "Define and implement clear game completion criteria (e.g., all objects collected, score threshold reached, or player health depleted).",
            "Update game states dynamically based on player interactions, including score updates, visual cues for collected objects, and gameplay difficulty adjustments.",
          ]
        },
        {
          title: "Creative Enhancements",
          details:
          [
            "Introduce additional challenges like timers, difficulty levels, moving collectibles, or obstacles to increase engagement.",
            "Balancing features with gameplay mechanics for a seamless and enjoyable experience.",
          ]
        },
      ],
      stack: ["C#", "XAML", "UWP",],
      image: projectOne,
      detailURL: "https://github.com/Ap-Too/UWP-Game",
      tip: "Visit Github Repository"
    },
    {
      id: "02",
      title: "Community Project | NCR Reporting",
      category: "UI / UX Design",
      description: 
        "As part of a Community Project course, my team and I collaborated with a manufacturing company to design and develop a Non-Compliance Report website. The project aimed to streamline the reporting and management of regulatory and operational non-compliance issues, enhancing the company's ability to track and resolve such incidents efficiently." + '\n' +"My role in this project was to implement a simplified and streamlined website for use on the computer and handheld devices. This project challenged me to apply both technical and interpersonal skills, including gathering requirements, iterative development, and client communication. It also emphasized the importance of integrating user feedback to refine and optimize the system for real-world use.",
      challenges: [
        {
          title: "Included feature functionalities such as:",
          details: 
          [
            "A user-friendly interface for employees to submit non-compliance reports.",
            "Role-based access controls to ensure data security and proper permissions.",
            "Historical data tracking and reporting to identify recurring issues and trends.",
            "A dashboard for employees to view, filter, and prioritize reports.",
          ]
        },
      ],
      stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "C#", "SQLite"],
      image: projectTwo,
      detailURL: "https://github.com/Ap-Too/Community-Project",
      tip: "Visit Github Repository"
    },
    {
      id: "03",
      title: "Contoso Sales Report",
      category: "Data Analyst",
      description: 
        "This project involves creating a dynamic and visually appealing Power BI dashboard using Power BI Desktop to analyze data from the Contoso Retail Data Warehouse. The goal is to build a report that answers key business questions related to product performance, profitability, and sales trends over time.",
      challenges: [
        {
          title: "Data Understanding and Preparation",
          details: 
          [
            "Identifying the necessary fields and relationships to model the data effectively while avoiding redundancy.",
          ]
        },
        {
          title: "Report Design and Visualizations",
          details: 
          [
            "Balancing visual appeal with clarity to ensure the dashboard communicates insights effectively.",
            "Selecting and designing visualizations that effectively highlight best-selling products, profitability, and sales trends by year, quarter, or month.",
          ]
        },
        {
          title: "Efficient Data Modelling",
          details: 
          [
            "Building an efficient Power BI model to optimize performance and expose relevant data.",
          ]
        },
      ],
      stack: ["SQL", "Power BI", "Data Analysis",],
      image: projectThree,
      detailURL: "ballen9_ContosoDesktop.pbix",
      tip: "Download Project"
    },
]