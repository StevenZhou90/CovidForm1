import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Formik } from 'formik';
  
export default function Intro({navigation}){
    return(
        <View>
            <Formik
            initialValues={{name: '', dateOfBirth: '', primaryLanguage: '', useOfInterpreeter: ''}}
            onSumbit={(values) => {
                console.log(values);
            }}
            >
            {(props) => (
                <View
                >
                    <View>
                        <Text style={styles.question}>Name</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder=''
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />  
                    </View>   

                    <View >
                        <Text style={styles.question}>Date of Birth</Text>
                        <TextInput 
                            style={styles.input}
                            keyboardType="number-pad"
                            placeholder='MM-DD-YY'
                            onChangeText={props.handleChange('dateOfBirth')}
                            value={props.values.dateOfBirth}
                        />  
                    </View>
                
                    <View>
                        <Text style={styles.question}>Primary Language</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder=''
                            onChangeText={props.handleChange('primaryLanguage')}
                            value={props.values.primaryLanguage}
                        />  
                    </View>

                    <View>
                        <Text style={styles.question}>Use of interpreter</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder=''
                            onChangeText={props.handleChange('useOfInterpreeter')}
                            value={props.values.useOfInterpreeter}
                        />  
                    </View>
                      
                    <Button 
                        title='Next' onPress={props.handleSumbit}
                        onPress={() => navigation.navigate('Demo')}
                    />
                </View>
            )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
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