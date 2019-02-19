const adminModel = require('./admin.model')


const addAdmin = (req, res) => {

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
                 res.send('wrong password')
             }).catch(err=>{
                 console.log(err)
             })
        
    }
    catch(err) {
        res.send(err)
    }
}
module.exports = {
    addAdmin,
    adminLogin
}