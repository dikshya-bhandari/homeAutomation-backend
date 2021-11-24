const Appliances = require("./../models/appliances");
const addData = (data) =>
  new Promise((resolve, reject) => {
    let myData = new Appliances(data);
    myData.save((err, res) => {
      (err && reject(err)) || resolve(res);
    });
  });

const getData = () =>
  new Promise((resolve, reject) => {
    Appliances.find((err, data) => {
      (err && reject(err)) || resolve(data[data.length - 1]);
    });
  });
module.exports = {
  addData,
  getData,
};
