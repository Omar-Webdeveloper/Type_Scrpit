// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects).
// Print all the subjects the teacher teaches.
// Define an array of 3 Product objects
var Teachers = [
    {
        T_name: "Omar",
        subjects: ['Math', 'Claculas']
    },
    {
        T_name: "Ahmad",
        subjects: ['English', 'Arabic']
    },
    {
        T_name: "Adnan",
        subjects: ['History', 'Arts']
    }
];
function Classes() {
    var My_Teacher = document.getElementById("Teacher");
    My_Teacher.innerHTML = ""; // Clear existing content
    Teachers.forEach(function (my_teachers) {
        var listItem = document.createElement("li");
        listItem.textContent = "".concat(my_teachers.T_name, " : ").concat(my_teachers.subjects);
        My_Teacher.appendChild(listItem);
    });
}
;
