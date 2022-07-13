const User = require('../models/User')

module.exports = {

    async createUser(values){

        const {username, password} = values

        const hashPW = await User.genHash(password)

        const createdUser = await User.create({username: username, password: hashPW})

        return createdUser
    },

    async getUser(id){

        const foundUser = await User.findOne({where: {id: id}})

        return {type: 'success', message: 'User encontrado com sucesso!', data: foundUser}        

    },
    
    async updateUser(values){

        const {id, username, password} = values
        
        const updatedUser = await User.update({username: username, password: password}, {where: {id: id}})
    
        return {type: 'success', message: 'User atualizado com sucesso!', data: updatedUser}        
    
    },

    async deleteUser(id){
        
        const deletedUser = await User.destroy({where: {id: id}})

        return {type: 'success', message: 'User deletado com sucesso!', data: deletedUser}        

    }


}