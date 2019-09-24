### My Project


1. Convert Static HTML to React Static single page
2. Separate as components 
3. Create Mock Server
4. Write the reducer functions and actions
5. Write axios calls

### Setting up Mock Server

- npm install -g json-server
- create db.json
  ```
{
    "departments": [
      {
        "id": 1,
        "name": "Software COE"
      },
      {
        "id": 2,
        "name": "Finance"
      },
    ],
    "employees": [
      {
        "id": 1,
        "name": "Vijay",
        "email": "test@test.com",
        "phone": "1234567890",
        "department": "Learning & Development"
      },
    ],
    "authenticate": {
      "token": "some-unique-token"
    }
  }
  ```
  - Run `json-server --port=3004 --watch db.json`

### References

- https://github.com/typicode/json-server
- https://reacttraining.com/react-router/core/guides/philosophy
- https://ourcodeworld.com/articles/read/561/how-to-use-components-of-bootstrap-4-in-reactjs