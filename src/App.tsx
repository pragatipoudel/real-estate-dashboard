import '@mantine/core/styles.css';
import { AppShell, MantineProvider, Title } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { data } from './data';

function App() {
    return (
        <MantineProvider>
            <AppShell header={{ height: 60 }} padding="md">
                <AppShell.Header>
                    <Title px="md">Real Estate Dashboard</Title>
                </AppShell.Header>

                <AppShell.Main>Main</AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
