const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {

    const intern = new Intern("Bob Dole", 3, "bob@dole.net", "Harvard");

    expect(intern.getName()).toEqual("Bob Dole");
    expect(intern.getId()).toEqual(3);
    expect(intern.getEmail()).toEqual("bob@dole.net");
    expect(intern.getSchool()).toEqual("Harvard");
    expect(intern.getRole()).toBe('Intern');
});