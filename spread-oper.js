const state = {
  notes: [{ title: 'Купить хлеб' }, { title: 'Купить машину' }],
  alertVisible: false,
}

const action = {
  type: 'SHOWALERT',
  payload: {
    title: 'КУПИТЬ ДОМ',
  },
}
const quotes = [{ title: 'HEY HEY HEY' }, { title: 'GOOD JOOB' }]
const { payload } = action
console.log({ ...state, notes: [...state.notes,payload] })
