# Backend
This is a Node.js backend for Insper Mileage Application.

## How to use
- In the terminal, run:
  - `yarn`, to install the dependencies.
  - `node ./src/index.js`, to start the program.

Or after installing the dependencies, you can run in development mode with: `yarn dev` (this will re-run the index.js at every file change, thanks to *nodemon*)

## Routes
#### Create dataset
```
> POST /dataset HTTP/1.1
> Host: localhost:3333
> Content-Type: application/json

| {
| 	"title": "treino-pre-competicao"
| }
```

#### List datasets
```
> GET /dataset HTTP/1.1
> Host: localhost:3333
```

#### Insert data
```
> POST /dataset/<databaseID> HTTP/1.1
> Host: localhost:3333
> Content-Type: application/json

| {
| 	"button": 1,
| 	"accelerometer": 0.23,
| 	"altimeter": 165.77,
| 	"barometer": 100.08,
| 	"temperature": 33.28,
| 	"rpm": 199,
| 	"voltage": 2.98,
| 	"current": 0.31
| }
```

#### Show data from database
```
> GET /dataset/<databaseID> HTTP/1.1
> Host: localhost:3333
```