import { Routes } from './src/routes';
import { StatusBarModel } from './src/components/StatusBarModel';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider >
      <StatusBarModel />
      <Routes />
    </SafeAreaProvider>
  );
}

