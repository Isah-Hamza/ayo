const add = require('./script')
console.log(typeof add)

// describe('testing script.ts', () => { 
    
//  })

it('expects',()=>{
    expect(add(1,2)).toBe(3);
})
