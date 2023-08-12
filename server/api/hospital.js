import mongoose from 'mongoose'
import hospitals from '../database/json/hospital.json'
import xss from 'xss'

const Hospital = mongoose.model('Hospital')

export async function save (hospital) {
  hospital = new Hospital(hospital)
  hospital = await hospital.save()
  return hospital
}

export async function update (hospital) {
  hospital = await hospital.save()
  return hospital
}

export async function findHospitals (page, limit, search) {
  const data = await Hospital
    .find({name: new RegExp(search + '.*', 'i')})
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .sort({name: -1})
    .exec()
  return data
}

export async function getHospitalByName (name) {
    const data = await Hospital
      .findOne({name: name})
      .exec()
    return data
}

export async function hospitalsCount (search) {
  const data = await Hospital
    .count({name: new RegExp(search + '.*', 'i')})
    .exec()
  return data
}

export async function getHospital (_id) {
  const data = await Hospital
    .findOne({_id: _id})
    .exec()
  return data
}

export async function del (category) {
  try {
    await category.remove()
  } catch (e) {
    e
  }
  return true
}

export async function importHostitals () {
  for (let item of hospitals) {
    const res = await findHospitalbyNid(item.nid)
    if (!res) {
      console.log(item.city)
      let hospital = {}
      if (item.city === '徐州') {
        hospital = {
          nid: item.nid,
          province: '320',
          name: xss(item.name),
          city: '3203'
        }
      } else if (item.city === '广州') {
        hospital = {
          nid: item.nid,
          name: xss(item.name),
          province: '广东省',
          city: '广州市'
        }
      } else {
        hospital = {
          nid: item.nid,
          name: xss(item.name),
          city: xss(item.city)
        }
      }
      
      await save (hospital)
    }
  }
}

export async function findHospitalbyNid(nid) {
  const data = await Hospital
    .findOne({nid: nid})
    .exec()
  return data
}

export async function searchHospitals (search) {
  const data = await Hospital
    .find({name: new RegExp(search + '.*', 'i')})
    .exec()
  return data
}