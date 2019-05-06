import React, {Component} from 'react';
import Aux from '../Aux/Aux';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar 
                        isAuthenticated={this.props.isAuthenticated} 
                        drawerToggleClicked={this.sideDrawerToggleHandler}
                        onLogout={this.props.onLogout} />
                <SideDrawer 
                        isAuthenticated={this.props.isAuthenticated} 
                        open={this.state.showSideDrawer} 
                        onLogout={this.props.onLogout}
                        clicked={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout; 