function CounterWithVariable(params) {
    let age = 10;
    function incrementAge() {
        age = age + 1;
        console.log('Age is:'+age);
    }

    return(
        <div>
            <p>Limitation of variable.</p>
            <p>The age is {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    )
}

export default CounterWithVariable;