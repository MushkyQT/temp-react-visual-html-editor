import BlocksCategory from "./BlocksCategory"
import './BlocksToolbox.css'

function BlocksToolbox() {
  const categoryStyles = [
    {
      id: 1,
      name: 'Blocks',
      highlight: '#4a90e2',
      blocks: [
        {
          type: '1'
        },
        {
          type: '2'
        },
        {
          type: '3'
        },
        {
          type: '16'
        }
      ]
    },
    {
      id: 2,
      name: 'Forms',
      highlight: '#b8e986',
      blocks: [
        {
          type: '4'
        },
        {
          type: '5'
        },
        {
          type: '6'
        }
      ]
    },
    {
      id: 3,
      name: 'Inline',
      highlight: '#4a51e2',
      blocks: [
        {
          type: '7'
        },
        {
          type: '8'
        },
        {
          type: '9'
        }
      ]
    },
    {
      id: 4,
      name: 'Attributes',
      highlight: '#c346f0',
      blocks: [
        {
          type: '10'
        },
        {
          type: '11'
        },
        {
          type: '12'
        }
      ]
    },
  ]

  return (
    <div className={'blocks-toolbox'}>
      {categoryStyles.map(category => {
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
