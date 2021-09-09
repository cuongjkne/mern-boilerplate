
const controller= {};

controller.hello = (req, res, next) => {
  try {
    res.json("hello");
  } catch (error) {
    next(error);
  }
};
module.exports = controller;
