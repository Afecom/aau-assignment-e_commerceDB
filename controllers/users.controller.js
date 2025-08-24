import models from '../db/models/index.model.js'
const User = models['User']
const Address = models['Addresses']

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

export async function createUserAddress(req, res){
    const { user_id, name } = req.body
    try {
        const address = await Address.create({user_id, name})
        res.json({
            message: "Address created succesfully",
            address: address
        })
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create an address",
            error: error.message || error
        })
    }
}
export async function getUserAddress(req, res){
    const user_id = req.params.id
    try {
        const address = await Address.findAll({
            where: { user_id },
            include: {
                model: User,
                as: 'users'
            }
        })
        if (address){
            return res.status(200).json({
                message: "An address is found for the user",
                address: address
            })
        }
        res.status(404).json({
            message: "An address couln't be found for the user"
        })
    } catch (error) {
        res.status(400).json({
            message: "Couldn't fetch an address",
            error: error.message || error
        })
    }
}
export async function updateUserAddress(req, res){
    const id = req.params.id
    const { name } = req.body
    try {
        const address = await Address.findByPk(id)
        if (address){
            address.name = name
            await address.save()
            return res.json({
                message: "Address updated successfully",
                address: address
            })
        }
        res.status(404).json({
            message: "Couldn't find an address with the ID provided"
        })
    } catch (error) {
        res.status(400).json({
            message: "Couldn't update an address",
            error: error.message || error
        })
    }
}
export async function deleteUserAddress(req, res){
    const id = req.params.id
    try {
        const address = await Address.findByPk(id)
        if(address){
            const deleted = await address.destroy()
            return res.json({
                message: "Address deleted successfully",
                address: deleted
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Couldn't update an address",
            error: error.message || error
        })
    }
}