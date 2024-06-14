class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
      this.employeeId = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.jobTitle = jobTitle;
      this.payRate = payRate;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    promote(newJobTitle, newPayRate) {
      this.jobTitle = newJobTitle;
      this.payRate = newPayRate;
    }
  }
  
  // Test the Employee class
  let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
  console.log(`Employee ${employee1.fullName} created`);
  
  employee1.promote("Sr. Graphic Artist", 46.75);
  
  console.log(`Job title is ${employee1.jobTitle}`);
  console.log(`Pay rate is $${employee1.payRate}`);
  
  let employee2 = new Employee(2, "Jane", "Doe", "Software Engineer", 55.00);
  console.log(`Employee ${employee2.fullName} created`);
  
  employee2.promote("Lead Software Engineer", 65.00);
  
  console.log(`Job title is ${employee2.jobTitle}`);
  console.log(`Pay rate is $${employee2.payRate}`);
  