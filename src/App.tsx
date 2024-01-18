import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/heroes");
  }, []);

  return (
    <StyledApp>
      <Outlet />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`;
