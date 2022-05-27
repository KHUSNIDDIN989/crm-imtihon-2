const GET_TEACHER = (req, res) => {
  try {
    res.render("teachers");
  } catch (err) {
    console.log(err);
  }
};

export { GET_TEACHER };
