import { Text, View } from "react-native";
import Flex from "@/components/flex-example";
import FlexDirectionBasics from "@/components/flex-direction";
import JustifyContentBasics from "@/components/justify-content";
import AlignItemsLayout from "@/components/align-items";
import AlignSelfLayout from "@/components/align-self";
import AlignContentLayout from "@/components/align-content";
import RowGapAndColumnGap from "@/components/gap";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {/* <Flex /> */}
      {/* <FlexDirectionBasics /> */}
      {/* <JustifyContentBasics /> */}
      {/* <AlignItemsLayout /> */}
      {/* <AlignSelfLayout /> */}
      {/* <AlignContentLayout /> */}
      <RowGapAndColumnGap />
    </View>
  );
}
