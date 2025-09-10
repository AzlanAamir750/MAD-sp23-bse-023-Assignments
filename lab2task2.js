class Employee {
    constructor(name = "", dept = "general") {
        this.name = name;
        this.dept = dept;
    }
}

class Manager {
    constructor(name = "", dept = "general", reports = []) {
        this.name = name;
        this.dept = dept;
        this.reports = reports;
    }
}

class WorkerBee {
    constructor(name = "", dept = "general", projects = []) {
        this.name = name;
        this.dept = dept;
        this.projects = projects;
    }
}

class SalesPerson {
    constructor(name = "", dept = "sales", projects = [], quota = 100) {
        this.name = name;
        this.dept = dept;
        this.projects = projects;
        this.quota = quota;
    }
}

class Engineer {
    constructor(name = "", dept = "engineering", projects = [], machine = "") {
        this.name = name;
        this.dept = dept;
        this.projects = projects;
        this.machine = machine;
    }
}

const emp = new Employee("Ali");
const mgr = new Manager("Sara", "general", [emp]);
const worker = new WorkerBee("Bilal", "general", ["Project A", "Project B"]);
const sales = new SalesPerson("Hina", "sales", ["Project X"], 120);
const eng = new Engineer("Usman", "engineering", ["System Upgrade"], "CNC Machine");

console.log("Employee:", emp);
console.log("Manager:", mgr);
console.log("WorkerBee:", worker);
console.log("SalesPerson:", sales);
console.log("Engineer:", eng);
