-- average time that students wait for an assistance
-- started_at - created_at = waiting time

SELECT avg(started_at - created_at) as average_wait_time
FROM assistance_requests;