import DemoChild from "./demoChild";

function DemoParent(params) {
  return (
    <div>
      <p>This is parent component</p>
      <DemoChild name="demo child"></DemoChild>
    </div>
  );
}

export default DemoParent;
