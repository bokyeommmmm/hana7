function f1(user) {
    console.log(user.id, user.name);
  }
  
  function f2({ id, name }) {
    console.log(id, name);
  }
  
  const hong = { id: 1, name: 'Hong' };
  const lee = { id: 2, name: 'Lee' };
  
  f1(hong);           // 1 Hong
  f2(lee);            // 2 Lee
  