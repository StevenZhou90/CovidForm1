import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';
import { Formik } from 'formik';

  
export default function Demo({navigation}){
    return(
        <ScrollView>
            <Formik
                initialValues={{perferedName: '', gender: '', address: '', tribalAffiliation: '', phoneNumber: '',emailAddress: '',okToText: '',okEmail: '',race: '',bestWayToReach: '',dateOfInterView: '',}}
                onSumbit={(values) => {
                    console.log(values);
                }}
                >
                {(props) => (
                    <View
                    >
                        <View>
                            <Text style={styles.question}>Perfered Name?</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('perferedName')}
                                value={props.values.perferedName}
                            />  
                        </View>

                        <View>
                            <Text style={styles.question}>Gender</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('gender')}
                                value={props.values.gender}
                            /> 
                        </View>
                        
                        <View>
                            <Text style={styles.question}>Address</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='address'
                                onChangeText={props.handleChange('address')}
                                value={props.values.address}
                            />  
                        </View>

                        <View>
                            <Text style={styles.question}>Tribal Affiliation?</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Yes/No, how so?'
                                onChangeText={props.handleChange('tribalAffiliation')}
                                value={props.values.tribalAffiliation}
                            />  
                        </View>

                        <View>
                            <Text style={styles.question}>Phone Number</Text>
                            <TextInput 
                                keyboardType="number-pad"
                                style={styles.input}
                                placeholder='(***)***-****'
                                onChangeText={props.handleChange('phoneNumber')}
                                value={props.values.phoneNumber}
                            />  
                        </View>

                        <View>
                            <Text style={styles.question}>Email Address</Text>
                            <TextInput 
                                keyboardType="email-address"
                                style={styles.input}
                                placeholder='abcd@gmail.com'
                                onChangeText={props.handleChange('emailAddress')}
                                value={props.values.emailAddress}
                            /> 
                        </View>

                        <View>
                            <Text style={styles.question}>Ok to Text?</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Yes/No'
                                onChangeText={props.handleChange('okToText')}
                                value={props.values.okToText}
                            /> 
                        </View>

                        <View>
                            <Text style={styles.question}>Ok to Email?</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Yes/No'
                                onChangeText={props.handleChange('okEmail')}
                                value={props.values.okEmail}
                            />
                        </View>

                        <View>
                            <Text style={styles.question}>Race?</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('race')}
                                value={props.values.race}
                            />
                        </View>

                        <View>
                            <Text style={styles.question}>Best way to reach</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('bestWayToReach')}
                                value={props.values.bestWayToReach}
                            />
                        </View>

                        <View>
                            <Text style={styles.question}>Date of interview</Text>
                            <TextInput 
                                keyboardType="number-pad"
                                style={styles.input}
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('dateOfInterView')}
                                value={props.values.dateOfInterView}
                            />
                        </View>

                        <Button 
                            title='Next' onPress={props.handleSumbit}
                            onPress={() => navigation.navigate('Health')}
                        />
                    </View>
                )}
            </Formik>
        </ScrollView>
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