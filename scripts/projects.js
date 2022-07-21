import Pagination from 'tui-pagination'

// ToastUI Pagination

const container = document.getElementById('tui-pagination-container')
const pagination = new Pagination(container, {
  itemsPerPage: 15,
})

// pagination.on('beforeMove', event => {
//   window.scroll(0, 0)
// })
