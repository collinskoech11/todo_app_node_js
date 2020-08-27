var express = require('express')
var app = express();
var dbstatus = true;
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var parser = bodyparser.urlencoded({extended:false})
const port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://peterlight:laptop444@cluster0.bl51i.mongodb.net/todo_list?retryWrites=true&w=majority').then(function(){
    console.log('..................connection successfuly made to the database.')
}).catch(function(err){
    dbstatus = false;
})

var todoSchema = new mongoose.Schema({item:String})
var todo = mongoose.model('Todo', todoSchema)

app.set('view engine', 'ejs')

app.use(express.static('./static'))


app.get('/', function(req,res){
    if (dbstatus){
        todo.find({}, function(err,data){
            console.log(data, err)
            if (err) throw err;
            todos = data;
            res.render((todos.length)?'index':'index empty',{todos})
        })
    }else{
        res.status(500);
        res.render('error')
    }
})

app.post('/add', parser,function(req,res){
    todo(req.body).save(function(err){
        if (err){
            res.status(500);
            res.render('error')
        }
        res.redirect('/');
    })
})

app.delete('/delete/:id', function(req,res){
    todo.find({_id:req.params.id}).remove(function(err, data){
        if (err){
            res.status(500);
            res.render('error')
        }
        res.json(data);
    })
})

console.log(port);
app.listen(port,function(){
    console.log('server listening on port 3000')
});
console.log(app.PORT)

