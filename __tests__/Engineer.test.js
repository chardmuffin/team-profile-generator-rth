const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {

    const engineer = new Engineer();

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
    expect(engineer.getEmail()).toEqual(expect.stringContaining('.'));
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
});