console.log("JavaScript loaded successfully!")

const student_name="Jane"
const birthyear=2999

let grade=10
let donehomework=false

console.log("student name:", student_name)
console.log("birth year:", birthyear)
console.log("grade:", grade)
console.log("done homework:", donehomework)

console.log("Data type of student name:", typeof student_name)
console.log("Data type of birth year:", typeof birthyear)
console.log("Data type of grade:", typeof grade)
console.log("Data type of done homework:", typeof donehomework)

const summary=`My name is ${student_name} i was born in the year ${birthyear} and i am in grade ${grade}. It is ${donehomework} that i have done my homework.`
console.log(summary)

// The student status tracker 

const submittedAssignments=["Maths", "English", "Science"]
submittedAssignments.push("Business")
const gradePercent=70

if (gradePercent >= 70 && submittedAssignments.length >= 4) {
    console.log("Ready for Project Certification")
} 
else if (gradePercent >= 50) {
    console.log("In Progress: Needs more submissions")
}
else{
    console.log("Action Required: Contact student support")
}

// The student progress helper
const calculateTotalScore=(quizScore,examScore, bonusPoints=0)=>{
    return quizScore + examScore + bonusPoints
}

const getLetterGrade=(total)=>{
    if (total >= 80){
        return ("A")}
    else if (total >= 60){
        return ("B")}
    else{
        return("C")
    }
}
console.log(`Your Grade is ${getLetterGrade(calculateTotalScore(60,90,87))}`)
