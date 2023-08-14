import axios from 'axios'
import mongoose from 'mongoose'
import xss from 'xss'
import { getCategoryByTid } from './category'
import { getDoctorByUid } from './doctor'

const Patient = mongoose.model('Patient')

export async function getPatient(_id) {
  const data = await Patient
    .findOne({_id: _id})
    .populate('doctor expert category')
    .exec()
  return data
}

export async function getPatients(page, limit, search) {
  const data = await Patient
    .find()
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .sort({_id: -1})
    .populate('doctor expert category')
    .exec()
  return data
}

export async function getPatientByTest (filters) {
  const data = await Patient
    .find(filters)
    .exec()
  return data
}

export async function getAppPatients(filters, page, limit) {
  const data = await Patient
    .find(filters)
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .populate('doctor expert category')
    .sort({'meta.updatedAt': -1})
    .exec()
  return data
}

export async function getAppPatientsCount(filters) {
  const data = await Patient
    .count(filters)
    .exec()
  return data
}

export async function getPatientsCount (search) {
  const data = await Patient
    .count()
    .exec()
  return data
}

export async function getPatientByNid (nid) {
  const data = await Patient
  .findOne({nid: nid})
  .exec()
  return data
}

export async function getPatientByPhone (phone) {
  const data = await Patient
  .findOne({phone: phone})
  .exec()
  return data
}

export async function importData () {
  for (let i = 0; i < 62; i++) {
    const res = await axios({
      method: 'get',
      url: `http://test.china-op.cn/json/patients?page=${i}`
    })
    const results = res.data.nodes
    for (let item of results) {
      // 手机验证
      const reg = 11 && /^((13|14|15|17|18|19)[0-9]{1}\d{8})$/
      if (reg.test(item.phone)) {
        const res = await getPatientByNid(item.nid)
        if (!res) {
          if (item.phone) {
            const res = await getPatientByPhone(item.phone)      
            if (!res) {
              let patient = {}
              let date = item.date.split('-')
              patient = {
                name: xss(item.name),
                phone: item.phone,
                date: new Date(date[0], date[1] - 1, date[2]),
                belong: item.type,
                province: item.province,
                city: item.city,
                district: item.district,
                testResult: item.testResult,
                sex: item.sex,
                meta: {
                  createdAt: Date.now(),
                  updatedAt: Date.now()
                }
              }
              patient.meta.createdAt = new Date(item.post * 1000)
              if (patient.province === '江苏') {
                patient.province = '320'
              }
              if (patient.city === '徐州') {
                patient.city = '3203'
              }
              const category = await getCategoryByTid(item.category)
              if (category) {
                patient.category = category._id
              }
              const doctor = await getDoctorByUid(item.doctor)
              if (doctor) {
                patient.doctor = doctor._id
              }
              const expert = await getDoctorByUid(item.expert)
              if (expert) {
                patient.expert = expert._id
              }
              let nids = []
              nids.push(Number(item.nid))
              patient.nid = nids
              await savePatient (patient)
            } else {
              let patient = res
              let nids = patient.nid
              nids.push(Number(item.nid))
              patient.nid = nids
              await updatePatient (patient)
            }
          }
        }
      }
    }
    console.log('------------' + i + '----------------------')
  }
}

export async function savePatient(patient) {
  patient = new Patient(patient)
  patient = await patient.save()
  return patient
}

export async function updatePatient(patient) {
  patient = await patient.save()
  return patient
}

export async function delPatient(patient) {
  try {
    await patient.remove()
  } catch (e) {
    e
  }
  return true
}