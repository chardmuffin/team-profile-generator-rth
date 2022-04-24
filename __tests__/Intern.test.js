const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {

    const intern = new Intern();

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');
});