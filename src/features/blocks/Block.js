import './Block.css'

function Block({block}) {
  const openingTag = '<' + block.type + '>'
  const closingTag = '</' + block.type + '>'

  let description
  if (block.desc) {
    description = <div className={'blocks-block-description'}>{block.desc}</div>
  }

  function toggleDesc(e) {
    const parentCategory = e.target.parentNode
    const categoryHeight = parseInt(parentCategory.style.maxHeight)
    const descDiv = e.target.querySelector('.blocks-block-description')
    if (descDiv) {
      descDiv.classList.toggle('unrolled')
      const unrolled = descDiv.classList.contains('unrolled')
      descDiv.style = unrolled ? 'display: block' : 'display: none'
      const descHeight = descDiv.clientHeight
      const newHeight = categoryHeight + descHeight + 'px'
      const oldHeight = categoryHeight + 'px'
      console.log(newHeight)
      console.log(oldHeight)
      parentCategory.style = unrolled ? 'max-height: ' + newHeight : 'max-height: ' + oldHeight
    }
  }

  return (
    <div className={'blocks-block'} id={block.type + '-Block'} onClick={toggleDesc}>
      <span style={{pointerEvents: "none"}}>
        <span className={'blocks-block-tag tag-open'}>{openingTag}</span>
        {block.paired ? <span className={'blocks-block-tag tag-close'}>{closingTag}</span> : ''}
        {description}
      </span>
    </div>
  )
}

export default Block
