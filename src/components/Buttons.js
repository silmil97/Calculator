import './Buttons.css'

export function Buttons(props) {
    const handleClick = props.onclick;
    const input = props.input;

    return (
        <div className="Buttons">
            <button onClick={handleClick} id='AC'>AC</button>
            <button onClick={handleClick} id='DEL'>DEL</button>
            <button onClick={handleClick} id='÷'>÷</button>
            <button onClick={handleClick} id='7'>7</button>
            <button onClick={handleClick} id='8'>8</button>
            <button onClick={handleClick} id='9'>9</button>
            <button onClick={handleClick} id='x'>x</button>
            <button onClick={handleClick} id='4'>4</button>
            <button onClick={handleClick} id='5'>5</button>
            <button onClick={handleClick} id='6'>6</button>
            <button onClick={handleClick} id='-'>-</button>
            <button onClick={handleClick} id='1'>1</button>
            <button onClick={handleClick} id='2'>2</button>
            <button onClick={handleClick} id='3'>3</button>
            <button onClick={handleClick} id='+'>+</button>
            <button onClick={handleClick} id='.'>.</button>
            <button onClick={handleClick} id='0'>0</button>
            <button onClick={handleClick} id='equals'>=</button>
        </div>
    );
}