// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects).
// Print all the subjects the teacher teaches.

interface Teacher {
    T_name: string;
    subjects: string[];
}

// Define an array of 3 Product objects
const Teachers: Teacher[] = [
    {
        T_name: "Omar",
        subjects: ['Math','Claculas']
    },
    {
        T_name: "Ahmad",
        subjects: ['English','Arabic']
    },
    {
        T_name: "Adnan",
        subjects: ['History','Arts']
    }
];
function Classes(){
    const My_Teacher = document.getElementById("Teacher") as HTMLUListElement;
    My_Teacher.innerHTML = ""; // Clear existing content

    Teachers.forEach(my_teachers => {
        const listItem = document.createElement("li");
        listItem.textContent = `${my_teachers.T_name} : ${my_teachers.subjects}`;
        My_Teacher.appendChild(listItem);
    });
};
