import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
}