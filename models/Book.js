const {model, Schema} =  require('mongoose')

const bookSchema = new Schema({
  title: String,
  description: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  rating: Number,
},
{
  timestamps:{
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}
)

module.exports=model('Book', bookSchema)