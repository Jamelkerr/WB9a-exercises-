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
  }
  
  // Test the Employee class
  let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
  console.log(`Employee ${employee1.fullName} created`);
  console.log(`Job title is ${employee1.jobTitle}`);
  console.log(`Pay rate is $${employee1.payRate}`);
  
  // Create a second employee and test
  let employee2 = new Employee(2, "Jane", "Doe", "Software Engineer", 55.00);
  console.log(`Employee ${employee2.fullName} created`);
  console.log(`Job title is ${employee2.jobTitle}`);
  console.log(`Pay rate is $${employee2.payRate}`);
  