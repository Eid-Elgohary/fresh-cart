import Button from "./Button";
import StyledLink from "./Link";

function EmptyStateMessage({ children }) {
  return (
    <div>
      <h1 style={{ marginBottom: "15px" }}>{children}</h1>
      <Button>
        <StyledLink color="white" to="/home">
          go shopping ➡
        </StyledLink>
      </Button>
    </div>
  );
}

export default EmptyStateMessage;
