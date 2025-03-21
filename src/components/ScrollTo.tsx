const ScrollTo = ({headerHeight, id} : {headerHeight: number, id: string}) => {
  return (
    <div id={id} className="absolute" style={{marginTop: -headerHeight - 20 + "px"}} />
  )
}

export default ScrollTo