# CleanApi-WithJest
 Api for user creation using clean code and unit tests.

<hr/>

### How to install

Cloning Repository
```bash
git clone https://github.com/gransottodev/CleanApi-WithJest.git
```
Open Dir
```bash
cd CleanApi-WithJest
```

Install Dependencies
```bash
npm init
```

Start Api
```bash
node index.js
```

<br/>

 ### About

This api was created with the purpose of studying Clean Code, Unit Tests and Classes.

<br/>

```
Implemented features:
1. User creation.
2. List all users.
3. List users by id.
4. Fake database using static repository.
```

### End Points ⚛️

This is an ApiRestFull, so all actions can be done in the /users route.

```
ADD USER(POST): http://localhost:3000/users
Through your rest client send a json containing the data: name, age.


GET ALL USERS(GET): http://localhost:3000/users


GET USER BY ID: http://localhost:3000/users/:id
```

<hr/>

#### Technologies used in this project:
* [Jest](https://jestjs.io/pt-BR/)
* [Express](https://expressjs.com)





