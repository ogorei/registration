import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native'
import React, {VFC, useEffect, useState, Component} from 'react'
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';

const Input = () => {
    return(
        <View>
            <Formik
                initialValues={{ email: '', password:'' }}
                onSubmit={(values)=> {
                    console.log(22,values)
                }}
            >
            {(props) => (
            <View>
                <TextInput
                    style={tw`my-4 py-2 px-12 bg-white`}
                    placeholder='email'
                    onChangeText={props.handleChange('email')}
                    // onBlur={handleBlur('email')}
                    value={props.values.email}
                />
                <TextInput
                    style={tw`py-2 px-12 bg-white`}
                    placeholder='password'
                    onChangeText={props.handleChange('password')}
                    // onBlur={handleBlur('email')}
                    value={props.values.password}
                />
                {/* this is how I should write functions in ts */}
                <TouchableOpacity 
                    onPress={()=>{props.handleSubmit()}}
                    style={tw`my-2 p-4 items-center bg-pink-500` }
                    >
                    <Text>登録する</Text>
                </TouchableOpacity>
            </View>

            )}
        </Formik>
        </View>
    )
}

export default Input;