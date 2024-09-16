import { type TArticle } from "~/types"

export const useArticleStore = defineStore('articleStore', () => {
  const articles = ref<TArticle[]>([])

  async function getArticles() {
    try {
      const response = await $fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
      articles.value = response as TArticle[]
    } catch (error) {
      console.error('Error in article store: ', error)
    }
  }
  getArticles()
  return { articles, getArticles }
})
