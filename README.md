# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Conventional Commits

| Tipo      | Uso recomendado |
|-----------|-----------------|
| feat      | Agregar una nueva funcionalidad |
| fix       | Corrección de errores o bugs |
| docs      | Cambios únicamente en documentación |
| style     | Cambios de formato sin afectar la lógica (espacios, comas, indentación) |
| refactor  | Reestructurar código sin cambiar el comportamiento |
| perf      | Mejoras de rendimiento |
| test      | Agregar o modificar pruebas |
| build     | Cambios en dependencias, compilación o herramientas como webpack, npm, vite |

### feat
feat(auth): agrega validación de token JWT en rutas privadas

### fix
fix(user-service): corrige error al obtener los datos del usuario desde la API

### docs
docs(readme): actualiza sección de instalación del proyecto

### style
style(button): corrige indentación y aplica formateo automático

### refactor
refactor(cart): separa funciones en módulos independientes

### perf
perf(list): optimiza el renderizado reduciendo operaciones en el DOM

### test
test(api): añade pruebas unitarias para POST /login

### build
build(deps): actualiza axios a la versión 1.6.0
