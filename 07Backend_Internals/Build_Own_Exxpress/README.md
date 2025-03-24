# **myExpress**   
*A lightweight, minimalist Node.js framework inspired by Express.js*  

## **Features**  
- **Routing** - Supports `GET` and `POST` routes  
- **Query Parameters Parsing** - Easily access URL parameters  
- **JSON Body Parsing** - Automatically parses `application/json` payloads  
- **Custom Response Methods** - Use `.send()` and `.json()` for structured responses  

---

## **📦 Installation**  
```sh
git clone https://github.com/yourusername/myExpress.git
cd myExpress
npm install

## Usage

### 1️Import & Initialize `myExpress`  
Create a `server.js` file:  

```javascript
const myExpress = require('./myExpress'); // Import myExpress

const app = myExpress(); // Initialize the app

// Define routes
app.get('/hello', (req, res) => {
    res.send('Hello from myExpress!');
});

app.get('/user', (req, res) => {
    res.json({ message: 'User details', params: req.params });
});

app.post('/user', (req, res) => {
    res.json({ message: 'User created', body: req.body });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


## API Endpoints  

### GET `/hello`  
#### **Request:**
```sh
curl "http://localhost:3000/hello"

