# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

##

At First I made The basic form structure. Then tried to add design with TailwindCSS.
Then we created form handeler where we write onSubmmit function on form.
Then we did 2 way binding.
Then do mapping with those input.
Now, as the map is function and it is passing object, we created map function to map those elements wiht idx(basically ID) and then return the elements by elem.title and elem.details.
Create button for Delete the return elements(notes).
We can use again copyTask for making deletion function. And, we will delete by idx so we throw idx to the deleteNote function. Then we use .splice and the index number for deletion of function. Then we set the copyTask again for forward action.
