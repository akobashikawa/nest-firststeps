# nest-helloworld

- Aprendiendo nestjs
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