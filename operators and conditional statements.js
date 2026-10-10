const user_score=85
const passmark='85'

console.log("loose equality(==)", user_score==passmark)
console.log("strict equality(===)", user_score===passmark)//true

if (user_score>=85 && passmark>-80) {
    console.log("You are eligible for the exam.")
}else if (user_score <=85 && passmark<-80) {
    console.log("You are not eligible for the exam.")
}else{
    console.log("wrong input")
}