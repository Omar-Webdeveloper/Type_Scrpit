// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. 
// Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

interface Person {
    name: string;
    age: number;
}

// Define an array of 3 Product objects
const People: Person[] = [
    {
        name: "Omar",
        age: 100
    },
    {
        name: "Ahmad",
        age: 60
        },
    {
        name: "Adnan",
        age: 12
    }
];

function Voting(){
    const My_Age = document.getElementById("Check_Age") as HTMLUListElement;
    My_Age.innerHTML = ""; // Clear existing content

    People.forEach(my_people => {
        const listItem = document.createElement("li");
        if(my_people.age >= 18)
        {
            listItem.textContent = `${my_people.name} - Adult`;
        }
        else
        {
            listItem.textContent = `${my_people.name} - Minor.\nPlease come back after ${18 -my_people.age} years for voting`;
        }
        My_Age.appendChild(listItem);
    });
};
