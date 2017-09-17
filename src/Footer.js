import React, { Component } from 'react';
import ContentUndo from 'material-ui/svg-icons/content/undo';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import AVPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AVFastRewind from 'material-ui/svg-icons/av/fast-rewind';
import AVFastForward from 'material-ui/svg-icons/av/fast-forward';

const aVPlayArrow = <AVPlayArrow />;
const aVFastForward = <AVFastForward />;
const aVFastRewind = <AVFastRewind />;

class Footer extends Component {

    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({ selectedIndex: index });

    render() {
        return (
            <div className="footer">
                {/* <div className="timer">08:34 <span>&#9632;</span>  -  <span style={{color:"#999"}}>&#9632;</span> 04:10</div> */}
                <Paper zDepth={10}>
                    <BottomNavigation zDepth={0}>
                        <BottomNavigationItem
                            label=" "
                            icon={aVFastRewind}
                            style={{ color: '#333' }}
                            onClick={() => { }}
                        />
                        <BottomNavigationItem
                            label=" "
                            icon={aVPlayArrow}
                            style={{ color: '#333' }}
                            onClick={() => { }}
                        />
                        <BottomNavigationItem
                            label=" "
                            icon={aVFastForward}
                            style={{ color: '#333' }}
                            onClick={() => { }}
                        />
                    </BottomNavigation>
                </Paper>
            </div>
        )
    }
}

export default Footer;