const app = require('./src/app');
require('dotenv').config();

app.get('/',(req, res)=>{
    res.send('hello world');
})
app.listen(3000, ()=>{
    console.log('server is running on port  3000');
});