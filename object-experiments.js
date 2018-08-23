const objectOne = {
    firstName: 'Alice',
    lastName: 'the Rabbit Hunter'
}

console.log('Value of object One: ', objectOne)

const objectTwo = objectOne
objectTwo.lastName = 'The nice girl'

console.log('Value of Object One: ', objectOne)
console.log('Value of Object Two: ', objectTwo)

const hunter = {
    firstName: 'Alice',
    lastName: 'the Rabbit Hunter'
}

console.log('Value of object hunter: ', hunter)

const niceGirl = {...hunter}//this is a shallow copy of hunter
niceGirl.lastName = 'The nice girl'
// A shallow clone means we create a new object 
// (in the object store!) and copy everything that was in 
// the old object. However: if we have objects inside the 
// object,only their reference will be copied.

// this now works as expected
console.log('Value of Object hunter: ', hunter)
console.log('Value of Object niceGirl: ', niceGirl)

// now we create an object that has a nested object:

const cast = {
    hunter,
    prey: 'The Rabbit'
}

console.log('Value of Object hunter: ', hunter)
console.log('Value of Object cas: ', cast)

  // let's mutate our hunter
hunter.firstName = 'bob'

console.log('Value of Object hunter: ', hunter)
console.log('Value of Object cast: ', cast)


