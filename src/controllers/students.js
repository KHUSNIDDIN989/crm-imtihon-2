const GET_STUDENTS = (req, res, next) => {
  try {
    const { search } = req.query;
    const data = req.select("students");
    const group = req.select("groups");
    const foundUser = data?.filter((e) => {
      search
        ? e.student_name.toLowerCase().includes(search.toLowerCase().trim())
        : e;
      return e;
    });

    res.render("students", { group, foundUser });
  } catch (err) {
    next(err);
  }
};

const GET = (req, res) => {
  const data = req.select("students");
  const { search } = req.query;
  // const foundUser = data.filter((e) => e.student_name == search);
  const foundUser = data?.filter((e) =>
    search
      ? e.student_name.toLowerCase().includes(search.toLowerCase().trim())
      : e
  );

  return res.json(foundUser);
};

const POST_STUDENTS = (req, res, next) => {
  try {
    const { first_name, phone, direction, class_days, class_time } = req.body;

    const data = req.select("students");
    data.push({
      student_id: data.length ? data[data.length - 1].student_id + 1 : 1,
      student_name: first_name,
      student_phone: phone,
      direction,
      class_days,
      class_time,
      student_date: new Date(),
    });
    req.insert("students", data);

    res.redirect("/students");
  } catch (err) {
    console.log(err);
  }
};

const DELETE_STUDENTS = (req, res) => {
  try {
    const { id } = req.params;
    const data = req.select("students");
    const deleteStudents = data?.findIndex((e) => e.student_id == id);
    data.splice(deleteStudents, 1);

    req.insert("students", data);

    res.json("ok");
  } catch (err) {
    console.log(err);
  }
};

export { GET_STUDENTS, GET, POST_STUDENTS, DELETE_STUDENTS };
