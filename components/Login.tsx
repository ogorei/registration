import { Platform, Button, View, Text } from 'react-native'
import {useEffect, useState} from 'react'
import * as Random from 'expo-random';
import React from 'react';
import * as AuthSession from 'expo-auth-session';

const domain = 'dev-f40qx9bl.jp.auth0.com';
const auth0ClientId = 'bu3K3WaFfdfcb8bzhAPjLd47mTOMfBPD';
const authorizationEndpoint = 'https://dev-f40qx9bl.jp.auth0.com';


const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });



