import React from 'react'
import components from '../../components/dynamic'

function applyTags(tags = [], children, noPTag = false, key) {
  let child = children

  for (const tag of tags) {
    const props: { [key: string]: any } = { key }
    let tagName = tag[0]

    if (noPTag && tagName === 'p') tagName = React.Fragment
    if (tagName === 'c') tagName = 'code'
    if (tagName === '_') {
      tagName = 'span'
      props.className = 'underline'
    }
    if (tagName === 'a') {
      props.href = tag[1]
    }
    if (tagName === 'e') {
      tagName = components.Equation
      props.displayMode = false
      child = tag[1]
    }

    child = React.createElement(components[tagName] || tagName, props, child)
  }
  return child
}

function getChildren(text: any[], noPTag = false) {
  const children = []
  let key = 0

  for (const textItem of text) {
    key++
    // if (textItem.length === 1) {
    if (typeof textItem === 'string') {
      children.push(textItem)
      continue
    }
    children.push(applyTags(textItem[1], textItem[0], noPTag, key))
  }
  return children;
}

export function textBlock(text = [], noPTag = false, mainKey) {
  const children = getChildren(text, noPTag)
  return React.createElement(
    noPTag ? React.Fragment : components.p,
    { key: mainKey },
    ...children,
    noPTag
  )
}

export function quoteBlock(text = [], mainKey) {
  const children = getChildren(text, false)

  return React.createElement(
    components.blockquote,
    { key: mainKey },
    ...children,
  )
}

export function previewBlock(text, mainKey, className) {
  const children = getChildren(text, true)

  return React.createElement(
    components.p,
    {
      key: mainKey,
      className: className,
    },
    ...children,
    true
  )
}
