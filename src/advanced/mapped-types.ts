type Artist = { name: string; bio: string };

type Subscriber<T> = {
  [Property in keyof T]: (newValue: T[Property]) => void;
};

type SubscriberV2<T> = {
  [Property in keyof T]: string;
};

// NOTE: In this case Subscriber maps each property of Artist.
type ArtistSub = Subscriber<Artist>;
type ArtistSubV2 = SubscriberV2<Artist>;

const artistSub: ArtistSub = {
  bio: (newValue) => {},
  name: (newValue) => {},
};

const artistSub2: ArtistSubV2 = {
  bio: "demo",
  name: "demo",
};

// --------------

type ContentTypes = "news" | "blog" | "video";
type Content = {
  name: string;
};

// generic factory type with a inferred list of methods
// based on the shape of the given Config
type ContentFactory<Config extends Record<ContentTypes, boolean>> = {
  [k in string & keyof Config as Config[k] extends true
    ? `create${Capitalize<k>}`
    : never]: () => Content;
};

// config for indicating what content types are enabled
const config = { news: true, blog: true, video: false } satisfies Record<
  ContentTypes,
  boolean
>;

type Factory = ContentFactory<typeof config>;

const configFactory: Factory = {
  createNews: () => {
    return {
      name: "Jorge",
    };
  },
  createBlog: () => {
    return {
      name: "Jorge",
    };
  },
};

export {};
