import React from 'react';
import { RESPONSE_DATA_USER } from '@core/models/user';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '@features/users/components/CardUser/CardUser.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  user: RESPONSE_DATA_USER;
};
const CardUser: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Image
            style={styles.imageUser}
            source={{ uri: user.picture }}
            resizeMode="cover"
            width={140}
            height={140}
          />
          <View style={{ width: '53%' }}>
            <Text
              numberOfLines={2}
              style={
                styles.textName
              }>{`${user.firstName} ${user.lastName}`}</Text>
            <Text style={styles.textId}>ID: {user.id}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => null}
            activeOpacity={1}
            style={styles.contentFooter}>
            <Text style={styles.textFooter}>Ver Detalle</Text>
            <Ionicons name="chevron-forward" size={15} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CardUser;
