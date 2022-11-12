

import { createSignal } from 'solid-js';

export function Counter (props) {
    const [ count, setCount ] = createSignal(props.count);
    console.log('qqq', createSignal(props.count));
    return (
        <div>
            冯晓婷{count()}

            <button onclick = { () => setCount(count() + 1) }>+1</button>
        </div>
    )
}




















