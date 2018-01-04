var sayHello = function() {
    return 'Hello';
}

describe('sayHello.js', function() {
    it('should returns string "hello"', function() {
        expect(sayHello()).toBe('Hello');
        expect(sayHello()).not.toBe('bye');
    });
});