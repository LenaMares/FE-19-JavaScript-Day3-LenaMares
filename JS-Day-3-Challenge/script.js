const studentElement = document.createElement("div");
document.body.append(studentElement);

const studentName = prompt("Enter student's name")

const grades = (students, mathGrades) => {
  let index = students.indexOf(studentName);
  let grade = 0;

  if (index != -1) {
    grade = mathGrades[index];

    if (grade < 60) {
        studentElement.style.color = "red";
      } else if (grade < 70) {
        studentElement.style.color = "#F8DE7E"
      } else if (grade >= 70 && grade < 100) {
        studentElement.style.color = "green";
      } else {
        studentElement.style.color = "blue";
      }
    
      studentElement.innerHTML = `${studentName} has reached ${grade} points in math this season.`;


  } else {
    studentElement.innerHTML = `Name not found.`
  }


};

grades(["John", "Jane", "Joe", "Jenny"], [55, 68, 80, 100]);
