
describe('Bubble Sort', function(){
    beforeAll(function() {
        spyOn(window, 'swap').and.callThrough(); //needs to use lowercase w for Jasmine
    });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('calls swap x times', function() {
        //spyOn(window, 'swap').and.callThrough();
        bubbleSort([1, 5, 7, 2]);
        expect(window.swap.calls.count()).toEqual(9);
    })
  });