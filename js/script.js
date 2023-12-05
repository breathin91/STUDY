import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {useContainerQuery} from 'react-container-query';

const query = {
	'width-between-400-and-599': {
		minWidth: 400,
		maxWidth: 599,
	},
	'width-larger-than-600': {
		minWidth: 600,
	},
};

const MyComponent = () => {
	const [params, containerRef] = useContainerQuery(query);
	return <div ref={containerRef} className={classnames(params)}>the box</div>;
};

const MyCustomWrapper = React.forwardRef((props, ref) => {
	// MyCustomWrapper really renders a div which wraps the childred.
	// Setting the ref on it allows container query to measure its size.
	return <div ref={ref}>{props.children}</div>
});

function MyComponent() {
	return (
		<ContainerQuery query={query}>
			{(params) => (
				<div className={className(params)}>the box</div>
			)}
		</ContainerQuery>
	);
};

class Container extends Component {
	render() {
		/**
		 * `this.props.containerQuery` will look like
		 * {
		 * 	'width-between-400-and-599': true,
		 *  'width-larger-than-600': false
		 * }
		*/
		return <div className={classnames(this.props.containerQuery)}>the box</div>;
	}
}

const App = applyContainerQuery(Container, query)

/**
 * This will generate following HTML: 
 * <div class="width-between-400-and-599"</div>
 */

render(<App/>, document.getElementById('app'));