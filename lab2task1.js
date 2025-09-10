class Person {
    constructor(name = "Default", age = 0, gender = "Not Specified", address = "Karachi") {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
}

class Student {
    constructor(name = "Default", age = 0, gender = "Not Specified", address = "Karachi", studentId = "PKS001", program = "BSCS", year = 1) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.studentId = studentId;
        this.program = program;
        this.year = year;
    }
}

class Employee {
    constructor(name = "Default", age = 0, gender = "Not Specified", address = "Karachi", department = "IT", designation = "Employee", salary = 50000) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.department = department;
        this.designation = designation;
        this.salary = salary;
    }
}

class Teacher {
    constructor(name = "Default", age = 0, gender = "Not Specified", address = "Karachi", department = "CS", designation = "Professor", salary = 100000, subject = "AI") {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.department = department;
        this.designation = designation;
        this.salary = salary;
        this.subject = subject;
    }
}

class Staff {
    constructor(name = "Default", age = 0, gender = "Not Specified", address = "Karachi", department = "Admin", designation = "Assistant", salary = 40000, shift = "Morning") {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.department = department;
        this.designation = designation;
        this.salary = salary;
        this.shift = shift;
    }
}

class Course {
    constructor(courseName = "Web Development", courseCode = "CS301", students = [], teacher = null) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.students = students;
        this.teacher = teacher;
    }
}


const student1 = new Student("Ali Raza", 20, "Male", "Lahore", "PKS101", "BSSE", 3);
const student2 = new Student("Zainab Fatima", 21, "Female", "Islamabad", "PKS102", "BSIT", 4);

const teacher1 = new Teacher("Dr. Farhan Ahmed", 45, "Male", "Karachi", "CS", "Professor", 120000, "Data Science");
const teacher2 = new Teacher("Dr. Nida Shah", 40, "Female", "Multan", "IT", "Assistant Professor", 95000, "Cyber Security");


const staff1 = new Staff("Imran Qureshi", 34, "Male", "Rawalpindi", "Admin", "Coordinator", 60000, "Evening");
const staff2 = new Staff("Sadia Parveen", 30, "Female", "Hyderabad", "HR", "Office Assistant", 55000, "Morning");


const course1 = new Course("Software Engineering", "SE202", [student1, student2], teacher1);


console.log("Students:");
console.log(student1);
console.log(student2);

console.log("\nTeachers:");
console.log(teacher1);
console.log(teacher2);

console.log("\nStaff:");
console.log(staff1);
console.log(staff2);

console.log("\nCourse:");
console.log(course1);
