import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Link, NavLink } from 'react-router-dom';

const pages = ['Blogs', 'Users'];
const settings = ['Profile'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#181818", color: '##720e9e' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HistoryEduIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: "50px",color:"#b3b3b3" }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: "#00BFFF",
                            textDecoration: 'none',
                        }}
                    >
                        BLOGGERS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}                            
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                                fontFamily: 'monospace',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'block' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} component={NavLink} to={`/${page}`} 
                                style={({isActive})=>({
                                    color:isActive?'#00BFFF':''
                                })} 
                                onClick={handleCloseNavMenu}
                                >
                                    <Typography sx={{fontSize:"20px",fontWeight:600}} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <HistoryEduIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: "50px" }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: "#00BFFF",
                            textDecoration: 'none',
                        }}
                        
                    >
                        BLOGGERS
                    </Typography>
                    <Box sx={{  display: { xs: 'none', md: 'flex' },marginX:"auto"}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                component={NavLink}
                                to={`/${page}`}
                                style={({isActive})=>({
                                    color:isActive?'#00BFFF':''
                                })} 
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block',fontWeight:600}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                    <MenuItem key={setting} component={NavLink} to={`/${setting}`} onClick={handleCloseUserMenu}>
                                        <Typography sx={{fontSize:"18px",fontWeight:600}} textAlign="center">{setting}</Typography>
                                    </MenuItem>
                            ))}
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography sx={{fontSize:"18px",fontWeight:600}} textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;