# Write your MySQL query statement below
select a.email as Email from Person a group by a.email having count(a.email) > 1;