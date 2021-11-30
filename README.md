# os-mini4
## Steps to run app in docker
1. Open the command line in the root of the project folder
2. Type `docker build -t nameofimage`
*it is advise to create an account on docker hub so that the name of the image could be **dockerId/appName:versionNumber** *
3. After the image has be created, the id of the image would be at the end of the output. That id can be used to run a container.
4. To run the container locally, type `docker run -p 5000:3000 imageid`
5. After that the container should be running locally.
6. Open your browser and type `https://localhost:5000/api/apiendpoint`

**Hurray! the app has been successfully deployed to docker. Happy Hacking!!!
