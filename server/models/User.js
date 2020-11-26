const mongoose = require("../libs/mongoose");
const pick = require("lodash.pick");

const publicFields = ["result", "name"];

const userSchema = new mongoose.Schema(
  {
    result: {
      type: String,
      required: "E-mail пользователя не должен быть пустым.",
    },
    name: {
      type: String,
      required: "У пользователя должно быть имя",
    },
  },
  {
    timestamps: true,
    toObject: {
      transform(doc, ret, options) {
        return pick(ret, [...publicFields, "_id"]);
      },
    },
  }
);

userSchema.statics.publicFields = publicFields;

module.exports = mongoose.model("User", userSchema);
