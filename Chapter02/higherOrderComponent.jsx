const withHigherOrderComponent = (OriginalComponent) => (props) => (
  <OriginalComponent {...props} />
)
