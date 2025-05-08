const userModel = require('../models/user.model');


module.exports.createUser = async ({name,email,password,dob, role}) => {
    if(!name || !email || !password || !dob || !role){
        throw new Error('Please provide all the details')
    }
    const user = await userModel.create({name,email,password,dob, role})
    return user
}