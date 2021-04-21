import BlocksCategory from "./BlocksCategory"
import './BlocksToolbox.css'

function BlocksToolbox({categories}) {
  return (
    <div className={'blocks-toolbox'}>
      {categories.map(category => {
        return <BlocksCategory
          key={category.id}
          name={category.name}
          highlight={category.highlight}
          blocks={category.blocks}/>
      })}
    </div>
  )
}

export default BlocksToolbox
