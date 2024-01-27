import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import { AppShell, MantineProvider, Title } from '@mantine/core';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <MantineProvider>
            <AppShell header={{ height: 60 }} padding="md">
                <AppShell.Header>
                    <Title px="md">Real Estate Dashboard</Title>
                </AppShell.Header>

                <Dashboard />
            </AppShell>
        </MantineProvider>
    );
}

export default App;
