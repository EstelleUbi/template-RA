import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';

import {
    DashboardMenuItem,
    MenuItemLink,
    useSidebarState,
} from 'react-admin';

import SubMenu from './SubMenu';

const Menu = ({ dense = false }) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
    });
    const [open] = useSidebarState();

    const handleToggle = (menu) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 250 : 50,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                backgroundColor: '#fff',
            }}
        >
            <DashboardMenuItem />
            <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                name="menu 1"
                dense={dense}
            >
                <MenuItemLink
                    to="/"
                    state={{ _scrollToTop: true }}
                    primaryText={'item1'}
                    dense={dense}
                />
                <MenuItemLink
                    to="/"
                    state={{ _scrollToTop: true }}
                    primaryText={'item2'}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="menu2"
                dense={dense}
            >
                <MenuItemLink
                    to="/"
                    state={{ _scrollToTop: true }}
                    primaryText={'item1'}
                    dense={dense}
                />
                <MenuItemLink
                    to="/categories"
                    state={{ _scrollToTop: true }}
                    primaryText={'item2'}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to=""
                state={{ _scrollToTop: true }}
                primaryText={'Lien'}
                dense={dense}
            />
        </Box>
    );
};

export default Menu;
