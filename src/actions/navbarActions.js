export function searchModalIsOpen(bool){
  return {
    type: 'SEARCH_MODAL_IS_OPEN',
    isOpen: bool
  }
}

export function openSearchModal() {
  return (dispatch) => {
    dispatch(searchModalIsOpen(true))
  }
}

export function closeSearchModal() {
  return (dispatch) => {
    dispatch(searchModalIsOpen(false))
  }
}
