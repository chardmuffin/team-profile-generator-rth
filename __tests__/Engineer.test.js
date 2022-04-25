const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {

    const engineer = new Engineer("Frank Edwards", 2, "frank@edwards.com", "franke");

    expect(engineer.getName()).toEqual("Frank Edwards");
    expect(engineer.getId()).toEqual(2);
    expect(engineer.getEmail()).toEqual("frank@edwards.com");
    expect(engineer.getGithub()).toEqual("franke");
    expect(engineer.getRole()).toBe('Engineer');
});