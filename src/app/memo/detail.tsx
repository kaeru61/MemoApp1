import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style ={styles.memoHeader}>
        <Text style ={styles.memoTitle}>買い物リスト</Text>
        <Text style = {styles.memoDate}>2024年2月20日 19:41</Text>
      </View>
      <ScrollView style ={styles.memoBody}>
        <Text style ={styles.memoBodyText}>
          買い物リスト
          書体やレイアウトの確認用である。
          この表示を見て違和感があるようなら修正していこう。
        </Text>
      </ScrollView>
      <CircleButton style= {{top: 160, bottom: 'auto' }}>＋</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: '#F09C4F',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
})

export default Detail
