import Block from "./Block"
import './BlocksCategory.css'

function BlocksCategory({name, highlight, blocks}) {

  function toggleCategory(e) {
    const categoryBlocksDiv = e.target.nextElementSibling
    let categoryBlocksDivInnerHeight = 0
    categoryBlocksDiv.childNodes.forEach(block => {
      categoryBlocksDivInnerHeight += block.clientHeight
    })
    categoryBlocksDiv.classList.toggle('unrolled')
    categoryBlocksDiv.style = categoryBlocksDiv.classList.contains('unrolled') ? 'max-height: ' + categoryBlocksDivInnerHeight + 'px' : 'max-height: 0'
  }

  const categoryStyle = {
    borderLeft: '10px solid ' + highlight,
  }

  return (
    <div className={'blocks-category'} style={categoryStyle}>
      <span className={'blocks-category-title'} onClick={toggleCategory}>{name}</span>
      <div className={'blocks-category-blocks'}>
        {blocks.map(block => {
          return <Block key={block.type} block={block.type}/>
        })}
      </div>
    </div>
  )
}

export default BlocksCategory
