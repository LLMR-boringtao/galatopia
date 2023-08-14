import mongoose from 'mongoose'
import xss from 'xss'
import doctors from '../database/json/doctor.json'
import experts from '../database/json/expert.json'

import _ from 'lodash'

const Doctor = mongoose.model('Doctor')
const Hospital = mongoose.model('Hospital')
const Invite = mongoose.model('Invite')
const Medicine = mongoose.model('Medicine')
const Test = mongoose.model('Test')

export async function getDoctor (_id) {
  const data = await Doctor
    .findOne({_id: _id})
    .populate('hospital medicine test upDoctor downDoctor invite')
    .exec()
  return data
}

export async function getDoctorRaw (_id) {
  const data = await Doctor
    .findOne({_id: _id})
    .exec()
  return data
}

export async function getDoctorById (_id) {
  const data = await Doctor
    .findOne({_id: _id}, {hospital: 1, medicine: 1, test: 1, upDoctor: 1, downDoctor: 1, invite: 1, name: 1, phone: 1, type: 1, fund: 1})
    .populate('hospital medicine test upDoctor downDoctor invite')
    .exec()
  return data
}

export async function getDoctorByUserID (uid) {
  const data = await Doctor
    .findOne({user: uid}, {hospital: 1, medicine: 1, test: 1, upDoctor: 1, downDoctor: 1, invite: 1, name: 1, phone: 1, type: 1, fund: 1})
    .populate('hospital medicine test upDoctor downDoctor invite')
    .exec()
  return data
}

export async function getDoctorByPhone (phone) {
  const data = await Doctor
    .findOne({phone: phone})
    .exec()
  return data
}

export async function login (data) {
  const doctor = await Doctor
    .findOne(data)
    .populate('hospital medicine test upDoctor downDoctor invite')
    .exec()
  return doctor
}

export async function getDoctors (page, limit, search, type) {
  const data = await Doctor
    .find({type: type})
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .populate('hospital medicine test upDoctor')
    .sort({_id: -1})
    .exec()
  return data
}

export async function getDoctorsCount (search, type) {
  const data = await Doctor
    .count({type: type})
    .exec()
  return data
}

export async function getDoctorByUid (uid) {
  const data = await Doctor
  .findOne({uid: uid})
  .exec()
  return data
}

async function findHospitalByNid (nid) {
  const data = await Hospital
  .findOne({nid: nid})
  .exec()
  return data
}

async function getInviteByNid (nid) {
  const data = await Invite
  .findOne({nid: nid})
  .exec()
  return data
}

async function getHospitalByNid (nid) {
  const data = await Hospital
  .findOne({nid: nid})
  .exec()
  return data
}

export async function importDoctors () {
  for (let item of doctors) {
    const invite = await getInviteByNid(item.invite)
    const hospital = await getHospitalByNid(item.hospital)
    let arr = item.medicine.split(',')
    let oldMedicines = []
    for (let item of arr) {
      oldMedicines.push(Number(item))
    }
    const newMedicines = await Medicine
      .find({'nid': {$in: oldMedicines}}, {_id: 1})
      .exec()
    const medicines = _.map(newMedicines, '_id')
    arr = item.test.split(',')
    let oldTests = []
    for (let item of arr) {
      oldTests.push(Number(item))
    }
    const newTest = await Test
      .find({'nid': {$in: oldTests}}, {_id: 1})
      .exec()
    console.log(newTest)
    const tests = _.map(newTest, '_id')
    const res = await getDoctorByUid(item.uid)
    if (!res && hospital) {
      let doctor = {}
      doctor = {
        'type': 'doctor',
        'phone': item.phone,
        'name': xss(item.name),
        'level': xss(item.job),
        'room': xss(item.room),
        'uid': item.uid,
        'position': xss(item.position),
        'expertUid': item.expertUid,
        'city': item.city,
        'invite': invite,
        'medicine': medicines,
        'doctorUid': item.doctorUid,
        'district': xss(item.district),
        'sex': xss(item.sex),
        'test': tests,
        'province': xss(item.province),
        'autotrans': item.autotrans,
        'outpatient': item.outpatient,
        'outpatientTime': xss(item.outpatientTime),
        'hospital': hospital
      }  
      await saveDoctor(doctor)
    }
  }
}

export async function updateDoctors () {
  const doctors = await getDoctors (1, 10000, '', 'doctor')
  for (let item of doctors) {
    const uid = item.expertUid
    const expert = await getDoctorByUid(uid)
    console.log(expert)
    if (expert) {
      item.upDoctor = expert._id
      await saveDoctor(item)
    }
  }
}

export async function importExperts () {
  for (let item of experts) {
    const invite = await getInviteByNid(item.invite)
    const hospital = await getHospitalByNid(item.hospital)
    let arr = item.medicine.split(',')
    let oldMedicines = []
    for (let item of arr) {
      oldMedicines.push(Number(item))
    }
    const newMedicines = await Medicine
      .find({'nid': {$in: oldMedicines}}, {_id: 1})
      .exec()
    const medicines = _.map(newMedicines, '_id')
    arr = item.test.split(',')
    let oldTests = []
    for (let item of arr) {
      oldTests.push(Number(item))
    }
    const newTest = await Test
      .find({'nid': {$in: oldTests}}, {_id: 1})
      .exec()
    console.log(newTest)
    const tests = _.map(newTest, '_id')
    const res = await getDoctorByUid(item.uid)
    if (!res && hospital) {
      let doctor = {}
      doctor = {
        'type': 'expert',
        'phone': item.phone,
        'name': xss(item.name),
        'level': xss(item.job),
        'room': xss(item.room),
        'uid': item.uid,
        'position': xss(item.position),
        'expertUid': item.expertUid,
        'city': item.city,
        'invite': invite,
        'medicine': medicines,
        'doctorUid': item.doctorUid,
        'district': xss(item.district),
        'sex': xss(item.sex),
        'test': tests,
        'province': xss(item.province),
        'autotrans': item.autotrans,
        'outpatient': item.outpatient,
        'outpatientTime': xss(item.outpatientTime),
        'hospital': hospital
      }  
      await saveDoctor(doctor)
    }
  }
}

export async function saveDoctor (doctor) {
  doctor = new Doctor(doctor)
  doctor = await doctor.save()
  return doctor
}

export async function updateDoctor (doctor) {
  doctor = await doctor.save()
  return doctor
}

export async function delDoctor (doctor) {
  try {
    await doctor.remove()
  } catch (e) {
    e
  }
  return true
}
