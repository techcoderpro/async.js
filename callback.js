
//call back

// trainer List

let trainers=['Rijwan Hossain']

function addTrainer(name, call_back_function) {
  setTimeout(() => {
    trainers.push(name);
    call_back_function();
  }, 2000)
}

//print trainer list

function printTrainerList() {
  setTimeout(() => {
    console.log(trainers);
  }, 3000)
}

//sorting trainerlist & print

function sortAndPrintTrainers() {
  setTimeout(() => {
    trainers.sort();
    console.log(trainers);
  }, 1500)
}

addTrainer('John',sortAndPrintTrainers);

