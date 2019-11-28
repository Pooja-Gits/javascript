const employee = {
    name: "Manoj",
    jobTitle: "Developer",
    location: "India",
    technology: ["C#", "JavaScript", "Scala", "TypeScript", "SQL"]
};

console.log(employee.name);
console.log(employee["jobTitle"]);
let locationVar = "location";
console.log(employee[locationVar]);
console.log(employee.technology[2]);
console.log(employee.location);
employee.technology[5] = "Java";
console.log(employee.technology);
employee.state = "Telengana";
console.log(employee);
employee["kar kor 99"] = 999;
console.log(employee);
console.log(employee["kar kor 99"]);

