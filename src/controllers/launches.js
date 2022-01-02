const axios = require('axios')

const getLaunchesData = async (response, path) => {
  try {
    const { data } = await axios(`${process.env.BASE_URL}launches/${path}`)
    return response.json(data)
  } catch (error) {
    console.error(error)
  }
}

exports.getUpcoming = (req, res) => getLaunchesData(res, 'upcoming')
exports.getPast = (req, res) => getLaunchesData(res, 'past')
exports.getNext = (req, res) => getLaunchesData(res, 'next')
exports.getLatest = (req, res) => getLaunchesData(res, 'latest')
