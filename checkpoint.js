////////////////////Exercice 1////////////////////
const array = [1, 'hello', function sayHi(){console.log('hi')}, 'world', true, 0n, 1000];

async function categorize(values) {
obj = {"string":[],"function":[],"boolean":[],"number":[],"bigint":[]};

    const result = values.filter((value) => {
        if(typeof(value) == "string") {
            obj.string.push(value);
        } if(typeof(value) == "function") {
            obj.function.push(value);
        } if(typeof(value) == "boolean") {
            obj.boolean.push(value);
        } if(typeof(value) == "number") {
            obj.number.push(value);
        } if(typeof(value) == "bigint") {
            obj.bigint.push(value);
        }
    })
    console.log(obj);
}

categorize(array);


////////////////////Exercice 2////////////////////

const array1 = [10, 10n, '10', 1, 10n, '10',10, 1n, '1', ];

function dedup (array) {
    newArray = [];
    for(let i=0;i<array.length;i++) {
        if(!newArray.includes(array[i])) {
            console.log(`${array[i]} n'existe pas`);
            newArray.push(array[i]);
        } else {
            console.log(` ${array[i]} existe déja`);
        }
    }   
        console.log(newArray);
    }
0
dedup(array1);

////////////////////Exercice 3////////////////////

////////////////////Exercice 4////////////////////

const asyncJob = (n) => Math.random() > 0.5 ? Promise.resolve(n+1) :
Promise.reject(Error('boom'));

// asyncJob(0)
//  .then(i => asyncJob(i))
//  .then(i => Promise.all([
//  asyncJob(i),
//  asyncJob(i),
//  asyncJob(i)
//  ]))
//  .then(([x, y, z]) => asyncJob(x + y + z))
//  .catch(err => console.log(`gestion erreur globale: ${err.message}`))

async function job() {
    try {
        const firstResult = await asyncJob(0);
        const secondResult = await asyncJob(firstResult);
        const thirdResult = await Promise.all[
            asyncJob(secondResult),
            asyncJob(secondResult),
            asyncJob(secondResult)
        ];
        const fourthResult = await asyncJob(thirdResult.reduce((total,value) => total + value ));
        return  fourthResult;
    } catch (err){
        throw new Error(`gestion erreur global: ${err.message}`);
    }
}

job()
    .then(result => console.log(`Final Result ${result}`))
    .catch(err => console.error(err));

    ////////////////////Exercice 5////////////////////

    const firstPromise = new Promise((resolve,reject) => {setTimeout(resolve,10000, "first");});
    const secondPromise = new Promise((resolve,reject) => {setTimeout(resolve,5000, "second");});
    const thirdPromise = new Promise ((resolve,reject) => {setTimeout(resolve,1000, "third");});

    Promise.race([firstPromise,secondPromise,thirdPromise])
        .then((value) =>
        console.log(`This is the result ${value}`));

    ////////////////////Exercice 6////////////////////

    const fourthPromise = new Promise ((resolve,reject) => {setTimeout(resolve,1000,45);});
    const fifthPromise = new Promise ((resolve,reject) => {setTimeout(resolve,5000,"45");});
    const sixthPromise = new Promise ((resolve,reject) => {setTimeout(resolve,2500,"Quarenta y cinco");});

    Promise.all([fourthPromise,fifthPromise,sixthPromise])
        .then((values) => {console.log(values)});