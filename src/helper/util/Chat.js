import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, InputToolbar, Send,Actions } from 'react-native-gifted-chat'
import { View, Text, Image, StyleSheet } from 'react-native'
import { scaledSize } from './Utilities';
import moment from 'moment';
import Icon from '../../assets/send.png'
import {} from 'react-native-paper'

export default function Example() {
    const [messages, setMessages] = useState([]);

    const renderMessages = (msg) => {
        let message = msg.currentMessage
        var date = moment(message.timestamp)
            .utcOffset('+05:30')
            .format('hh:mm ');
        return (
            <View>
                {/* {console.log('msg',msg)} */}
                {console.log(message.createdAt)}
                {message.user._id === 2 ?
                    <View style={{ marginBottom: 24 }}>
                        <View style={{
                            backgroundColor: '#AED599', padding: 20, marginTop: 20,
                            borderTopRightRadius: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 10, width: '90%', alignSelf: 'center'
                        }}>
                            <Text>{message.text} </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: scaledSize(6), alignItems: 'center', marginLeft: scaledSize(30), alignSelf: 'flex-start' }}>
                            <Image source={{ uri: message.user.avatar }}
                                style={{
                                    height: scaledSize(20),
                                    width: scaledSize(20),
                                    borderRadius: 20,

                                }} />
                            <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: scaledSize(10) }}>{date}</Text>
                        </View>
                    </View>

                    :
                    <View style={{ marginBottom: 10 }}>
                        <View style={{
                            backgroundColor: '#ccc', padding: 20, marginTop: 20,
                            borderTopRightRadius: 15, borderTopLeftRadius: 16, borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 3, width: '90%', alignSelf: 'center'
                        }}>
                            <Text>{message.text}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row', marginTop: scaledSize(6), alignItems: 'center', marginRight: scaledSize(30),
                            alignSelf: 'flex-end'
                        }}>
                            <Image source={{ uri: message.user.avatar }}
                                style={{
                                    height: scaledSize(15),
                                    width: scaledSize(15),
                                    borderRadius: 20,
                                    marginRight: scaledSize(6)
                                }} />
                            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{date}</Text>
                        </View>
                    </View>

                }
            </View>
        )
    }

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [messages])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: messages._id,
            }}
            
            textInputStyle={{color:'red',}}
            renderUsernameOnMessage
            renderMessage={(messages) => renderMessages(messages)}
            renderInputToolbar={props => <InputToolbar
                {...props}
                primaryStyle={{backgroundColor: "#F2F2F2",
                padding: 4,
                marginLeft: 10,
                marginRight: 10,
                borderRadius:40,
                height: 55,
                marginTop:20,
                borderTopWidth:0
                }}
                placeholder='Type Message'
                containerStyle={{
                    borderTopWidth:0
                }}
            />}
            alwaysShowSend
            renderActions={()=><Actions
                containerStyle={{position: 'absolute',left:250,bottom:4
                
                }}
                icon={()=><Image
                    source={Icon}
                    style={{ height: 20, width: 20, marginBottom: 15 }}/>}
            />}
            renderSend={props => <Send {...props} >
                <View style={{ justifyContent: 'center', marginRight: 10, }}>
                    <Image
                        source={Icon}
                        style={{ height: 20, width: 20, marginBottom: 15 }}
                    />
                </View>
            </Send>}


        />
    )
}

