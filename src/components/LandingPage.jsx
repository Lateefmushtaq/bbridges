import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import main from "./images/main.svg";
import img2 from "./images/img2.svg";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#F8FBF8' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "none",


}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }} elevation={0} >
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                background-color={'#F8FBF8'}>
                <Grid item xs={7}>
                    <Item sx={{
                        ml: 1, color: '#0A245D', display: 'block'
                    }}><h1>Become a Foster Parent Today With Building Bridges FFA!</h1></Item>
                    <Item><p>Our social workers will guide you through the whole process of becoming a foster parent</p> </Item>
                    <Stack spacing={2} direction="row"
                        sx={{

                            my: 1,
                            ml: 10
                        }}>

                        <Button variant="contained" color='success'>Click here to begin</Button>
                        <Button variant="outlined" color='success'>Call Us  909-233-7265 </Button>
                    </Stack>


                </Grid>

                <Grid item xs={5}>
                    <Item><Box
                        component="img"
                        sx={{
                            height: 350,
                            my: 5,
                            ml: 10,
                            mt: 30
                        }}
                        alt="Your logo."
                        src={main}
                    /></Item>
                </Grid>
                <Grid>

                </Grid>
            </Grid >
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                background-color={'#F8FBF8'}>
                <Grid item xs={7}>
                    <Item sx={{
                        ml: 1, color: '#0A245D', display: 'block'
                    }}><h1>Who Is Building Bridges Foster Family Agency?</h1></Item>
                    <Item><p>We provide services and treatment for abused and neglected children while re-unification services with their families are being explored and/or completed.</p></Item>
                    <Item><p>Building Bridges Foster Family Agency currently works with the  Los Angeles County Department of Children and Family Services  and the Riverside County Department of Public Social Services  to serve the  Los Angeles County  and  county of Riverside.   Building Bridges Foster Family Agency also has an MOU from the  San Bernardino County Services  that allows us to provide services throughout the  San Bernardino County.

                        Building Bridges Foster Family Agency has been called one of the elite foster family agencies in the Inland Empire and Los Angeles County, and with good reason. We strive to provide the best service for our foster families. By being a foster parent in Building Bridges Foster Family Agency, you will receive full support throughout your time with us.
                        To learn more about foster family agencies, visit the  State of California Department of Developmental Services website.</p></Item>

                </Grid>
                <Grid item xs={5}>
                    <Item><Box
                        component="img"
                        sx={{
                            height: 225,
                            my: 5
                        }}
                        alt="Your logo."
                        src={img2}
                    /></Item>
                </Grid>

            </Grid >
        </Box >
    );
}
