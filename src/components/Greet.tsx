type Greetprops = {
    name: string,
    numbs: number,
    isLoggedIn: boolean
}

export const Greet = (props: Greetprops) => {
  return (
    <div>
      {props.isLoggedIn ? <div>Hey, {props.name}, you have {props.numbs} unread messages</div> : <p>Welcome Guest</p>}

    </div>
  )
}
