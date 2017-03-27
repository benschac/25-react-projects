import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';




class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
    }

    componentWillMount() {
    fetch(`https://statsapi.web.nhl.com/api/v1/teams?site=en_nhl`)
        .then(data => data.json())
        .then(json => json.teams)
        .then(data => {
            this.setState({
                teams: data
            })
        })
        .catch(err => console.error(err));    

    }

    render() {
        return (
        <Route path="/" component={Layout}>
            <IndexRoute teams={this.state.teams} component={IndexPage} />
            <Route path="team/:id" teams={this.state.teams} component={AthletePage} />
            <Route path="*" component={NotFoundPage} />
        </Route>
        );
    }
}

export default Routes;





