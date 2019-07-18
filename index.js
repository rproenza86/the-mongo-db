const Hapi = require('@hapi/hapi');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url =
    'mongodb://rproenza:gaxhi4-cotbuh-hucnIj@cluster0-shard-00-00-6c54t.mongodb.net:27017/mongo_training?ssl=true&authSource=admin';

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route([
    // Get tour list
    {
        method: 'GET',
        path: '/api/tours',
        config: { json: { space: 2 } },
        handler: async function(request, reply) {
            const findObject = {};
            for (const key in request.query) {
                findObject[key] = request.query[key];
            }

            try {
                const tours = await collection.find(findObject).toArray();
                return tours;
            } catch (error) {
                return error;
            }
        }
    },
    // Add new tour
    {
        method: 'POST',
        path: '/api/tours',
        handler: async function (request, reply) {
            try {
                const result = await collection.insertOne(request.payload);
                return request.payload;
            } catch (error) {
                return error;
            }
        }
    },
    // Get a single tour
    {
        method: 'GET',
        path: '/api/tours/{name}',
        config: { json: { space: 2 } },
        handler: async function (request, reply) {
            try {
                const tour = await collection.findOne({ tourName: request.params.name });
                return tour;
            } catch (error) {
                return error;
            }
        }
    },
    // Update a single tour
    {
        method: 'PUT',
        path: '/api/tours/{name}',
        handler: async function (request, reply) {
            try {
                if (request.query.replace == 'true') {
                    request.payload.tourName = request.params.name;
                    console.log(request.payload);
                    const results = collection.replaceOne({ tourName: request.params.name }, request.payload);
                    return results;
                } else {
                    const results = collection.replaceOne({ tourName: request.params.name }, { $set: request.payload });
                    return results;
                }
            } catch (error) {
                return error;
            }
        }
    },
    // Delete a single tour
    {
        method: 'DELETE',
        path: '/api/tours/{name}',
        handler: async function (request, reply) {
            try {
                const result = collection.deleteOne({ tourName: request.params.name });
                return result;
            } catch (error) {
                return error;
            }
        }
    },
    // Home page
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            return 'Hello world from Hapi/Mongo example.';
        }
    }
]);

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('connected correctly to server');
    collection = db.collection('tours');
    server.start(function(err) {
        console.log('Hapi is listening to http://localhost:3000');
    });
});

module.exports = server.listener;
