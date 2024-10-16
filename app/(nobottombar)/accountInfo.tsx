import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadPicture from "@/components/BottomSheet";

const AccountInfo = () => {
  const [pictureOpen, setPictureOpen] = React.useState(false);
  return (
    <SafeAreaView>
      <Text>AccountInfo Page</Text>
      <Button
        title='Open bottom sheet'
        onPress={() => {
          setPictureOpen(true);
        }}
      ></Button>
      {pictureOpen && <DownloadPicture />}
    </SafeAreaView>
  );
};

export default AccountInfo;
