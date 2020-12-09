import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import { useEffect } from 'react'

const Code = ({ children, language = 'javascript' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <pre>
        <code className="language-yaml">
          {children}
        </code>
      </pre>
    </>
  )
}

export default Code
