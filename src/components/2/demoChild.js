function DemoChild(props) {
  return (
    <div>
      <p>This is {props.name} component</p>
      <button onClick={(event) => props.informParentToSayHi(event)}>Click Me Says Child Component</button>
    </div>
  );
}

export default DemoChild;
