var getItemsMaxNumber = require('../../app/checkTest.js');

describe('get items max number', () => {
   it('return 11', () => {
       var items = [
          { name: 'item 1' },
          { name: 'item 2' },
          { name: 'item 11' },
          { name: 'item 3' },
          { name: 'item 10' }
        ];
       expect(getItemsMaxNumber(items)).toBe(11);
   });
    it('return -1', () =>{
        var items = [
          { name: 'item -5' },
          { name: 'item -100' },
          { name: 'item -94' },
          { name: 'item -1' },
          { name: 'item -15' }
        ];
       expect(getItemsMaxNumber(items)).toBe(-1);
   });
    it('return 0.15', () =>{
        var items = [
          { name: 'item 0.0054' },
          { name: 'item 0.15' },
          { name: 'item 0.125' },
          { name: 'item 0.0015' },
          { name: 'item 0.0099' }
    ];
   expect(getItemsMaxNumber(items)).toBe(0.15);
   });
     it('return 7', () =>{
        var items = [
          { name: 'item' },
          { name: 'item' },
          { name: 'item 5' },
          { name: 'item 7' },
          { name: 'item -9' }
     ];
       expect(getItemsMaxNumber(items)).toBe(7);
   });
     it('return 0, because no numbers', () =>{
        var items = [
          { name: 'item' },
          { name: 'item' },
          { name: 'item' },
          { name: 'item' },
          { name: 'item' }
     ];
       expect(getItemsMaxNumber(items)).toBe(0);
   });
        it('return 0, because empty array', () =>{
        var items = [];
       expect(getItemsMaxNumber(items)).toBe(0);
   });
});

