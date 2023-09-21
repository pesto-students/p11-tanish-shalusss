

| Book ID | Title                 | Author          | Genre       | Publisher         | ISBN           | Price  |
|---------|-----------------------|-----------------|-------------|-------------------|---------------|--------|
| 101     | To Kill a Mockingbird | Harper Lee      | Fiction     | HarperCollins     | 978-0061120084 | 10.99  |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction   | Scribner          | 978-0743273565 | 12.50  |
| 103     | Principles of Physics | Jearl Walker   | Science     | Wiley             | 978-0321976444 | 50.00  |

1 NF -
Table is 1 NF complaint
It contains all atomic values
It contains unique column names
Values stored in column are of same domain

2 NF -
Table is 2NF complaint
Non primary key is not dependent on primary key

 3 NF -
 Table is 3 NF complaint
 Non primary keys are not dependant on other non primary keys
 
 | Employee ID | Employee Name | Department   | Project ID | Project Name | Start Date | End Date   | Salary  |
|-------------|---------------|--------------|------------|--------------|------------|------------|---------|
| 101         | John Doe      | HR           | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000    |
| 101         | John Doe      | HR           | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200    |
| 102         | Jane Smith    | Marketing    | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500    |
| 103         | Mike Johnson  | IT           | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000    |
| 103         | Mike Johnson  | IT           | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200    |
| 104         | Sarah Brown   | HR           | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800    |
| 105         | Robert Lee    | Finance      | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200    |
| 106         | Lisa Wang     | IT           | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800    |  

1 NF-
Table is 1 NF complaint
It contains single atomic values
Values stored in the colums are of same domain
All the columns have unique names

2 NF-
Dependency between non primary and primary columns removed

| Employee ID | Employee Name | Department |
|-------------|---------------|------------|
| 101         | John Doe      | HR         | 
| 102         | Jane Smith    | Marketing  | 
| 103         | Mike Johnson  | IT         | 
| 104         | Sarah Brown   | HR         |  
| 105         | Robert Lee    | Finance    | 
| 106         | Lisa Wang     | IT         |

| Employee ID | Project ID   | ProjectName| Start Date | End Date    | Salary  |
|-------------|--------------|------------|------------|-------------|---------|
| 101         | 001          | Project A  | 2023-01-15 | 2023-06-30  | 5000    |
| 101         | 002          | Project B  | 2023-04-01 | 2023-08-31  | 5200    |
| 102         | 001          | Project A  | 2023-02-01 | 2023-05-31  | 5500    |
| 103         | 002          | Project B  | 2023-03-10 | 2023-08-15  | 6000    |
| 103         | 003          | Project C  | 2023-06-15 | 2023-11-30  | 6200    |
| 104         | 002          | Project B  | 2023-04-20 | 2023-07-31  | 4800    |
| 105         | 001          | Project A  | 2023-05-05 | 2023-09-30  | 5200    |
| 106         | 001          | Project A  | 2023-06-01 | 2023-12-31  | 5800    |

3 NF-
Dependency between non primary columns removed

| Employee ID | Employee Name | Department |
|-------------|---------------|------------|
| 101         | John Doe      | HR         | 
| 102         | Jane Smith    | Marketing  | 
| 103         | Mike Johnson  | IT         | 
| 104         | Sarah Brown   | HR         |  
| 105         | Robert Lee    | Finance    | 
| 106         | Lisa Wang     | IT         |


| Project ID   | ProjectName| 
|--------------|------------|
| 001          | Project A  | 
| 002          | Project B  | 
| 003          | Project C  | 

| Employee ID| Project ID | Start Date  | End Date    | Salary | 
|------------|------------|-------------|-------------|--------|
| 101        | 001        | 2023-01-15  | 2023-06-30  | 5000   |
| 101        | 002        | 2023-04-01  | 2023-08-31  | 5200   |
| 102        | 001        | 2023-02-01  | 2023-05-31  | 5500   |
| 103        | 002        | 2023-03-10  | 2023-08-15  | 6000   |
| 103        | 003        | 2023-06-15  | 2023-11-30  | 6200   |
| 104        | 002        | 2023-04-20  | 2023-07-31  | 4800   |
| 105        | 001        | 2023-05-05  | 2023-09-30  | 5200   |
| 106        | 001        | 2023-06-01  | 2023-12-31  | 5800   |

4 NF -
Multi value rows removed
| Employee ID | Employee Name | Department |
|-------------|---------------|------------|
| 101         | John Doe      | HR         | 
| 102         | Jane Smith    | Marketing  | 
| 103         | Mike Johnson  | IT         | 
| 104         | Sarah Brown   | HR         |  
| 105         | Robert Lee    | Finance    | 
| 106         | Lisa Wang     | IT         |


| Project ID   | ProjectName| 
|--------------|------------|
| 001          | Project A  | 
| 002          | Project B  | 
| 003          | Project C  | 

| Employee ID| Project ID1| Start Date  | End Date    | Salary |
|------------|------------|-------------|-------------|--------|
| 101        | 001        | 2023-01-15  | 2023-06-30  | 5000   |
| 102        | 001        | 2023-02-01  | 2023-05-31  | 5500   |
| 105        | 001        | 2023-05-05  | 2023-09-30  | 5200   |
| 106        | 001        | 2023-06-01  | 2023-12-31  | 5800   |

| Employee ID| Project ID2| Start Date  | End Date    | Salary |
|------------|------------|-------------|-------------|--------|
| 101        | 002        | 2023-04-01  | 2023-08-31  | 5200   |
| 103        | 002        | 2023-03-10  | 2023-08-15  | 6000   |
| 104        | 002        | 2023-04-20  | 2023-07-31  | 4800   |

| Employee ID| Project ID3| Start Date  | End Date    | Salary |
|------------|------------|-------------|-------------|--------|
| 103        | 003        | 2023-06-15  | 2023-11-30  | 6200   |
