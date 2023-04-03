import { RecoilRoot, useRecoilState } from "recoil";
import { counter2 } from "./atoms/atom2";

const Counter = () => {
  const [count1, setState] = useRecoilState(counter2);
  const bgColor = Math.floor(Math.random() * 16777215).toString(16);

  const increment = () => setState((s) => s + 1);

  return (
    <div
      className="col-6"
      style={{
        backgroundColor: `#${bgColor}`
      }}
    >
      <span
        style={{
          fontSize: "30px"
        }}
      >
        Count1: {count1}
      </span>
      <br />
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default function App2() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}
