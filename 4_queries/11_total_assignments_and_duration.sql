-- get each day with total number of assignments and total duration

SELECT day, count(*) as number_of_assignments, sum(duration) as duration
FROM assignments
GROUP BY day
ORDER BY day;