const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {

    const manager = new Manager("Frank Muniz", 4, "frankm@gmail.com", 242);

    expect(manager.getName()).toEqual("Frank Muniz");
    expect(manager.getId()).toEqual(4);
    expect(manager.getEmail()).toEqual("frankm@gmail.com");
    expect(manager.getOfficeNumber()).toEqual(242);
    expect(manager.getRole()).toBe('Manager');
});