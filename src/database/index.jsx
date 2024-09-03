import mongoose from "mongoose"

const connectToDB = async =() =>{
    const connectionUrl = "mongodb+srv://ezeonyemaechianthony:7x7KeTbBgDGf0yy8@cluster0.nd5l9.mongodb.net/"
    mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog connection is successful"))
    .catch((error) => console.log(error))
}

export default connectToDB