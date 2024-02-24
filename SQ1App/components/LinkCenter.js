import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import { useState } from 'react';
import WebsiteLink from '../components/WebsiteLink.js';

function LinkCenter(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    return(
        <View style={styles.container}>
            <View style={styles.titleSection}>
                <Text style={styles.title}>Link Center</Text>
            </View>
            <TouchableOpacity style={styles.links}>
                <Text style={styles.linkTitles}>
                    Feedback Form
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.links}>
                <Text style={styles.linkTitles}>
                    Extra Resources
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.links} onPress={()=>setIsModalVisible(true)}>
                <Text style={styles.linkTitles}>
                    SQ1 Website
                </Text>
            </TouchableOpacity>
            <Modal visible={isModalVisible} animationType="slide" presentationStyle="formSheet">
                <WebsiteLink setIsModalVisible={setIsModalVisible}/>
            </Modal>
            <TouchableOpacity style={styles.links}>
                <Text style={styles.linkTitles}>
                    FAQs
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LinkCenter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        textAlign: "center",
        marginBottom: 40,
    },
    links: {
        borderWidth: 2,
        borderColor: '#33363F',
        margin: 15,
        paddingVertical: 25,
        paddingHorizontal: 70,
        borderRadius: 30,
        backgroundColor: '#D9D9D9',
    },
    linkTitles: {
        fontSize: 30,
        textAlign: "center",
    },
    
});