import {Stack, Button, Center, AspectRatio, createPolymorphicComponent, ButtonProps, StackProps} from '@mantine/core';
import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const LandingPage: React.FC = () => {
    return (
        <StyledLandingPage $imagePath={require("../assets/images/landingPage.jpg")}>
        <Center h={'100%'} >
            <Stack
                justify="center"
                align="center"
                styles={{root: {backgroundColor: 'inherit'}}}
                gap={'1.5rem'}
            >
                <Link to={`/rules`}>
                    <StyledButton variant="default">Rules</StyledButton>
                </Link>
                <Link to={`/heroes`}>
                    <StyledButton variant="default">Heroes</StyledButton>
                </Link>
                <Link to={`/rules`}>
                    <StyledButton variant="default">About</StyledButton>
                </Link>
                <Link to={`/rules`}>
                    <StyledButton variant="default">Exit</StyledButton>
                </Link>
            </Stack>
        </Center>
        </StyledLandingPage>
    );
}

const StyledLandingPage = styled.div<{$imagePath: string}>`
    width: 100%;
    height: 100%;
    background-position: center;
    background-image: url(${props => props.$imagePath});
    background-size: cover;
`

const _StyledButton = styled(Button)`
    width: fit-content;
    height: fit-content;
    padding: 5px;
    border-width: 2px;
    color: ${({theme}) => (theme.colorScheme === 'dark' ? theme.white : theme.black)};
    //margin-bottom: 5rem;
    
    font-size: 2.5rem;
    text-align: center;
    
    &:hover {
        background-color: lightgreen;
    }
`;

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);
