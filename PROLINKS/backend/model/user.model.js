const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema(
      {
            bags:{
                  type:String,
                  require:'true'
            },
            dealer:{
                  type:String,
                  require:'true'
            },
            product:{
                  type:String,
                  require:'true'
            },
            address:{
                  type:String,
                  require:'true'
            },
            city:{
                  type:String,
                  require:'true'
            },
            date:{
                  type:String,
                  require:'true'
            },
            remarks:{
                  type:String,
                  require:'true'
            },
      }
)

const User = mongoose.model("User",ProductSchema)

module.exports=User;