-- Total number of assistnace request for a student
-- student's name and total assistance requets
-- 'Elliot Dickinson'

SELECT count(assistance_requests.*) as total_assistances, students.name as name
FROM assistance_requests
JOIN students ON student_id = students.id
WHERE name = 'Elliot Dickinson'
GROUP BY name;