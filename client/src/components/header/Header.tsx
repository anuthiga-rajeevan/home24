import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Container, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <AppBar position='static' role='Header'>
            <Container maxWidth='xl'>
                <Toolbar
                    disableGutters
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Typography
                            variant='h3'
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                lineHeight: '5rem',
                                fontWeight: 200,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            Home24
                        </Typography>
                    </Link>

                    <Typography
                        variant='h3'
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 200,
                            color: 'inherit',
                            textDecoration: 'none',
                            lineHeight: '5rem',
                        }}
                    >
                        Home24
                    </Typography>

                    <Box sx={{ flexGrow: 0, color: 'white' }}>
                        <TextField
                            id="search"
                            name="search"
                            placeholder='search'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            type="text"
                            sx={{ input: { color: 'white' } }}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;