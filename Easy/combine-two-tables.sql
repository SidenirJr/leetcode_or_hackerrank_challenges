link: https://leetcode.com/problems/combine-two-tables/

# Write your MySQL query statement below
select p.firstName, p.lastName, ad.city, ad.state from Address ad
right join Person p on ad.personId = p.personId;