-- single row for average_assistance_request_duration
-- average time of an assistance request

SELECT avg(completed_at - started_at) as average_assistance_request_duration
FROM assistance_requests;
