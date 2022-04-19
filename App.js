import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  SafeAreaView
} from 'react-native';
import { allbooks, addBook, deleteAllBook, deletebook } from './Database'

function App() {
  const [Love, setLove] = useState(allbooks)
  const [page, setPage] = useState({ Bookname: '', BookAuthor: '', Bookdetails: '' });
  const [counter, setCounter] = useState(Love.length + 1)
  const renderItem = ({ item }) => (
    <View style={styles.itemViewstyle}>
      <Text>{item.bookID}</Text>
      <Text>{item.bookname}</Text>
      <Text>{item.bookAuthor}</Text>
      <Text>{item.bookdetails}</Text>
      <Button
        title='Delete'
        onPress={() => {
          deletebook(item.bookID);
          setLove(allbooks);
          setCounter(Love.length + 1)
        }}
      />
    </View>

  )


  return (

    <><ScrollView style={styles.Container}>
      <View>
      <Text style={{fontWeight:'bold'}}>Bookname</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Your Bookname'
        onChangeText={(e) => setPage({ ...page, Bookname: e })}
        value={page.Bookname} />
      <Text style={{fontWeight:'bold',}}>BookAuthor</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Your BookAuthor'
        onChangeText={(e) => setPage({ ...page, BookAuthor: e })}
        value={page.BookAuthor} />
      <Text style={{fontWeight:'bold',}}>Bookdetails</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Your BookAuthor'
        onChangeText={(e) => setPage({ ...page, Bookdetails: e })}
        value={page.Bookdetails} />
      </View>
      <View style={styles.button}>
        <Button
          title='Add'
          onPress={(() => {
            addBook(counter, page.Bookname, page.BookAuthor, page.Bookdetails);
            setLove(allbooks);
            setCounter(counter + 1);
          })} />
      </View>

      {/*<View style={styles.button}>
    <Button
      title='Delete'
      onPress={() => {
        deleteAllBook();
        setLove(allbooks());
        setCounter(1);
      }}/>
    </View>*/}

    </ScrollView>
    <Text style={styles.textHeader}>Books</Text>
    <FlatList
        data={Love}
        keyExtractor={item => item.bookID}
        renderItem={renderItem} /></>
    

  );
};


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'pink',
    //justifyContent: 'center',
    padding: 40


  },
  button: {
    left: 50,
    margin: 20,
    width: 240,
    top: 10,

  },
  textHeader: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
  itemViewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor:'pink'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderColor:'#000'
  },
});

export default App;
