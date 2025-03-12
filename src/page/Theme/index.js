import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Theme1 from './theme1'

const Theme = () => {
    return (
        <Routes>
            <Route path="/theme-1" element={<Theme1 />} />
        </Routes>
    )
}

export default Theme
