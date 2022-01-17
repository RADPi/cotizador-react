import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContenedorHeader = styled.header`
	background-color: #26c6da;
	padding: 10px;
	font-weight: bold;
	color: #fffff;
`

const TextoHeader = styled.h1`
	font-size: 2rem;
	margin: 0;
	font-family: 'Slabo 27px', sans-serif;
	text-align: center;
`

export default function Header({ titulo }) {
	return (
		<ContenedorHeader>
			<TextoHeader>{titulo}</TextoHeader>
		</ContenedorHeader>
	)
}

Header.propTypes = {
	titulo: PropTypes.string.isRequired,
}