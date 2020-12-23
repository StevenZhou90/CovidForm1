import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { Formik } from 'formik';
  
export default function Health({navigation}){
    return(
        <ScrollView>
            <Text style={styles.question1}>
                List the date of oneset (MM/DD/YY) of each symptom.
            </Text>

            <Formik
                initialValues={{fever: '', cough: '', shortnessOfBreath: '', diarrheaGI: '', headache: '', muscleAche: '', chills: '', soreThroat: '', vomiting: '', abdominalPain: '', nasalCongestion: '', lossOfSmell: '', malaiseFatigue: '', unlistedSymptoms: '', dateAndResultOfTest: ''}}
                onSumbit={(values) => {
                    console.log(values);
                }}
                >
                {(props) => (
                    <View>
                        <View>
                            <Text style={styles.question}>Fever</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('fever')}
                                value={props.values.name}
                            />  
                        </View>

                        <View>
                            <Text style={styles.question}>Cough</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('cough')}
                                value={props.values.name}
                            />
                        </View>

                        <View>
                            <Text style={styles.question}>Shortness of Breath</Text> 
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('shortnessOfBreath')}
                                value={props.values.name}
                            /> 
                        </View> 

                        <View>
                            <Text style={styles.question}>DiarrheaGI</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('diarrheaGI')}
                                value={props.values.name}
                            />  
                        </View>

                        <View>
                            <Text style={styles.question}>Headache</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('headache')}
                                value={props.values.name}
                            /> 
                        </View> 

                        <View>
                            <Text style={styles.question}>Muscleache</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('muscleAche')}
                                value={props.values.name}
                            /> 
                        </View> 

                        <View>
                            <Text style={styles.question}>Chills</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('chills')}
                                value={props.values.name}
                            />  
                        </View>

                        <View>
                            <Text style={styles.question}>Core Throat</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('soreThroat')}
                                value={props.values.name}
                            />  
                        </View>

                        <View>
                            <Text style={styles.question}>Vomiting</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('vomiting')}
                                value={props.values.name}
                            /> 
                        </View> 

                        <View>
                            <Text style={styles.question}>Abdominal Pain</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('abdominalPain')}
                                value={props.values.name}
                            />
                        </View>  

                        <View>
                            <Text style={styles.question}>Nasal Congestion</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('nasalCongestion')}
                                value={props.values.name}
                            /> 
                        </View> 

                        <View>
                            <Text style={styles.question}>Loss of smell</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('lossOfSmell')}
                                value={props.values.name}
                            />  
                        </View>

                        <View>
                            <Text style={styles.question}>Loss of taste</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('lossOfTaste')}
                                value={props.values.name}
                            />
                        </View>

                        <View>
                            <Text style={styles.question}>Maslaise Fatigue</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('malaiseFatigue')}
                                value={props.values.name}
                            /> 
                        </View> 
                        
                        <View>
                            <Text style={styles.question}>List any unlisted symptoms and their onset date</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Ex: Symptom:MM-DD-YY'
                                onChangeText={props.handleChange('unlistedSymptoms')}
                                value={props.values.name}
                            /> 
                        </View>

                        <View>
                            <Text style={styles.question}>Date and result of test</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Ex: Symptom:MM-DD-YY'
                                onChangeText={props.handleChange('dateAndResultOfTest')}
                                value={props.values.name}
                            /> 
                        </View>
                        <Button 
                            title='Next' onPress={props.handleSumbit}
                            onPress={() => navigation.navigate('Risk')}
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
    question1: {
        padding: 10,
        fontSize:24,
        textAlign:"center",
        fontWeight:'bold',
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
  });;