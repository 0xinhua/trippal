import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'next-view-transitions'

type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>
type HeadingProps = ComponentPropsWithoutRef<'h1'>
type ParagraphProps = ComponentPropsWithoutRef<'p'>
type ListProps = ComponentPropsWithoutRef<'ul'>
type ListItemProps = ComponentPropsWithoutRef<'li'>
type AnchorProps = ComponentPropsWithoutRef<'a'>

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props: HeadingProps) => (
      <h1 className="font-medium pt-12 mb-0 text-4xl leading-tight fade-in" {...props} />
    ),
    h2: (props: HeadingProps) => (
      <h2 className="text-gray-800 font-medium mt-8 mb-3 text-3xl leading-snug" {...props} />
    ),
    h3: (props: HeadingProps) => (
      <h3 className="text-gray-800 font-medium mt-8 mb-3 text-2xl leading-snug" {...props} />
    ),
    h4: (props: HeadingProps) => <h4 className="font-medium text-xl leading-snug" {...props} />,
    p: (props: ParagraphProps) => (
      <p className="text-gray-800 leading-snug" {...props} />
    ),
    ol: (props: ListProps) => (
      <ol style={{ paddingLeft: '24px' }} className="text-gray-800 list-decimal pl-5 space-y-2" {...props} />
    ),
    ul: (props: ListProps) => (
      <ul style={{ paddingLeft: '24px' }} className="text-gray-800 list-disc pl-5 space-y-2" {...props} />
    ),
    li: (props: ListItemProps) => <li className="pl-1" {...props} />,
    em: (props: ComponentPropsWithoutRef<'em'>) => (
      <em className="font-medium" {...props} />
    ),
    strong: (props: ComponentPropsWithoutRef<'strong'>) => (
      <strong className="font-medium" {...props} />
    ),
    a: ({ href, children, ...props }: AnchorProps) => {
      const className = 'text-blue-500 underline decoration-2 hover:text-blue-700';
      if (href?.startsWith('/')) {
        return (
          <Link href={href} className={className} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith('#')) {
        return (
          <a href={href} className={className} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer 11"
          style={{ textDecoration: 'underline', textDecorationThickness: '1' }}
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    },
    Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
      <table>
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
    blockquote: (props: BlockquoteProps) => (
      <blockquote
        className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
        {...props}
      />
    ),
  }
}