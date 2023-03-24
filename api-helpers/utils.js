import mongoose from "mongoose";
export async function connecttoDatabase() {
    if(mongoose.connection[0])
    {
        return;
    }
    await mongoose
        .connect("mongodb+srv://admin:admin@cluster0.cki7kf2.mongodb.net/?retryWrites=true&w=majority"
        )
        .then(() => console.log("Connected"))
        .catch((err) => console.log(err));
}