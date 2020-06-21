export const languages = ['en_us', 'pt_br'] as const;
export const sentences = [
  'language_name',
  'language_english_name',
  'language',
  'settings',
  'playlists',
  'online_search',
  'artists',
  'songs',
  'preview',
  'add_songs',
  'edit_song',
  'edit',
  'delete',
  'go_to_online_search',
  'go_to_artist',
  'share',
  'create_new_playlist',
  'you_havent_created_any_playlist_yet',
  'you_havent_downloaded_any_song_yet',
  'search',
  'create',
  'playlist_name',
  'playlist_edit',
  'create_backup',
  'create_backup_description',
  'import',
  'import_description',
  'invalid_title',
  'invalid_artist',
  'invalid_content',
  'song_title',
  'artist_name',
  'chords_over_lyrics',
  'auto_scroll',
  'show_tabs',
  'page_turner',
  'playlists_not_found',
  'close',
  'info',
  'playlist_saved',
  'share_message',
  'empty_name_not_allowed',
  'artist_or_song_not_found',
  'permission_title',
  'permission_message',
  'permission_button_negative',
  'permission_button_positive',
  'permission_denied',
  'success',
  'backup_saved_at_path',
  'songs_imported_successfully',
  'song_downloaded',
  'text_size',
  'show_tabs_by_default',
  'hide_tabs_by_default',
  'enable_page_turner_by_default',
  'disable_page_turner_by_default',
  'sort_by_title',
  'sort_by_artist',
  'custom_sort',
  'developed_by',
  'home',
  'online_search_not_available',
] as const;
export type SentenceID = typeof sentences[number];
export type LanguageID = typeof languages[number];
export type Translation = Record<SentenceID, string>
export type Languages = Record<LanguageID, Translation>

const translations: Languages = {
  en_us: {
    language_name: "English",
    language_english_name: "English",
    language: 'Language',
    settings: 'Settings',
    playlists: 'Playlists',
    artists: 'Artists',
    online_search: 'Online Search',
    songs: 'Songs',
    preview: 'Preview',
    add_songs: 'Add songs',
    edit_song: 'Edit Song',
    edit: 'Edit',
    delete: 'Delete',
    go_to_online_search: 'Go to Online Search',
    go_to_artist: 'Go To Artist',
    share: 'Share',
    create_new_playlist: 'Create New Playlist',
    you_havent_created_any_playlist_yet: "You haven't created any playlist yet",
    you_havent_downloaded_any_song_yet: "You haven't downloaded any song yet",
    search: 'Search',
    create: 'Create',
    playlist_name: 'Playlist name',
    playlist_edit: 'Playlist Edit',
    create_backup: "Create Backup",
    create_backup_description: "Pack all songs and playlists into a .openchord file",
    import: 'Import',
    import_description: 'Backups, Playlists and .openchord files',
    artist_name: 'Artist Name',
    chords_over_lyrics: 'Chords over Lyrics',
    invalid_artist: 'Invalid Artist',
    invalid_content: 'Invalid Content',
    invalid_title: 'Invalid Title',
    song_title: 'Song Title',
    auto_scroll: 'Auto Scroll',
    page_turner: 'Page Turner',
    playlists_not_found: 'Playlists not found',
    show_tabs: 'Show Tabs',
    close: 'Close',
    info: 'Info',
    playlist_saved: 'Playlist saved',
    share_message: 'Download OpenChord app, go to Settings > Import and select this file',
    empty_name_not_allowed: 'Empty name not allowed',
    artist_or_song_not_found: 'Artist or song not found',
    permission_title: 'Open Chord App Storage Permission',
    permission_message: 'Open Chord App needs access to your storage so you can save your backups.',
    permission_button_positive: 'OK',
    permission_button_negative: 'Cancel',
    permission_denied: 'Write store permission denied',
    success: 'Success',
    backup_saved_at_path: 'Backup saved at path',
    songs_imported_successfully: 'Songs imported successfully',
    song_downloaded: 'Song downloaded',
    text_size: 'Text size',
    show_tabs_by_default: 'Show tabs by default',
    hide_tabs_by_default: 'Hide tabs by default',
    enable_page_turner_by_default: 'Enable page turner by default',
    disable_page_turner_by_default: 'Disable page turner by default',
    sort_by_title: 'Sort by title',
    sort_by_artist: 'Sort by artist',
    custom_sort: 'Custom sort',
    developed_by: 'Developed by',
    home: 'Home',
    online_search_not_available: 'Sorry, ONLINE SEARCH is not available for IOS yet',
  },
  pt_br: {
    language_name: "Português (Brasil)",
    language_english_name: "Portuguese (Brazil)",
    language: 'Idioma',
    settings: "Configurações",
    playlists: 'Listas',
    artists: 'Artistas',
    online_search: 'Busca Online',
    songs: 'Músicas',
    preview: 'Pré-visualização',
    add_songs: 'Adicionar Músicas',
    edit_song: 'Editar Música',
    edit: 'Editar',
    delete: 'Remover',
    go_to_online_search: 'Ir para Busca Online',
    go_to_artist: 'Ir para Artista',
    share: 'Compartilhar',
    create_new_playlist: 'Criar nova Playlist',
    you_havent_created_any_playlist_yet: 'Você não criou nenhuma playlist ainda',
    you_havent_downloaded_any_song_yet: "Você não baixou nenhuma música ainda",
    search: 'Busca',
    create: 'Criar',
    playlist_name: 'Nome da Playlist',
    playlist_edit: 'Editar Playlist',
    create_backup: 'Criar Backup',
    create_backup_description: 'Empacota todas as músicas e playlists em um arquivo .openchord',
    import: 'Importar',
    import_description: 'Backups, Playlist e arquivos .openchord',
    artist_name: 'Nome do Artista',
    chords_over_lyrics: 'Acordes acima da letra',
    invalid_artist: 'Artista inválido',
    invalid_title: 'Título inválido',
    invalid_content: 'Conteúdo inválido',
    song_title: 'Título da Música',
    auto_scroll: 'Rolagem automática',
    page_turner: 'Passador de páginas',
    playlists_not_found: 'Playlists não encontradas',
    show_tabs: 'Mostrar tablaturas',
    close: 'Fechar',
    info: 'Aviso',
    playlist_saved: 'Playlist salva',
    share_message: 'Baixe o aplicativo OpenChord, vá para Settings > Import e selecione este arquivo',
    empty_name_not_allowed: 'Nome vazio não permitido',
    artist_or_song_not_found: 'Artista ou Música não encontrada',
    permission_title: 'Permissão de Armazenamento do Open Chord App',
    permission_message: 'Open Chord App precisa acessar seu armazenamento para salvar seus backups.',
    permission_button_positive: 'OK',
    permission_button_negative: 'Cancelar',
    permission_denied: 'Permissão de armazenamento negada',
    success: 'Sucesso',
    backup_saved_at_path: 'Backup salvo no caminho',
    songs_imported_successfully: 'Músicas importadas com sucesso',
    song_downloaded: 'Música baixada',
    text_size: 'Tamanho do texto',
    show_tabs_by_default: 'Mostrar tablaturas por padrão',
    hide_tabs_by_default: 'Esconder tablaturas por padrão',
    enable_page_turner_by_default: 'Ativar passa-páginas por padrão',
    disable_page_turner_by_default: 'Desativar passa-páginas por padrão',
    sort_by_title: 'Ordenar por título',
    sort_by_artist: 'Ordenar por artista',
    custom_sort: 'Classificação personalizada',
    developed_by: 'Desenvolvido por',
    home: 'Início',
    online_search_not_available: 'Desculpe, a BUSCA ONLINE ainda não está disponivel para IOS',
  }
}
export default translations