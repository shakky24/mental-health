import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Item.css'

const Item = ({backgroundImg}) => {
  return (
    <div className = 'item' style = {{
      backgroundImage: 'url(${backgroundImg})'

    }}>
    </div>
    // <div className = "item__container">
    //   <div className = "item__text">
    //     <p>Title</p>
    //     <div className = "item__textDesc">
    //       <p>Desc</p>
    //     </div>
    //   </div>
    //   <div className = 'item__lowerThird'>
    //     <div className = 'item__buttons'>
    //       <Button imp = 'primary' text = "hello" />
    //       {twoButtons  && (
    //         <Button imp = 'secondary' text = "bye"/>
    //       )}
    //     </div>
    //     {first && (
    //       <div className = "item__expand">
    //       </div>
    //     )}
    //   </div>
    //   </div>

  )
}
export default Item;
