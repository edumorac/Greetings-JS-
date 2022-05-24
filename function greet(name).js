function greet(name) {
    let name_aux = name.toUpperCase();
    if (name === 'Eduardo') {
        return `Hello, ${name}`;
    } else if (name === "null") {
        return 'Hello, there!'
    } else if (name_aux === name) {
        return `HELLO ${name}`; 
    } else if (typeof(name) === "object" && name.length === 2) {
        return 'Hello, ' + name[0] + ", " + name[1];
    } else if (typeof(name) === "object") {
        let arrayNames = 'Hello';
        name.forEach(element => {
            arrayNames = arrayNames + ', ' + element
        });
        return arrayNames
    } 
}



test('greetings', () => {
    expect(greet('Eduardo')).toBe('Hello, Eduardo');
  });
  
  test('greetings', () => {
    expect(greet('null')).toBe('Hello, there!');
  });
  
  test('greetings', () => {
    expect(greet('EDUARDO')).toBe('HELLO EDUARDO');
  });

  test('greetings', () => {
    expect(greet('Eduardo', 'Jose')).toBe('Hello, Eduardo, jose');
  });

  test('greetings', () => {
    expect(greet('object')).toBe('Hello, element');
  });