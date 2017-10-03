// READ ("SELECT * FROM users" in SQL)
db.users.find({})

// READ ("SELECT" in SQL)
db.users.find(
    {age: {$gte: 18}},
    {name: true, address: true}
).limit(5);
