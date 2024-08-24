const db = require('../model');

exports.findAll = async (req, res) => {
    try {
        const Student_Univercities = await db.Student_Univercities.findAll();
        res.json(Student_Univercities);
    } catch (e) {
        console.log(e);
        res.status(500).send('Error getting Student_Univercities');
    }
}

exports.create = async (req, res) => {
    try {
        const { student_id, univercities_id, education } = req.body;

        const student = await db.Student.findByPk(student_id);
        const univercities = await db.Univercities.findByPk(univercities_id);

        if (!student || !univercities) {
            return res.status(404).send('Student or Univercities not found');
        }

        const Student_Univercities = await db.Student_Univercities.create({
            student_id,
            univercities_id,
            education
        });

        res.status(201).json(Student_Univercities);
    } catch (e) {
        console.log(e);
        res.status(500).send('Error creating Student_Univercities');
    }
};
