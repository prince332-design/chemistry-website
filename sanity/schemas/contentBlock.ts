import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaSuperscript, FaSubscript, FaHighlighter } from 'react-icons/fa'
import { BiLink, BiAlignLeft, BiAlignMiddle, BiAlignRight, BiAlignJustify } from 'react-icons/bi'
import { BsListUl, BsListOl, BsTypeH1, BsTypeH2, BsTypeH3, BsTypeH4, BsTypeH5, BsTypeH6, BsQuote } from 'react-icons/bs'
import { MdTableRows, MdImage, MdVideoLibrary, MdAudiotrack, MdAttachFile } from 'react-icons/md'
import { RiTextDirectionL, RiTextDirectionR } from 'react-icons/ri'

export default {
  name: 'contentBlock',
  title: 'Content Block',
  type: 'array',
  of: [
    // ===== TEXT BLOCKS =====
    {
      type: 'block',
      icon: FaBold,
      styles: [
        { title: 'Normal', value: 'normal', icon: FaBold },
        { title: 'Heading 1', value: 'h1', icon: BsTypeH1 },
        { title: 'Heading 2', value: 'h2', icon: BsTypeH2 },
        { title: 'Heading 3', value: 'h3', icon: BsTypeH3 },
        { title: 'Heading 4', value: 'h4', icon: BsTypeH4 },
        { title: 'Heading 5', value: 'h5', icon: BsTypeH5 },
        { title: 'Heading 6', value: 'h6', icon: BsTypeH6 },
        { title: 'Quote', value: 'blockquote', icon: BsQuote },
        { title: 'Left', value: 'left', icon: BiAlignLeft },
        { title: 'Center', value: 'center', icon: BiAlignMiddle },
        { title: 'Right', value: 'right', icon: BiAlignRight },
        { title: 'Justify', value: 'justify', icon: BiAlignJustify },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong', icon: FaBold },
          { title: 'Italic', value: 'em', icon: FaItalic },
          { title: 'Underline', value: 'underline', icon: FaUnderline },
          { title: 'Strikethrough', value: 'strike-through', icon: FaStrikethrough },
          { title: 'Superscript', value: 'sup', icon: FaSuperscript },
          { title: 'Subscript', value: 'sub', icon: FaSubscript },
          { title: 'Highlight', value: 'highlight', icon: FaHighlighter },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            icon: BiLink,
            fields: [
              { name: 'href', type: 'url', title: 'URL' },
              { name: 'internal', type: 'boolean', title: 'Internal Link' },
            ],
          },
        ],
      },
      lists: [
        { title: 'Bullet', value: 'bullet', icon: BsListUl },
        { title: 'Numbered', value: 'number', icon: BsListOl },
      ],
    },

    // ===== TEXT DIRECTION =====
    {
      type: 'object',
      name: 'textDirection',
      title: 'Text Direction',
      icon: RiTextDirectionL,
      fields: [
        {
          name: 'direction',
          type: 'string',
          options: {
            list: [
              { title: 'LTR', value: 'ltr', icon: RiTextDirectionL },
              { title: 'RTL', value: 'rtl', icon: RiTextDirectionR },
            ],
          },
        },
      ],
    },

    // ===== TABLES =====
    {
      type: 'table',
      name: 'table',
      title: 'Table',
      icon: MdTableRows,
    },

    // ===== IMAGES =====
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      icon: MdImage,
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text' },
        { name: 'caption', type: 'string', title: 'Caption' },
        { name: 'link', type: 'url', title: 'Image Link' },
        {
          name: 'alignment',
          type: 'string',
          title: 'Alignment',
          options: { list: ['left', 'center', 'right'] },
        },
      ],
    },

    // ===== FILES =====
    {
      type: 'file',
      name: 'file',
      title: 'File',
      icon: MdAttachFile,
      fields: [
        { name: 'title', type: 'string', title: 'File Title' },
        { name: 'downloadable', type: 'boolean', title: 'Downloadable', initialValue: true },
      ],
    },

    // ===== VIDEOS =====
    {
      type: 'object',
      name: 'video',
      title: 'Video',
      icon: MdVideoLibrary,
      fields: [
        { name: 'url', type: 'url', title: 'Video URL (YouTube/Vimeo)' },
        {
          name: 'platform',
          type: 'string',
          title: 'Platform',
          options: { list: ['YouTube', 'Vimeo', 'Other'] },
        },
        { name: 'caption', type: 'string', title: 'Caption' },
      ],
    },

    // ===== AUDIO =====
    {
      type: 'object',
      name: 'audio',
      title: 'Audio',
      icon: MdAudiotrack,
      fields: [
        { name: 'url', type: 'url', title: 'Audio URL' },
        { name: 'title', type: 'string', title: 'Audio Title' },
      ],
    },
  ],
}
