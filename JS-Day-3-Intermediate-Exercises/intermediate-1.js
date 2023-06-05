const averageGrade = (grades) => {
  let sum = 0;
  let average = 0;
  let grade = "";

  for (let i = 0; i < grades.length; i ++) {
    sum += grades[i];
    average = sum / grades.length;
  }

  if (average < 60) {
    grade = "F";
  } else if (average < 70) {
    grade = "D";
  } else if (average < 80) {
    grade = "C";
  } else if (average < 90) {
    grade = "B";
  } else {
    grade = "A";
  }

  console.log(`Sum: ${sum}, Average: ${average}, Grade: ${grade}`);
};

averageGrade([76, 64, 81, 57, 94]);
