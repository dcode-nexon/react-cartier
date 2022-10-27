import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from 'react';

const SectionWrap = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

function Section() {
  const [Items, setItems] = useState([]);

  useEffect(async () => {
    const result = await axios.get(process.env.PUBLIC_URL + '/DB/data.json');
    console.log(result.data.data);
    setItems(result.data.data);
  }, [])

  return (
    <SectionWrap>
      {Items.map((data, idx) => (
        <article key={idx}></article>
      ))}
    </SectionWrap>
  );
}

export default Section;
