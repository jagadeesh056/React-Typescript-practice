type Greetprops = {
    name: string,
    numbs?: number,
    isLoggedIn: boolean
}

export const Greet = (props: Greetprops) => {
  let {numbs= 9} = props
  return (
    <div>
      {props.isLoggedIn ? <div>Hey, {props.name}, you have {numbs} unread messages</div> : <p>Welcome Guest</p>}

    </div>
  )
}
