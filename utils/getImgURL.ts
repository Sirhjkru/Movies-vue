/** Отдает полный url картинки */
export const getImgURL = (endpoint: string): string => {
  return `https://api.nomoreparties.co${endpoint}`
}
