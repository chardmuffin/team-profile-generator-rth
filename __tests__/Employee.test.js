const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {

    const employee = new Employee("Bob Jones", 1, "bobjones@gmail.com");

    expect(employee.getName()).toEqual("Bob Jones");
    expect(employee.getId()).toEqual(1);
    expect(employee.getEmail()).toEqual("bobjones@gmail.com");
    expect(employee.getRole()).toBe('Employee');
});