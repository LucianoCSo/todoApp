const mongoose = require('mongoose');
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://lucianocosta:kelvilu2020@cluster0-sampm.mongodb.net/todoapp?retryWrites=true&w=majority',
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
