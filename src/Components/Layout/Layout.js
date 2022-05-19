//External lib
import * as React from 'react';
import PropTypes from "prop-types";

//Material UI
import Box from '@mui/material/Box';

// Components
import AppBar from './AppBar'
import Menu from './Menu'


const Layout = ({ children, title }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            minHeight: '100vh',
            justifyContent: 'flex-start'
        }}>
            <Menu />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <AppBar title={title} />
                <Box sx={{
                    padding: 1,
                }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    dashboard: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    title: PropTypes.string.isRequired,
};

export default Layout;