import * as React from 'react';
import { AppBar, Logout, UserMenu, useTranslate } from 'react-admin';
import { Link } from 'react-router-dom';
import {
    Box,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

// import Logo from './../../Assets/logo.svg';

const ConfigurationMenu = React.forwardRef((props, ref) => {
    const translate = useTranslate();
    return (
        <MenuItem
            component={Link}
            // @ts-ignore
            ref={ref}
            {...props}
            to="/configuration"
        >
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText>{translate('pos.configuration')}</ListItemText>
        </MenuItem>
    );
});
const CustomUserMenu = () => (
    <UserMenu>
        <ConfigurationMenu />
        <Logout />
    </UserMenu>
);

const UbiAppBar = (props) => {
    const isLargeEnough = useMediaQuery(theme =>
            theme.breakpoints.up('sm')
    );
    return (
        <AppBar
            {...props}
            elevation={1}
            userMenu={<CustomUserMenu />}
            position='relative'
        >
            <Typography
                variant="h6"
                color="inherit"
                sx={{
                    flex: 1,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}
                id="react-admin-title"
            />
            {/*{isLargeEnough && <Logo />}*/}
            {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
        </AppBar>
    );
};

export default UbiAppBar;
