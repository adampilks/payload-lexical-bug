import { Block } from 'payload'

export const FAQBlock: Block = {
  slug: 'FAQ',
  interfaceName: 'FAQBlock',
  fields: [
    {
      name: 'faqs',
      interfaceName: 'FAQs',
      label: 'FAQs',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'richText',
          required: true,
        },
      ],
    },
  ],
}
