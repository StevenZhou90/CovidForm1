import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required('This is a required field'),
    dateOfBirth: yup.string().required('This is a required field'),
    primaryLanguage: yup.string().required('This is a required field'),
    useOfInterpreeter: yup.string().required('This is a required field'),
})

export default function Intro({navigation}){
    return(
        <View style={styles.screen}> 
            <Formik
                initialValues={{name: '', dateOfBirth: '', primaryLanguage: '', useOfInterpreeter: ''}}
                validationSchema={schema}
                onSubmit={(values, schema) => {
                    console.log(values);
                    navigation.navigate('Demo');
                }}
            >
            {(props, isValid, errors) => (
                <View
                >
                    <View>
                        <Text style={styles.question}>Name</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder=''
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            onBlur={props.handleBlur('name')}
                        />  
                        <Text style={styles.error}>{props.touched.name && props.errors.name}</Text>
                    </View>   

                    <View >
                        <Text style={styles.question}>Date of Birth</Text>
                        <TextInput 
                            style={styles.input}
                            keyboardType="number-pad"
                            placeholder='MM-DD-YY'
                            onChangeText={props.handleChange('dateOfBirth')}
                            value={props.values.dateOfBirth}
                            onBlur={props.handleBlur('dateOfBirth')}
                        />  
                        <Text style={styles.error}>{props.touched.dateOfBirth && props.errors.dateOfBirth}</Text>
                    </View>
                
                    <View>
                        <Text style={styles.question}>Primary Language</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder=''
                            onChangeText={props.handleChange('primaryLanguage')}
                            value={props.values.primaryLanguage}
                            onBlur={props.handleBlur('primaryLanguage')}
                        />  
                        <Text style={styles.error}>{props.touched.primaryLanguage && props.errors.primaryLanguage}</Text>
                    </View>

                    <View>
                        <Text style={styles.question}>Use of interpreter</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder=''
                            onChangeText={props.handleChange('useOfInterpreeter')}
                            value={props.values.useOfInterpreeter}
                            onBlur={props.handleBlur('useOfInterpreeter')}
                        />  
                        <Text style={styles.error}>{props.touched.useOfInterpreeter && props.errors.useOfInterpreeter}</Text>
                    </View>
                      
                    <Button 
                        style={styles.button}
                        title='Next' 
                        onPress={() => {props.handleSubmit()}}
                    />
                </View>
            )}
            </Formik>
        </View>
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
    button: {
        backgroundColor: '#03045e',
    },
    error: {
        textAlign: 'center',
        fontSize: 18,
        color: '#e7305b'
    }
    
    });
