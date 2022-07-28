import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ScrollBox = styled.ScrollView`
    margin-top: 50px;
    width: 100%;
`;
const MainBanner = styled.View`
    width: 100%;
    height: 500px;
`;

const MainBannerHeader = styled.View`
    height: 15%;
    justify-content: space-between;
    flex-direction: row;
`;
const Logo = styled.Text`
    margin-left: 15px;
`;

const Menu = styled.Text`
    margin-right: 15px;
`;

const Content = styled.View`
    height: 85%;
`;
const MoveBox = styled.TouchableOpacity``;

export default function App() {
    return (
        <Container>
            <ScrollBox>
                <MainBanner>
                    <MainBannerHeader>
                        <Logo>Logo</Logo>
                        <Menu>Menu</Menu>
                    </MainBannerHeader>
                    <Content>
                        <Text>Content</Text>
                    </Content>
                </MainBanner>
                <Text>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </ScrollBox>
        </Container>
    );
}
