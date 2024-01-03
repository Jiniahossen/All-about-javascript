//what is object

const object = {
    hello: 'world' //here hello is property name(key) and world is property value
}

// console.log(object);

const course = {
    notes: 20,
    lecture: 100,
    title: 'Javascript',
    enroll() {
        console.log('Successfully enrolled');
    }
}
course.enroll()
console.log('object',course);
// console.log('enroll',course.enroll());