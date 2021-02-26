import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    occupation: yup.string().required('This is a required field'),
    firstresponder: yup.string().required('This is a required field'),
    setting: yup.string().required('This is a required field'),
})

export default function risk({ navigation }){
        return(
            <TouchableWithoutFeedback onPress={() =>{
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}> 
                    <Formik
                        initialValues={{occupation: '', firstresponder: '', setting:''}}
                        validationSchema={schema}
                        onSubmit={(values) => {
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
                                        onBlur={props.handleBlur('occupation')}
                                    />  
                                    <Text style={styles.error}>{props.touched.occupation && props.errors.occupation}</Text> 
                                </View>
                                
                                <View>
                                    <Text style={styles.question}>If the patient lives or works in a congregate setting, gather name and address of setting and whether it is correctional facility, dorm, group home, nursing home, homeless shelter, food processing plant, multi-family household, multi-generational or high occupancy household, etc</Text> 
                                    <TextInput 
                                        style={styles.input}
                                        multiline={true}
                                        placeholder=''
                                        onChangeText={props.handleChange('firstresponder')}
                                        value={props.values.firstresponder}
                                        onBlur={props.handleBlur('firstresponder')}
                                    /> 
                                    <Text style={styles.error}>{props.touched.firstresponder && props.errors.firstresponder}</Text> 
                                </View> 

                                <View>
                                    <Text style={styles.question}>If the patient lives or works in a congregate setting, gather name and address of setting and whether it is correctional facility, dorm, group home, nursing home, homeless shelter, food processing plant, multi-family household, multi-generational or high occupancy household, etc</Text> 
                                    <TextInput 
                                        style={styles.input}
                                        multiline={true}
                                        placeholder=''
                                        onChangeText={props.handleChange('setting')}
                                        value={props.values.setting}
                                        onBlur={props.handleBlur('setting')}
                                    /> 
                                    <Text style={styles.error}>{props.touched.setting && props.errors.setting}</Text> 
                                </View> 
        
                                <Button 
                                    title='Submit' onPress={() => {props.handleSubmit(); navigation.navigate('ContactForm')}}
                                />
                        </View>
                    )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const styles = StyleSheet.create({
        question: {
            fontSize:24,
            paddingLeft: 10,
            paddingTop:10,
            color: '#012A4A',
            },
        input: {
            borderWidth: 3,
            borderColor: "#2C7DA0",
            fontSize: 24,
            borderRadius: 10,
            paddingLeft: 10,
            margin: 10,
            backgroundColor: '#A9D6E5', 
            },
        screen: {
            fontSize:24,
            paddingLeft: 10,
            paddingTop:10,
            backgroundColor: '#A9D6E5',
            flex: 1,
            },
        error: {
        textAlign: 'center',
        fontSize: 18,
        color: '#e7305b'
        }
        });
