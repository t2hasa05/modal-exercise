import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent = {false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.text}>This is modal...</Text>
            <Pressable
              onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButton}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Show modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 30,
    borderRadius: 20,
    width: '90%',

    //Android
    elevation: 5,

    //iOS
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalButton: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12
  },
  text: {
    fontSize: 20,
  }
});