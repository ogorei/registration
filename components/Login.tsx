import { Platform, Button, View, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
// import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import tw from "tailwind-react-native-classnames";
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import jwtDecode from "jwt-decode";
import Crypto from "crypto";

WebBrowser.maybeCompleteAuthSession();

const auth0ClientId = 'ywXeQNJI8NLls3MlBXFoL';
const authorizationEndpoint = 'https://lzg2dndj.auth.dev.upbond.io/authorize';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default function Login() {
  const [name, setName] = useState(null);
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      responseType: "id_token", // response type for getting the id token, and decoded after received on line 44
      scopes: ["openid", "profile"], // openid scopes always needed for getting customer id
      prompt: AuthSession.Prompt.Login,
      extraParams: {
        // nonce needed, just use random value
        nonce: Crypto.randomBytes(32).toString("hex"),
      },
    },
    { authorizationEndpoint }
  );

  useEffect(() => {
    //type of response: cancel only (rightnow)
    console.log(11, request);
    console.log(22, response);
    if (response) {
      if (response.type === "success") {
        console.log(response.params);
        // Retrieve the JWT token and decode it
        const jwtToken = response.params.id_token;
        const decoded = jwtDecode(jwtToken);

        console.log("userinfo", decoded);

        const { name } = decoded as any;
        setName(name);
      }
    }
  }, [response]);

  return (
    <View>
      {name ? (
        <>
          <Text>You are logged in, {name}!</Text>
          <Button title="Log out" onPress={() => setName(null)} />
        </>
      ) : (
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          style={tw`my-2 p-4 items-center bg-pink-500`}
        >
          <Text>Browser Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
