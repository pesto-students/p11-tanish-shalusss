Create a Warehouse Database

mysql> create database `warehouse`;
Query OK, 1 row affected (0.00 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| classicmodels      |
| information_schema |
| mysql              |
| performance_schema |
| pesto              |
| sakila             |
| sys                |
| warehouse          |
| world              |
+--------------------+
9 rows in set (0.00 sec)

The database should include the following tables:

CITIES (CITY CHAR(20), STATE CHAR(20))
WAREHOUSES (WID INTEGER, WNAME CHAR(30), LOCATION CHAR(20), EXTRA CONTEXT json)
STORES (SID INTEGER, STORE_NAME CHAR(20), LOCATION_CITY CHAR(20))
CUSTOMER (CNO INTEGER, CNAME CHAR(50), ADDR VARCHAR(50), CU_CITY CHAR(20))
ORDERS (ONO INT, ODATE DATE)
ITEMS (ITEMNO INTEGER, DESCRIPTION TEXT, WEIGHT DECIMAL(5,2), COST DECIMAL(5,2))

mysql> create table CITIES (CITY char(20) NOT NULL, STATE char(20) NOT NULL, PRIMARY KEY (CITY));
Query OK, 0 rows affected (0.03 sec)

mysql> insert into CITIES (CITY, STATE) values ('Pune', 'Maharashtra'),('Mumbai', 'Maharashtra'), ('Delhi', 'Delhi'), ('Bangalore', 'Karnatka'), ('Chennai', 'Tamil Nadu');
Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from cities;
+-----------+-------------+
| CITY      | STATE       |
+-----------+-------------+
| Bangalore | Karnatka    |
| Chennai   | Tamil Nadu  |
| Delhi     | Delhi       |
| Mumbai    | Maharashtra |
| Pune      | Maharashtra |
+-----------+-------------+
5 rows in set (0.00 sec)

mysql> create table warehouses (WID INT, WNAME CHAR(30), LOCATION CHAR(20));
Query OK, 0 rows affected (0.02 sec)

mysql> insert into warehouses (WID, WNAME, LOCATION) values (1, 'Warehouse A', 'Pune'), (2, 'Warehouse B', 'Mumbai'), (3, 'Warehouse C', 'Delhi'), (4, 'Warehouse D', 'Bangalore');
Query OK, 4 rows affected (0.01 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> create table stores (SID INT, STORE_NAME CHAR(20), LOCATION_CITY CHAR(20));
Query OK, 0 rows affected (0.02 sec)

mysql> select * from warehouses;
+------+-------------+-----------+
| WID  | WNAME       | LOCATION  |
+------+-------------+-----------+
|    1 | Warehouse A | Pune      |
|    2 | Warehouse B | Mumbai    |
|    3 | Warehouse C | Delhi     |
|    4 | Warehouse D | Bangalore |
+------+-------------+-----------+
4 rows in set (0.00 sec)

mysql> create table stores (SID INT, STORE_NAME CHAR(20), LOCATION_CITY CHAR(20));
Query OK, 0 rows affected (0.02 sec)

mysql> insert into stores (SID, STORE_NAME, LOCATION_CITY) values (1, 'Store 1', 'Pune'), (2, 'Store 2', 'Mumbai'), (3, 'Store 3', 'Pune'), (4, 'Store 4', 'Delhi');
Query OK, 4 rows affected (0.01 sec)
Records: 4  Duplicates: 0  Warnings: 0
mysql> select * from stores;
+------+------------+---------------+
| SID  | STORE_NAME | LOCATION_CITY |
+------+------------+---------------+
|    1 | Store 1    | Pune          |
|    2 | Store 2    | Mumbai        |
|    3 | Store 3    | Pune          |
|    4 | Store 4    | Delhi         |
+------+------------+---------------+
4 rows in set (0.00 sec)
mysql> create table orders (ONO INT, ODATE DATE);
Query OK, 0 rows affected (0.02 sec)

mysql> create table customer (CNO INTEGER, CNAME CHAR(50), ADDR VARCHAR(50), CU_CITY CHAR(20));
Query OK, 0 rows affected (0.02 sec)

mysql> insert into customer (CNO, CNAME, ADDR, CU_CITY) values (101, 'Mr. Patil', '123 Main St', 'Pune'), (102, 'Mrs. Sharma', '456 Central Ave', 'Mumbai'), (103, 'Mr. Singh', '789 1 st Street', 'Delhi'), (104, 'Ms. Gupta', '101 Second Road', 'Bangalore'), (105, 'Mr. Kumar', '456 Third Avenue', 'Chennai');
Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0
mysql> select * from customer;
+------+-------------+------------------+-----------+
| CNO  | CNAME       | ADDR             | CU_CITY   |
+------+-------------+------------------+-----------+
|  101 | Mr. Patil   | 123 Main St      | Pune      |
|  102 | Mrs. Sharma | 456 Central Ave  | Mumbai    |
|  103 | Mr. Singh   | 789 1 st Street  | Delhi     |
|  104 | Ms. Gupta   | 101 Second Road  | Bangalore |
|  105 | Mr. Kumar   | 456 Third Avenue | Chennai   |
+------+-------------+------------------+-----------+
5 rows in set (0.00 sec)

mysql> create table orders (ONO INT, ODATE DATE);
Query OK, 0 rows affected (0.02 sec)

mysql> insert into orders (ONO, ODATE) values (1, '2023-06-15'), (2, '2023-06-16'), (3, '2023-06-17'), (4, '2023-06-18'), (5, '2023-06-19');
Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from orders;
+------+------------+
| ONO  | ODATE      |
+------+------------+
|    1 | 2023-06-15 |
|    2 | 2023-06-16 |
|    3 | 2023-06-17 |
|    4 | 2023-06-18 |
|    5 | 2023-06-19 |
+------+------------+
5 rows in set (0.00 sec)

mysql> create table items(ITEMNO INTEGER, DESCRIPTION TEXT, WEIGHT DECIMAL(5,2), COST DECIMAL(6,2));
Query OK, 0 rows affected (0.02 sec)

mysql> insert into items(ITEMNO, DESCRIPTION, WEIGHT, COST) values (101, 'Laptop', '2.50', '1200.50'), (102, 'Smartphone', '0.50', '0800.00'), (103, 'TV', '150.00', '1000.00'), (104, 'Microwave Oven', '10.00', '0500.00'), (105, 'Refrigirator', '25.00', '1500.00'), (106, 'Washing Machine', '30.00', '1800.00');
Query OK, 6 rows affected (0.01 sec)
Records: 6  Duplicates: 0  Warnings: 0

mysql> select * from items;
+--------+-----------------+--------+---------+
| ITEMNO | DESCRIPTION     | WEIGHT | COST    |
+--------+-----------------+--------+---------+
|    101 | Laptop          |   2.50 | 1200.50 |
|    102 | Smartphone      |   0.50 |  800.00 |
|    103 | TV              | 150.00 | 1000.00 |
|    104 | Microwave Oven  |  10.00 |  500.00 |
|    105 | Refrigirator    |  25.00 | 1500.00 |
|    106 | Washing Machine |  30.00 | 1800.00 |
+--------+-----------------+--------+---------+
6 rows in set (0.00 sec)


