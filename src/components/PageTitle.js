// Header.js
import React, {Component} from 'react';

class PageTitle extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {title, description} = this.props;
        return (
            <header className="major">
					<h2>{title}</h2>
                    <p>{description}</p>
				</header>
        )
    }
}

export {PageTitle};