import React from 'react'
import { Button, Stack } from '@mui/material'
import { categories } from '../utils/constants'


const Sidebar = ({ setSelectedCategory, selectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}
    >
        {categories.map(e => (
            <Button className='category-btn'
                onClick={() => setSelectedCategory(e.name)}
                style={{
                    background: e.name === selectedCategory
                        && '#FC1503', color: 'white'
                }}
                key={e.key}>
                <span style={{ color: e.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
                    {e.icon}
                </span>
                <span style={{ opacity: e.name === selectedCategory ? "1" : "0.8" }}>
                    {e.name}
                </span>
            </Button>
        ))}
    </Stack>
)


export default Sidebar