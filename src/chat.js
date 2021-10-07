import React from "react";
import logo from  './FInalCryptologo-chat.jpg'
// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

import './chat.css'

function ChatComp() {
  const [isDarkDes,setDarkDes]=React.useState(localStorage.getItem("dark")=="true")
   const chatClient = StreamChat.getInstance('7bncaddp33q4');
const userToken =localStorage.getItem("chat");
chatClient.connectUser(
  {
    id: localStorage.getItem("username"),
    name: localStorage.getItem("username"),
    image: 'https://getstream.io/random_png/?id=weathered-king-9&name=weathered',
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'ANTEAGLE', {
  image:logo ,
  name: 'ANTEAGLE',
});


  return (
    
    <footer className="chat"  style={{backgroundColor:isDarkDes?"#212529":"white"}}>

      <Chat client={chatClient} theme={'livestream dark'}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader live />
        <VirtualizedMessageList />
        <MessageInput style={{width:"100%"}} Input={MessageInputSmall} focus />
      </Window>
    </Channel>
  </Chat>
     

    </footer>
    
  );
}

export default ChatComp;
