import React, {useState} from 'react';
import {
    Tab, Grid, Button
} from '@mui/material';
import {
    TabList,
    TabContext, TabPanel
} from '@mui/lab';

import CloseIcon from '@mui/icons-material/Close';

export default function Closable() {
    const [selectedTab, setSelectedTab] = useState("Main");

    const [tabs, setTabs] = useState([])
    const [panels, setPanels] = useState([])
    const [tabIndex, setTabIndex] = useState(2)

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleTabOptions = (value) => {
        setSelectedTab(value)
        setTabIndex(tabIndex + 1)
    }

    const createBlueBox = () => {
        const value = `Blue Box ${tabIndex}`
        const newTab = {
            value: value,
            child: () => <div style={{height: '300px', width: '300px', backgroundColor: 'blue'}} />
        }

        setTabs([...tabs, newTab])

        // setPanels([
        //     ...panels,
        //     {
        //         value: value,
        //         child: () => <div style={{height: '300px', width: '300px', backgroundColor: 'blue'}} />
        //     }
        // ])

        handleTabOptions(value);
    }


    const createRedBox = () => {
        const value = `Red Box ${tabIndex}`
        const newTab = {
            value: value,
            child: () => <div style={{height: '300px', width: '300px', backgroundColor: 'red'}} />
        }

        setTabs([...tabs, newTab])

        // setPanels([
        //     ...panels,
        //     {
        //         value: value,
        //         child: () => <div style={{height: '300px', width: '300px', backgroundColor: 'red'}} />
        //     }
        // ])

        handleTabOptions(value);
    }


    const handleTabClose = (event, value) => {
        tabs.map(e => console.log(e.value))
        const tabArr = tabs.filter(x => x.value !== value)
        console.log(tabArr)
        setTabs(tabArr)

        // const panelArr = panels.filter(p => p.value !== value)
        // setPanels(panelArr);

        setSelectedTab('Main')
    }

    return (
        <TabContext value={selectedTab}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="new Closable Tab" value="Main" />

                {tabs.map(tab => (
                    <Tab 
                        icon={
                            <CloseIcon onClick={(e) => handleTabClose(e, tab.value)} />
                        } iconPosition='end'
                        key={tab.value} label={tab.value} 
                        value={tab.value} 
                    />
                ))}
            </TabList>






            <TabPanel value="Main">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Button 
                            onClick={createBlueBox}
                            variant='contained' color='primary'>
                            Create Blue Box
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button 
                            onClick={createRedBox}
                            variant='contained' color='secondary'>
                            Create Red Box
                        </Button>
                    </Grid>
                </Grid>
            </TabPanel>

            {tabs.map(panel => (
                <TabPanel key={panel.value} value={panel.value}>
                    {panel.child()}
                </TabPanel>
            ))}
        </TabContext>
    );
}
