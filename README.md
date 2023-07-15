## This is a React app built with Vite

To start with
``` npm create vite@latest ```
Select React framework, select JavaScript + SWC variant
Next to install dependencies, run ```npm i```
Run ```npm dev start``` to start
<br>
You can public files and unused css files. Keep main.jsx and app.jsx.

## Notes

- randomUUID(): The randomUUID() method of the Crypto interface is used to generate a v4 UUID using a cryptographically secure random number generator. <br>
Syntax: crypto.randomUUID()

- Short Circuiting &&: <br>
Instead of writing
```
something exists/is true ? do something : do something else
```
You can use ```something exists && do something```

- Prop Types: <br>
```
import PropTypes from 'prop-types';
Component.propTypes = {
        yourPropName : PropTypes.yourPropType.isRequired
}
```
i.e.
```
NewTodoForm.propTypes = {
        addTodo : PropTypes.function.isRequired
}
```

- The hooks in React should be called at the top of your functions. In other words, you can not render hooks conditionally

- Layout breakdown: Hooks, helper functions, and return your jsx files