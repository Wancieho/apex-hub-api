import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

// #TODO: UUID
const Tournament = sequelize.define("Tournament", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
});

export default Tournament;
