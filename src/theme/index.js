import { createTheme }  from '@material-ui/core/styles'
const theme = createTheme({
  palette: {
    primary: { 
			main: "#1E807D",						
		 },
		 secondary: {
			 main: "#FF6DB4",			 			 
		 },
		 common: {
			 black: '#2D2D2D', 
			 white: "#ffffff",
			 lightblue: '#00C9C6',
			 lightbrown: '#F3EADA',
			 lightgrey: '#EAF0F3'
		 }
	},
	typography: {
		fontFamily: [
			'Lato',
			'Arial',
			'sans-serif'
		],
		htmlFontSize: 16,
		subheading: {
			color: "#ABB0CE"
		}
	}
})
export default theme