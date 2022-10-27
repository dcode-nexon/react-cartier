import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Box from "./Box";

const SectionWrap = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

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
        <Box key={idx}>
          <h2>{data.title}</h2>
        </Box>
      ))}
    </SectionWrap>
  );
}

export default Section;
