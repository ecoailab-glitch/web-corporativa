import { FC } from 'react'

interface SchemaProps {
  schema: object
}

const Schema: FC<SchemaProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default Schema
