import React from 'react';
import { Typography, Paper } from '@mui/material';

const Footer = () => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#1976d2' }} square elevation={0}>
            <Typography
                variant='body2'
                noWrap
                sx={{
                    display: 'block',
                    lineHeight: '2rem',
                    fontWeight: 200,
                    color: 'white',
                    textDecoration: 'none',
                    textAlign: 'center'
                }}
            >
                Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
            </Typography>

        </Paper>

    );
};
export default Footer;