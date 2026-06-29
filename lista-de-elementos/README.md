
## Informe
Código de respuesta al primer reto de programación.
He instalado Node.js y Angular CLI globalmente. He creado un nuevo proyecto de Angular con el comando ng new lista-de-elementos.

He navegado hacia el directorio del proyecto (cd lista-de-elementos) y abierto el proyecto en un editor de código. He utilizado el comando ng generate component lista-elementos para generar un nuevo componente que gestiona la visualización y adición de elementos. En el archivo lista-elementos.component.ts, he definido un arreglo para almacenar los elementos y una función para agregar nuevos elementos al arreglo. He modificado el archivo lista-elementos.component.html para incluir un formulario que permite a los usuarios ingresar un nuevo elemento y un botón para añadir el elemento a la lista. He utilizado *ngFor para mostrar cada elemento del arreglo en la vista del componente.

He añadido estilos básicos utilizando CSS en el archivo lista-elementos.component.css para mejorar la interfaz de usuario.

He ejecutado ng serve y visita http://localhost:4200 en mi navegador para asegurarme de que puedo agregar elementos a la lista y que se muestren correctamente. 


En cuanto a la documentación del curso: es difícil generar el código sin acudir a los tutoriales en Angular y Youtube.



### ListaDeElementos

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
