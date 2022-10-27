import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: absolute;
  left: 3vw;
  top: 40vh;

  h1 {
    width: 300px;
    text-align: left

    img {
      width: 200px;
    }
    span {
      font: bold 12px/1 'arial';
      color: #444;
      letter-spacing: 5px;
      display: inline-block;      
    }
  }

  p {
    font: bold 30px/1 'Raleway';
    color: 3555;
    margin-top: 30px;

    span {
      color: #999;
    }
  }
`

function Header() {
  return (
    <HeaderWrapper>
      <h1>
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" /><br />
        <span>Exceptional Creation</span>
      </h1>

      <p>
        French Jewellry & <span>Watch Maker</span>
      </p>
    </HeaderWrapper>
  );
}

export default Header;



