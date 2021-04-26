let student={
    name:"Sarah",
    major: "Computer Science",
    "Grad Year": 2022,
    greeting: function(){console.log("Hello");},
    "Favorite Teacher":{
        name:"Thomas Powell", 
        course:"CSE110"
    },
    courseLoad: ["CSE110", "CSE134", "VIZ41"]
}

console.log(student.name);
console.log(student['Grad Year']);
student.greeting();
console.log(student["Favorite Teacher"].name);
console.log(student.courseLoad[0]);