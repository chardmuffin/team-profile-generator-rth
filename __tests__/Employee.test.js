const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {

    const employee = new Employee();

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
    expect(employee.getEmail()).toEqual(expect.stringContaining('.'));
    expect(employee.getRole()).toBe('Employee');
});