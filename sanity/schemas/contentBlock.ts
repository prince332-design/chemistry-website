import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaSuperscript,
  FaSubscript,
  FaHighlighter,
  FaFlask,
} from 'react-icons/fa'

import {
  BiLink,
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  BiAlignJustify,
} from 'react-icons/bi'

import {
  BsListUl,
  BsListOl,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeH4,
  BsTypeH5,
  BsTypeH6,
  BsQuote,
  BsCode,
} from 'react-icons/bs'

import {
  MdTableRows,
  MdImage,
  MdVideoLibrary,
  MdAudiotrack,
  MdAttachFile,
  MdCalculate,
  MdCode,
  MdHorizontalRule,
  MdPageview,
} from 'react-icons/md'

import {
  RiTextDirectionL,
  RiTextDirectionR,
} from 'react-icons/ri'

export default {
  name: 'contentBlock',
  title: 'Content Block',
  type: 'array',

  of: [
    // =========================================================
    // TEXT / RICH TEXT
    // =========================================================

    {
      type: 'block',

      styles: [
        {
          title: 'Normal',
          value: 'normal',
        },
        {
          title: 'Heading 1',
          value: 'h1',
          icon: BsTypeH1,
        },
        {
          title: 'Heading 2',
          value: 'h2',
          icon: BsTypeH2,
        },
        {
          title: 'Heading 3',
          value: 'h3',
          icon: BsTypeH3,
        },
        {
          title: 'Heading 4',
          value: 'h4',
          icon: BsTypeH4,
        },
        {
          title: 'Heading 5',
          value: 'h5',
          icon: BsTypeH5,
        },
        {
          title: 'Heading 6',
          value: 'h6',
          icon: BsTypeH6,
        },
        {
          title: 'Quote',
          value: 'blockquote',
          icon: BsQuote,
        },
        {
          title: 'Left',
          value: 'left',
          icon: BiAlignLeft,
        },
        {
          title: 'Center',
          value: 'center',
          icon: BiAlignMiddle,
        },
        {
          title: 'Right',
          value: 'right',
          icon: BiAlignRight,
        },
        {
          title: 'Justify',
          value: 'justify',
          icon: BiAlignJustify,
        },
      ],

      marks: {
        decorators: [
          {
            title: 'Bold',
            value: 'strong',
            icon: FaBold,
          },
          {
            title: 'Italic',
            value: 'em',
            icon: FaItalic,
          },
          {
            title: 'Underline',
            value: 'underline',
            icon: FaUnderline,
          },
          {
            title: 'Strikethrough',
            value: 'strike-through',
            icon: FaStrikethrough,
          },
          {
            title: 'Superscript',
            value: 'sup',
            icon: FaSuperscript,
          },
          {
            title: 'Subscript',
            value: 'sub',
            icon: FaSubscript,
          },
          {
            title: 'Highlight',
            value: 'highlight',
            icon: FaHighlighter,
          },
        ],

        annotations: [
          {
            name: 'link',
            type: 'object',
            icon: BiLink,

            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
              },
              {
                name: 'internal',
                title: 'Internal Link',
                type: 'boolean',
              },
            ],
          },
        ],
      },

      lists: [
        {
          title: 'Bullet',
          value: 'bullet',
          icon: BsListUl,
        },
        {
          title: 'Numbered',
          value: 'number',
          icon: BsListOl,
        },
      ],
    },

    // =========================================================
    // TEXT DIRECTION
    // =========================================================

    {
      type: 'object',
      name: 'textDirection',
      title: 'Text Direction',
      icon: RiTextDirectionL,

      fields: [
        {
          name: 'direction',
          title: 'Direction',
          type: 'string',

          options: {
            list: [
              {
                title: 'Left to Right (LTR)',
                value: 'ltr',
                icon: RiTextDirectionL,
              },
              {
                title: 'Right to Left (RTL)',
                value: 'rtl',
                icon: RiTextDirectionR,
              },
            ],
          },

          initialValue: 'ltr',
        },
      ],
    },

    // =========================================================
    // TABLE
    // =========================================================

    {
      type: 'table',
      name: 'table',
      title: 'Table',
      icon: MdTableRows,
    },

    // =========================================================
    // IMAGE
    // =========================================================

    {
      type: 'image',
      name: 'image',
      title: 'Image',
      icon: MdImage,

      options: {
        hotspot: true,
      },

      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Image Link',
          type: 'url',
        },
        {
          name: 'alignment',
          title: 'Alignment',
          type: 'string',

          options: {
            list: [
              {
                title: 'Left',
                value: 'left',
              },
              {
                title: 'Center',
                value: 'center',
              },
              {
                title: 'Right',
                value: 'right',
              },
            ],
          },

          initialValue: 'center',
        },
      ],
    },

    // =========================================================
    // FILE
    // =========================================================

    {
      type: 'file',
      name: 'file',
      title: 'File',
      icon: MdAttachFile,

      fields: [
        {
          name: 'title',
          title: 'File Title',
          type: 'string',
        },
        {
          name: 'downloadable',
          title: 'Downloadable',
          type: 'boolean',
          initialValue: true,
        },
      ],
    },

    // =========================================================
    // VIDEO
    // =========================================================

    {
      type: 'object',
      name: 'video',
      title: 'Video',
      icon: MdVideoLibrary,

      fields: [
        {
          name: 'url',
          title: 'Video URL',
          type: 'url',
        },
        {
          name: 'platform',
          title: 'Platform',
          type: 'string',

          options: {
            list: [
              {
                title: 'YouTube',
                value: 'youtube',
              },
              {
                title: 'Vimeo',
                value: 'vimeo',
              },
              {
                title: 'Other',
                value: 'other',
              },
            ],
          },
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
    },

    // =========================================================
    // AUDIO
    // =========================================================

    {
      type: 'object',
      name: 'audio',
      title: 'Audio',
      icon: MdAudiotrack,

      fields: [
        {
          name: 'url',
          title: 'Audio URL',
          type: 'url',
        },
        {
          name: 'title',
          title: 'Audio Title',
          type: 'string',
        },
      ],
    },

    // =========================================================
    // CHEMISTRY BLOCK
    // =========================================================

    {
      type: 'object',
      name: 'chemistry',
      title: 'Chemistry Block',
      icon: FaFlask,

      fields: [
        {
          name: 'formula',
          title: 'Chemical Formula',
          type: 'text',
        },
        {
          name: 'equation',
          title: 'Chemical Equation',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Chemical Structure Image',
          type: 'image',

          options: {
            hotspot: true,
          },
        },
      ],
    },

    // =========================================================
    // EQUATION
    // =========================================================

    {
      type: 'object',
      name: 'equation',
      title: 'Equation',
      icon: MdCalculate,

      fields: [
        {
          name: 'latex',
          title: 'LaTeX Equation',
          type: 'text',
        },
        {
          name: 'format',
          title: 'Format',
          type: 'string',

          options: {
            list: [
              {
                title: 'Inline',
                value: 'inline',
              },
              {
                title: 'Block',
                value: 'block',
              },
            ],
          },

          initialValue: 'block',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
    },

    // =========================================================
    // CODE BLOCK
    // =========================================================

    {
      type: 'object',
      name: 'codeBlock',
      title: 'Code Block',
      icon: BsCode,

      fields: [
        {
          name: 'code',
          title: 'Code',
          type: 'text',
        },
        {
          name: 'language',
          title: 'Language',
          type: 'string',

          options: {
            list: [
              {
                title: 'JavaScript',
                value: 'javascript',
              },
              {
                title: 'TypeScript',
                value: 'typescript',
              },
              {
                title: 'Python',
                value: 'python',
              },
              {
                title: 'HTML',
                value: 'html',
              },
              {
                title: 'CSS',
                value: 'css',
              },
              {
                title: 'Bash',
                value: 'bash',
              },
              {
                title: 'JSON',
                value: 'json',
              },
              {
                title: 'SQL',
                value: 'sql',
              },
            ],
          },
        },
      ],
    },

    // =========================================================
    // HORIZONTAL LINE
    // =========================================================

    {
      type: 'object',
      name: 'horizontalLine',
      title: 'Horizontal Line',
      icon: MdHorizontalRule,

      fields: [
        {
          name: 'style',
          title: 'Line Style',
          type: 'string',

          options: {
            list: [
              {
                title: 'Solid',
                value: 'solid',
              },
              {
                title: 'Dashed',
                value: 'dashed',
              },
              {
                title: 'Dotted',
                value: 'dotted',
              },
            ],
          },

          initialValue: 'solid',
        },
      ],
    },

    // =========================================================
    // PAGE BREAK
    // =========================================================

    {
      type: 'object',
      name: 'pageBreak',
      title: 'Page Break',
      icon: MdPageview,

      fields: [
        {
          name: 'enabled',
          title: 'Page Break',
          type: 'boolean',
          initialValue: true,
        },
      ],
    },
  ],
}