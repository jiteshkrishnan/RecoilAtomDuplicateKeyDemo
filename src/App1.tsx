import { RecoilRoot, useRecoilState } from "recoil";
import { counter1 } from "./atoms/atom1";

const Counter = () => {
  const [count1, setState] = useRecoilState(counter1);
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

export default function App1() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}
