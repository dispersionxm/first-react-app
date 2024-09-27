// import { useState } from 'react'
import ReactLogo from './assets/react.svg?react'
import './App.css'

// declarative
const thisYear = new Date().getFullYear()

// imperative
export const App = () => (
	<div>
		<h1>Hello World!</h1>
		<ReactLogo />
		<h2>{thisYear}</h2>
	</div>
)

