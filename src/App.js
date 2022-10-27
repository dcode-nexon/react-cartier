import styled from 'styled-components';
import Header from './components/Header';
import Sns from './components/Sns';
import GlobalStyle from './GlobalStyle';

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
			<GlobalStyle />
			<Wrapper bg={process.env.PUBLIC_URL + '/img/bg.jpg'}>
				<Header />
				<Sns />
			</Wrapper>
		</>
	);
}

export default App;
