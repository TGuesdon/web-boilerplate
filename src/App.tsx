import styled from "styled-components"

function App() {

  return (
    <>
      <Wrapper>Hello World</Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default App
