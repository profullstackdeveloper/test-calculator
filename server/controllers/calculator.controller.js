const { sum, average, stdev } = require("../lib/math");

module.exports.calculator = (req, res) => {
  let reg = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/; //decimal test regex

  let stringArr = req.body.data.split(",").map((ele) => ele.trim());

  //validation test
  stringArr.forEach((item) => {
    if (reg.test(item) == false)
      res.status(400).json({ error: "input type is not correct." });
  });

  //make float from string array
  const numbers = stringArr.map((ele) => parseFloat(ele));

  //send result
  res.status(200).json({
    sum: sum(numbers),
    average: average(numbers),
    stdev: stdev(numbers),
  });
};


module.exports.test = (req, res) => {
res.status(200).json({
    message:"this is test url" 
  });
}
