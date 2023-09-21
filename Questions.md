1. Find the item that has the minimum weight.
mysql> select min(weight) from items;
+-------------+
| min(weight) |
+-------------+
|        0.50 |
+-------------+
1 row in set (0.00 sec)

2. Find the different warehouses in "Pune".
mysql> select wname from warehouses where location ='Pune';
+-------------+
| wname       |
+-------------+
| Warehouse A |
+-------------+
1 row in set (0.00 sec)

3. Find the details of items ordered by a customer named "Mr. Patil".
mysql> select * from items where itemno in (select cno from customer where cname ='Mr. Patil');
+--------+-------------+--------+---------+
| ITEMNO | DESCRIPTION | WEIGHT | COST    |
+--------+-------------+--------+---------+
|    101 | Laptop      |   2.50 | 1200.50 |
+--------+-------------+--------+---------+
1 row in set (0.00 sec)

4. Find a Warehouse that has the maximum number of stores.
mysql> select wname from warehouses where location in (select max(location_city) from stores);
+-------------+
| wname       |
+-------------+
| Warehouse A |
+-------------+
1 row in set (0.01 sec)

5. Find the detailed orders given by each customer.
mysql> select * from items a, customer b where itemno = cno;
+--------+----------------+--------+---------+------+-------------+------------------+-----------+
| ITEMNO | DESCRIPTION    | WEIGHT | COST    | CNO  | CNAME       | ADDR             | CU_CITY   |
+--------+----------------+--------+---------+------+-------------+------------------+-----------+
|    101 | Laptop         |   2.50 | 1200.50 |  101 | Mr. Patil   | 123 Main St      | Pune      |
|    102 | Smartphone     |   0.50 |  800.00 |  102 | Mrs. Sharma | 456 Central Ave  | Mumbai    |
|    103 | TV             | 150.00 | 1000.00 |  103 | Mr. Singh   | 789 1 st Street  | Delhi     |
|    104 | Microwave Oven |  10.00 |  500.00 |  104 | Ms. Gupta   | 101 Second Road  | Bangalore |
|    105 | Refrigirator   |  25.00 | 1500.00 |  105 | Mr. Kumar   | 456 Third Avenue | Chennai   |
+--------+----------------+--------+---------+------+-------------+------------------+-----------+