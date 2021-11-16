# virtual-spreadsheet

> A lightweight template for building NPM React library modules


# Export components, data, hooks, or functions from index.js
```jsx
/*
 *  Export components
 */
export {ComponentA} from "./components/ComponentA";
export {ComponentB} from './components/ComponentB'


/*
 *  Export Typescript data structures
 */
export * from './data/InterfaceA'
export * from './data/InterfaceB'


/*
 *  Export React hooks
 */
export {useHover} from './hooks/useHover'
```



# Publish library to NPM
```bash
npm publish
```



# Install library in another packager

```bash
npm install --save package-name
```



# Using your library from other projects


```jsx
import './App.css';
import React from "react";
import {ComponentA, useHover} from 'react-library-module-template'


export default function App() {
    let [hoverRef, hovered] = useHover()
    const hoveredContentStyle = { color: hovered ? 'red' : 'black' }
    return (
        <div className='container' >
            <div className='content' ref = {hoverRef} style = {hoveredContentStyle}>
                <ComponentA A={'hi mom'}/>
            </div>
        </div>
    );
}

```



# License

MIT © [FullstackSoftwareInnovations](https://github.com/FullstackSoftwareInnovations)
