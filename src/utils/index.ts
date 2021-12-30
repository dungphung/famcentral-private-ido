import Numeral from 'numeral'

export const formattedNum = (number, usd = false, acceptNegatives = true) => {
  if (isNaN(number) || number === '' || number === undefined) {
    return usd ? '$0' : 0
  }
  let num = parseFloat(number)

  if (acceptNegatives && num > 500000000) {
    return (usd ? '$' : '') + toK(num.toFixed(0))
  }

  if (num === 0) {
    if (usd) {
      return '$0'
    }
    return 0
  }

  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001'
  }

  if (num > 1000) {
    return usd
      ? formatDollarAmount(num, 0)
      : Number(parseFloat(num + '').toFixed(0)).toLocaleString()
  }

  if (usd) {
    if (num < 0.1) {
      return formatDollarAmount(num, 4)
    } else {
      return formatDollarAmount(num, 4)
    }
  }

  return Number(parseFloat(num + '').toFixed(6)).toLocaleString()
}

export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// using a currency library here in case we want to add more in future
export const formatDollarAmount = (num, digits) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })
  return formatter.format(num)
}

export const toK = (num) => {
  return Numeral(num).format('0.[00]a')
}

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

// export const history = isServer
//   ? createMemoryHistory({
//       initialEntries: ['/'],
//     })
//   : createBrowserHistory();
