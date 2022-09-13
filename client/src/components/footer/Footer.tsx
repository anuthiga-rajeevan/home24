import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Container, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Footer = () => {
    return (
            <Container maxWidth='xl'>
                <Toolbar
                    disableGutters
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography
                        variant='body1'
                        noWrap
                        sx={{


                            lineHeight: '1rem',
                            fontWeight: 200,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
                    </Typography>
                </Toolbar></Container>
   
    );
};
export default Footer;