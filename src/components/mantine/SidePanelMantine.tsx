import { useState } from 'react';
import { Tabs } from '@mantine/core';

export const SidePanelMantine = () =>{
    const [activeTab, setActiveTab] = useState<string | null>('first');

    return (
        <Tabs value={activeTab} onChange={setActiveTab}>
            <Tabs.List>
                <Tabs.Tab value="first">First tab</Tabs.Tab>
                <Tabs.Tab value="second">Second tab</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="first">First panel</Tabs.Panel>
            <Tabs.Panel value="second">Second panel</Tabs.Panel>
        </Tabs>
    );
}