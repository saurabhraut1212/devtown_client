import React from 'react';
import { Button, Box, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const UserDashboard = () => {
    const navigate = useNavigate();

    // const handleNavigation = (path) => {
    //     navigate(path);
    // };


    const handleLogout = () => {
        localStorage.removeItem('userToken');
        navigate('/user/userLogin');
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 10, display: 'flex' }}>

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    //src={book}
                    alt="Reader"
                    style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                />
            </Box>


            <Box
                sx={{
                    flex: 1,
                    ml: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    User Dashboard
                </Typography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                        // onClick={() => handleNavigation('/reader/topRatedBooks')}
                        >
                            Top rated books
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                        // onClick={() => handleNavigation('/reader/booksByAuthor')}
                        >
                            Books by author
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            size="large"
                            fullWidth
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default UserDashboard;