#HOW TO DO STUFF

1. install mysql [BOOYAH](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing)

2. download nodejs

3. Create this table

```sql
      CREATE TABLE characters (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        health INT NOT NULL
      );
```

4. create a .env file in the root folder with these values:

```
  DB_HOST="localhost"
  DB_USER="ur stuff"
  DB_PASSWORD="ur stuff"
  DB_NAME="ur stuff"
```

5. run npm install
6. npm run dev
