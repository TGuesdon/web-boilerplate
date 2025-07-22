import styled from "styled-components";

function App() {
    return (
        <Wrapper>
            <Title>Hello World</Title>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Title = styled.h1`
    color: var(--color-primary);
    font-size: var(--size-xl);
`;
