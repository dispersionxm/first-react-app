// import { useState } from 'react'
import ReactLogo from './assets/react.svg'
import './App.css'
import {createElement} from "react";

const thisYear = new Date().getFullYear()

export const App = () => {
	return createElement(
		'div',
		null,
		createElement(
			'h1',
			null,
			null,
			'Hello World'
		),
		createElement(
			'img',
			{src: ReactLogo},
			null
		),
		createElement(
			'h2',
			null,
			thisYear,
			null
		)
	)
}

