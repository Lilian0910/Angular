const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const videoSchema=new Schema({
    title: String,
    url: String,
    description: String
});

//.model(name: string, 
//       schema?: mongoose.Schema<any, mongoose.Model<any, any, any>, undefined>, 
//       collection?: string, skipInit?: boolean): mongoose.Model<any, {}, {}>
module.exports=mongoose.model('video',videoSchema, 'videos')