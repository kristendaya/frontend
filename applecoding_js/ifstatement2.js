function printGrade(midtermScore, finalScore) {
   let totalScore = midtermScore + finalScore;
 
   if (totalScore >= 90) {
     console.log('A');
   } else if (totalScore >= 80) {
     console.log('B');
   } else if (totalScore >= 70) {
     console.log('C');
   } else if (totalScore >= 60) {
     console.log('D');
   } else {
     console.log('F');
   }
 }

 printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);