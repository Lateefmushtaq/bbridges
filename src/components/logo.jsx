import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import main1 from './images/1.png'
import main2 from './images/2.png'
import main3 from './images/3.png'
import main4 from './images/4.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveStack() {
    return (
        <div>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={1}
                marginTop={10}
            >
                <Item><Box
                    component="img"
                    sx={{
                        height: 150,
                        my: 5
                    }}
                    alt="Your logo."
                    src={main4}
                /></Item>
                <Item><Box
                    component="img"
                    sx={{
                        height: 150,
                        my: 5
                    }}
                    alt="Your logo."
                    src={main2}
                /></Item>
                <Item><Box
                    component="img"
                    sx={{
                        height: 150,
                        my: 5
                    }}
                    alt="Your logo."
                    src={main3}
                /></Item>
                <Item><Box
                    component="img"
                    sx={{
                        height: 150,
                        my: 5
                    }}
                    alt="Your logo."
                    src={main1}
                /></Item>
            </Stack>
        </div>
    );
}

