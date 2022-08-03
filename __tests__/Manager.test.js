// using Manager constructor 
const Manager = require('../Lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Jackson', 90, 'jacksonpetz44@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Jackson', 90, 'jacksonpetz44@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 