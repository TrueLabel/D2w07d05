const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const D2 = require('./models/D2.js')
const app = express();
app.use(express.json())
app.use(cors())


///////////////////////////////////////////////////////
// Routes Start
///////////////////////////////////////////////////////

app.post('/D2', (req, res)=>{
  D2.create(req.body, (err, createdCard) => {
      res.json(createdCard);
  })
});



app.get('/D2', (req, res) => {
    D2.find({}, (err, findCard) => {
        res.json(findCard)
    })
});


app.delete('/D2/:id', (req, res) => {
    D2.findByIdAndRemove(req.params.id, (err, deleteCard) => {
      res.json(deleteCard)
    })
});


app.put('/D2/:id', (req, res) => {
    D2.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateCard) => {
      res.json(updateCard)
    })
});

///////////////////////////////////////////////////////
// Routes End
///////////////////////////////////////////////////////


mongoose.connect('mongodb://localhost:27017/D2')
mongoose.connection.once('open', () => {
    console.log('connected to mongodb...');
})
app.listen(3000, () => {
  console.log('listening...');
})
