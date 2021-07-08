import React from 'react'; 
import './Section.css'

const Section = ({ title, children }) => (
	<div className='Section'>
		<h2>{ title }</h2>
		{children}
	</div>
);

// render() {
// 	const {title, children} = this.props;

// 	return (
// 		<Section>
// <h1>{title}</h1>
// ()
// 		</Section>
// 	)
// }
 
export default Section;