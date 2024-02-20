import { View, Text, StyleSheet } from 'react-native'

const MemoListItem = (): JSX.Element => {
  return (
    <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitile}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2024年2月20日 19:41</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
    </View>
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