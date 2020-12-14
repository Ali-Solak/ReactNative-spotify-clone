export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
    id: string;
    name: string;
    imageUri: string;
    by: string;
    artistHeadline: string;
    numberOfLikes: number;
};

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
}

