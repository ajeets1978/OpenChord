import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationScreenProp } from "react-navigation"
import { FlatList } from "react-native-gesture-handler";
import { Artist } from '../db'
import ListItem from "../components/ListItem";
import { removeArtist } from "../utils/removeArtist";
import TextInputModal from "../components/TextInputModal";

interface Props {
  navigation: NavigationScreenProp<any, any>
}
const ArtistList = (props: Props) => {
  const [artists, setArtists] = useState(Artist.getAll())
  const [error, setError] = useState<string | null>(null)
  const [showEditArtistModal, setShowEditArtistModal] = useState(false)
  const [artistEditName, setArtistEditName] = useState<string>('')
  const [artistEditId, setArtistEditId] = useState<string | null>(null)

  function onSelectArtist(id: string, name: string) {
    props.navigation.navigate('ArtistView', { id, title: name })
  }
  function onPressDeleteArtist(id: string) {
    removeArtist(id, () => {
      setArtists(Artist.getAll())
    })
  }
  function onPressEditArtist(id: string, name: string) {
    setError(null)
    setArtistEditId(id)
    setArtistEditName(name)
    setShowEditArtistModal(true)
  }
  function onSubmitArtistName() {
    try {
      if (artistEditName == '') {
        throw new Error('Empty name not allowed')
      } else if (artistEditId) {
        Artist.update(artistEditId, artistEditName)
        setShowEditArtistModal(false)
        setArtists(Artist.getAll())
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        throw e
      }
    }
  }

  useEffect(() => {
    const didBlurSubscription = props.navigation.addListener(
      'didFocus',
      payload => {
        setArtists(Artist.getAll())
      }
    )
    return () => didBlurSubscription.remove()
  }, [artists])

  return (
    <View>
      <TextInputModal
        error={error}
        value={artistEditName}
        onChange={(value) => setArtistEditName(value)}
        enabled={showEditArtistModal}
        onDismiss={() => {
          setError(null)
          setShowEditArtistModal(false)
        }}
        onSubmit={onSubmitArtistName}
      />
      <FlatList
        data={artists}
        renderItem={({ item }) => {
          return (
            <ListItem
              key={item.id!}
              title={item.name}
              onPress={() => onSelectArtist(item.id!, item.name)}
              options={[
                { title: 'Edit', onPress: () => onPressEditArtist(item.id, item.name) },
                { title: 'Delete', onPress: () => onPressDeleteArtist(item.id!) }
              ]} />
          )
        }}
      />
    </View>
  );
}

export default ArtistList