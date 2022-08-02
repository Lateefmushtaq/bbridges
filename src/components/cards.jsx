import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './components.css';


import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: "none",
    }));
    return (
        <>
            <div className='Head'><h1>  Locations</h1>

            </div>

            <Box sx={{ flexGrow: 1, mt: 20 }} elevation={0}>
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    color="#0A245D"

                    background-color={'#F8FBF8'
                    }>
                    <Grid item xs={2} md={3}>
                        <Item><Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>

                                <CardContent >

                                    <h6>Los Angeles County</h6>


                                    <ul>
                                        <li>Pomona</li>
                                        <li>Covina</li>
                                        <li>West Covina</li>
                                        <li>Azusa</li>
                                    </ul>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant='outlined' color="primary">
                                    See all
                                </Button>
                            </CardActions>
                        </Card></Item>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <Item><Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>

                                <CardContent>

                                    <h6>Orange County</h6>


                                    <ul>
                                        <li>Pomona</li>
                                        <li>Covina</li>
                                        <li>West Covina</li>
                                        <li>Azusa</li>
                                    </ul>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant='outlined' color="primary">
                                    See all
                                </Button>
                            </CardActions>
                        </Card></Item>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <Item><Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>

                                <CardContent>

                                    <h6>San Bernardino County</h6>


                                    <ul>
                                        <li>Pomona</li>
                                        <li>Covina</li>
                                        <li>West Covina</li>
                                        <li>Azusa</li>
                                    </ul>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant='outlined' color="primary">
                                    See all
                                </Button>
                            </CardActions>
                        </Card></Item>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <Item><Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>

                                <CardContent>

                                    <h6>Riverside County</h6>


                                    <ul>
                                        <li>Pomona</li>
                                        <li>Covina</li>
                                        <li>West Covina</li>
                                        <li>Azusa</li>
                                    </ul>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant='outlined' color="primary">
                                    See all
                                </Button>
                            </CardActions>
                        </Card></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
