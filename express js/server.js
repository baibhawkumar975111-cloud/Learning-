const express = require("express");
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Rahul", course: "BCA", city: "Patna", fees: 15000 },
    { id: 2, name: "Priya", course: "BTech", city: "Delhi", fees: 25000 },
    { id: 3, name: "Amit", course: "BCA", city: "Ranchi", fees: 18000 },
    { id: 4, name: "Neha", course: "MBA", city: "Patna", fees: 30000 }
];

app.get("/", (req, res) => {
    res.send("Welcome to Student Management API");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(
        x => x.id === id
    );

    res.json(student);
});

app.post("/students", (req, res) => {

    const { name, course, city, fees } = req.body;

    const newStudent = {
        id: Date.now(),
        name,
        course,
        city,
        fees
    };

    students = [...students, newStudent];

    res.json(newStudent);
});

app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    students = students.filter(
        x => x.id !== id
    );

    res.json({
        message: "Student Deleted Successfully"
    });
});

app.put("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    students = students.map(student =>
        student.id === id
            ? { ...student, ...req.body }
            : student
    );

    res.json({
        message: "Student Updated Successfully"
    });
});

app.get("/search", (req, res) => {

    const { name } = req.query;

    const result = students.filter(
        x => x.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(result);
});

app.get("/course", (req, res) => {

    const { course } = req.query;

    const result = students.filter(
        x => x.course.toLowerCase() === course.toLowerCase()
    );

    res.json(result);
});

app.get("/city", (req, res) => {

    const { city } = req.query;

    const result = students.filter(
        x => x.city.toLowerCase() === city.toLowerCase()
    );

    res.json(result);
});

app.get("/count", (req, res) => {

    res.json({
        totalStudents: students.length
    });
});

app.get("/feesgreater/:amount", (req, res) => {

    const amount = Number(req.params.amount);

    const result = students.filter(
        x => x.fees > amount
    );

    res.json(result);
});

app.get("/feesless/:amount", (req, res) => {

    const amount = Number(req.params.amount);

    const result = students.filter(
        x => x.fees < amount
    );

    res.json(result);
});

app.get("/sortname", (req, res) => {

    const result = [...students].sort(
        (a, b) => a.name.localeCompare(b.name)
    );

    res.json(result);
});

app.get("/feesasc", (req, res) => {

    const result = [...students].sort(
        (a, b) => a.fees - b.fees
    );

    res.json(result);
});

app.get("/feesdesc", (req, res) => {

    const result = [...students].sort(
        (a, b) => b.fees - a.fees
    );

    res.json(result);
});

app.get("/exists/:id", (req, res) => {

    const id = Number(req.params.id);

    const exists = students.some(
        x => x.id === id
    );

    res.json({ exists });
});

app.get("/totalfees", (req, res) => {

    const totalFees = students.reduce(
        (sum, student) => sum + student.fees,
        0
    );

    res.json({ totalFees });
});

app.get("/coursewise", (req, res) => {

    const result = students.reduce((acc, student) => {

        if (!acc[student.course]) {
            acc[student.course] = [];
        }

        acc[student.course].push(student);

        return acc;

    }, {});

    res.json(result);
});

app.post("/students/multiple", (req, res) => {

    const newStudents = req.body;

    students = [...students, ...newStudents];

    res.json({
        message: "Multiple Students Added Successfully"
    });
});

app.get("/dashboard", (req, res) => {

    const totalStudents = students.length;

    const totalFees = students.reduce(
        (sum, student) => sum + student.fees,
        0
    );

    const courses = [...new Set(
        students.map(student => student.course)
    )];

    res.json({
        totalStudents,
        totalFees,
        totalCourses: courses.length,
        courses
    });
});

const port = 5600;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});