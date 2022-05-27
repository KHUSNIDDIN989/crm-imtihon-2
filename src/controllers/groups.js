const GET_GROUPS = (req, res, next) => {
  try {
    const data = req.select("groups");
    const dataTacher = req.select("teachers");

    const foundTeacher = data.filter((e) => {
      e.teacher = dataTacher.filter(
        (t) => t.teacher_group_name == e.group_name
      );
      e.group_date = e.group_date.split("T", 1);
      return e;
    });
    res.render("groups", { foundTeacher });
  } catch (err) {
    next(err);
  }
};

const GET_SELECT = (req, res) => {
  try {
    res.json(req.select("groups"));
  } catch (err) {
    console.log(err);
  }
};

const POST_GROUPS = (req, res) => {
  try {
    const { direction, class_days, class_time, teacher_name, teacher_phone } =
      req.body;
    const dataGroup = req.select("groups");
    const dataTeacher = req.select("teachers");
    const dataStudent = req.select("students");

    const studentCount = dataStudent.filter(
      (e) =>
        e.direction == direction && e.class_days == class_days && e.class_time
    );
    dataGroup.push({
      group_id: dataGroup.length
        ? dataGroup[dataGroup.length - 1].group_id + 1
        : 1,
      group_name: direction,
      class_days,
      class_time,
      student_count: studentCount.length,
      is_pad: null,
      group_date: new Date(),
    });

    dataTeacher.push({
      teacher_id: dataTeacher.length
        ? dataTeacher[dataTeacher.length - 1].teacher_id + 1
        : 1,
      teacher_name,
      teacher_group_name: direction,
      teacher_phone,
      class_days,
      class_time,
      teacher_date: new Date(),
    });

    req.insert("groups", dataGroup);
    req.insert("teachers", dataTeacher);
    res.redirect("/groups");
  } catch (err) {
    console.log(err);
  }
};

const DELETE_GROUP = (req, res) => {
  try {
    const { id } = req.params;
    const data = req.select("groups");

    const deleteGroup = data.find((e) => e.group_id == id);

    data.splice(deleteGroup, 1);

    req.insert("groups", data);

    res.json("ok");
  } catch (err) {
    console.log(err);
  }
};

export { GET_GROUPS, GET_SELECT, POST_GROUPS, DELETE_GROUP };
