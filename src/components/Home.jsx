import styled from "styled-components";
function Home({props}) {
  const Main = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    ${"" /* background-color:lightgray; */}
    align-items:center;
    height: 90vh;
    justify-content: center;
    gap: 50px;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      white-space: nowrap;
      h1 {
        font-size: 96px;
      }
    }
  `;

  const DiceImage = styled.img`
    width: 500px;
  `;

  const Button = styled.button`
    border-radius: 5px;
    color: white;
    padding: 10px 18px;
    border: none;
    background-color: black;
    min-width: 220px;
    transition: 0.3s background ease-in;

    &:hover {
      background-color: lightgray;
      color: black;
      border: 0px solid black;
      transition: 0.3s background ease-in;
    }
  `;

  return (
    <>
      <Main>
        <div>
          <DiceImage src="./src/media/dice-main.png" alt="dice" />
        </div>
        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={props}>PLAY NOW</Button>
        </div>
      </Main>
    </>
  );
}

export default Home;
