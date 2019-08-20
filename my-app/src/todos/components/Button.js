function Button({value, classes}) {
  return <button className={classes}>{value}</button>
}

// function ButtonBig({value, classes}) {
//   return <Button className={classes} value={value}></Button>
// }

const ButtonBig = big(Button);
const ModalBig = big(Modal);
