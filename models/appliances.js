const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const appliancesSchema = new Schema({
  bulbRoomA: String,
  fanRoomA: String,
  bulbRoomB: String,
  fanRoomB: String,
});

let Appliances = mongoose.model("Appliances", appliancesSchema);
module.exports = Appliances;
