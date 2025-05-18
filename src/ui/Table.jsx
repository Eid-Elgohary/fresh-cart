import { styled } from "styled-components";

const StyledTable = styled.table`
  border-color: var(--border);
  margin-bottom: 1rem;
  vertical-align: top;
  width: 100%;
  white-space: nowrap;
  font-size: 14px;
  border-collapse: collapse;
`;
export const Thead = styled.thead`
  background: #f0f3f2;
  border-bottom: 1px solid var(--border);
`;
export const Th = styled.th`
  padding: 0.75rem 1.5rem;
  font-weight: 600;
`;
export const Td = styled.td`
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  vertical-align: middle;
  color: var(--text-light);
  font-size: 14px;
  font-weight: 500;
  height: 90px;
  text-align: center;
`;
export const Tr = styled.tr`
  border-bottom: 1px solid var(--border);
`;
export default StyledTable;
