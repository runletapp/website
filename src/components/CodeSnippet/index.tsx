import React, { useEffect, useState } from "react"

import Highlight, { defaultProps } from "prism-react-renderer"

import { useColorMode } from "@docusaurus/theme-common"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

import styles from "./styles.module.scss"

const CodeSnippet = (props: { language?: "javascript"; code: any }) => {
  const { siteConfig } = useDocusaurusContext()

  // @ts-ignore
  const { theme, darkTheme } = siteConfig.themeConfig.prism

  const [mounted, setMounted] = useState(false)
  // The Prism theme on SSR is always the default theme but the site theme
  // can be in a different mode. React hydration doesn't update DOM styles
  // that come from SSR. Hence force a re-render after mounting to apply the
  // current relevant styles. There will be a flash seen of the original
  // styles seen using this current approach but that's probably ok. Fixing
  // the flash will require changing the theming approach and is not worth it
  // at this point.
  useEffect(() => {
    setMounted(true)
  }, [])

  const { colorMode, setColorMode } = useColorMode()
  const lightModeTheme = theme
  const darkModeTheme = darkTheme || lightModeTheme
  const prismTheme = colorMode === "dark" ? darkModeTheme : lightModeTheme

  const { language = "javascript", code } = props

  return (
    <Highlight
      {...defaultProps}
      code={code}
      key={mounted.toString()}
      language={language}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${styles.code}`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeSnippet
