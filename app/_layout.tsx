import { useState } from "react";
import "../global.css";
import { Button, Text, View } from 'react-native';

export default function RootLayout() {
  const [view, setView] = useState<boolean>(false);

  return (
    <View className="flex-1">
      {view && <Text className='p-2 text-5xl '>
        Shoaib teri _________
        MInhaz teri ________
      </Text>
      }
      <View className="top-[40%]">
        <Button title="Click Me" onPress={() => setView(!view)} />
      </View>
    </View>
  );
}
