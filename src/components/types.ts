export interface AudioPlayerOption {
  src: string //audio source
  title?: string //audio title
  autoPlay?: boolean
  coverImage?: string //cover image
  progressBarColor?: string //progress bar color
  indicatorColor?: string //indicator color
}

export const AudioPlayerOptionDefault: AudioPlayerOption = {
  src: '',
  title: '',
  autoPlay: false,
  coverImage: '',
  progressBarColor: '#5679ad',
  indicatorColor: '#5679ad',
}
