import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar() {
    return (
        <SidebarStyled>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`

`;

export default Sidebar;