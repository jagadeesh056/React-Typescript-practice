type personObjProps = {
    name: {
      first: string,
      last: string
    }
}

export const PersonObj = (props: personObjProps) => {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}

