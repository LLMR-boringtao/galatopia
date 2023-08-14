import mongoose from 'mongoose'
import xss from 'xss'
import tests from '../database/json/test.json'

const Test = mongoose.model('Test')
const Hospital = mongoose.model('Hospital')

export async function getTest (_id) {
  const data = await Test
    .findOne({_id: _id})
    .exec()
  return data
}

export async function getTests (page, limit, search) {
  const data = await Test
    .find()
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .populate('hospital')
    .sort({_id: -1})
    .exec()
  return data
}

export async function getTestsCount (search) {
  const data = await Test
    .count()
    .exec()
  return data
}

export async function getTestsByHospital ( id ) {
  const data = await Test
    .find()
    .exec()
  return data
}

export async function getTestByNid (nid) {
  const data = await Test
  .findOne({nid: nid})
  .exec()
  return data
}

async function findHospitalByNid (nid) {
  const data = await Hospital
  .findOne({nid: nid})
  .exec()
  return data
}

export async function importTests () {
  for (let item of tests) {
    const res = await getTestByNid(item.nid)
    if (!res) {
      let test = {}
      const hospital = await findHospitalByNid(item.hospital)
      if (item.hospital === '31') {
        test = {
          nid: item.nid,
          title: xss(item.title),
          max: item.max,
          min: item.min,
          unit: xss(item.unit),
          hospital: hospital
        }  
        await saveTest (test)  
      }
    }
  }
}

export async function saveTest (test) {
  test = new Test(test)
  test = await test.save()
  return test
}

export async function updateTest (test) {
  test = await test.save()
  return test
}

export async function delTest (test) {
  try {
    await test.remove()
  } catch (e) {
    e
  }
  return true
}