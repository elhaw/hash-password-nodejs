const adminModel = require('./admin.model')


const adminRegister = (req, res) => {

    let newAdmin = new adminModel(req.body)

    newAdmin.save((err, admin) => {
        if (err) {
            console.log(err)
        }
        res.json(admin)
    })
}
const adminLogin = async (req, res) => {
    const password = req.body.password
    try {
        const admin = await adminModel.findOne({username:req.body.username});
        const isValid =  admin.checkPassword(password,admin.password)
             isValid.then(same=>{
                 if(same) {
                    res.send('matched')
                 }
                 else {
                    res.send('wrong password')
                 }
                
             }).catch(err=>{
                 console.log(err)
             })
        
    }
    catch(err) {
        console.log(err)
    }
}
module.exports = {
    adminRegister,
    adminLogin
}