import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#F09C4F'
    },
    headerTintColor: '#ffffff',
    headerTitle: 'Memo',
    headerBackTitle: 'Back',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
      }
  }}/>
}

export default Layout
