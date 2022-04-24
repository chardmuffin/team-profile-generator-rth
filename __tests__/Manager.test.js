const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {

    const manager = new Manager();

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe('Manager');
});