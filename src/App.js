import styled from '@emotion/styled'
import { useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Resultado from './components/Resultado'
import Resumen from './components/Resumen'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
	max-width: 600px;
	margin: auto;
`

const ContenedorFormulario = styled.div`
	background-color: #fff;
	padding: 3rem;
`

function App() {
	const [resumen, setResumen] = useState({
		cotizacion: 0,
		datos: {
			marca: '',
			year: '',
			plan: '',
		},
	})

	const [cargando, setCargando] = useState(false)

	const { cotizacion, datos } = resumen

	return (
		<Contenedor>
			<Header titulo="Cotizador de seguros" />
			<ContenedorFormulario>
				<Formulario setResumen={setResumen} setCargando={setCargando} />
				{cargando && <Spinner />}
				<Resumen datos={datos} />
				{!cargando && <Resultado cotizacion={cotizacion} />}
			</ContenedorFormulario>
		</Contenedor>
	)
}

export default App
