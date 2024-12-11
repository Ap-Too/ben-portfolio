
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