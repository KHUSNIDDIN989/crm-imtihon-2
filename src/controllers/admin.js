const GET_ADMIN = (req, res, next) => {
  try {
    res.render("index");
  } catch (err) {
    next(err);
  }
};

export { GET_ADMIN };
