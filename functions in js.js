function calculateAverage(score1,score2,score3){
    const sum = score1 + score2 + score3;
    const avg = sum / 3;
    return avg;
}

const avgScore = calculateAverage(78, 60, 95);
console.log("Calculate Average: " ,avgScore.toFixed(1));

const formatStdName = (firstName, lastName) => {
    const cleanFirstName = firstName.trim();
    const cleanLastName = lastName.trim();
    return `${cleanFirstName} ${cleanLastName}`;
}
console.log(formatStdName(" John ", " Doe "));

const percentage =(value, total) => (value / total) * 100;
console.log(`Percentage: ${percentage(45, 60)}%`);