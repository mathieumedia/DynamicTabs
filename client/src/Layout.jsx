import * as React from 'react';
import {
    Tab 
} from '@mui/material';
import {
    TabList,
    TabContext, TabPanel
 } from '@mui/lab';

import Dynamic from './Dynamic';
import Closable from './Closable';

export default function Layout() {
    const [selectedTab, setSelectedTab] = React.useState('1');

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <TabContext value={selectedTab}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Static" value="1" />
                <Tab label="Dynamic" value="2" />
                <Tab label="Closable" value="3" />
            </TabList>
            <TabPanel value="1">Static</TabPanel>
            <TabPanel value="2">
                <Dynamic />
            </TabPanel>
            <TabPanel value="3">
                <Closable  />
            </TabPanel>
        </TabContext>
    );
}
