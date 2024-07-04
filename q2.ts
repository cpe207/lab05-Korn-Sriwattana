// define interface for Student object
interface Student {
  name:string;
  score:number;
}

// assign interface/type to the function definition properly
function findTopNames(students:Student[]):string[] {
  return students.filter((students:Student):boolean=>students.score>8)
  .map((students:Student):string=>students.name);
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

//กรณ์ ศรีวัฒนะ
//รหัส: 660610738