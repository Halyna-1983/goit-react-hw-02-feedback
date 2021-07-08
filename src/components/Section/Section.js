import React from 'react'; 
import PropTypes from 'prop-types';
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
 
Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
}
export default Section;