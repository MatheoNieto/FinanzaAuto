import React from 'react';
import { FlatList, Text } from 'react-native';
import { useGetUsers } from '@hooks/users/useUsers';
import BaseSpinner from '@components/BaseSpinner';
import { RESPONSE_DATA_USER } from '@core/models/user';

const ListUsers = () => {
  const { data: dataUsers, isLoading } = useGetUsers();

  if (isLoading) {
    return <BaseSpinner />;
  }

  const renderCardUser = ({ item }: { item: RESPONSE_DATA_USER }) => (
    <Text>{item.firstName}</Text>
  );

  return <FlatList data={dataUsers} renderItem={renderCardUser} />;
};
export default ListUsers;
