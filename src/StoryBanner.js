import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

const StoryBanner = () => {
    return (
        <AppBar>
            <Typography variant="h4" style={{padding: '1%'}}>
                The Family Jewels
            </Typography>
        </AppBar>
    );
};

export default StoryBanner;