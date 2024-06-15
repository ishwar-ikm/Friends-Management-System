import React, { useEffect, useState } from 'react'
import { Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import UserCard from './UserCard';
import { BASE_URL } from '../App';

const UserGrid = ({ users, setUsers }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`${BASE_URL}/friends`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(res.error);
        }

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }
    getUser();
  }, [])

  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers}/>
        ))}
      </Grid>

      {loading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"x1"} />
        </Flex>
      )}

      {!loading && users.length === 0 && (
        <Flex justifyContent={"center"}>
          <Text fontSize={"xl"}>
            <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
              Poor you! 🥺
            </Text>
            No friends found.
          </Text>
        </Flex>
      )}

    </>
  )
}

export default UserGrid
