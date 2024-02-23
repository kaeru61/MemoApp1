import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './icon'
import { Link } from 'expo-router'

const MemoListItem = (): JSX.Element => {
  return (
    <Link href='/memo/detail' asChild>
      <TouchableOpacity style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitile}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2024年2月20日 19:41</Text>
          </View>
          <TouchableOpacity>
            <Icon name='delete' size={30} color='#B0B0B0' />
          </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitile: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default MemoListItem
