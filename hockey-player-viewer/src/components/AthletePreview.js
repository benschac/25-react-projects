import React, { Component } from 'react';
import { Link } from 'react-router';

class AthletePreview extends Component {
    
    render() {
        const { id, image, name, medals } = this.props;
        return (
            <Link to={`/athlete/${id}`}>
                <div className="athlete-preview">
                    <img src={`img/${ image }`}/>
                    <h2 className={name}>{ name }</h2>
                    <span className="medals-count"><img src="/img/medal.png"/>{medals.length}</span>
                </div>
            </Link>        
        );
    }
}

export default AthletePreview;