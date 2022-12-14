interface VideoInterface {
  date: string;
  id: string;
  url: string;
  description: string;
  author: {
    name: string;
    avatar: string;
    username: string;
    biography: string;
  }
  stats: {
    views: number;
    likes: number;
    comments: number;
    saves: number;
    shares: number;
  }
  song: {
    name: string;
    artist: string;
    cover: string;
  }

}

export default VideoInterface
