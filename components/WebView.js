
import { WebView } from "react-native-webview";
import styled from "styled-components/native";


const MarginBox = styled.View`
  margin-top:150px;
`;


export default function WebView() {
    return (
        <>
            <MarginBox></MarginBox>
            <WebView source={{ uri: "https://developjkong.github.io/exchange" }} />
        </>
    );
}
