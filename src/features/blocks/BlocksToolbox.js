import BlocksCategory from "./BlocksCategory"
import './BlocksToolbox.css'

function BlocksToolbox() {
  const categoryStyles = [
    {
      id: 1,
      name: 'Blocks',
      highlight: '#4a90e2'
    },
    {
      id: 2,
      name: 'Forms',
      highlight: '#b8e986'
    },
    {
      id: 3,
      name: 'Inline',
      highlight: '#4a51e2'
    },
    {
      id: 4,
      name: 'Attributes',
      highlight: '#c346f0'
    },
  ]

  return (
    <div className={'blocks-toolbox'}>
      {categoryStyles.map(category => {
        return <BlocksCategory key={category.id} name={category.name} highlight={category.highlight}/>
      })}
    </div>
  )
}

export default BlocksToolbox
