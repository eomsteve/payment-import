const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.set('port', process.env.PORT ||8000);
app.use(morgan);

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기 중');
    
})