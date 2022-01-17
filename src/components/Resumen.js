import styled from '@emotion/styled'
import { capitalize } from '../helper'
import PropTypes from 'prop-types'

const Contenedor = styled.div`
	padding: 1rem;
	text-align: center;
	background-color: #00838f;
	color: #fff;
	margin-top: 1rem;
`

function Resumen({ datos }) {
	const { marca, year, plan } = datos

	if ([marca, year, plan].includes('')) return null
	return (
		<Contenedor>
			<h2>Resumen de cotizacion</h2>
			<ul>
				<li>Marca: {capitalize(marca)}</li>
				<li>Plan: {capitalize(plan)}</li>
				<li>Año: {year}</li>
			</ul>
		</Contenedor>
	)
}

Resumen.propTypes = {
	datos: PropTypes.object.isRequired,
}

export default Resumen
