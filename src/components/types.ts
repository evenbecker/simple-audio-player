export interface AudioPlayerOption {
  src: string //audio source
  title?: string //audio title
  autoPlay?: boolean
  coverImage?: string //cover image
  progressBarColor?: string //progress bar color
  indicatorColor?: string //indicator color
  drkmode: boolean
}

export const AudioPlayerOptionDefault: AudioPlayerOption = {
  src: '',
  title: '',
  autoPlay: false,
  coverImage: '',
  progressBarColor: '#0D6EFD',
  indicatorColor: '#0D6EFD',
  drkmode: false,
}
