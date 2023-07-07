# Nest First Steps

- Aprendiendo nestjs

## Hello World

- Saludar con Hello "World"
- `npm test`
  - Ejecuta los tests
  - `src\app.controller.spec.ts`
- Organización
  - AppModule
    - AppController
      - getHello -> AppService.getHello
    - AppService
      - getHello -> HelloEntity.helloworld
  - domain
    - HelloEntity
      - helloworld
- `npm run start:dev`
  - http://localhost:3000/
  - http://localhost:3000/api

## Hello

- Saludar con "Hello {name}!"
- Organización
  - AppModule
    - AppController
      - helloworld -> AppService.helloworld
      - helloQuery -> AppService.hello
      - helloParam -> AppService.hello
      - helloBody -> AppService.hello
    - AppService
      - helloworld -> HelloEntity.helloworld
      - hello -> HelloEntity.hello
    - HelloDto
  - domain
    - HelloEntity
      - helloworld
- `npm run start:dev`
  - http://localhost:3000/
  - http://localhost:3000/api
  - http://localhost:3000/hello
  - http://localhost:3000/hello/Antonio
  - http://localhost:3000/hello?name=Antonio
  - POST http://localhost:3000/hello
    - body: { "name": "Antonio" }

## People

- Guardar nombres de personas
- `nest g resource`
- Organización
  - AppModule
    - PeopleModule
      - PeopleController
      - PeopleService
    - AppController
    - AppService