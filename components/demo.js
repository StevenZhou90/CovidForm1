import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    perferedName: yup.string().required('This is a required field'),
    gender: yup.string().required('This is a required field'),
    address: yup.string().required('This is a required field'),
    tribalAffiliation: yup.string().required('This is a required field'),
    phoneNumber: yup.string().required('This is a required field'),
    okToText:  yup.string().required('This is a required field').email('Not a valid email'),
    okEmail:  yup.string().required('This is a required field'),
    race:  yup.string().required('This is a required field'),
    bestWayToReach:  yup.string().required('This is a required field'),
    dateOfInterView:  yup.string().required('This is a required field'),

})

export default function Demo({navigation}){
    return(
        <ScrollView style={styles.screen}>
            <Formik
                initialValues={{perferedName: '', gender: '', address: '', tribalAffiliation: '', phoneNumber: '',emailAddress: '',okToText: '',okEmail: '',race: '',bestWayToReach: '',dateOfInterView: '',}}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values);
                    navigation.navigate('Health');
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
                                onBlur={props.handleBlur('perferedName')}
                            />  
                            <Text style={styles.error}>{props.touched.perferedName && props.errors.perferedName}</Text>
                        </View>

                        <View>
                            <Text style={styles.question}>Gender</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('gender')}
                                value={props.values.gender}
                                onBlur={props.handleBlur('gender')}
                            /> 
                            <Text style={styles.error}>{props.touched.gender && props.errors.gender}</Text>
                        </View>
                        
                        <View>
                            <Text style={styles.question}>Address</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='address'
                                onChangeText={props.handleChange('address')}
                                value={props.values.address}
                                onBlur={props.handleBlur('address')}
                            />  
                            <Text style={styles.error}>{props.touched.adress && props.errors.address}</Text>
                        </View>

                        <View>
                            <Text style={styles.question}>Tribal Affiliation?</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Yes/No, how so?'
                                onChangeText={props.handleChange('tribalAffiliation')}
                                value={props.values.tribalAffiliation}
                                onBlur={props.handleBlur('tribalAffiliation')}
                            />
                            <Text style={styles.error}>{props.touched.tribalAffiliation && props.errors.tribalAffiliation}</Text>  
                        </View>

                        <View>
                            <Text style={styles.question}>Phone Number</Text>
                            <TextInput 
                                keyboardType="number-pad"
                                style={styles.input}
                                placeholder='(***)***-****'
                                onChangeText={props.handleChange('phoneNumber')}
                                value={props.values.phoneNumber}
                                onBlur={props.handleBlur('phoneNumber')}
                            />  
                            <Text style={styles.error}>{props.touched.phoneNumber && props.errors.phoneNumber}</Text>  
                        </View>

                        <View>
                            <Text style={styles.question}>Email Address</Text>
                            <TextInput 
                                keyboardType="email-address"
                                style={styles.input}
                                placeholder='abcd@gmail.com'
                                onChangeText={props.handleChange('emailAddress')}
                                value={props.values.emailAddress}
                                onBlur={props.handleBlur('emailAddress')}
                            /> 
                            <Text style={styles.error}>{props.touched.emailAddress && props.errors.emailAddress}</Text>  
                        </View>

                        <View>
                            <Text style={styles.question}>Ok to Text?</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Yes/No'
                                onChangeText={props.handleChange('okToText')}
                                value={props.values.okToText}
                                onBlur={props.handleBlur('okToText')}
                            /> 
                            <Text style={styles.error}>{props.touched.okToText && props.errors.okToText}</Text>  
                        </View>

                        <View>
                            <Text style={styles.question}>Ok to Email?</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Yes/No'
                                onChangeText={props.handleChange('okEmail')}
                                value={props.values.okEmail}
                                onBlur={props.handleBlur('okEmail')}
                            />
                            <Text style={styles.error}>{props.touched.okEmail && props.errors.okEmail}</Text>  
                        </View>

                        <View>
                            <Text style={styles.question}>Race</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('race')}
                                value={props.values.race}
                                onBlur={props.handleBlur('race')}
                            />
                            <Text style={styles.error}>{props.touched.race && props.errors.race}</Text> 
                        </View>

                        <View>
                            <Text style={styles.question}>Best way to reach</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('bestWayToReach')}
                                value={props.values.bestWayToReach}
                                onBlur={props.handleBlur('bestWayToReach')}
                            />
                            <Text style={styles.error}>{props.touched.bestWayToReach && props.errors.bestWayToReach}</Text> 
                        </View>

                        <View>
                            <Text style={styles.question}>Date of interview</Text>
                            <TextInput 
                                keyboardType="number-pad"
                                style={styles.input}
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('dateOfInterView')}
                                value={props.values.dateOfInterView}
                                onBlur={props.handleBlur('dateOfInterView')}
                            />
                            <Text style={styles.error}>{props.touched.dateOfInterView && props.errors.dateOfInterView}</Text> 
                        </View>

                        <Button 
                            title='Next' onPress={props.handleSubmit}
                            onPress={() => {props.handleSubmit()}}
                        />
                    </View>
                )}
            </Formik>
        </ScrollView>
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
