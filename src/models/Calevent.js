export default (sequelize, Sequelize) => {
  const Calevent = sequelize.define("calevent", {
    title: {
      type: Sequelize.STRING,
    },
    uuid: {
      type: Sequelize.STRING,
    },
    start: {
      type: Sequelize.STRING,
    },
    end: {
      type: Sequelize.STRING,
    },
    allday: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Calevent;
};
