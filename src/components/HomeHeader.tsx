import { Headline, Text } from "react-native-paper";
import { Row } from "./Row";
import theme from "src/theme";
import { View } from "react-native";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: theme.colors.footer,
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 30,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Row style={{ gap: 10 }}>
        <UserPhoto uri="https://media.licdn.com/dms/image/C4D03AQGcjUCUcjM8Qg/profile-displayphoto-shrink_100_100/0/1658155159137?e=1721865600&v=beta&t=pTji-JOnCixqoa7RUL9v2qO1OyfHZSDuqRdxPKmuN2I" />
        <View>
          <Text
            style={{ fontSize: theme.fontSizes.md, color: theme.colors.text }}
          >
            Ola,
          </Text>
          <Headline
            style={{
              fontWeight: "bold",
              color: theme.colors.text,
              fontSize: theme.fontSizes.md,
            }}
          >
            Leonardo
          </Headline>
        </View>
      </Row>
    </View>
  );
}
