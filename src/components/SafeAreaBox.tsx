import React from 'react';

import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from 'react-native-safe-area-context';

type Props = NativeSafeAreaViewProps;

const SafeAreaBox = React.forwardRef<typeof SafeAreaView, Props>(
  (props, ref) => {
    //@ts-ignore ignore bad ref type
    return <SafeAreaView ref={ref} {...props} />;
  },
);

export type SafeAreaBoxProps = React.ComponentProps<typeof SafeAreaBox>;
export default SafeAreaBox;
