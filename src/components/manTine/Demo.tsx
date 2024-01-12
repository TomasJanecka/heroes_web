import {Button, ButtonProps, createPolymorphicComponent, Slider} from '@mantine/core';
import styled from '@emotion/styled';

export const Demo = () => {
    return <StyledSlider defaultValue={40}/>;
    // return <StyledButton/>;
}

// const _StyledButton = styled(Button)`
//     width: 5rem;
//     border-width: 2px;
//     color: ${({theme}) => (false ? theme.white : theme.black)};
//     background-color: red;
// `;

// const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);

const StyledSlider = styled(Slider)`
    width: 50rem;
    height: 3rem;
    background-color: #61dafb;

    & .mantine-Slider-bar {
        background-color: pink;
    }

    & .mantine-Slider-thumb {
        border-color: pink;
        background-color: white;
        width: 24px;
        height: 24px;
    }

    & .mantine-Slider-label {
        color: red;
    }
`;