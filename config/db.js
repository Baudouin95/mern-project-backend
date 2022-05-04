const mongoose = require('mongoose')
mongoose
    .connect("mongodb+srv://"+ process.env.DB_user+"@cluster0.es9wy.mongodb.net/mern-project",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => {console.log('Connected to MongoDB')})
    .catch((err) => {console.log('Failed to connect to MongoDB', err)})