select * from students
select Name from students
select * from students where age>30
select Name from students where age=30 And Gender='F'
select points from students where Name='Alex'
insert into students(Name,gender,age,Points) values('Malako','F',21,900)
update students set points=points+50 where Name='Basma'
update students set points=points-5 where Name='Alex'

#create table

    create table graduates(
    ID INTEGER NOT NULL PRIMARY KEY autoincrement,
    Name TEXT NOT NULL UNIQUE,
    Age INTEGER,
    Gender TEXT,
    Points INTEGER,
    Graduation date
    );

INSERT INTO graduates('Id','Name','Age','Gender','Points')
SELECT * FROM students
WHERE Name='Layal' 


UPDATE graduates
SET Graduation = '08/09/2018'
WHERE Name='Layal' ;


DELETE FROM students WHERE Name='Layal';

#join

select employees.Name,companies.Name,companies.Date
from employees
inner join companies
on employees.ID=companies.ID;

select employees.Name
from employees 
inner join companies
on employees.Company=companies.Name
where companies.Date<2000;

select companies.Name
from  companies
inner join employees
on employees.Company=companies.Name
where employees.Role='Graphic Designer';
