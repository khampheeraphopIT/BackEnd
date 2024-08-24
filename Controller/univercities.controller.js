const db = require('../model')

exports.findAll = async (req, res) => {
    try {
        const univercities = await db.Univercities.findAll({
            include: {
                model: db.Student,
                through: {
                    attributes: ['education']
                }
            }
        });
        res.json(univercities)
    } catch (e) {
        console.log(e)
    }
}

exports.findOne = async (req, res) => {
    try {
        const univercities = await db.Univercities.findByPk(req.params.id, {
            include: db.Student
        });
        if (univercities) {
            res.json(univercities)
        } else {
            res.status(404).json({message: 'Univercities not found'})
        }
    } catch (e) {
        console.log(e)
    }
}

exports.create = async (req, res) => {
    try {
        const univercities = await db.Univercities.create(req.body)
        res.status(201).json(univercities)
    } catch (e) {
        console.log(e)
    }
}

exports.update = async (req, res) => {
    try {
        const [updated] = await db.Univercities.update(req.body, {
            where: { id: req.params.id}
        }) 
        if (updated) {
            const updatedUnivercities = await db.Univercities.findByPk(req.params.id);
            res.json(updatedUnivercities)
        } else {
            res.status(404).json({message: 'Univercities not found'})
        }
    } catch (e) {
        console.log(e)
    }
}

exports.delete = async (req, res) => {
    try {
        const deleted = await db.Univercities.destroy({
            where: { id: req.params.id}
        })
        if (deleted) {
            res.status(204).send()
        } else {
            res.status(404).json({message: 'Univercities not found'})
        }
    } catch (e) {
        console.log(e)
    }
}