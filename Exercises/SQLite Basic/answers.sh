select * from students
select Name from students
select * from students where age>30
select Name from students where age=30 And Gender='F'
select points from students where Name='Alex'
insert into students(Name,gender,age,Points) values('Malako','F',21,900)
update students set points=points+50 where Name='Basma'
update students set points=points-5 where Name='Alex'