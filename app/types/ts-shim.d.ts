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

type articleInfo = {
  link: string,
  attributes: attributes
}

type attributes = {
  _meta: meta,
  date: string,
  title: string,
  update: string
}

type meta = {
  resourcePath: string
}
