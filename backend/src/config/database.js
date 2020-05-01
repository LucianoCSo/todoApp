const mongoose = require('mongoose');
mongoose.Promise = global.Promise

//Banco Mongo istalado na maquina
// module.exports = mongoose.connect('mongodb://localhost/todo',
// {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// });

//Banco Mongo Atlas
module.exports = mongoose.connect('mongodb+srv://lucianocosta:kelvilu2020@cluster0-sampm.mongodb.net/todoapp?retryWrites=true&w=majority',
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
