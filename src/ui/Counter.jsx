import { ColorRing, Oval } from "react-loader-spinner";
import styled from "styled-components";
import SmallSpinner from "./SmallSpinner";

function Counter({ position, count, setCount, onclick, isUpdating }) {
  function handleCliclk(n) {
    setCount(count + n);
    if (count == 0) return;
    if (onclick) onclick();
  }

  return (
    <StyledCounter position={position}>
      <Button onClick={() => handleCliclk(1)}>+</Button>
      <div style={{ width: "30px", textAlign: "center" }}>
        {isUpdating ? <SmallSpinner /> : count}
      </div>
      <Button disabled={count == 0} onClick={() => handleCliclk(-1)}>
        -
      </Button>
    </StyledCounter>
  );
}

export default Counter;

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: ${(props) => props.position || "flex-end"};
`;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 2px solid;
  border-color: var(--main-color);
  width: 30px;
  margin: 0 5px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: var(--main-color);
    color: white;
  }
`;
<Oval
  visible={true}
  height="30"
  width="30"
  color="#099309"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
/>;
