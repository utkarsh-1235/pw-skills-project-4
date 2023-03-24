let marks = [97,86,89,95,99];
let highestMarks = 0;
let highestMarksIndex = -1

for(let i=0;i<marks.length;i++){
    if(marks[i]>highestMarks){
        highestMarks = marks[i];
        highestMarksIndex = i;
    }
}

console.log(`The highest marks scored by a student is ${highestMarks}.`);
console.log(`This was scored by student ${highestMarksIndex + 1}.`);