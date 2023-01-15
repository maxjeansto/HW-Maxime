var students = [];
for (let i = 0; i < 5; i++) {
    var student = prompt("Entrez le Nom des etudiants").toLowerCase();
    students.push(student);
}
console.log(students.sort().join(", "));
