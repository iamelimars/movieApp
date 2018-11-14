export const searchModalIsOpen = (state = false, action) => {
  switch (action.type) {
    case 'SEARCH_MODAL_IS_OPEN':
      return action.isOpen
    default:
      return state;
  }
}
