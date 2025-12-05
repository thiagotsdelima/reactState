export default class Duracao {
  static duracaoDe(segundos: number): string {
    return Math.floor(segundos / 60) + 'm'
  }
}
