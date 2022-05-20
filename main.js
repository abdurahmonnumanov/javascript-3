let steps = prompt('Введите ваше имя', 'name');
let finalSumbol = prompt(`Введите ${steps} ваш год рождения`, 19941);
let oneSumbol = prompt(`Введите ${steps} нынешный год `, 2022);

function one() {
    for (let i=0; i<steps; i++) {
        const row = oneSumbol.repeat(i) + finalSumbol + oneSumbol;
        output(row);
      }
      for (let i=0; i<steps; i++) {
        const two = oneSumbolSymbol.repeat(i) + (oneSumbol - indentSymbol);
        output(two);
      }
      return one;
}

  alert(`Ваше имя ${steps} , ваш год раждения ${finalSumbol},ваш нынешний год ${oneSumbol}`);
  alert(`Ваш возраст ${oneSumbol - finalSumbol
}`)