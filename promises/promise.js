//promise ko kisi me save kr ke kaam krna
const promiseOne = new Promise(function(resolve,reject) {
    //Do async task
    //DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async task is completed");
        resolve(); //iske bina then nhi kaam krega

    },4000);
})
promiseOne.then(function() {
    console.log("Promise Completed");
})


//bina save kiye kisi variable m fir kaam krna
new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve();
        console.log("Async task 2");

    },1000);
}).then(function() {
    console.log("Async2 task completed");
})


//
const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve({username: "Amulll",
                password: 123,
                email: "amul@gmail.com"
        })
    },2000);
})
//isme tera puura user as an object print hoga
promiseThree.then(function(user) {
    console.log(user);
    console.log(user.password); //isme password print hoga
})


const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username: "Swayam", password: 1234})
        }
        else {
            reject('ERROR: Something went wrong');
        }
    },1000);
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    }).then((username) => {
        console.log(username);

    }).catch(function(error) {
        console.log(error)
    }).finally(() => console.log("The promise is completed"));


const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username: "javascript", location: "bengaluru"})
        }
        else {
            reject("Error: JS WENT WRONG");
        }
    },1000);
});
async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}
consumePromiseFive();



//FETCH USING 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))