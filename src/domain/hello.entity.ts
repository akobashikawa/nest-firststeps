export class HelloEntity {
  helloworld() {
    return 'Hello World!';
  }

  hello(name = 'World') {
    return `Hello ${name}!`;
  }
}
