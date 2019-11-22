import React, { useState, useEffect, FunctionComponent } from "react";
import { Text, FlatList, View, Button } from "react-native";
import { NavigationScreenProp, withNavigationFocus, NavigationScreenComponent } from "react-navigation"
import ListItem from "../components/ListItem";
import { removeSong } from "../utils/removeSong";
import { Playlist } from "../db/Playlist";
import { ROUTES } from "../AppNavigation";
import { NavigationStackOptions, NavigationStackProp } from "react-navigation-stack/lib/typescript/types";
import TouchableIcon from "../components/TouchableIcon";

interface Params {
  id: string
  title?: string
  onPressEditPlaylist: () => void
}
interface Props {
  navigation: NavigationScreenProp<any, Params>
  isFocused: boolean
}
const PlaylistView: FunctionComponent<Props> & NavigationScreenComponent<
  NavigationStackOptions,
  NavigationStackProp
> = (props: Props) => {
  let id = props.navigation.getParam('id')
  let playlist = Playlist.getById(id)!
  const [name] = useState(playlist.name)
  const [songs, setSongs] = useState(playlist.songs)

  function onSelectSong(id: string, title: string) {
    props.navigation.navigate('SongView', { id, title })
  }
  function onPressEditSong(id: string) {
    props.navigation.navigate('SongEdit', { id })
  }
  function onPressDeleteSong(id: string) {
    removeSong(id, () => {
      let playlist = Playlist.getById(id)!
      setSongs(playlist.songs)
    })
  }
  function onPressAddSongs() {
    props.navigation.navigate(ROUTES.PlaylistAddSongs, { id })
  }
  function onPressEditPlaylist() {
    props.navigation.navigate(ROUTES.PlaylistEdit, { id })
  }

  useEffect(() => {
    setSongs(playlist.songs)
  }, [props.isFocused])

  useEffect(() => {
    props.navigation.setParams({ 'onPressEditPlaylist': onPressEditPlaylist })
  }, [songs])

  return (
    <FlatList
      data={songs}
      ListHeaderComponent={() => {
        return (
          <Button onPress={onPressAddSongs} title="Add songs" />
        )
      }}
      renderItem={({ item }) => {
        return <ListItem
          key={item.id!}
          title={item.title}
          onPress={() => onSelectSong(item.id!, item.title)}
          options={[
            { title: 'Edit', onPress: () => onPressEditSong(item.id!) },
            { title: 'Delete', onPress: () => onPressDeleteSong(item.id!) }
          ]}
        />
      }}
    />
  );
}
PlaylistView.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableIcon onPress={navigation.getParam('onPressEditPlaylist')} name="pencil" />,
    title: navigation.getParam('title')
  }
}

export default withNavigationFocus(PlaylistView)