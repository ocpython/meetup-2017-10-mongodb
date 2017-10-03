// CREATE ("INSERT" in SQL)
db.users.insertOne(
    {
        name: "Sue",
        email: "sue@gmail.com",
        age: 26,
        status: "pending"
    }
);

db.users.insertOne(
    {
        name: "Johnny",
        email: "johnny@gmail.com",
        age: 13,
        status: "pending"
    }
);
