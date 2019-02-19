const mongoose = require('mongoose')
const {
    Schema
} = require('mongoose')
const bcrypt = require('bcrypt')


const adminSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


adminSchema.pre('save', async function () {

    // return bcrypt.hash(this.password, 10).then((hash) => {

    //     this.password = hash
    // }).catch((err) => {
    //     console.log(err)
    // });
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword
    }
    catch(err) {
        console.log(err)
    }

});

adminSchema.methods.checkPassword = async function(password,hash) {

      try {
        
        return await bcrypt.compare(password, hash);

      }
      catch(err) {
        console.log(err)
      }
  }


module.exports = mongoose.model('admin', adminSchema)