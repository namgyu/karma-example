describe('sayHoHo.js', function() {
    it('should returns string "HoHo"', function() {
        expect(sayHoHo()).toBe('HoHo');
        expect(sayHoHo()).not.toBe('HiHi');
    });
});