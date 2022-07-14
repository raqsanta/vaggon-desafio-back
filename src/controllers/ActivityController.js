const Activity = require('../models/Activity')

module.exports = {

    async createActivity(values){

        const {name,description,beginsdate, expiresdate, status, author_id} = values

        const createdActivity = await Activity.create({name,description,beginsdate,expiresdate,status,author_id})

        return {type: 'success', message: 'Atividade criada com sucesso!', data: createdActivity}

    },

    async getActivity(values){

        const {id, author_id} = values

        const foundActivity = await Activity.findOne({where: {id: id, author_id: author_id}})

        return {type: 'success', message: 'Atividade encontrada com sucesso!', data: foundActivity}

    },

    async getAllActivityFromUser(author_id){

        const foundActivity = await Activity.findAll({where: {author_id: author_id}})

        console.log(foundActivity)

        return {type: 'success', message: 'Atividade encontrada com sucesso!', data: foundActivity}

    },

    async updateActivity(values){

        const {id, author_id, name,description,beginsdate, expiresdate, status} = values

        const updatedActivity = await Activity.update({name,description,beginsdate,expiresdate,status}, {where: {id: id, author_id: author_id}})
       
        return {type: 'success', message: 'Atividade atualizada com sucesso!', data: updatedActivity}

    },

    async deleteActivity(values){

        const {id, author_id} = values

        const deletedActivity = await Activity.destroy({where: {id: id, author_id: author_id}})

        return {type: 'success', message: 'Atividade deletada com sucesso!', data: deletedActivity}

    }

}