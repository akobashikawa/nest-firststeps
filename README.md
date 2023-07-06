# Nest First Steps

- Aprendiendo nestjs

## Hello World

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