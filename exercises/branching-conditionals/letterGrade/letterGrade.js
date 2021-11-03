/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  // This is your job. :)

  let grade = "";

  if (percentGrade < 60)
  {
    return "F";
  }
  if (percentGrade > 90)
  {
    grade = "A";
  }
  else if (percentGrade > 80)
  {
    grade = "B";
  }
  else if (percentGrade > 70)
  {
    grade = "C";
  }
  else
  {
    grade = "D";
  }

  if (percentGrade%10 > 6)
  {
    grade += "+";
  }
  else if (percentGrade%10 < 3)
  {
    grade += "-";
  }

  return grade;
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(letterGrade(81));
  console.log(letterGrade(84));
  console.log(letterGrade(89));
  console.log(letterGrade(61));
}

module.exports = letterGrade;
