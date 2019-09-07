const {model, Schema} = require('mongoose')

const authorSchema = new Schema({
name: String,
lastName: String,
birthday: Date,
naionality: String,
pictureUrl: String,
},{
  timestamps:{
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}
)

module.exports = model('Author', authorSchema)