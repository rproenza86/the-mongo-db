// Show databases
show dbs
// Change/use the `blog-api` db
use blog - api
// Basic query
db.users.find({}, { 'username': 1 })
// Show document collections on the current DB
show collections
// import data
// $ mongoimport --db mongo_training --collection tours --jsonArray --file tours.json
// $ mongoimport --host cluster0-shard-00-00-6c54t.mongodb.net:27017 --db mongo_training --collection tours --jsonArray --file tours.json --authenticationDatabase admin --ssl --username rproenza --password gaxhi4-cotbuh-hucnIj

/*
	Shell operations:
*/

// Variable declaration
var arr = ["one", "two", "three"]
// print variable
arr
// loop
for (i = 0; i < 10000; i++) {
    db.numbers.insert(
        { "number": i }
    )
}
// check
db.numbers.count()
// query test
db.numbers.find({ "number": 1 })

/*
	Debugging operations:
*/
// query debugging
db.numbers.find({ "number": 1 }).explain()
// debugging query execution
db.numbers.find({ "number": 1 }).explain("executionStats") // check the executionTime...

/*
	Performance improvements operations:
*/
// Index creation
db.numbers.createIndex({ number: 1 })
// check improved execution performance
db.numbers.find({ "number": 1 }).explain("executionStats") // check the executionTime...and the totalDocsExamined