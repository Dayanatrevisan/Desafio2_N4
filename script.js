
const students = [
  {
    name: "Dayana Trevisan",
    firstNote: 7,
    secondNote: 8,

   },
  {
    name: "Miguel Gotardo",
    firstNote: 4,
    secondNote: 5,

   },
  {
    name: "Pedro da Silva",
    firstNote: 9,
    secondNote: 10,

   },
  {
    name: "José Batista",
    firstNote: 6,
    secondNote: 8,

   },
  {
    name: "Samara Mesquita",
    firstNote: 3,
    secondNote: 9,

   },
]


function printMediaNotas(students){
  average = ((students.firstNote + students.secondNote) / 2).toFixed(2)
  return `A média do(a) aluno(a) ${students.name} é de: ${average}`
}


for (let student of students){
  let mediaMessage = printMediaNotas(student)

  if(average >= 7) {
    alert(`${mediaMessage}. 
   Parabéns, ${student.name}. Você está aprovado(a)!`)
  }else{
    alert(`${mediaMessage}. 
   Não foi dessa vez ${student.name}. Tente novamente.`) 
  }

}











