type PersonListProps = {
    name: {
        first: string,
        last: string
    } []
}
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
        {props.name.map(name => 
            <div>
                <h2>{name.first} {name.last}</h2>
            </div>
        )}
    </div>
  )
}

