const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const arg = process.argv.slice(2);
const cohort = arg[0];
const limit = arg[1];

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${cohort}%'
LIMIT ${limit || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});