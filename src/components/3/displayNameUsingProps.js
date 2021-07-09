function DisplayProps(props) {
    return (
      <div>
        <h5 style={{ color: "green" }}>Part -3 | Passing data via Props</h5>
        <p>Hello {props.name} {props.lastName}</p>
      </div>
    );
  }
  
  export default DisplayProps;