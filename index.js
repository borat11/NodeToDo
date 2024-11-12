require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const dbConnection = require("./helper/dbConnection");
const secureApi = require('./middleware/secureApi');
const registrationController = require('./controller/registrationController');
const login = require('./controller/loginController');
const toDoPostController = require('./controller/toDoPostController');
const multer  = require('multer')
const path = require('path');
const getAllToDoController = require('./controller/getAllToDoControll');
const updateController = require('./controller/updateController');
const deleteController = require('./controller/deleteController');

app.use(express.json())
dbConnection()

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    }, 
    filename: function (req, file, cb) {
      console.log(file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix  + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


app.post('/registration', secureApi, registrationController);
app.post('/login', secureApi, login);
app.post('/todo',secureApi,upload.single('avatar'),toDoPostController)
app.get('/alltodo', secureApi, getAllToDoController);
app.post('/update',secureApi,updateController)
app.delete('/delete/:id',secureApi,deleteController)

app.listen(port, () => console.log(`app listening on port ${port}!`))