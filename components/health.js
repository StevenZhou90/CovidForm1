import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    fever: yup.string().required('This is a required field'),
    cough: yup.string().required('This is a required field'),
    shortnessOfBreath: yup.string().required('This is a required field'),
    diarrheaGI: yup.string().required('This is a required field'),
    headache: yup.string().required('This is a required field'),
    muscleAche:  yup.string().required('This is a required field'),
    chills:  yup.string().required('This is a required field'),
    soreThroat:  yup.string().required('This is a required field'),
    vomiting:  yup.string().required('This is a required field'),
    abdominalPain:  yup.string().required('This is a required field'),
    nasalCongestion:  yup.string().required('This is a required field'),
    lossOfSmell:  yup.string().required('This is a required field'),
    malaiseFatigue:  yup.string().required('This is a required field'),
    unlistedSymptoms:  yup.string().required('This is a required field'),
    dateAndResultOfTest:  yup.string().required('This is a required field'),
})

export default function Health({navigation}){
    return(
        <ScrollView style={styles.screen}>
            <Text style={styles.question1}>
                List the date of oneset (MM/DD/YY) of each symptom. If the symptom is not applicable enter 00-00-00
            </Text>

            <Formik
                initialValues={{fever: '', cough: '', shortnessOfBreath: '', diarrheaGI: '', headache: '', muscleAche: '', chills: '', soreThroat: '', vomiting: '', abdominalPain: '', nasalCongestion: '', lossOfSmell: '', malaiseFatigue: '', unlistedSymptoms: '', dateAndResultOfTest: ''}}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values);
                    navigation.navigate('Risk')
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
                                value={props.values.fever}
                                onBlur={props.handleBlur('fever')}
                            /> 
                            <Text style={styles.error}>{props.touched.fever && props.errors.perferedName}</Text> 
                        </View>

                        <View>
                            <Text style={styles.question}>Cough</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('cough')}
                                value={props.values.cough}
                                onBlur={props.handleBlur('cough')}
                            />
                            <Text style={styles.error}>{props.touched.cough && props.errors.cough}</Text> 
                        </View>

                        <View>
                            <Text style={styles.question}>Shortness of Breath</Text> 
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('shortnessOfBreath')}
                                value={props.values.shortnessOfBreath}
                                onBlur={props.handleBlur('shortnessOfBreath')}
                            /> 
                            <Text style={styles.error}>{props.touched.shortnessOfBreath && props.errors.shortnessOfBreath}</Text> 
                        </View> 

                        <View>
                            <Text style={styles.question}>DiarrheaGI</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('diarrheaGI')}
                                value={props.values.diarrheaGI}
                                onBlur={props.handleBlur('diarrrheaGI')}
                            />  
                            <Text style={styles.error}>{props.touched.diarrheaGI && props.errors.diarrheaGI}</Text> 
                        </View>

                        <View>
                            <Text style={styles.question}>Headache</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('headache')}
                                value={props.values.headache}
                                onBlur={props.handleBlur('headache')}
                            /> 
                            <Text style={styles.error}>{props.touched.headache && props.errors.headache}</Text> 
                        </View> 

                        <View>
                            <Text style={styles.question}>Muscle ache</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('muscleAche')}
                                value={props.values.muscleAche}
                                onBlur={props.handleBlur('muscleAche')}
                            /> 
                            <Text style={styles.error}>{props.touched.muscleAche && props.errors.muscleAche}</Text> 
                        </View> 

                        <View>
                            <Text style={styles.question}>Chills</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('chills')}
                                value={props.values.chills}
                                onBlur={props.handleBlur('chills')}
                            />  
                            <Text style={styles.error}>{props.touched.chills && props.errors.chills}</Text> 
                        </View>

                        <View>
                            <Text style={styles.question}>Core Throat</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('soreThroat')}
                                value={props.values.soreThroat}
                                onBlur={props.handleBlur('soreThroat')}
                            />  
                            <Text style={styles.error}>{props.touched.soreThroat && props.errors.soreThroat}</Text> 
                        </View>

                        <View>
                            <Text style={styles.question}>Vomiting</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('vomiting')}
                                value={props.values.vomiting}
                                onBlur={props.handleBlur('vomiting')}
                            /> 
                            <Text style={styles.error}>{props.touched.vomiting && props.errors.vomiting}</Text> 
                        </View> 

                        <View>
                            <Text style={styles.question}>Abdominal Pain</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('abdominalPain')}
                                value={props.values.abdominalPain}
                                onBlur={props.handleBlur('abdominalPain')}
                            />
                            <Text style={styles.error}>{props.touched.abdominalPain && props.errors.abdominalPain}</Text> 
                        </View>  

                        <View>
                            <Text style={styles.question}>Nasal Congestion</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('nasalCongestion')}
                                value={props.values.nasalCongestion}
                                onBlur={props.handleBlur('nasalCongestion')}
                            /> 
                            <Text style={styles.error}>{props.touched.nasalCongestion && props.errors.nasalCongestion}</Text> 
                        </View> 

                        <View>
                            <Text style={styles.question}>Loss of smell</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('lossOfSmell')}
                                value={props.values.lossOfSmell}
                                onBlur={props.handleBlur('lossOfSmell')}
                            />  
                            <Text style={styles.error}>{props.touched.lossOfSmell && props.errors.lossOfSmell}</Text> 
                        </View>

                        <View>
                            <Text style={styles.question}>Loss of taste</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('lossOfTaste')}
                                value={props.values.lossOfTaste}
                                onBlur={props.handleBlur('lossOfTaste')}
                            />
                            <Text style={styles.error}>{props.touched.lossOfTaste && props.errors.lossOfTaste}</Text> 
                        </View>

                        <View>
                            <Text style={styles.question}>Maslaise Fatigue</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder='MM-DD-YY'
                                onChangeText={props.handleChange('malaiseFatigue')}
                                value={props.values.malaiseFatigue}
                                onBlur={props.handleBlur('malaiseFatigue')}
                            /> 
                            <Text style={styles.error}>{props.touched.malaiseFatigue && props.errors.malaiseFatigue}</Text> 
                        </View> 
                        
                        <View>
                            <Text style={styles.question}>List any unlisted symptoms and their onset date</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Ex: Symptom:MM-DD-YY'
                                onChangeText={props.handleChange('unlistedSymptoms')}
                                value={props.values.unlistedSymptoms}
                                onBlur={props.handleBlur('unlistedSymptoms')}
                            /> 
                            <Text style={styles.error}>{props.touched.unlistedSymptoms && props.errors.unlistedSymptoms}</Text> 
                        </View>

                        <View>
                            <Text style={styles.question}>Date and result of test</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Ex: Symptom:MM-DD-YY'
                                onChangeText={props.handleChange('dateAndResultOfTest')}
                                value={props.values.dateAndResultOfTest}
                                onBlur={props.handleBlur('dateAndResultOfTest')}
                            /> 
                            <Text style={styles.error}>{props.touched.dateAndResultOfTest && props.errors.dateAndResultOfTest}</Text> 
                        </View>
                        <Button 
                            title='Next' onPress={() => {props.handleSubmit()}}
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
    question1: {
        fontSize:24,
        paddingLeft: 10,
        paddingTop:10,
        color: '#012A4A',
        textAlign: "center",
    },
    error: {
        textAlign: 'center',
        fontSize: 18,
        color: '#e7305b'
    }
    });
