# Docker Tutorial

[Complete Docker Tutorial](https://alpha1212.notion.site/Dockerising-a-Full-Stack-Application-for-Publishing-it-to-GitHub-d2029910628b4259a5ad6e1963776a47?pvs=4)

This is Docker tutorial for You to understand the basic functioning of Dockerizing your full stack application and pulishing it to GitHub, So that anyone can download and use.

---

# 1.0 Prequisite
- Node version 21.1.0
- MoongoDB (atlas) account
- Docker Desktop should be in your computer for Docker installation only.

---

# 2.0 Installation

# Method 1: To Run the project using docker

- Step 1: Clone the Repo

```bash
 git clone git@github.com:abhyuday1212/DockerTutorial.git
```

- Step 2: Go the EvaluationTask folder & run

```bash
 docker-compose up
```

- Step 3: Frontend Url

```bash
 http://localhost:5173/
```

- Step 4: Backend Url for hitting the server using postman

```bash
 http://localhost:8080/
```

---

</br>

# Method 2: To run the project Manually:

Install the project by cloning this repo from your terminal.

- Step 1: Clone the Repo

```bash
 git clone git@github.com:abhyuday1212/DockerTutorial.git
```

- Go to the #root folder, open terminal in VS-Code and write this command

```bash
 cd backend
```

- Install the dependencies using this command for backend

```bash
 npm i
```

- If any ERR ocured in terminal the use this command and reinstall the dependencies using this line

```bash
  npm i --force
```

- Install the dependencies using this command for frontend

```bash
  cd frontend
```

- If any ERR occures in terminal, then use this command and reinstall the dependencies using this line

```bash
  npm i --force
```

### Run the backend server.

- Goto #root folder and run these commands in your powershell.

- Open a new powershell and write this command to move to backend directory.

```bash
  cd backend
```

```bash
  npm start
```

- If terminal returns Port started successfully at ${PORT} & Databse connected successfully than you are good to go.

### Open a new powershell in your VS-Code and write this command to move to frontend directory from the root folder and start the server.

```bash
  cd frontend
```

```bash
  npm run dev
```

---

# 3.0 Tech Stack

_Client:_ React(Build using Vite), TailwindCss.

_Server:_ MongoDB , Express.js , Node.js .

# 4.0 Docker iamges uploaded here

```bash
https://hub.docker.com/repository/docker/abhyuday1212/blog-app-frontend/general
```

```bash
https://hub.docker.com/repository/docker/abhyuday1212/blog-app-backend/general
```

 
