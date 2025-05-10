export default (sequelize, Sequelize) => {
  const Calevent = sequelize.define("calevent", {
    title: {
      type: Sequelize.STRING,
    },
    uuid: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    start: {
      type: Sequelize.STRING,
    },
    end: {
      type: Sequelize.STRING,
    },
    allDay: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Calevent;
};
