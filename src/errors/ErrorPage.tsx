import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export const ErrorPage =() => {
    const error = useRouteError() as Error
    console.error(error);

    return (
        <StyledErrorPage id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.message || error.message}</i>
            </p>
        </StyledErrorPage>
    );
}

const StyledErrorPage = styled.div`
    text-align: center;
`