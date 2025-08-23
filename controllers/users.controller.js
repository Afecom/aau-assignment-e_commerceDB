import models from '../db/models/index.model.js'
const { User } = models

export async function createUsers(req, res){
    
    try {
        const body = req.body
        const {first_name, last_name, phone_number} = body
        const created = await User.create({first_name, last_name, phone_number})
        res.json(created)
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create the user",
            error: error.message || error
        })
    }
}

export async function getUsers(req, res){
    try {
        const getuser = await User.findAll()
        res.send(getuser)
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create the user",
            error: error.message || error
        })
    }
}

export async function updateUser(req, res){
    const body = req.body
    const id = req.params.id
    const {first_name, last_name, phone_number} = body
    try {
        const user = await User.findByPk(id)
        if (!user){
            res.status(404).json({
                message: "User not found"
            })
        }
        user.first_name = first_name
        user.last_name = last_name
        user.phone_number = phone_number

        user.save();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "couldn't update user",
            error: error.message || error
        })
    }
}

export async function deleteUser(req, res){
    const id = req.params.id

    try {
        const deleted = await User.destroy({where: { id }})
        if(deleted){
            res.status(200).json({
                message: "User deleted successfully"
            })
        }
        else {
            res.status(404).json({
                message: "User not found"
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Couldn't delete the user",
            error: error.message || error
        })
    }
}