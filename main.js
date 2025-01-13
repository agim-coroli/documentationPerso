function add(s) {
    let summand1 = parseInt(s, 10);
    let indexPlus = s.indexOf('+');
    let sAfterPlus = s.substr(indexPlus + 1);
    let summand2 = parseInt(sAfterPlus, 10);
    return summand1 + summand2;
  }

  console.log(add("10"));
  