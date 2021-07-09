import DemoChild from "./demoChild";

function DemoParent(params) {

  function informParentToSayHi(e) {
    e.preventDefault();
    alert("Parent Says Hi");
  }

  return (
    <div>
      <p>This is parent component</p>
      <DemoChild name="demo child" informParentToSayHi={informParentToSayHi}></DemoChild>
    </div>
  );
}

export default DemoParent;
