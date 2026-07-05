// Admission Form

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const student = document.getElementById("studentName").value;
        const parent = document.getElementById("parentName").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const program = document.getElementById("program").value;

        const studentData = {
            student,
            parent,
            phone,
            email,
            program
        };

        let students = JSON.parse(localStorage.getItem("students")) || [];

        students.push(studentData);

        localStorage.setItem("students", JSON.stringify(students));

        alert("Admission Submitted Successfully!");

        admissionForm.reset();

    });

}