# the-mongo-db

API URL: https://the-mongo-db.rproenza86.now.sh/api/tours

## Overview

MongoDB—an open-source, document database—makes it easy to bring up an application stack and start coding.

In this training, I explored the differences between relational and document databases.

Worked with the Mongo shell, setting up basic indexing functionality, and building an application in Node.js.

Explored advanced topics such as indexing, sharding, and replication. Made practical exercises in the shell and in Node.js.

## Objectives

- Installing MongoDB for Windows and OS X
- Answer: Why Mongo?
- Document-oriented data
- Exploring the Mongo shell
- Importing data into the database
- Building an application in Node.js
- Tuning Mongo queries
- Aggregation
- Replication and sharding

## How to test

### Get tours

```curl
curl -X GET \
  https://the-mongo-db.rproenza86.now.sh/api/tours \
  -H 'Accept: */*' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: 127.0.0.1' \
  -H 'Postman-Token: d0e1c789-eb3f-44db-8510-690f07afdf4b,ff3ab923-ee17-4ebd-8dc3-fcd2c534061b' \
  -H 'User-Agent: PostmanRuntime/7.13.0' \
  -H 'accept-encoding: gzip, deflate' \
  -H 'cache-control: no-cache'
```

### Get tours using query params

```curl
curl -X GET \
  'https://the-mongo-db.rproenza86.now.sh/api/tours?tourName=A%20Week%20of%20Wine' \
  -H 'Postman-Token: ecfa4e85-8e12-41c0-9793-d958b9a97c7a' \
  -H 'cache-control: no-cache'
```

### Get tour by name

```curl
curl -X GET \
  'https://the-mongo-db.rproenza86.now.sh/api/tours/Oranges%20&%20Apples%20Tour' \
  -H 'Postman-Token: 599bb811-74d9-4595-aada-360730b71f57' \
  -H 'cache-control: no-cache'
```

### Create a new tour

```curl
curl -X POST \
  https://the-mongo-db.rproenza86.now.sh/api/tours \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: b30a4ceb-f9fd-44f4-9973-253dc62d4249' \
  -H 'cache-control: no-cache' \
  -d '{
    "tourBullets": "\"Round-trip ferry from Ventura CA to Santa Cruz Island, Lunch provided in Avalon, Tour the art deco Catalina Casino, Whale watching package optional\"",
    "tourRegion": "Havana, Cuba",
    "tourDifficulty": "Easy",
    "tourLength": 6,
    "tourPrice": 5646,
    "tourName": "Raul Proenza cuban'\''s excursion",
    "tourOrganizer": {
        "organizerName": "Raul Proenza",
        "organizerPhone": "456 799 4644"
    },
    "tourTags": [
        "Catalina Island",
        "hiking"
    ],
    "tourBlurb": "\"The chain known as the Channel Islands offer some of the most diverse and unique landscape on the Pacific coast. No motor vehicles are allowed on the islands, which makes this daytrip hiking package the best and most interesting way to visit.\"",
    "tourDescription": "\"The Channel Islands Excursion starts with a ferry from beautiful Ventura to the nearest island in the strand, Santa Cruz. You'\''ll spend the day wandering the rocky coasts, sea anemone and barnacle studded shoreline, and wildflower-strewn meadows of the islands. Visit the herd of wild buffalo housed on Santa Catalina and keep an eye peeled for the endangered island fox. Take a break for lunch on Catalina in the quaint, turn of the century styled Avalon and make sure to visit the Art Deco Catalina Casino. Before ferrying home, visit the botanical gardens or climb to one of the islands'\'' high points and do some inexpensive whale watching. Blue whale season extends the late spring through summer months. (The Whaling Tour, run by Island Packers, is also available for an additional cost.)\"",
    "tourPackage": "Backpack Cal"
}'
```

### Update partially a tour by tour name

```curl
curl -X PUT \
  https://the-mongo-db.rproenza86.now.sh/api/tours/Raul%20Proenza%20cuban%27s%20excursion \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: a2cd1c24-6829-4bb9-99d3-5b7e3a4f90d9' \
  -H 'cache-control: no-cache' \
  -d '{
    "tourBlurb": "Get your tan on!!!"
}'
```

### Update, complete replace, by tour name

```curl
curl -X PUT \
  'https://the-mongo-db.rproenza86.now.sh/api/tours/Raul%20Proenza%20cuban%27s%20excursion?replace=true' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 06f772f3-0a16-4dca-9693-1e8b7e63368b' \
  -H 'cache-control: no-cache' \
  -d '{
    "tourBlurb": "Get ready to partyyyyy!!!",
    "where": "On the best beach: Varaderoooo!!!"
}'
```

### Delete by name

```curl
curl -X DELETE \
  https://the-mongo-db.rproenza86.now.sh/api/tours/Raul%20Proenza%20cuban%27s%20excursion \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 09f534b0-768a-4389-8e02-77f7740674b5' \
  -H 'cache-control: no-cache'
```
