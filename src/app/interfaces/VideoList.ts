export interface IVideoList {
  selectedVideo: { embedUrl: string; title: string } | null;
  onSelect: (video: { embedUrl: string; title: string }) => void;
  onLoadFirstVideo?: (video: { embedUrl: string; title: string }) => void;
}
