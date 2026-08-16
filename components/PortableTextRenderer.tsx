import { PortableText } from '@portabletext/react'

const components = {
  types: {
    image: ({ value }: any) => (
      <img
        src={value.asset.url}
        alt={value.alt || ''}
        className="max-w-full h-auto rounded-lg my-4"
        style={{ float: value.alignment || 'none' }}
      />
    ),
    table: ({ value }: any) => (
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-700">
          <tbody>
            {value.rows?.map((row: any, i: number) => (
              <tr key={i}>
                {row.cells?.map((cell: any, j: number) => (
                  <td key={j} className="border border-slate-300 dark:border-slate-700 p-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {value.caption && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{value.caption}</p>}
      </div>
    ),
    code: ({ value }: any) => (
      <pre className="bg-slate-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
        <code>{value.code}</code>
      </pre>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-cyan-600 dark:text-cyan-400 underline hover:no-underline">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold my-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold my-2">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold my-2">{children}</h4>,
    h5: ({ children }: any) => <h5 className="text-base font-bold my-1">{children}</h5>,
    h6: ({ children }: any) => <h6 className="text-sm font-bold my-1">{children}</h6>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-cyan-500 pl-4 italic my-4 text-slate-600 dark:text-slate-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 my-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 my-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="my-1">{children}</li>,
    number: ({ children }: any) => <li className="my-1">{children}</li>,
  },
}

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}