const db = require('../model')

exports.findAll = async (req, res) => {
    try {
        const students = await db.Student.findAll({
            include: {
                model: db.Univercities,
                through: {
                    attributes: ['education']
                }
            }
        });
        res.json(students);
    } catch (e) {
        console.log(e);
    }
}

exports.findOne = async (req, res) => {
    try {
        const student = await db.Student.findByPk(req.params.id, {
            include: db.Univercities
        })
        if (student) {
            res.json(student);
        }   else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (e) {
        console.log(e);
    }
}

exports.create = async (req, res) => {
    try {
        const student = await db.Student.create(req.body);
        res.status(201).json(student);
    } catch (e) {
        console.log(e);
    }
}

exports.update = async (req, res) => {
    try {
        const [updated] = await db.Student.update(req.body, {
            where: { id: req.params.id}
        })
        if (updated) {
            const updatedStudent = await db.Student.findByPk(req.params.id);
            res.json(updatedStudent);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (e) {
        console.log(e);
    }    
}

exports.delete = async (req, res) => {
    try {
        const deleted = await db.Student.destroy({
            where: { id: req.params.id}
        })
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (e) {
        console.log(e);
    }
}