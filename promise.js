
//Student Promise
const studentPromise = new Promise(function (resolve, reject) {
  const myProfile = {
   name: 'John Doe',
    age: 25,
    grade: 85
  }
  setTimeout(function() {
  resolve(myProfile);
  }, 1000)
})

const tutionFeePromise = new Promise(function (resolve, reject) {
  const tutionFee = 10000;
  setTimeout(function() {
    resolve(tutionFee);
  }, 2000)
})
//studentPromise.then(data => {
 // console.log(data);

  // tutionFeePromise
     
  
  //.then(fee => {
    //console.log(`Tution fee: ${fee}`);
   // })
  //.catch(err => console.log(err)); 
//})
  //.catch(err => {
   // console.log({ err: err });
//})

async function student() {
  try {
    const data = await studentPromise;
    console.log(data);
  }
  catch (err) {
    console.log(err);
  }
  try {
    const fee = await tutionFeePromise;
    console.log(`Tution fee: ${fee}tk`);
  }
  catch (error) {
    console.log(err);

  }
}
student();

