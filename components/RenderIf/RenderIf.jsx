import React from 'react'

const RenderIf = ( props ) => {
  const {
    children = null,
    condition = false,
  } = props;

  return (<>
    {condition ? children : <></>}
  </>)
}

export default RenderIf