import React from 'react';
import { FlatList, Text } from 'react-native';
import { useGetUsers } from '@hooks/users/useUsers';
import BaseSpinner from '@components/BaseSpinner';
import { RESPONSE_DATA_USER } from '@core/models/user';
import { CardUser } from '@features/users/components/CardUser';

const ListUsers = () => {
  const { data: dataUsers, isLoading } = useGetUsers();

  if (isLoading) {
    return <BaseSpinner />;
  }

  const renderCardUser = ({ item }: { item: RESPONSE_DATA_USER }) => (
    <CardUser user={item} />
  );

  return (
    <>
      <Text
        style={{
          marginHorizontal: 15,
          fontSize: 35,
          marginVertical: 15,
          fontWeight: 'bold',
        }}>
        Consulta y registro de usuario
      </Text>
      <FlatList
        keyExtractor={item => `card-user-${item.id}`}
        data={dataUsers}
        renderItem={renderCardUser}
      />
    </>
  );
};
export default ListUsers;
