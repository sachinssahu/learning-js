const testPromise = new Promise((resolve, reject) => {
    const result = 4 + 2;
    if (result === 4) {
        resolve('Fulfilled');
    } else {
        reject({message: 'Something went wrong'});
    }
});

testPromise.then(message => {
    console.log(message)
}).catch(message => {
    console.log(message);
    
})