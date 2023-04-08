import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SafeScreen({ children }) {

    return (
        <SafeAreaView className='flex-1'>
         
                {children}
        
        </SafeAreaView>
    )
}