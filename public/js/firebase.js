
    const firebaseConfig = {
        apiKey: "AIzaSyCJ7h6HhyOT4FvQXs4jHgtK3JNlJiu3Eg8",
        authDomain: "bruceweb-e322d.firebaseapp.com",
        databaseURL: "https://bruceweb-e322d-default-rtdb.firebaseio.com",
        projectId: "bruceweb-e322d",
        storageBucket: "bruceweb-e322d.appspot.com",
        messagingSenderId: "449797861376",
        appId: "1:449797861376:web:e8ea22069906d69b93e8e5"
      };


const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}
write(this.items, 'todo');
// ;(async () => {
//     let result = await write('BBB', 'test')
//     console.log(result)

//     let response = await read('test')
//     console.log(response)

//     listen('test', (value) => {
//         console.log(value)
//     })
// })()