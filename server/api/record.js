import axios from 'axios'
import mongoose from 'mongoose'
import {upUrl} from '../controllers/util'
const Record = mongoose.model('Record')
const Patient = mongoose.model('Patient')
const Hospital = mongoose.model('Hospital')
const Doctor = mongoose.model('Doctor')

export async function getRecord (_id) {
  const data = await Record
    .findOne({_id: _id})
    .populate('doctor expert category')
    .exec()
  return data
}

export async function getRecords(page, limit, search) {
  const data = await Record
    .find()
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .sort({_id: -1})
    .populate('doctor patient')
    .exec()
  return data
}

export async function getAppRecords(filters, page, limit) {
  const data = await Record
    .find(filters)
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .populate('doctor patient hospital')
    .sort({_id: -1})
    .exec()
  return data
}

export async function getAppRecordsCount(filters) {
  const data = await Record
    .count(filters)
    .exec()
  return data
}

export async function getRecordsCount(search) {
  const data = await Record
    .count()
    .exec()
  return data
}

export async function getRecordByNid (nid) {
  const data = await Record
    .findOne({nid: nid})
    .exec()
  return data
}

async function getPatientByNid (nid) {
  const data = await Patient
    .findOne({nid: nid})
    .exec()
  return data
}

async function getHospitalByNid(nid) {
  const data = await Hospital
    .findOne({nid: nid})
    .exec()
  return data
}

async function getDoctorByUid(uid) {
  const data = await Doctor
    .findOne({uid: uid})
    .exec()
  return data
}

export async function importData () {
  for (let i = 0; i < 31; i++) {
    const res = await axios({
      method: 'get',
      url: `http://test.china-op.cn/json/records?page=${i}`
    })
    const results = res.data.nodes
    for (let item of results) {
        // 记录是否已经存在
      const res = await getRecordByNid(item.Nid)
      if (!res) {
        // 患者是否存在
        const patient = await getPatientByNid(item.Patient)
        if (patient) {
          let newMedicates = []
          if (item.Medicate) {
            const medicates = JSON.parse(item.Medicate)
            if (medicates.length > 0) {
              for (let item of medicates) {
                if (item.checked) {
                  newMedicates.push({
                    title: item.title,
                    selectUse: item.selectUse
                  })
                }
              }
            }
          }
          let newTest = []
          if (item.Test) {
            const test = JSON.parse(item.Test)
            if (test.length >0 ) {
              for (let item of test) {
                if (item.Result) {
                  newTest.push({
                    title: item.title,
                    hospital: item.Hospital,
                    max: item.Max,
                    min: item.Min,
                    unit: item.Unit,
                    result: item.Result
                  })
                }
              }
            }
          }
          const hospital = await getHospitalByNid (item.Hospital)
          const doctor = await getDoctorByUid(item.Doctor)
          let pic = []
          if (item.Img) {
            const Imgs = item.Img.split(',')
            for (let item of Imgs) {
              const res = await upUrl(item.trim())
              if (res.success) {
                pic.push(res.url)
              }
            }
          }

          let nextCheck = []
          if (item.NextCheck) {
            const arr = item.NextCheck.split(',')
            for (let item of arr) {
              nextCheck.push(item.trim())
            }
          }
          let record = {
            place: item.Place,
            nid: item.Nid,
            patient: patient._id,
            medicines: newMedicates,
            tests: newTest,
            hospital: hospital ? hospital._id : null,
            doctor: doctor ? doctor._id : null,
            next: new Date(item.Post * 1000),
            nextCheck: nextCheck,
            createdAt: new Date(item.Post * 1000),
            pic: pic
          } 
          await saveRecord (record)
        }
      }
    }
    console.log('--------' + i + '------------')
  }
}

export async function saveRecord(record) {
  record = new Record(record)
  record = await record.save()
  return record
}

export async function updateRecord(record) {
  record = await record.save()
  return record
}

export async function delRecord(patient) {
  try {
    await patient.remove()
  } catch (e) {
    console.log(e)
  }
  return true
}
