declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*/blogs.json' {
  type blog = {
    date: string,
    slug: string
  }

  const value: blog[]
  export default value
}
