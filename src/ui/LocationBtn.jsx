import styled from "styled-components";
import Button from "./Button";
import { TfiLocationPin } from "react-icons/tfi";

const Location = styled.div`
  width: ${(props) => props.width || "58.33333333%"};
  display: ${(props) => props.display || "none"};

  @media (min-width: 768px) {
    width: 50%;
    margin:0 auto;
  }
  @media (min-width: 992px) {
    width: 16.66666667%;
    display: block;
  }
`;

function LocationBtn({ display, width }) {
  return (
    <Location width={width} display={display}>
      <Button width={width} variation="pale">
        <TfiLocationPin color="#5C6C75" />
        <span style={{ marginLeft: "5px" }}>location</span>
      </Button>
    </Location>
  );
}

export default LocationBtn;
