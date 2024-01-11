import styled from "styled-components";

export const SidePanel = () => {
  return <StyledSidePanel>SidePanel</StyledSidePanel>;
}

const StyledSidePanel = styled.div`
    display: flex;
    flex-flow: column;
    width: 5rem;
    height: 20rem;
  margin: auto auto auto 1rem;
  
  background-color: bisque;
  border: 1px solid black;
  border-radius: 5px;
`