export class Hello {
  helloworld() {
    return 'Hello World!';
  }

  hello(name = 'World') {
    return `Hello ${name}!`;
  }
}
