import styled from "styled-components";

const BoxWrap = styled.article`
  position: relative;
  width: 12%;
  height: 100%;
  float: right;
  overflow: hidden;
  transition: width: 1s;
  background: url(${(props) => props.bg}) no-repeat left center;
`

function Box() {
  return (
    <BoxWrap bg={process.env.PUBLIC_URL + '/img/divider.png'}>

    </BoxWrap>
  );
}

export default Box;
