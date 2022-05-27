const GET_COURSES = (req, res, next) => {
  try {
    res.render("courses");
  } catch (err) {
    next(err);
  }
};

const POST_COURSES = (req, res, next) => {
  try {
    console.log(req.select("courses"));
  } catch (err) {
    next(err);
  }
};

export { GET_COURSES, POST_COURSES };
