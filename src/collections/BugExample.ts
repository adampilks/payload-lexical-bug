import { FAQBlock } from '@/blocks/FAQBlock'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const BugExample: CollectionConfig = {
  slug: 'bug-example',
  fields: [
    {
      type: 'richText',
      name: 'description',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [FAQBlock],
          }),
        ],
      }),
    },
  ],
}
