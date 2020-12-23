import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Formik } from 'formik';

export default function risk({ navigation }){
        return(
            <TouchableWithoutFeedback onPress={() =>{
                Keyboard.dismiss();
            }}>
                <View>
                    <Formik
                        initialValues={{occupation: '', firstresponder: '', setting:''}}
                        onSumbit={(values) => {
                            console.log(values);
                        }}
                        >
                        {(props) => (
                            <View>
                                <View>
                                    <Text style={styles.question}>Occupation and workplace, if employed</Text>
                                    <TextInput 
                                        style={styles.input}
                                        placeholder=''
                                        onChangeText={props.handleChange('occupation')}
                                        value={props.values.occupation}
                                    />  
                                </View>
                                
                                <View>
                                    <Text style={styles.question}>If the patient lives or works in a congregate setting, gather name and address of setting and whether it is correctional facility, dorm, group home, nursing home, homeless shelter, food processing plant, multi-family household, multi-generational or high occupancy household, etc</Text> 
                                    <TextInput 
                                        style={styles.input}
                                        multiline={true}
                                        placeholder=''
                                        onChangeText={props.handleChange('firstresponder')}
                                        value={props.values.firstresponder}
                                    /> 
                                </View> 

                                <View>
                                    <Text style={styles.question}>If the patient lives or works in a congregate setting, gather name and address of setting and whether it is correctional facility, dorm, group home, nursing home, homeless shelter, food processing plant, multi-family household, multi-generational or high occupancy household, etc</Text> 
                                    <TextInput 
                                        style={styles.input}
                                        multiline={true}
                                        placeholder=''
                                        onChangeText={props.handleChange('setting')}
                                        value={props.values.setting}
                                    /> 
                                </View> 
        
                                <Button 
                                    title='Submit' onPress={props.handleSumbit}
                                    onPress={() => navigation.navigate('ContactForm')}
                                />
                        </View>
                    )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex:1,
        },
    question: {
        fontSize:18,
        paddingLeft: 10,
        paddingTop:10,
        },
    input: {
        borderWidth: 2,
        borderColor: "#ddd",
        fontSize: 18,
        borderRadius: 6,
        paddingLeft: 10,
        margin: 10,
        },
    });