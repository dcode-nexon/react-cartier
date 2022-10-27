//npm i styled-components

import styled from 'styled-components';

const Wrapper = styled.article`
	position: fixed;
	width: 100%;
	height: 100%;
	min-width: 1024px;
	min-height: 768px;
	background: url(${(props) => props.bg}) no-repeat center/cover;
`;

function App() {
	return (
		<>
			<Wrapper bg={process.env.PUBLIC_URL + '/img/bg.jpg'}></Wrapper>
		</>
	);
}

export default App;
