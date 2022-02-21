import { Platform, Button, View, Text, TouchableOpacity } from 'react-native'
import {useEffect, useState} from 'react'
import * as AuthSession from 'expo-auth-session';
// import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import tw from 'tailwind-react-native-classnames';
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const auth0ClientId = 'ywXeQNJI8NLls3MlBXFoL';
const authorizationEndpoint = 'https://lzg2dndj.auth.dev.upbond.io/authorize';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default function Login() {
    const [request, response, promptAsync] = AuthSession.useAuthRequest(
        {
            redirectUri,
            clientId: auth0ClientId,
            scopes: ['profile'],
            prompt: AuthSession.Prompt.Login,
        },
        { authorizationEndpoint}
    );
    console.log(11,request);
    //type of response: cancel only (rightnow)
    console.log(22,response);

    useEffect(() => {
        if (response?.type === 'success') {
            console.log(44,response)
        const { code } = response.params;
        }
    }, [response]);

    return (
        <TouchableOpacity
            disabled={!request}
            onPress={()=>{promptAsync()}}
            style={tw`my-2 p-4 items-center bg-pink-500` }
            >
            <Text>Browser Login</Text>
        </TouchableOpacity>
    );
}

