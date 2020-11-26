const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const arg = process.argv.slice(2);
const cohort = arg[0];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohort}'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(teacher => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`);
  })

});

//       teacher       | cohort 
// --------------------+--------
// Cheyanne Powlowski | JUL02
// Georgiana Fahey    | JUL02
// Helmer Rodriguez   | JUL02
// Jadyn Bosco        | JUL02
// Roberto Towne      | JUL02
// Rosalyn Raynor     | JUL02
// Talon Gottlieb     | JUL02
// Waylon Boehm       | JUL02