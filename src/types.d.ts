// Quando o type é declado(declare) em um arquivo .d.ts, não é preciso importar ele nos componentes
// pois o próprio typescript vai vir nesse arquivo e vai verificar onde ele esta sendo usado e colocar
// ele lá automaticamente

declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

declare type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}
