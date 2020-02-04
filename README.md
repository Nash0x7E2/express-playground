## Express Playgrounds 
This repository contains sample code for a demo "items" application built on 
Express, NodeJs and Typescript. 

The project is meant as a learning and exploration playground for Express 
and NodeJS. Feel free to poke around and submit PRs if you think something 
should be changed or can be done differently. 

### Docker commands 
Create network:
```
docker network create <your-network>
``` 

Build Container:
```
docker build -t <container-name> .
```

Run: 
```
docker run \
  --name=<your-name> \
  --rm \
  --network=<your-network> \
  -p 3000:3000 \
  <container-name>
```