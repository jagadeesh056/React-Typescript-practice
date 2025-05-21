type StatusProp = {
  status: string
}

export const Status = (props: StatusProp) => {
    let msg
    if (props.status === 'loading') {
        msg = "Loading..."
    } else if (props.status === 'success') {
        msg = "Data loaded successfully"
    } else if (props.status === 'failed') {
        msg = "Data not loaded"
    } else {
        msg = "No data found"
    }
  return (
    <div>{msg}</div>
  )
}

