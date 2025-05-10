import { db } from "../models/index.js";
const Calevent = db.calevent;
const Op = db.Sequelize.Op;

export function create(req, res) {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Calevent
  var event = {
    uuid: req.body.uuid,
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
    allDay: req.body.allDay,
  };

  Calevent.create(event)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
}

export function findAll(req, res) {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Calevent.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
}

export function findOne(req, res) {
  const id = req.params.id;

  Calevent.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
}

// exports.update = (req, res) => {};

export function Delete(req, res) {
  const uuid = req.params.uuid;

  Calevent.destroy({
    where: { uuid: uuid },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "event was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Calevent with uuid=${uuid}. Maybe event was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Calevent with uuid=" + uuid,
      });
    });
}

// exports function deleteAll = (req, res) => {};

// exports.findAllPublished = (req, res) => {};

// export default calevent;
